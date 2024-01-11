import { projects } from "../data/index";

const Projects = () => {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center"
      id="projects"
    >
      <div className="container mx-auto px-5">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-center">Projects</h1>
          <p className="text-lg text-center text-gray-400 mt-2">
            I have worked on a wide range of projects. From web apps to android
            apps. Here are some of my projects.
          </p>
        </div>
        <div className="mx-10">
          <ul className="flex flex-wrap mx-auto justify-center">
            {projects.map((project, index) => (
              <li
                className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 mb-10 p-2"
                key={index}
              >
                <div className="items-center justify-center">
                  <div className="max-w-3xl w-full rounded-lg m-10 min-h-min-content bg-purple-900 text-white p-5 flex flex-col relative">
                    <img
                      src={project?.image}
                      alt="Project"
                      className="w-full object-cover rounded-lg mt-8 shadow-md"
                    />
                    <div className="text-2xl font-semibold text-white mt-5">
                      {project?.title}
                    </div>
                    <div className="text-base text-gray-400 mt-1">
                      {project.date}
                    </div>
                    <div className="flex flex-wrap mt-2">
                      {project?.tags.map((tag, index) => (
                        <div
                          key={index}
                          className="text-sm font-normal text-blue-500 mr-2 mb-2 px-2 py-1 rounded bg-blue-300"
                        >
                          {tag}
                        </div>
                      ))}
                    </div>
                    <div className="text-base font-normal text-white mt-2">
                      {project?.description}
                    </div>
                    <div className="flex justify-between mt-4 gap-4">
                      <a
                        href={project?.github}
                        target="new"
                        className="text-white px-4 py-2 rounded bg-blue-500 hover:bg-blue-600"
                      >
                        View Code
                      </a>
                      <a
                        href={project?.category}
                        target="new"
                        className="text-white px-4 py-2 rounded bg-blue-500 hover:bg-blue-600"
                      >
                        View Live App
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
