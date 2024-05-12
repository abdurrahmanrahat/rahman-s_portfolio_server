import express from 'express';
import { SkillControllers } from './skill.controller';

const router = express.Router();

router.post('/create-skill', SkillControllers.createSkill);

router.get('/', SkillControllers.getAllSkills);

export const SkillRoutes = router;
