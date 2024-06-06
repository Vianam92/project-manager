import { config } from 'dotenv';
config();

import cors from 'cors';
import express from 'express';
import { AuthRouter } from './infrastructure/routes/auth.routes';
import { UserRepositoryPg } from './infrastructure/repositories/user.repository';
import Container from 'typedi';
Container.set('user-repository', new UserRepositoryPg());

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', AuthRouter);

app.get('/', (req, resp) => {
  resp.send('<p>Conectado</p>');
});

export { app };
