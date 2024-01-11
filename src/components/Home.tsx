import { Bio } from "../data/index";
import Image from "../assets/HeroImg.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";

const Home = () => {
  return (
    <section
      className="min-h-[90vh] lg:min-h-[90vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto md:px-24">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left justify-center items-center text-wrap">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[36px] font-bold leading-[0.8] lg:text-[64px] md:p-2 sm:text-4xl text-3xl mb-4"
            >
              Hey there 🖐 I'am <br className="hidden lg:inline-block" />
              <span className="text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                Rajesh C Shettigar
              </span>
            </motion.h1>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              {Bio.description}
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2 rounded-full">
                Contact me
              </button>
              <a
                href="#"
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-3 py-2 rounded-full"
              >
                Projects
              </a>
            </motion.div>
          </div>
          {/* images */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] w-96"
          >
            <img src={Image} alt="" className="w-96 h-96 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
