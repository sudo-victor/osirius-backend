import { Request, Response } from "express";

import { ExamsService } from "../../services/ExamsService";
import { QuestionsService } from "../../services/QuestionsService";
import { AlternativesService } from "../../services/AlternativesService";

type Question = {
  text: string;
  expiration_time: number;
  alternatives: Alternative[];
}

type Alternative = {
  text: string;
  right_anwser?: boolean;
}

class ExamsController {
  async create(request: Request, response: Response) {
    const { name, user_id, questions } = request.body;

    const examsService = new ExamsService();
    const questionsService = new QuestionsService();
    const alternativesService = new AlternativesService();

    try {

      // Insert exam in database
      const examInserted = await examsService.create({ name, user_id });
      
      // Insert questions in database
      const questionsGroup = questions.map((question: Question) => {
            return {
              text: question.text,
              expiration_time: question.expiration_time,
              exam_id: examInserted.id
            }
          });
      const questionsInserted = await questionsService.createMultiple(questionsGroup);
      
      // Insert alternatives in database
      const alternativesGroup = questions.map((question: Question, index: number) => {
        return question.alternatives.map((alternative) => {
          return {
            text: alternative.text,
            right_answer: alternative.right_anwser ? true : false,
            question_id: questionsInserted[index].id
          }
        })
      }).flat();
      const alternativesInserted = await alternativesService.createMultiple(alternativesGroup);

      return response.status(200).json({exam: examInserted, questions: questionsInserted, alternatives: alternativesInserted});
    } catch (error) {
      return response.status(500).json({ error: error.message })
    }

  }
};

export { ExamsController };
