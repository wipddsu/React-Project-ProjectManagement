import { useContext } from 'react';
import Tasks from './Tasks';
import Empty from './Empty';
import ProjectInfo from './ProjectInfo';

import { ProjectsContext } from '../store/projects-context';

export default function Content() {
  const { projects, projectIndex } = useContext(ProjectsContext);
  const project = projects.filter((p, index) => index === projectIndex)[0];

  return (
    <section className="flex-auto w-3/4 h-full py-20 px-10">
      {projects.length > 0 ? (
        <>
          <ProjectInfo project={project} projectIndex={projectIndex} />
          <Tasks project={project} projectIndex={projectIndex} />
        </>
      ) : (
        <Empty />
      )}
    </section>
  );
}
