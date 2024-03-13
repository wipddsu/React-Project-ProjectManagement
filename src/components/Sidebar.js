import ProjectList from './ProjectList';

export default function Sidebar() {
  return (
    <section className="flex-auto w-1/4 h-full bg-indigo-950 py-20 px-10">
      <h1 className="text-indigo-50 mb-10 uppercase text-xl">your projects</h1>
      <ProjectList />
    </section>
  );
}
