import express from 'express';

import { UsersController } from '../app/controllers/UsersController';

const usersController = new UsersController();

const usersRoutes = express.Router();

usersRoutes.post('/', usersController.create);

export { usersRoutes };