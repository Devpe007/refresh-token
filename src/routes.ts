import { Router } from 'express';

import { CreateUserController } from './useCases/createUser/CreateUserController';

const createUserController = new CreateUserController();

const routes = Router();

routes.post('/users', createUserController.hendle);

export { routes };