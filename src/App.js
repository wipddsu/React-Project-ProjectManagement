import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

import { ProjectsContext } from './store/projects-context';

function App() {
  const [projects, setProjects] = useState([]);
  const [isNewProject, setIsNewProject] = useState(false);
  const [projectIndex, setProjectIndex] = useState(0);

  function handleIsNewProject() {
    setIsNewProject(() => !isNewProject);
  }

  function handleCreateProject(e) {
    e.preventDefault();
    const length = projects.length;

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
          tasks: [],
        },
      ];
    });
    setIsNewProject(false);
    setProjectIndex(length);
  }

  function handleDeleteProject(projectIndex) {
    setProjects((prevProjects) => {
      const projects = [...prevProjects.filter((project, index) => projectIndex !== index)];

      return projects;
    });

    // 사이드바 프로젝트 리스트 업데이트
    if (projects.length === projectIndex + 1) {
      setProjectIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
    }
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

  function handleDeleteTask(taskIndex) {
    setProjects((prevProjects) => {
      const projects = [
        ...prevProjects.map((project) => ({
          ...project,
          tasks: [...project.tasks].filter((task, index) => taskIndex !== index),
        })),
      ];

      return projects;
    });
  }

  function handleProjectIndex(index) {
    setProjectIndex(() => index);
    setIsNewProject(false);
  }

  const ctxValue = {
    projects: projects,
    projectIndex: projectIndex,
    projectCreate: handleCreateProject,
    projectDelete: handleDeleteProject,
    cancelCreate: handleIsNewProject,
    taskSubmit: handleCreateTask,
    taskDelete: handleDeleteTask,
    selectProject: handleProjectIndex,
  };

  return (
    <ProjectsContext.Provider value={ctxValue}>
      <main className="flex flex-row h-screen">
        <Sidebar onAddClick={handleIsNewProject} isNewProject={isNewProject} />
        <Main isNewProject={isNewProject} />
      </main>
    </ProjectsContext.Provider>
  );
}

export default App;
