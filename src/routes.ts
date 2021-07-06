import { Router } from 'express';

import { CreateUserController } from './useCases/createUser/CreateUserController';
import { AuthenticateUserController } from './useCases/authenticateUser/AuthenticateUserController';

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

const routes = Router();

routes.post('/users', createUserController.hendle);

routes.post('/login', authenticateUserController.handle);

export { routes };