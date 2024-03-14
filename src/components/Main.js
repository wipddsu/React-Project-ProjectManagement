import Content from './Content';
import NewProject from './NewProject';
import { forwardRef, useState } from 'react';

export default function Main({
  projects,
  isNewProject,
  projectIndex,
  onDelete,
  onCancelClick,
  onProjectSubmit,
  onTaskSubmit,
}) {
  let projectRender;

  if (isNewProject) {
    projectRender = <NewProject onCancelClick={onCancelClick} onSubmit={onProjectSubmit} />;
  } else {
    projectRender = (
      <Content projects={projects} projectIndex={projectIndex} onDelete={onDelete} onSubmit={onTaskSubmit} />
    );
  }

  return projectRender;
}
