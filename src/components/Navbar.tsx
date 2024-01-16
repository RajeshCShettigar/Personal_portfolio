const Navbar = () => {
  return (
    <nav className=" border-gray-200 bg-navbar cursor-pointer sticky md:border-b-2 md:border-pink-500">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse md:justify-between ">
          <a
            href="https://drive.google.com/file/d/1LwHZvLrtk6vgQAatJP8Kv_HrXGBMh3oX/view?usp=sharing"
            target="_blank"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg px-4 py-1 text-center  focus:ring-blue-800 text-md"
          >
            Download CV
          </a>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex p-2 w-10 h-10 text-sm  rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  bg-navbar md:bg-navbar border-gray-700">
            <li>
              <a href="#home"
                className="block py-2 px-3 md:p-0 rounded  hover:text-pink-500  text-white hover:bg-gray-900  md:hover:bg-transparent border-gray-700 hover:underline"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a href="#projects"
                className="block py-2 px-3 md:p-0 rounded  hover:text-pink-500  text-white hover:bg-gray-900  md:hover:bg-transparent border-gray-700 hover:underline"
              >
                Projects
              </a>
            </li>
            <li>
              <a href="#skills"
                className="block py-2 px-3 md:p-0 rounded  hover:text-pink-500  text-white hover:bg-gray-900  md:hover:bg-transparent border-gray-700 hover:underline"
              >
                Skills
              </a>
            </li>
            <li>
              <a href="#education"
                className="block py-2 px-3 md:p-0 rounded  hover:text-pink-500  text-white hover:bg-gray-900  md:hover:bg-transparent border-gray-700 hover:underline"
              >
                Education
              </a>
            </li>
            <li>
              <a href="#contact"
                className="block py-2 px-3 md:p-0 rounded  hover:text-pink-500  text-white hover:bg-gray-900  md:hover:bg-transparent border-gray-700 hover:underline"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
