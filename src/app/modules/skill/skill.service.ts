import { TSkill } from './skill.interface';
import { SkillModel } from './skill.model';

// post
const createSkillIntoDb = async (skill: TSkill) => {
  const result = await SkillModel.create(skill);
  return result;
};

export const SkillServices = {
  createSkillIntoDb,
};
