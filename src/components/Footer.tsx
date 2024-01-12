import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="text-center bottom-0">
      <div className="p-1 pt-5 mt-1 border-t border-gray-200 text-center">
        <div className="inline-flex text-2xl">
          <a
            href="https://github.com/RajeshCShettigar"
            className="ml-6 text-gray-400 hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/rajesh-c-shettigar-606a04220/"
            className="ml-6 text-gray-400 hover:text-white"
          >
            <FaLinkedin/>
          </a>
          <a
            href="https://www.instagram.com/rajes____0000"
            className="ml-6 text-gray-400 hover:text-white"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:rajeshshettigar249@gmail.com"
            className="ml-6 text-gray-400 hover:text-white"
          >
            <SiGmail />
          </a>
          <a href="https://wwww.twitter.com/rajesh"
           className="ml-6 text-gray-400 hover:text-white">
            <FaSquareXTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
