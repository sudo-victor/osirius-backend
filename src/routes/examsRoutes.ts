import express from 'express';

import { ExamsController } from '../app/controllers/ExamsController';

const examsController = new ExamsController();

const examsRoutes = express.Router();

examsRoutes.post('/', examsController.create);

export { examsRoutes };