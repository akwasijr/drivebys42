import MouseGradient from '../components/common/MouseGradient';
import ScrollProgress from '../components/common/ScrollProgress';
import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import WhatIsVibeCoding from '../components/landing/WhatIsVibeCoding';
import WhyItMatters from '../components/landing/WhyItMatters';
import DriveProcess from '../components/landing/DriveProcess';
import OnlyVibes from '../components/landing/OnlyVibes';
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
        <WhyItMatters />
        <DriveProcess />
        <OnlyVibes />
        <WhoItsFor />
        <GetStarted />
        <Footer />
      </div>
    </MouseGradient>
  );
};

export default Landing;
