import { EntityRepository, Repository } from "typeorm";
import { Question } from "../app/entities/Question";

@EntityRepository(Question)
class QuestionsRepository extends Repository<Question> {}

export { QuestionsRepository };