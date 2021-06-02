import { EntityRepository, Repository } from "typeorm";
import { Exam } from "../app/entities/Exam";

@EntityRepository(Exam)
class ExamsRepository extends Repository<Exam> {}

export { ExamsRepository };