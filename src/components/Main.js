import Content from './Content';
import NewProject from './NewProject';
import Empty from './Empty';

export default function Main({ projects, isNewProject }) {
  let result;
  if (isNewProject) {
    result = <NewProject />;
  } else {
    if (projects && projects.length > 0) {
      result = <Content />;
    } else {
      result = <Empty />;
    }
  }

  return result;
}
