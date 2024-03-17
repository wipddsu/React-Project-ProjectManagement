import { useContext } from 'react';

import { ProjectsContext } from '../store/projects-context';

export default function ProjectsList() {
  const { projects, selectProject } = useContext(ProjectsContext);

  return (
    <ul>
      {projects.map((project, index) => (
        <li key={index}>
          <button
            onClick={() => {
              selectProject(index);
            }}
            className="w-full text-left rounded text-indigo-400 px-2 py-2 mb-2 hover:bg-indigo-800 hover:text-indigo-200"
          >
            {project.title}
          </button>
        </li>
      ))}
    </ul>
  );
}
