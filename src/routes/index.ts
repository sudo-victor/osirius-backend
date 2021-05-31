import express from 'express';

import { usersRoutes } from './usersRoutes';

const routes = express.Router();

routes.use('/users', usersRoutes);

export { routes };