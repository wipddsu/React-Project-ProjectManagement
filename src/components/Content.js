import { useState } from 'react';
import Tasks from './Tasks';
import Empty from './Empty';

export default function Content({ projects, projectIndex, onProjectDelete }) {
  const project = projects.filter((p, index) => index === projectIndex)[0];

  return (
    <section className="flex-auto w-3/4 h-full py-20 px-10">
      {projects.length > 0 ? (
        <>
          <div id="projectInfo" className="pb-7 border-b border-b-slate-200">
            <div className="flex felx-row justify-between">
              <div>
                <h2 className="text-3xl mb-3 font-bold">{project.title}</h2>
                <span className="text-stone-500">{project.date}</span>
              </div>
              <div className="flex flex-row items-start">
                <button onClick={() => onProjectDelete(projectIndex)} className="text-stone-500 hover:text-stone-800">
                  Delete
                </button>
              </div>
            </div>
            <p className="mt-7 leading-normal" style={{ whiteSpace: 'pre-line' }}>
              {project.description}
            </p>
          </div>
          <div id="tasks" className="mt-7">
            <h3 className="text-2xl">Tasks</h3>
            <Tasks project={project} projectIndex={projectIndex} />
          </div>
        </>
      ) : (
        <Empty />
      )}
    </section>
  );
}
