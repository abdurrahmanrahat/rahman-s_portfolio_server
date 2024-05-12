import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { globalErrHandler } from './app/middlewares/globalErrHandler';
import { ArticleRoutes } from './app/modules/article/article.route';
import { AuthRoutes } from './app/modules/auth/auth.route';
import { ProjectRoutes } from './app/modules/project/project.route';
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
app.use('/api/v1/articles', ArticleRoutes);
app.use('/api/v1/projects', ProjectRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// global error handler
app.use(globalErrHandler);

export default app;
