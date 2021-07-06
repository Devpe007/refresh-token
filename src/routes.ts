import { Router } from 'express';

import { CreateUserController } from './useCases/createUser/CreateUserController';
import { AuthenticateUserController } from './useCases/authenticateUser/AuthenticateUserController';
import { RefreshTokenUserController } from './useCases/refreshTokenUser/RefreshTokenUserController';

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const refreshTokenUserController = new RefreshTokenUserController();

import { ensureAuthenticated } from './middlewares/authentication/ensureAuthenticated';

const routes = Router();

routes.post('/users', createUserController.hendle);

routes.post('/login', authenticateUserController.handle);

routes.post('/refresh-token', refreshTokenUserController.handle);

routes.get('/courses', ensureAuthenticated, (request, response) => {
    return response.json([
        {
            id: 1,
            name: 'NodeJS',
        },
        {
            id: 2,
            name: 'ReactJS',
        },
        {
            id: 3,
            name: 'React Native',
        },
        {
            id: 4,
            name: 'Flutter',
        },
        {
            id: 5,
            name: 'Elixir',
        },
    ]);
});

export { routes };