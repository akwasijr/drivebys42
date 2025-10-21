import MouseGradient from '../components/common/MouseGradient';
import ScrollProgress from '../components/common/ScrollProgress';
import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import AIFirstFramework from '../components/landing/AIFirstFramework';
import ProcessFlow from '../components/landing/ProcessFlow';
import Principles from '../components/landing/Principles';
import WhyItMatters from '../components/landing/WhyItMatters';
import WhoItsFor from '../components/landing/WhoItsFor';
import GetStarted from '../components/landing/GetStarted';
import Footer from '../components/landing/Footer';

const Landing = () => {
  return (
    <MouseGradient>
      <ScrollProgress />
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <AIFirstFramework />
        <ProcessFlow />
        <Principles />
        <WhyItMatters />
        <WhoItsFor />
        <GetStarted />
        <Footer />
      </div>
    </MouseGradient>
  );
};

export default Landing;
