import express from 'express';

import { AuthController } from '../app/controllers/AuthController';

const authController = new AuthController();

const authRoutes = express.Router();

authRoutes.post('/', authController.signin);

export { authRoutes };
