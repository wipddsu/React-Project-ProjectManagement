import ProjectList from './ProjectList';
import { forwardRef } from 'react';

export default function Sidebar({ onAddClick, onIndexClick, projects, isNewProject }) {
  return (
    <section className="flex-auto w-1/4 h-full bg-indigo-950 py-20 px-10">
      <h1 className="text-indigo-50 mb-10 uppercase text-xl">your projects</h1>
      <button
        onClick={onAddClick}
        className="py-2 px-5 bg-indigo-600 text-indigo-300 rounded mb-10"
        disabled={isNewProject && true}
      >
        + Add Project
      </button>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <button
              onClick={() => {
                onIndexClick(index);
              }}
              className="w-full text-left rounded text-indigo-400 px-2 py-2 mb-2 hover:bg-indigo-800 hover:text-indigo-200"
            >
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
