import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrambleText from '../common/ScrambleText';
import { HiMagnifyingGlass, HiXMark, HiCheck } from 'react-icons/hi2';
import { FaPalette, FaBook, FaBolt, FaRocket, FaLightbulb } from 'react-icons/fa6';

gsap.registerPlugin(ScrollTrigger);

const impactHighlights = [
  {
    stage: 'Research',
    problem: 'Scattered insights',
    solution: 'Synthesized findings',
    description: 'AI synthesizes research data, identifies patterns, surfaces actionable insights teams can immediately act on',
    icon: HiMagnifyingGlass,
  },
  {
    stage: 'Design',
    problem: 'Endless iteration cycles',
    solution: 'Rapid exploration',
    description: 'Generate multiple design directions, maintain consistency, explore variations in real-time with user feedback',
    icon: FaPalette,
  },
  {
    stage: 'Storytelling',
    problem: 'Inconsistent messaging',
    solution: 'Coherent narratives',
    description: 'AI refines copy, ensures narrative consistency across touchpoints, articulates brand story coherently',
    icon: FaBook,
  },
  {
    stage: 'Prototyping',
    problem: 'Weeks to prototype',
    solution: 'Minutes to interactive demo',
    description: 'Vibe Coding generates production-ready components, accelerates development, enables rapid validation cycles',
    icon: FaBolt,
  },
  {
    stage: 'Delivery',
    problem: 'Manual deployment',
    solution: 'Optimized shipping',
    description: 'AI optimizes performance, automates deployment quality checks, monitors metrics in production',
    icon: FaRocket,
  },
  {
    stage: 'Innovation',
    problem: 'Unknown user needs',
    solution: 'Data-driven iteration',
    description: 'AI analyzes usage patterns, recommends improvements, identifies next opportunities automatically',
    icon: FaLightbulb,
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
              The Challenge
            </h3>
            <div className="problem-container space-y-6">
              <div className="problem-item">
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500/20">
                    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white text-lg">Fragmented Workflows</h4>
                </div>
                <p className="text-gray-400 text-sm ml-12">Each stage (research, design, storytelling, prototyping) uses different tools and teams rarely see the full picture</p>
              </div>

              <div className="problem-item">
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500/20">
                    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white text-lg">Manual, Repetitive Work</h4>
                </div>
                <p className="text-gray-400 text-sm ml-12">AI capabilities not integrated; teams spend time on data synthesis, design iteration, and component building instead of strategy</p>
              </div>

              <div className="problem-item">
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500/20">
                    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white text-lg">Lost Context at Handoffs</h4>
                </div>
                <p className="text-gray-400 text-sm ml-12">When work transitions between stages or teams, context and rationale are lost, leading to rework and misalignment</p>
              </div>

              <div className="problem-item">
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500/20">
                    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white text-lg">No Continuous Loop</h4>
                </div>
                <p className="text-gray-400 text-sm ml-12">Innovation insights don't feed back into research; organizations stay in reactive mode rather than learning and evolving</p>
              </div>
            </div>
          </div>

          {/* DRIVE Solution */}
          <div 
            className="comparison-box rounded-3xl p-8 border border-white/10 bg-gray-900/50 backdrop-blur-xl"
          >
            <h3 className="section-header text-3xl font-bold mb-8 text-white">
              DRIVE Solution
            </h3>
            <div className="solution-container space-y-6">
              <div className="solution-item">
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500/20">
                    <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white text-lg">Unified Platform</h4>
                </div>
                <p className="text-gray-400 text-sm ml-12">One environment for all 6 stages; teams see the full journey from research insight through delivery to continuous improvement</p>
              </div>

              <div className="solution-item">
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500/20">
                    <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white text-lg">AI Amplification</h4>
                </div>
                <p className="text-gray-400 text-sm ml-12">AI synthesizes research, generates design variations, refines narratives, powers prototyping, optimizes delivery, analyzes feedback automatically</p>
              </div>

              <div className="solution-item">
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500/20">
                    <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white text-lg">Context Preserved</h4>
                </div>
                <p className="text-gray-400 text-sm ml-12">Decision rationale, design constraints, and strategic intent travel with the work through every stage — no information loss</p>
              </div>

              <div className="solution-item">
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500/20">
                    <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white text-lg">Continuous Learning Loop</h4>
                </div>
                <p className="text-gray-400 text-sm ml-12">Innovation stage feeds directly back into research; organizations become smarter, faster, and more responsive to user needs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <div className="stats-container relative">
          <h3 className="text-center text-3xl font-bold mb-12 text-white">
            AI Amplification at Every Stage
          </h3>
          <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {impactHighlights.map(({ stage, problem, solution, description, icon: Icon }) => (
              <div
                key={stage}
                className="impact-card group relative p-6 bg-gradient-to-br from-gray-900 to-gray-800 border border-studio-pink/20 hover:border-studio-pink/50 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-studio-pink/10"
              >
                <div className="flex h-full flex-col">
                  <Icon className="text-4xl text-studio-pink mb-4" />
                  <h4 className="text-xl font-semibold text-studio-pink mb-2">{stage}</h4>
                  
                  <div className="mb-4 space-y-2">
                    <div className="flex items-start gap-2">
                      <HiXMark className="text-red-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-semibold text-gray-400">Challenge:</p>
                        <p className="text-sm text-gray-300">{problem}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <HiCheck className="text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-semibold text-gray-400">Solution:</p>
                        <p className="text-sm text-gray-300">{solution}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto pt-4 border-t border-studio-pink/10">
                    <p className="text-xs text-gray-400 leading-relaxed">
                      <span className="text-studio-pink font-semibold">How DRIVE helps:</span> {description}
                    </p>
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
