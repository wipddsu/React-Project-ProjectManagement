import { useState } from 'react';
import Empty from './Empty';

export default function Content({ projects, projectIndex, onSubmit, onProjectDelete, onTaskDelete }) {
  const project = projects.filter((p, index) => index === projectIndex)[0];
  const [taskInput, setTaskInput] = useState('');

  function handleTaskInput(e) {
    setTaskInput(e.target.value);
  }

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
            <form
              onSubmit={(e) => {
                onSubmit(e, projectIndex, taskInput);
                setTaskInput('');
              }}
              className="flex flex-row my-7"
            >
              <input
                type="text"
                id="task"
                name="task"
                value={taskInput}
                onChange={handleTaskInput}
                required
                className="block rounded-md border-0 px-3 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mr-4 w-60"
                placeholder="Add your Task"
              />
              <button className="text-indigo-600 hover:text-indigo-950">Add Task</button>
            </form>
            <ul className="overflow-auto h-80">
              {project.tasks.map((task, index) => (
                <li key={index} className="flex flex-row justify-between p-6 bg-slate-100 mb-4 rounded">
                  {task}
                  <button onClick={() => onTaskDelete(index)} className="text-stone-500 hover:text-stone-800">
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <Empty />
      )}
    </section>
  );
}
