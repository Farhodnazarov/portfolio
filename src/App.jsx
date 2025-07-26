import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { FaFileDownload } from "react-icons/fa";

function App() {
  return (
    <div className="bg-black  text-white min-h-screen pb-40">
      <div className=" container mx-auto">
        <div className="sticky top-0 z-20">
          <Navbar />
        </div>
        <div id="home" className="text-center mb-5 scroll-mt-28">
          <Header />
        </div>
        <div className="w-full text-center">
          <h1 className="text-3xl tracking-[4px] mb-10 font-bold md:text-4xl md:mb-16 lg:text-5xl lg:mb-20">
            Frontend Developer
          </h1>
        </div>
        <div
          id="about"
          className="text-center scroll-mt-28  mb-10 md:mb-16 lg:mb-20"
        >
          <About />
        </div>
        <div className="w-full flex justify-center mb-10 lg:mb-20">
          <a
            className=" flex items-center gap-3 font-bold py-4 px-8 rounded-3xl bg-[#222] hover:bg-white hover:text-[#222] transition-colors
              md:text-3xl md:w-[400px] lg:w-[450px] lg:text-4xl"
            href="./rezyume.pdf"
            download
          >
            Download Rezyume <FaFileDownload />
          </a>
        </div>
        <div id="projects" className="text-center scroll-mt-28">
          <Projects />
        </div>
        <div id="skills" className="text-center scroll-mt-28">
          <Skills />
        </div>
        <div id="contact" className="text-center scroll-mt-28">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
