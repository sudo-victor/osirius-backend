import { text } from "express";
import { getCustomRepository, Repository } from "typeorm";

import { Question } from "../app/entities/Question";
import { QuestionsRepository } from "../repositories/QuestionsRepository";

type QuestionParams = {
  text: string;
  expiration_time: number;
  exam_id: string;
}


class QuestionsService {
  questionsRepository: Repository<Question>;

  constructor() {
    this.questionsRepository = getCustomRepository(QuestionsRepository);
  }

  async createMultiple(questions: QuestionParams[]) {
    const questionsGroup = this.questionsRepository.create(questions);
    await this.questionsRepository.save(questionsGroup);

    return questionsGroup;
  }

  async findById(id: string) {
     const question = await this.questionsRepository.findOne({id});
     if(!question) throw new Error('Question not found');

     return question;
  }
 

}

export { QuestionsService };