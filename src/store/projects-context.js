import { createContext } from 'react';

export const ProjectsContext = createContext({
  projects: undefined,
  projectIndex: undefined,
  projectCreate: () => {},
  projectDelete: () => {},
  taskSubmit: () => {},
  taskDelete: () => {},
  selectProject: () => {},
});
