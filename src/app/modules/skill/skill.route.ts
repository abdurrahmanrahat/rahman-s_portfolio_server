import express from 'express';
import { SkillControllers } from './skill.controller';

const router = express.Router();

router.post('/create-skill', SkillControllers.createSkill);

export const SkillRoutes = router;
