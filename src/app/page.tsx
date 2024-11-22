import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Header from './components/Header';
import Intro from './components/Intro';
import IntroAnimation from './components/IntroAnimation';
import Projects from './components/Projects';

export default function Home() {
  return (
    <>
      <IntroAnimation />
      <Header />
      <Intro />
      <About />
      <Education />
      <Projects />
      <Contact />
    </>
  );
}
