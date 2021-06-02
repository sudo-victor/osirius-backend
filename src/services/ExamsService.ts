import { getCustomRepository, Repository } from "typeorm";

import { Exam } from "../app/entities/Exam";
import { ExamsRepository } from "../repositories/ExamsRepository";

type CreateExamParams = {
  name: string;
  user_id: string;
}

class ExamsService {
  examsRepository: Repository<Exam>;

  constructor() {
    this.examsRepository = getCustomRepository(ExamsRepository);
  }

  async create({name, user_id}: CreateExamParams) {
    // If find exam return error
    const examAlreadyExists = await this.examsRepository.findOne({ name })
    if(examAlreadyExists) throw new Error('Exam already exists');

    const exam = this.examsRepository.create({ name, user_id});
    await this.examsRepository.save(exam);

    return exam;
  }
 

}

export { ExamsService };