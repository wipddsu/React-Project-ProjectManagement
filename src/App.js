import { useRef, useState } from 'react';
import Sidebar from './components/Sidebar';
// import Main from './components/Main';
import Content from './components/Content';
import NewProject from './components/NewProject';
import Empty from './components/Empty';

const initialProject = [];

function App() {
  const [projects, setProjects] = useState(initialProject);
  const [isNewProject, setIsNewProject] = useState(false);

  let mainRender;

  if (isNewProject) {
    mainRender = <NewProject onClick={handleNewProject} onSubmit={handleCreateProject} />;
  } else {
    if (projects && projects.length > 0) {
      mainRender = <Content />;
    } else {
      mainRender = <Empty />;
    }
  }

  function handleNewProject() {
    setIsNewProject(() => !isNewProject);
  }

  function handleCreateProject(e) {
    e.preventDefault();
    setProjects((prevProjects) => {
      return [
        ...prevProjects,
        {
          [e.target.title.name]: e.target.title.value,
          [e.target.description.name]: e.target.description.value,
          [e.target.date.name]: e.target.date.value,
        },
      ];
    });
  }

  return (
    <main className="flex flex-row h-screen">
      <Sidebar onClick={handleNewProject} projects={projects} isNewProject={isNewProject} />
      {mainRender}
    </main>
  );
}

export default App;
