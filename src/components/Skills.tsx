import { motion } from "framer-motion";
import { skills } from "../data/index";
import { fadeIn } from "../utils/variants";

const Skills = () => {
  const languages = skills[0].languages;
  const frameworks = skills[1].frameworks;
  const tools = skills[2].tools;
  return (
    <section
      className="mx-auto px-4 py-16 md:px-20 md:py-12 lg:px-28 lg:py-12"
      id="skills"
    >
      <div className="bg-background1">
        <motion.h1 
          variants={fadeIn("top", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        className="text-4xl text-center p-4">Skills</motion.h1>
        <motion.p className="text-center">
          Here are some of technologies which I'm familiar with and on which I
          have been working on for the past 2 years
        </motion.p>
        <h1 className="text-center py-3">Languages</h1>
        <div className="flex flex-wrap justify-center items-center">
          {languages?.map((language, index) => (
            <motion.div
              variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
              key={index}
              className="px-6 py-1 border-2 m-2 border-blue-600 text-blue-600 font-medium text-xl rounded hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-white hover:border-none"
            >
              <p>{language.name}</p>
            </motion.div>
          ))}
        </div>
        <h1 className="text-center py-3">Frameworks & Databases</h1>
        <div className="flex flex-wrap justify-center items-center">
          {frameworks?.map((framework, index) => (
            <motion.div
              variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
              key={index}
              className="px-6 py-1 border-2 m-2 border-blue-600 text-blue-600 font-medium text-xl rounded hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-white hover:border-none"
            >
              <p>{framework.name}</p>
            </motion.div>
          ))}
        </div>
        <h1 className="text-center py-3">Tools</h1>
        <div className="flex flex-wrap justify-center items-center">
          {tools?.map((tool, index) => (
            <motion.div
              variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
              key={index}
              className="px-6 py-1 border-2 m-2 border-blue-600 text-blue-600 font-medium text-xl rounded hover:bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 hover:text-white hover:border-none"
            >
              <p>{tool.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
