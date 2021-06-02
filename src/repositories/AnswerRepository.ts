import { EntityRepository, Repository } from "typeorm";
import { Answer } from "../app/entities/Answer";

@EntityRepository(Answer)
class AnswersRepository extends Repository<Answer> {}

export { AnswersRepository };