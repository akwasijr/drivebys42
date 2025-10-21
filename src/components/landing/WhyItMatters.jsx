import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrambleText from '../common/ScrambleText';

gsap.registerPlugin(ScrollTrigger);

const impactHighlights = [
  {
    title: 'Rapid Iteration',
    description: 'Test, learn, and refine in real-time',
    signal: 'Ship cycles accelerate with every loop',
    accent: 'from-studio-coral via-studio-pink to-studio-purple',
    glow: 'from-studio-coral/40 via-studio-pink/30 to-studio-purple/40',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v6m0 0h6m-6 0l3.5-3.5M20 20v-6m0 0h-6m6 0l-3.5 3.5" />
      </svg>
    ),
  },
  {
    title: 'Unified Teams',
    description: 'Design and dev working as one',
    signal: 'Shared context across every sprint',
    accent: 'from-studio-purple via-studio-pink to-studio-coral',
    glow: 'from-studio-purple/35 via-studio-pink/30 to-studio-coral/35',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 7a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0zM11 14.5c0-1.105-.895-2-2-2H6c-1.105 0-2 .895-2 2V18h7v-3.5zM18.5 9.5a3 3 0 10-6 0 3 3 0 006 0zM20 18v-2.5c0-1.105-.895-2-2-2h-1.5" />
      </svg>
    ),
  },
  {
    title: 'User-Validated',
    description: 'Ship features users actually need',
    signal: 'Evidence anchors every roadmap decision',
    accent: 'from-studio-pink via-studio-purple to-studio-coral',
    glow: 'from-studio-pink/35 via-studio-purple/30 to-studio-coral/40',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4 10-10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h5l2-3h9a1 1 0 011 1v12a1 1 0 01-1 1h-6" />
      </svg>
    ),
  },
  {
    title: 'Fast Prototyping',
    description: 'From concept to tested prototype quickly',
    signal: 'Clickable experiences in minutes, not weeks',
    accent: 'from-studio-coral via-studio-purple to-studio-pink',
    glow: 'from-studio-coral/40 via-studio-purple/30 to-studio-pink/35',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 4l3 3-6.75 6.75a2 2 0 00-.5.86l-.43 1.71a.5.5 0 00.61.61l1.71-.43a2 2 0 00.86-.5L20 8l3 3V4h-10z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 19h14" />
      </svg>
    ),
  },
];

