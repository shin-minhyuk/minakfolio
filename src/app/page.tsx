import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Education />
      <Projects />
      <Contact />
    </>
  );
}
