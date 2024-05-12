import express from 'express';
import { ProjectControllers } from './project.controller';

const router = express.Router();

router.post('/create-project', ProjectControllers.createProject);

router.get('/', ProjectControllers.getAllProjects);

export const ProjectRoutes = router;
