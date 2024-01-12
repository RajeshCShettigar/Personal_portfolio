import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Particles from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";
import particles from "./utils/particles";

function App() {
  const handleInit = async (main: any) => {
    await loadAll(main);
  };
  
  return (
    <div className="dark:bg-background bg-gray-300">
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
