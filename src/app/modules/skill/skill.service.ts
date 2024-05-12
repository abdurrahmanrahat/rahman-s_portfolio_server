import { TSkill } from './skill.interface';
import { SkillModel } from './skill.model';

// post
const createSkillIntoDb = async (skill: TSkill) => {
  const result = await SkillModel.create(skill);
  return result;
};

// get
const getAllSkillsFromDb = async () => {
  const result = await SkillModel.find();
  return result;
};

export const SkillServices = {
  createSkillIntoDb,
  getAllSkillsFromDb,
};
