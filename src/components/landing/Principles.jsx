import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Principles = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const principlesRef = useRef([]);
  const iconsRef = useRef([]);

  useEffect(() => {
    // Title animation
    if (titleRef.current) {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 30,
        duration: 0.8
      });
    }

    // Principles stagger in
    principlesRef.current.forEach((principle, index) => {
      if (principle) {
        gsap.from(principle, {
          scrollTrigger: {
            trigger: principle,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          opacity: 0,
          x: index % 2 === 0 ? -50 : 50,
          duration: 0.6,
          delay: index * 0.1
        });
      }
    });

    // Icon pulse effect
    iconsRef.current.forEach((icon, index) => {
      if (icon) {
        gsap.to(icon, {
          scrollTrigger: {
            trigger: icon,
            start: 'top 80%',
            toggleActions: 'play none none none'
          },
          scale: 1.2,
          duration: 0.4,
          delay: index * 0.1 + 0.3,
          yoyo: true,
          repeat: 1
        });

        // Continuous subtle rotation
        gsap.to(icon, {
          rotation: 360,
          duration: 8,
          repeat: -1,
          ease: 'none',
          delay: index * 0.5
        });
      }
    });
  }, []);

  const principles = [
    {
      number: '01',
      title: 'Design Stays Human-Centered',
      description: 'The human perspective — empathy, context, judgment, artistic vision — remains at the core of every decision. AI enhances, never replaces, human insight.',
      icon: '💭',
      color: 'from-studio-pink to-studio-coral'
    },
    {
      number: '02',
      title: 'AI Amplifies Capability',
      description: 'AI is a force multiplier for human effort. It handles synthesis, iteration, pattern-finding, and automation, freeing humans to focus on strategy and creativity.',
      icon: '⚡',
      color: 'from-studio-coral to-studio-pink'
    },
    {
      number: '03',
      title: 'Speed Enables Creativity',
      description: 'Faster cycles mean more experiments, more learning, more refinement. Speed is not about rushing - it\'s about expanding what\'s possible within a timeframe.',
      icon: '🚀',
      color: 'from-studio-purple to-studio-pink'
    },
    {
      number: '04',
      title: 'Everything Observable',
      description: 'Transparency in AI decisions, clear metrics for success, visible feedback loops. Teams always understand why decisions were made and how to improve.',
      icon: '👁️',
      color: 'from-studio-pink to-studio-purple'
    },
    {
      number: '05',
      title: 'Organizational Transformation',
      description: 'AI-First isn\'t a tool adoption - it\'s a fundamental shift in how organizations work. New roles emerge, collaboration patterns deepen, and innovation becomes continuous.',
      icon: '🌱',
      color: 'from-studio-coral to-studio-purple'
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-studio-pink rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-studio-purple rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10" ref={containerRef}>
        {/* Title */}
        <div className="text-center mb-16" ref={titleRef}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-studio-pink via-studio-coral to-studio-pink bg-clip-text text-transparent">
            Five Unchanging Principles
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            No matter how AI evolves, these principles guide how we work
          </p>
        </div>

        {/* Principles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* First 4 principles in 2x2 grid */}
          {principles.slice(0, 4).map((principle, index) => (
            <div
              key={index}
              ref={el => (principlesRef.current[index] = el)}
              className="group relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-studio-pink/20 hover:border-studio-pink/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-studio-pink/10"
            >
              {/* Gradient accent */}
              <div className={`absolute inset-0 bg-gradient-to-br ${principle.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />

              {/* Icon */}
              <div
                ref={el => (iconsRef.current[index] = el)}
                className="text-5xl mb-4 inline-block"
              >
                {principle.icon}
              </div>

              {/* Number */}
              <div className="text-5xl font-bold bg-gradient-to-r from-studio-pink to-studio-coral bg-clip-text text-transparent mb-3 opacity-20">
                {principle.number}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-studio-pink transition-colors">
                  {principle.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {principle.description}
                </p>
              </div>

              {/* Hover accent line */}
              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${principle.color} rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} style={{width: '100%'}} />
            </div>
          ))}

          {/* Fifth principle - full width on smaller, or right side */}
          <div
            ref={el => (principlesRef.current[4] = el)}
            className="lg:col-span-2 group relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-studio-coral/20 hover:border-studio-coral/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-studio-coral/10"
          >
            {/* Gradient accent */}
            <div className={`absolute inset-0 bg-gradient-to-br ${principles[4].color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />

            {/* Icon */}
            <div
              ref={el => (iconsRef.current[4] = el)}
              className="text-5xl mb-4 inline-block"
            >
              {principles[4].icon}
            </div>

            {/* Number */}
            <div className="text-5xl font-bold bg-gradient-to-r from-studio-coral to-studio-pink bg-clip-text text-transparent mb-3 opacity-20">
              {principles[4].number}
            </div>

            {/* Content */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-studio-coral transition-colors">
                  {principles[4].title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {principles[4].description}
                </p>
              </div>

              {/* Context on the right */}
              <div className="bg-black/40 rounded-lg p-6 border border-studio-coral/20">
                <p className="text-sm text-gray-300 leading-relaxed">
                  This means teams adopt new roles (AI Specialists, Experience Architects), communication patterns shift, and the organization develops new capabilities for leveraging AI effectively. It's a 6-12 month journey of cultural evolution.
                </p>
              </div>
            </div>

            {/* Hover accent line */}
            <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-studio-coral to-studio-pink rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} style={{width: '100%'}} />
          </div>
        </div>

        {/* Summary */}
        <div className="mt-16 text-center p-8 bg-gradient-to-r from-studio-pink/5 via-transparent to-studio-pink/5 border border-studio-pink/10 rounded-xl">
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            These five principles form the foundation of DRIVE. They don't change with market trends or tool updates. They're the unwavering guide for organizations committed to the AI-First way of working.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Principles;
