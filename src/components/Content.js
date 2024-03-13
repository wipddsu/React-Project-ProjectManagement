import ProjectInfo from './ProjectInfo';
import Tasks from './Tasks';

export default function Content() {
  return (
    <section className="flex-auto w-3/4 h-full py-20 px-10">
      <ProjectInfo />
      <Tasks />
    </section>
  );
}
