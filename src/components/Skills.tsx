import { motion } from "framer-motion";
import { skills } from "../data/index";

const Skills = () => {
  const languages = skills[0].languages;
  const frameworks = skills[1].frameworks;
  const tools = skills[2].tools;
  return (
    <section
      className="container mx-auto px-4 py-16 md:px-20 md:py-12 lg:px-28 lg:py-12"
      id="skills"
    >
      <div className="bg-background1">
        <h1 className="text-4xl text-center p-4">Skills</h1>
        <motion.p className="text-center">
          Here are some of technologies which I'm familiar with and on which I
          have been working on for the past 2 years
        </motion.p>
        <h1 className="text-center">Languages</h1>
        <div className="flex flex-wrap justify-center items-center">
          {languages?.map((language, index) => (
            <div
              key={index}
              className="px-6 py-2 border-2 m-2 border-blue-600 text-blue-600 font-medium text-xl rounded hover:bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:text-white"
            >
              <p>{language.name}</p>
            </div>
          ))}
        </div>
        <h1 className="text-center">Frameworks & Databases</h1>
        <div className="flex flex-wrap justify-center items-center">
          {frameworks?.map((framework, index) => (
            <div
              key={index}
              className="px-6 py-2 border-2 m-2 border-blue-600 text-blue-600 font-medium text-xl rounded hover:bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:text-white"
            >
              <p>{framework.name}</p>
            </div>
          ))}
        </div>
        <h1 className="text-center">Tools</h1>
        <div className="flex flex-wrap justify-center items-center">
          {tools?.map((tool, index) => (
            <div
              key={index}
              className="px-6 py-2 border-2 m-2 border-blue-600 text-blue-600 font-medium text-xl rounded hover:bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:text-white"
            >
              <p>{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
