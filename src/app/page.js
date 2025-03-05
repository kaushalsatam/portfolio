import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Experience from "@/components/Experience/Experience";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Switch from "@/components/Switch/Switch";
import Technologies from "@/components/Technologies/Technologies";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Switch />
      <About />
      <Experience />
      <Technologies />
      <Projects />
      <Contact />
    </>
  );
}
