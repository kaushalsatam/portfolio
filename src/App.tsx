import AboutMe from "./pages/AboutMe";
import AtAGlance from "./pages/AtAGlance";
import Header from "./pages/components/Header";
import Experience from "./pages/Experience";
import Hero from "./pages/Hero";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <AtAGlance />
      <AboutMe />
      <Experience />
    </div>
  );
}

export default App;
