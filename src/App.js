import BgAnimation from './components/BackgroundAnimation/BackgroundAnimation';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Technologies from './components/Technologies/Technologies';
import MyTimeline from './components/MyTimeline/MyTimeline';
import Certificates from './components/Certificates/Certificates';
import { Layout } from './layout/Layout';
import { Section } from './styles/GlobalComponents';
import './App.css';
// import Coffee from './components/Coffee/Coffee';
// import OptimusPrime from './components/OptimusPrime/OptimusPrime';

function App() {
  return (
    // <OptimusPrime></OptimusPrime>
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <MyTimeline />
      <Projects />
      <Certificates />
      <Technologies />
    </Layout>
  );
}

export default App;
