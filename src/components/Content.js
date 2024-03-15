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
          <div id="projectInfo">
            <div className="flex felx-row justify-between">
              <div>
                <h2 className="text-3xl">{project.title}</h2>
                <span>{project.date}</span>
              </div>
              <button onClick={() => onProjectDelete(projectIndex)}>Delete</button>
            </div>
            <p>{project.description}</p>
          </div>
          <div id="tasks">
            <h3 className="text-2xl">Tasks</h3>
            <form
              onSubmit={(e) => {
                onSubmit(e, projectIndex, taskInput);
                setTaskInput('');
              }}
            >
              <input type="text" id="task" name="task" value={taskInput} onChange={handleTaskInput} required />
              <button>Add Task</button>
            </form>
            <ul>
              {project.tasks.map((task, index) => (
                <li key={index} className="flex flex-row justify-between">
                  {task}
                  <button onClick={() => onTaskDelete(index)}>Delete</button>
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
