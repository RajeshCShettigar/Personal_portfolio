import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import BELOGO from "../assets/NITTE-University.jpg";
import PULOGO from "../assets/PU_COLLEGE_LOGO.jpg";
import HIGHLOGO from "../assets/high_school_logo.jpg";

const Education = () => {
  return (
    <section
      className="mx-auto px-4 py-4 md:px-12 lg:px-16 items-center justify-center"
      id="education"
    >
      <div className="mx-auto">
        <div className="flex flex-col items-center justify-center">
          <motion.h1
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="text-4xl font-bold text-center"
          >
           Education
          </motion.h1>
        </div>
        <div className="px-2 py-16 mx-auto justify-center">
          <div className="flex flex-wrap sm:m-4 md:space-y-0 items-center justify-center">
            
            <motion.div 
            className="w-full max-w-[22rem] border border-gray-200 rounded-lg shadow text-gray-400 mx-6 hover:shadow-3xl hover:border-gray-600">
              <div className="flex flex-col items-center py-2">
                <img
                  className="w-24 h-24 mb-3 rounded-full shadow-lg border-2 border-pink-600"
                  src={BELOGO}
                  alt="NMAMIT logo"
                />
                <h5 className="mb-1 text-md font-medium text-gray-400">
                   NMAM Institute Of Technology, Nitte
                </h5>
                <span className="text-sm ">
                  B.E-(CSE)
                </span>
                <p className="text-md">2021-2024</p>
                <div className="flex">
                   <p className="text-sm">CGPA : 9.0</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
            className="w-full max-w-[22rem] border border-gray-200 rounded-lg shadow text-gray-400 mx-6 hover:shadow-3xl hover:border-gray-600">
              <div className="flex flex-col items-center py-2">
                <img
                  className="w-24 h-24 mb-3 rounded-full shadow-lg border-2 border-pink-600"
                  src={PULOGO}
                  alt="SDPT Logo"
                />
                <h5 className="mb-1 text-md font-medium text-gray-400">
                   SDPT PU Collge, Kateel
                </h5>
                <span className="text-sm ">
                  PUE-(PCMC)
                </span>
                <p className="text-md">2018-2020</p>
                <div className="flex">
                   <p className="text-sm">Aggregate Percentage : 95.83%</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
            className="w-full max-w-[22rem] border border-gray-200 rounded-lg shadow text-gray-400 mx-6 hover:shadow-3xl hover:border-gray-600">
              <div className="flex flex-col items-center py-2">
                <img
                  className="w-24 h-24 mb-3 rounded-full shadow-lg border-2 border-pink-600"
                  src={HIGHLOGO}
                  alt="HIGH SCHOOL Logo"
                />
                <h5 className="mb-1 text-md font-medium text-gray-400">
                   RMEM High School, Kinnikambla
                </h5>
                <span className="text-sm ">
                  SSLC
                </span>
                <p className="text-md">2015-2018</p>
                <div className="flex">
                   <p className="text-sm">Aggregate Percentage : 94.24%</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
