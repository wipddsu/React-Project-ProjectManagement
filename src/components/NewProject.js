import { useContext } from 'react';

import { ProjectsContext } from '../store/projects-context';

export default function NewProject() {
  const { projectCreate, cancelCreate } = useContext(ProjectsContext);

  return (
    <section className="flex-auto w-3/4 h-full py-20 px-10">
      <form onSubmit={(e) => projectCreate(e)}>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button onClick={cancelCreate} type="button" className="text-sm font-semibold leading-6 text-gray-900">
            Cancel
          </button>
          <button className="rounded-md bg-indigo-600 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Save
          </button>
        </div>
        <div>
          <div className="mb-5">
            <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900 uppercase">
              title
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                name="title"
                id="title"
                className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>
          <div className="mb-5">
            <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900 uppercase">
              description
            </label>
            <div className="mt-2">
              <textarea
                id="description"
                name="description"
                rows={3}
                className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 py-4 px-4"
                placeholder="Write a project task."
              ></textarea>
            </div>
          </div>
          <div className="mb-5">
            <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900 uppercase">
              due date
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="date"
                name="date"
                id="date"
                className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
