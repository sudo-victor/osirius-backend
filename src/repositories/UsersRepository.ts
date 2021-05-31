import { EntityRepository, Repository } from "typeorm";
import { User } from "../app/entities/User";

@EntityRepository(User)
class UsersRepository extends Repository<User> {}

export { UsersRepository };