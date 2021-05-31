import express from 'express';

import { usersRoutes } from './usersRoutes';
import { authRoutes } from './authRoutes';
import { resetPasswordRoutes } from './resetPasswordRoutes';

const routes = express.Router();

routes.use('/users', usersRoutes);
routes.use('/auth', authRoutes);
routes.use('/reset-password', resetPasswordRoutes);

export { routes };