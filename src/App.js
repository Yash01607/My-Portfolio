import BgAnimation from './components/BackgrooundAnimation/BackgroundAnimation';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Technologies from './components/Technologies/Technologies';
import About from './components/About/About';
import Certificates from "./components/Certificates/Certificates";

import { Layout } from './layout/Layout';
import { Section } from './styles/GlobalComponents';
import './App.css';

function App() {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Certificates/>
      <About />
    </Layout>
  );
}

export default App;