const WhyItMatters = () => {
  const sectionRef = useRef(null);
  const [titleInView, setTitleInView] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.from('.why-title', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
          onEnter: () => setTitleInView(true),
        },
        y: 100,
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: 'back.out(1.7)',
      });

      // Animate subtitle
      gsap.from('.why-subtitle', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'power2.out',
      });

      // Animate section headers
      gsap.from('.section-header', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out',
      });

      // Animate comparison boxes with subtle effects
      gsap.from('.comparison-box', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
        y: 50,
        opacity: 0,
        scale: 0.95,
        filter: 'blur(10px)',
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
      });

      // Stagger animation for problem items with blur
      gsap.from('.problem-item', {
        scrollTrigger: {
          trigger: '.problem-container',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        x: -30,
        opacity: 0,
        filter: 'blur(8px)',
        stagger: 0.12,
        duration: 0.9,
        ease: 'power3.out',
      });

      // Stagger animation for solution items with blur
      gsap.from('.solution-item', {
        scrollTrigger: {
          trigger: '.solution-container',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        x: 30,
        opacity: 0,
        filter: 'blur(8px)',
        stagger: 0.12,
        duration: 0.9,
        ease: 'power3.out',
      });

      // Add hover effect to problem/solution items
      const allItems = document.querySelectorAll('.problem-item, .solution-item');
      allItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
          gsap.to(item, {
            x: 5,
            scale: 1.02,
            duration: 0.3,
            ease: 'power2.out',
          });
        });
        
        item.addEventListener('mouseleave', () => {
          gsap.to(item, {
            x: 0,
            scale: 1,
            duration: 0.3,
            ease: 'power2.out',
          });
        });
      });

      // Hero cards for impact highlights
      gsap.from('.impact-card', {
        scrollTrigger: {
          trigger: '.stats-container',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        y: 60,
        opacity: 0,
        filter: 'blur(10px)',
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="why-drive"
      ref={sectionRef}
      className="py-24 md:py-32 bg-gray-950"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="why-title text-5xl md:text-7xl font-display font-bold mb-6 text-white">
            Why It Matters
          </h2>
          <p className="why-subtitle text-xl text-gray-400 max-w-2xl mx-auto">
            Transform workflows into results
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-20">
          {/* Current State - Problems */}
          <div className="comparison-box bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <h3 className="section-header text-3xl font-bold mb-8 text-white">
              Traditional
            </h3>
            <div className="problem-container space-y-6">
              <div className="problem-item">
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500/20">
                    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white text-lg">Slow Handoffs</h4>
                </div>
                <p className="text-gray-400 text-sm ml-12">Designers wait days for engineering feedback on feasibility</p>
              </div>

              <div className="problem-item">
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500/20">
                    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white text-lg">Lost Context</h4>
                </div>
                <p className="text-gray-400 text-sm ml-12">Design rationale disappears between Figma and implementation</p>
              </div>

              <div className="problem-item">
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500/20">
                    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white text-lg">Endless Iterations</h4>
                </div>
                <p className="text-gray-400 text-sm ml-12">Testing happens too late when changes are expensive</p>
              </div>

              <div className="problem-item">
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500/20">
                    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white text-lg">Team Friction</h4>
                </div>
                <p className="text-gray-400 text-sm ml-12">Misaligned expectations create tension between disciplines</p>
              </div>
            </div>
          </div>

          {/* DRIVE Solution */}
          <div 
            className="comparison-box rounded-3xl p-8 border border-white/10 bg-gray-900/50 backdrop-blur-xl"
          >
            <h3 className="section-header text-3xl font-bold mb-8 text-white">
              DRIVE
            </h3>
            <div className="solution-container space-y-6">
              <div className="solution-item">
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500/20">
                    <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white text-lg">Real-Time Collaboration</h4>
                </div>
                <p className="text-gray-400 text-sm ml-12">Design and development happen simultaneously in one environment</p>
              </div>

              <div className="solution-item">
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500/20">
                    <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white text-lg">Instant Prototyping</h4>
                </div>
                <p className="text-gray-400 text-sm ml-12">Transform ideas into interactive prototypes in minutes not days</p>
              </div>

              <div className="solution-item">
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500/20">
                    <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white text-lg">Continuous Validation</h4>
                </div>
                <p className="text-gray-400 text-sm ml-12">Test with real users early and iterate based on actual feedback</p>
              </div>

              <div className="solution-item">
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500/20">
                    <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white text-lg">Unified Workflow</h4>
                </div>
                <p className="text-gray-400 text-sm ml-12">One tool for the entire journey from concept to shipped feature</p>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <div className="stats-container relative">
          <div className="relative grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {impactHighlights.map(({ title, description, signal, icon }) => (
              <div
                key={title}
                className="impact-card group relative p-8 transition duration-300 ease-out hover:-translate-y-1"
              >
                <div className="flex h-full flex-col">
                  <div className="mb-6">
                    <span className="flex h-12 w-12 items-center justify-center text-white">
                      {icon}
                    </span>
                  </div>
                  <h4 className="text-2xl font-semibold text-white mb-3">{title}</h4>
                  <p className="text-sm text-gray-300 leading-relaxed">{description}</p>
                  <div className="mt-auto pt-6 flex items-center gap-2 text-sm text-gray-400">
                    <span className="inline-flex h-1.5 w-1.5 rounded-full bg-studio-pink" />
                    <span>{signal}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;
