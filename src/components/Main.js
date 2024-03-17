import Content from './Content';
import NewProject from './NewProject';

export default function Main({ isNewProject }) {
  let projectRender;

  if (isNewProject) {
    projectRender = <NewProject />;
  } else {
    projectRender = <Content />;
  }

  return projectRender;
}
