import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Education from './components/Education/Education';
import Header from './components/Common/Header';
import Intro from './components/Intro/Intro';
import IntroAnimation from './components/Intro/IntroAnimation';
import Projects from './components/Projects/Projects';

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
