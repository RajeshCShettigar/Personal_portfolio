import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";

const Contact = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:px-20 md:py-8 lg:px-28 lg:py-8" id="contact">
      <div className="container mx-auto">
      <h1 className="text-center text-4xl p-4">Contact Me</h1>
        <div className="flex flex-col lg:flex-row justify-center items-center">
          {/* text */}
          
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[40px] lg:text-[80px] leading-none mb-12">
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl p-4 pb-4 lg:pb-8 gap-y-6 flex flex-col items-start backdrop-blur-md"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your name"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="email"
              placeholder="Your email"
            />
            <textarea
              className="bg-transparent border-b py-2 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none"
              name=""
              id=""
              cols={30}
              rows={6}
              placeholder="Your Message"
            ></textarea>
            <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2 rounded-full w-full">Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
