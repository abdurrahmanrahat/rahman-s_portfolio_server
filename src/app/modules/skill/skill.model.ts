import { Schema, model } from 'mongoose';
import { TSkill } from './skill.interface';

const skillSchema = new Schema<TSkill>({
  title: { type: String, required: true },
  category: { type: String, required: true },
  value: { type: String, required: true },
});

export const SkillModel = model<TSkill>('Skill', skillSchema);
