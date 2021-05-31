import { getCustomRepository, Repository } from "typeorm";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import { User } from "../app/entities/User";
import { UsersRepository } from "../repositories/UsersRepository";
import { SendMailService } from "./SendMailService";

class ResetPasswordService {
  usersRepository: Repository<User>;
  sendMailService: SendMailService;

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
    this.sendMailService = new SendMailService();
  }

  async sendMail(email: string) {
    // Find user, if not found return error
    const user = await this.usersRepository.findOne({ email });
    if(!user) throw new Error('User not found');

    //Generate token to validate reset password
    const secretKey = process.env.AUTH_SECRET_KEY;
    const payload = {
      id: user.id,
    };
    const token = jwt.sign(payload, secretKey, { expiresIn: "10m" });

    // Send email to user
    const HOST = String(process.env.HOST) || "http://localhost:3000";
    const dataMail = {to: email, subject: 'Reset Password', html: `click here to reset your password <a href="${HOST}/reset-password/${token}">go to reset</a>`};
    await this.sendMailService.sendMail(dataMail);

    return user;
  } 

  async updatePassword({ password, confirmPassword, id }: {password: string, confirmPassword: string, id}) {
    // Verify if passwords is equals
    if(password !== confirmPassword) throw new Error('Different passwords');

    // Find user or return error
    const userAlreadyExists = await this.usersRepository.findOne({id});
    if(!userAlreadyExists) throw new Error('User not found');

    // Encrypt password
    const passwordEncrypted = bcrypt.hashSync(password, 8);

    // Update user with new password
    const user = await this.usersRepository.save({id, password: passwordEncrypted})

    return user;

  }

}

export { ResetPasswordService };
