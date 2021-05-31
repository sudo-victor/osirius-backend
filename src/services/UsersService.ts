import { getCustomRepository, Repository } from "typeorm";
import bcrypt from 'bcryptjs';

import { User } from "../app/entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

type CreateMethodParams = {
  fullname: string;
  email: string;
  password: string;
}

class UsersService {
  usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }
  
  async create({ fullname, email, password }: CreateMethodParams) {
    // Verify if user already exists
    const userAlreadyExists = await this.usersRepository.findOne({ email });
    if(userAlreadyExists) throw new Error('User already exists');

    // Encrypt the password
    const passwordEncrypted = bcrypt.hashSync(password, 8);

    // Create and save in database the new user
    const user = this.usersRepository.create({fullname, email, password: passwordEncrypted});
    await this.usersRepository.save(user);

    return user;
  }

  async findByEmail(email: string) {
    // Find user in DB, if not found return error
    const user = await this.usersRepository.findOne({email});
    if(!user) throw new Error('User not found')

    return user;
  }

  async findById(id: string) {
    // Find user in DB, if not found return error
    const user = await this.usersRepository.findOne({id});
    if(!user) throw new Error('User not found')

    return user;
  }


}

export { UsersService };