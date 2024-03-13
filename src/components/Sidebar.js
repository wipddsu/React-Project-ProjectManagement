import ProjectList from './ProjectList';

export default function Sidebar({ onClick }) {
  return (
    <section className="flex-auto w-1/4 h-full bg-indigo-950 py-20 px-10">
      <h1 className="text-indigo-50 mb-10 uppercase text-xl">your projects</h1>
      <button onClick={onClick} className="py-2 px-5 bg-indigo-600 text-indigo-300 rounded mb-10">
        + Add Project
      </button>
      <ProjectList />
    </section>
  );
}
