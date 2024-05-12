import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { globalErrHandler } from './app/middlewares/globalErrHandler';
import { AuthRoutes } from './app/modules/auth/auth.route';
import { SkillRoutes } from './app/modules/skill/skill.route';
import { UserRoutes } from './app/modules/user/user.route';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/users', UserRoutes);
app.use('/api/v1/auth', AuthRoutes);
app.use('/api/v1/skills', SkillRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// global error handler
app.use(globalErrHandler);

export default app;
