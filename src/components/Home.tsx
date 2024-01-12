import Image from "../assets/HeroImg.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";

const Home = () => {
  return (
    <section
      className="container mx-auto px-4 py-16 md:px-20 md:py-12 lg:px-28 lg:py-12"
      id="home"
    >
      <div className="px-2 gap-2">
        <div className="flex items-center justify-center md:flex-row flex-col-reverse">
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center justify-center text-center">
            <h1 className="font-bold md:p-2 sm:text-4xl text-2xl mb-4 text-center">
              Hey there, <br className="hidden lg:inline-block" />
              <span className="text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 my-3 leading-9">
                I'm Rajesh C Shettigar
              </span>
            </h1>
            <p className="mb-8 max-w-lg mx-auto lg:mx-0 text-center">
              I am currently persuing my B.E in Computer Science and
              Engineering. I'm most familiar with web technologies and
              interested specially in backend development. I'm looking forward
              to work as an software developer in an organization to improve my
              knowledge and analytical skills.
            </p>
            <div className="flex items-center mb-12 mx-auto lg:mx-0 justify-center">
              <a
                href="#contact"
                className="px-6 py-2 border-2 m-2 border-blue-600 text-fuchsia-600 font-medium text-xl rounded-full hover:bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:text-white"
              >
                Contact me
              </a>
              <a
                href="#project"
                className="px-6 py-2 border-2 m-2 border-blue-600 text-fuchsia-600 font-medium text-xl rounded-full hover:bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:text-white"
              >
                Projects
              </a>
            </div>
          </motion.div>
          <motion.div
             variants={fadeIn("left", 0.5)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: false, amount: 0.3 }}
            className="mx-auto flex-1 flex justify-center items-center"
          >
            <img src={Image} alt="" className="w-96 h-96 rounded-full border-2 border-fuchsia-700 shadow-sm" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
