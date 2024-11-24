import About from '@/components/About/About';
import Contact from '@/components/Contact/Contact';
import Education from '@/components/Education/Education';
import Intro from '@/components/Intro/Intro';
import IntroAnimation from '@/components/Intro/IntroAnimation';
import Projects from '@/components/Projects/Projects';
import AnimatedSection from '@/components/Common/AnimationSection';

export default function Home() {
  return (
    <>
      <IntroAnimation />
      <Intro />
      <AnimatedSection>
        <About />
      </AnimatedSection>
      <AnimatedSection>
        <Education />
      </AnimatedSection>
      <AnimatedSection>
        <Projects />
      </AnimatedSection>
      <AnimatedSection>
        <Contact />
      </AnimatedSection>
    </>
  );
}
