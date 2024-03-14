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
  const [projectIndex, setProjectIndex] = useState(0);

  let projectRender;

  if (isNewProject) {
    projectRender = <NewProject onClick={handleNewProject} onSubmit={handleCreateProject} />;
  } else {
    if (projects && projects.length > 0) {
      projectRender = <Content projects={projects} projectIndex={projectIndex} onSubmit={handleCreateTask} />;
    } else {
      projectRender = <Empty />;
    }
  }

  function handleNewProject() {
    setIsNewProject(() => !isNewProject);
  }

  function handleCreateProject(e) {
    e.preventDefault();
    setProjects((prevProjects) => {
      const newDate = new Date(e.target.date.value);
      const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      };

      return [
        ...prevProjects,
        {
          [e.target.title.name]: e.target.title.value,
          [e.target.description.name]: e.target.description.value,
          [e.target.date.name]: newDate.toLocaleDateString('en-US', options),
          tasks: ['12312', 'asedqaweq', 'asdhsf'],
        },
      ];
    });
  }

  function handleCreateTask(e, projectIndex, value) {
    e.preventDefault();
    setProjects((prevProjects) => {
      const projects = [
        ...prevProjects.map((project) => ({
          ...project,
          tasks: [...project.tasks],
        })),
      ];
      const seletedProject = projects[projectIndex];
      seletedProject.tasks.push(value);

      return projects;
    });
  }

  function handleProjectIndex(index) {
    setProjectIndex(index);
  }

  return (
    <main className="flex flex-row h-screen">
      <Sidebar
        onAddClick={handleNewProject}
        onIndexClick={handleProjectIndex}
        projects={projects}
        isNewProject={isNewProject}
      />
      {projectRender}
    </main>
  );
}

export default App;
