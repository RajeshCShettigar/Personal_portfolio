import { projects } from "../data/index";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section
      className="mx-auto px-4 py-16 md:px-12 md:py-8 lg:px-24 lg:py-8"
      id="projects"
    >
      <div className="container mx-auto px-5">
        <div className="flex flex-col items-center justify-center">
          <motion.h1
            variants={fadeIn("top", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="text-4xl font-bold text-center py-2"
          >
            Projects
          </motion.h1>
          <motion.p
            variants={fadeIn("top", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="text-lg text-center text-gray-400 mt-2"
          >
            I have worked on a wide range of projects. From web apps to android
            apps. Here are some of my projects.
          </motion.p>
        </div>
        <div className="my-4">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {projects.map((project, index) => (
              <motion.li 
                transition={{ duration: 0.5 }}
                className="w-full max-w-sm rounded overflow-hidden shadow-lg bg-[#202020] hover:bg-[#161616] m-4"
                key={index}
              >
                 
                    <img
                      src={project?.image}
                      alt="Project"
                      className="w-full object-cover h-56 "
                    />
                  <div className="px-6 py-4">
                    <div className="flex items-center space-x-2 justify-center">
                    <span className="font-bold text-xl">{project.title}</span>
                    <a href={project.github} className="text-xl">
                     <FaGithub />
                    </a>
                   </div>
                   <p className="text-gray-400 text-base text-wrap">{project.description}</p>
                    </div>
                      <div className="flex flex-wrap mt-2 justify-center">
                      {project?.tags.map((tag, index) => (
                        <div
                          key={index}
                          className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 hover:bg-blue-600"
                        >
                          {tag}
                        </div>
                      ))}
                    </div>
              </motion.li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
};

export default Projects;
