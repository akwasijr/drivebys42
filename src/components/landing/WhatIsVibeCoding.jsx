import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HiSparkles, HiRocketLaunch } from 'react-icons/hi2';
import { FaBrain } from 'react-icons/fa6';

gsap.registerPlugin(ScrollTrigger);

const WhatIsVibeCoding = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simple fade-in animations
      gsap.from('.section-title', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      });

      gsap.from('.hero-statement', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'power2.out',
      });

      gsap.from('.value-card', {
        scrollTrigger: {
          trigger: '.cards-container',
          start: 'top 80%',
          once: true,
        },
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'back.out(1.2)',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const values = [
    {
      icon: FaBrain,
      title: 'Human Decisions',
      description: 'You stay in control of vision, strategy, and quality standards',
      colorClass: 'text-studio-pink'
    },
    {
      icon: HiSparkles,
      title: 'AI Acceleration',
      description: 'AI handles synthesis, iteration, and repetitive tasks automatically',
      colorClass: 'text-studio-coral'
    },
    {
      icon: HiRocketLaunch,
      title: 'Faster Results',
      description: 'Ship validated products in days instead of weeks or months',
      colorClass: 'text-studio-purple'
    }
  ];

  return (
    <section
      id="what-is-drive"
      ref={sectionRef}
      className="py-16 md:py-20 bg-black"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Title */}
        <div className="text-center mb-12 section-title">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            What is DRIVE?
          </h2>
        </div>

        {/* Hero Statement */}
        <div className="hero-statement text-center mb-16 max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            A way of working where <span className="text-studio-pink font-semibold">AI amplifies human creativity</span> across research, design, and delivery—helping teams move faster while maintaining quality and control.
          </p>
        </div>

        {/* 3 Value Cards */}
        <div className="cards-container grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {values.map((value, index) => (
            <div
              key={index}
              className="value-card bg-gray-900 rounded-2xl p-8 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="mb-6">
                <value.icon className={`text-6xl ${value.colorClass}`} />
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-lg text-gray-300 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsVibeCoding;
