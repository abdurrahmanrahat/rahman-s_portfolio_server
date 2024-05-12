export type TFeature = {
  one: string;
  two: string;
  three: string;
};

export type TProject = {
  projectName: string;
  projectImage: string;
  shortDesc: string;
  features: TFeature;
  technology: string;
  liveLink: string;
  githubClient: string;
  githubServer: string;
};
