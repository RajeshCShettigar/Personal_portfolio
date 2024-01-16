import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";


function App() {
 
  return (
    <div className="dark:dim-blue bg-goldcolor">
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
