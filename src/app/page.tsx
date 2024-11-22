import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Header from './components/Header';
import Intro from './components/Intro';
import LoadingIntro from './components/LoadingIntro';
import Projects from './components/Projects';

export default function Home() {
  return (
    <>
      <LoadingIntro />
      <Header />
      <Intro />
      <About />
      <Education />
      <Projects />
      <Contact />
    </>
  );
}
