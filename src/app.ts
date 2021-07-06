import 'express-async-errors';
import express from 'express';

import { routes } from './routes';

import { middlewareError } from './middlewares/errors/Error';

const app = express();

app.use(express.json());

app.use(routes);

app.use(middlewareError);

export { app };