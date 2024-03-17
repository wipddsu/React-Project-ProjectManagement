import { useContext } from 'react';

import { ProjectsContext } from '../store/projects-context';

export default function ProjectInfo({ project, projectIndex }) {
  const { projectDelete } = useContext(ProjectsContext);

  return (
    <>
      <div className="flex felx-row justify-between">
        <div>
          <h2 className="text-3xl mb-3 font-bold">{project.title}</h2>
          <span className="text-stone-500">{project.date}</span>
        </div>
        <div className="flex flex-row items-start">
          <button onClick={() => projectDelete(projectIndex)} className="text-stone-500 hover:text-stone-800">
            Delete
          </button>
        </div>
      </div>
      <p className="mt-7 leading-normal" style={{ whiteSpace: 'pre-line' }}>
        {project.description}
      </p>
    </>
  );
}
