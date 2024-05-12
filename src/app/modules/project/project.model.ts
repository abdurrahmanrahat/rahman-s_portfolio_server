import { Schema, model } from 'mongoose';
import { TFeature, TProject } from './project.interface';

const featureSchema = new Schema<TFeature>({
  one: { type: String, required: true },
  two: { type: String, required: true },
  three: { type: String, required: true },
});

const projectSchema = new Schema<TProject>({
  projectName: { type: String, required: true },
  projectImage: { type: String, required: true },
  shortDesc: { type: String, required: true },
  features: { type: featureSchema, required: true },
  technology: { type: String, required: true },
  liveLink: { type: String, required: true },
  githubClient: { type: String, required: true },
  githubServer: { type: String, required: true },
});

export const ProjectModel = model<TProject>('Project', projectSchema);
