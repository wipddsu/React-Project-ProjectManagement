import { createContext } from 'react';

export const ProjectsContext = createContext({
  taskSubmit: () => {},
  taskDelete: () => {},
});
