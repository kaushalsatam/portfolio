import AboutMe from "./pages/AboutMe";
// import AtAGlance from "./pages/AtAGlance";
import Header from "./pages/components/Header";
import Experience from "./pages/Experience";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./pages/components/Footer";
import Skills from "./pages/Skills";
import Education from "./pages/Education";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      {/* <AtAGlance /> */}
      <AboutMe />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
