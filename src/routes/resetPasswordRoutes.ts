import express from 'express';

import { ResetPasswordController } from '../app/controllers/ResetPasswordController';

const resetPasswordController = new ResetPasswordController();

const resetPasswordRoutes = express.Router();

resetPasswordRoutes.post('/', resetPasswordController.create);
resetPasswordRoutes.put('/:token', resetPasswordController.update);

export { resetPasswordRoutes };
