import MouseGradient from '../components/common/MouseGradient';
import ScrollProgress from '../components/common/ScrollProgress';
import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import WhatIsVibeCoding from '../components/landing/WhatIsVibeCoding';
import TheFramework from '../components/landing/TheFramework';
import TheImpact from '../components/landing/TheImpact';
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
        <WhatIsVibeCoding />
        <TheFramework />
        <TheImpact />
        <WhoItsFor />
        <GetStarted />
        <Footer />
      </div>
    </MouseGradient>
  );
};

export default Landing;
