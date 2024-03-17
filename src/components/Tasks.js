import { useState, useContext } from 'react';

import { ProjectsContext } from '../store/projects-context';

export default function Tasks({ project, projectIndex }) {
  const { taskSubmit, taskDelete } = useContext(ProjectsContext);
  const [taskInput, setTaskInput] = useState('');

  function handleTaskInput(e) {
    setTaskInput(e.target.value);
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          taskSubmit(e, projectIndex, taskInput);
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
            <button onClick={() => taskDelete(index)} className="text-stone-500 hover:text-stone-800">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
