import express from 'express';

import { usersRoutes } from './usersRoutes';
import { examsRoutes } from './examsRoutes';
import { authRoutes } from './authRoutes';
import { resetPasswordRoutes } from './resetPasswordRoutes';

const routes = express.Router();

routes.use('/users', usersRoutes);
routes.use('/auth', authRoutes);
routes.use('/reset-password', resetPasswordRoutes);
routes.use('/exams', examsRoutes);

export { routes };