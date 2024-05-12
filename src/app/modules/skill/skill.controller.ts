import { NextFunction, Request, Response } from 'express';
import { SkillServices } from './skill.service';

const createSkill = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const skill = req.body;
    const result = await SkillServices.createSkillIntoDb(skill);

    res.status(201).json({
      success: true,
      message: 'Skill created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllSkills = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await SkillServices.getAllSkillsFromDb();

    res.status(201).json({
      success: true,
      message: 'Skill retrieved successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const SkillControllers = {
  createSkill,
  getAllSkills,
};
