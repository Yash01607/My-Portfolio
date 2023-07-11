import BgAnimation from './components/BackgrooundAnimation/BackgroundAnimation';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Technologies from './components/Technologies/Technologies';
import About from './components/About/About.js';
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
      <About />
    </Layout>
  );
}

export default App;