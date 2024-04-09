import BgAnimation from "./components/BackgroundAnimation/BackgroundAnimation";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies/Technologies";
import Education from "./components/Education/Education";
import Certificates from "./components/Certificates/Certificates";
import { Layout } from "./layout/Layout";
import { Section } from "./styles/GlobalComponents";
import "./App.css";
import ExperienceSection from "./components/Experience/Experience";
// import OptimusPrime from './components/OptimusPrime/OptimusPrime';
// import Coffee from './components/Coffee/Coffee';

function App() {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <ExperienceSection />
      <Projects />
      <Technologies />
      <Education />
      <Certificates />
    </Layout>
    // <OptimusPrime></OptimusPrime>
  );
}

export default App;
