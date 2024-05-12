import { NextFunction, Request, Response } from 'express';
import { ProjectServices } from './project.service';

const createProject = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const project = req.body;
    const result = await ProjectServices.createProjectIntoDb(project);

    res.status(201).json({
      success: true,
      message: 'Project created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllProjects = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await ProjectServices.getAllProjectsFromDb();

    res.status(201).json({
      success: true,
      message: 'Project retrieved successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const ProjectControllers = {
  createProject,
  getAllProjects,
};
