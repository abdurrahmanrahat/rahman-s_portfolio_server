import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { AuthRoutes } from './app/modules/auth/auth.route';
import { UserRoutes } from './app/modules/user/user.route';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/users', UserRoutes);
app.use('/api/v1/auth', AuthRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;