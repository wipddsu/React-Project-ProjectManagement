import Sidebar from './components/Sidebar';
import Main from './components/Main';
import { useState } from 'react';

const initialProject = [
  {
    title: 'my fisrt react project',
    description: 'aksdjalskjd dljasldja dalksjd asdkljas djasd laksjd',
    date: Date.now(),
    tasks: ['task1', 'task2', 'task3'],
  },
];

function App() {
  const [projects, setProjects] = useState(initialProject);
  const [isNewProject, setIsNewProject] = useState(false);

  function handleNewProject() {
    setIsNewProject(() => !isNewProject);
    console.log(isNewProject);
  }

  return (
    <main className="flex flex-row h-screen">
      <Sidebar onClick={handleNewProject} />
      <Main projects={projects} isNewProject={isNewProject} />
    </main>
  );
}

export default App;
