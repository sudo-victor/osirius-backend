import { getCustomRepository, Repository } from "typeorm";

import { Alternative } from "../app/entities/Alternative";
import { AlternativesRepository } from "../repositories/AlternativesRepository";

type CreateAlternativeParams = {
  text: string;
  right_answer: boolean;
  question_id: string;
}

class AlternativesService {
  alternativesRepository: Repository<Alternative>;

  constructor() {
    this.alternativesRepository = getCustomRepository(AlternativesRepository);
  }

  async createMultiple(alternatives: CreateAlternativeParams[]) {
    const alternativesGroup = this.alternativesRepository.create(alternatives);
    await this.alternativesRepository.save(alternativesGroup);

    return alternativesGroup;
  }
 

}

export { AlternativesService };