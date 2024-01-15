import Image from "../assets/profile_photo2.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";

const Home = () => {
  return (
    <section
      className="container mx-auto px-4 py-16 md:px-20 md:py-12 lg:px-28 lg:py-12"
      id="home"
    >
      <div className="flex items-center justify-center md:flex-row flex-col-reverse px-2">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="md:w-1/2 flex flex-col md:items-center md:text-left items-center justify-center text-center md:ml-3 md:mt-4"
        >
          <h1 className="font-bold md:p-2 sm:text-4xl text-2xl mb-4 text-center">
            Hey there, <br className="lg:inline"/>
            <span className="text-transparent md:text-5xl bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mt-8">
              I'm Rajesh C Shettigar
            </span>
          </h1>
          <p className="mb-8 max-w-lg mx-auto lg:mx-0 text-center">
            I am currently persuing my B.E in Computer Science and Engineering.
            I'm most familiar with web technologies and interested specially in
            backend development. I'm looking forward to work as an software
            developer in an organization to improve my knowledge and analytical
            skills.
          </p>
          <div className="flex items-center mb-12 mx-auto lg:mx-0 justify-center">
            <a
              href="#contact"
              className="px-6 py-2 border-2 m-2 border-blue-600 text-fuchsia-600 font-medium text-xl rounded-full hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-white hover:border-none"
            >
              Contact me
            </a>
            <a
              href="#project"
              className="px-6 py-2 border-2 m-2 border-blue-600 text-fuchsia-600 font-medium text-xl rounded-full hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  hover:text-white hover:border-none"
            >
              Projects
            </a>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="mx-auto flex-1 flex justify-center items-center md:w-1/2"
        >
          <img
            src={Image}
            alt=""
            className="w-96 h-[400px] rounded-full border-4 border-pink-500 shadow-sm object-cover bright-half"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
