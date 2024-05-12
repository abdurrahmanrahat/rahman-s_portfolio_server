import { TProject } from './project.interface';
import { ProjectModel } from './project.model';

// post
const createProjectIntoDb = async (project: TProject) => {
  const result = await ProjectModel.create(project);
  return result;
};

// get
const getAllProjectsFromDb = async () => {
  const result = await ProjectModel.find();
  return result;
};

export const ProjectServices = {
  createProjectIntoDb,
  getAllProjectsFromDb,
};
