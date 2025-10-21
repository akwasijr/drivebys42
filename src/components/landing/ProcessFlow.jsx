import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProcessFlow = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const flowRef = useRef(null);
  const stepsRef = useRef([]);
  const arrowsRef = useRef([]);
  const aiLayerRef = useRef(null);

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

    // Flow animation - steps appear sequentially
    stepsRef.current.forEach((step, index) => {
      if (step) {
        gsap.from(step, {
          scrollTrigger: {
            trigger: step,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          opacity: 0,
          scale: 0.8,
          duration: 0.5,
          delay: index * 0.15
        });
      }
    });

    // Arrows animate in
    arrowsRef.current.forEach((arrow, index) => {
      if (arrow) {
        gsap.from(arrow, {
          scrollTrigger: {
            trigger: arrow,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          opacity: 0,
          x: -20,
          duration: 0.4,
          delay: index * 0.15 + 0.1
        });
      }
    });

    // AI layer continuous flow animation
    if (aiLayerRef.current) {
      gsap.from(aiLayerRef.current, {
        scrollTrigger: {
          trigger: aiLayerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        duration: 0.8,
        delay: 0.5
      });

      // Continuous glow effect on AI layer
      gsap.to(aiLayerRef.current, {
        boxShadow: [
          '0 0 20px rgba(244, 114, 182, 0.3)',
          '0 0 40px rgba(192, 132, 252, 0.4)',
          '0 0 20px rgba(244, 114, 182, 0.3)'
        ],
        duration: 3,
        repeat: -1,
        ease: 'sine.inOut'
      });
    }
  }, []);

  const stages = [
    { label: 'Research', icon: '🔍' },
    { label: 'Design', icon: '🎨' },
    { label: 'Storytelling', icon: '📖' },
    { label: 'Prototype', icon: '⚡' },
    { label: 'Deliver', icon: '🚀' },
    { label: 'Innovate', icon: '💡' }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-studio-pink/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-studio-purple/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10" ref={containerRef}>
        {/* Title */}
        <div className="text-center mb-16" ref={titleRef}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-studio-coral via-studio-pink to-studio-purple bg-clip-text text-transparent">
            The Organizational Flow
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            How the six stages connect, and where AI amplifies human capability at every turn
          </p>
        </div>

        {/* Main Flow */}
        <div className="bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 border border-studio-pink/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm mb-12" ref={flowRef}>
          {/* Stages Flow */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 flex-wrap">
            {stages.map((stage, index) => (
              <React.Fragment key={index}>
                {/* Stage */}
                <div
                  ref={el => (stepsRef.current[index] = el)}
                  className="flex flex-col items-center gap-2 flex-shrink-0"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-studio-pink/20 to-studio-purple/20 border-2 border-studio-pink/50 flex items-center justify-center group hover:border-studio-pink hover:shadow-lg hover:shadow-studio-pink/20 transition-all duration-300">
                    <span className="text-3xl">{stage.icon}</span>
                  </div>
                  <span className="text-sm font-semibold text-center text-gray-300 group-hover:text-studio-pink transition-colors">{stage.label}</span>
                </div>

                {/* Arrow - only between stages */}
                {index < stages.length - 1 && (
                  <div
                    ref={el => (arrowsRef.current[index] = el)}
                    className="hidden md:flex items-center gap-2 text-studio-pink/50 flex-shrink-0"
                  >
                    <svg className="w-8 h-1" viewBox="0 0 32 4" fill="none">
                      <path d="M0 2h28" stroke="currentColor" strokeWidth="2" />
                      <path d="m28 0 3 2-3 2" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                  </div>
                )}

                {/* Mobile arrow */}
                {index < stages.length - 1 && (
                  <div className="md:hidden text-studio-pink/50 text-2xl flex-shrink-0">↓</div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* AI Layer */}
          <div
            ref={aiLayerRef}
            className="mt-12 p-6 bg-gradient-to-r from-studio-pink/5 via-studio-purple/5 to-studio-pink/5 border border-studio-pink/30 rounded-xl"
            style={{
              boxShadow: '0 0 30px rgba(244, 114, 182, 0.2)'
            }}
          >
            <div className="flex items-start gap-4">
              <div className="text-2xl flex-shrink-0">✨</div>
              <div>
                <h3 className="text-lg font-bold text-studio-pink mb-2">AI Amplification Layer</h3>
                <p className="text-gray-300 leading-relaxed">
                  Rather than replace each stage, AI runs <em>through</em> the entire flow. It synthesizes research findings, generates design iterations, refines narratives, powers rapid prototyping, optimizes deployments, and continuously analyzes feedback. AI handles the computational work while humans drive decisions, maintain quality, and ensure alignment with organizational values.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-studio-coral/20 rounded-lg p-6">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-lg font-bold text-studio-coral mb-2">Speed Without Sacrifice</h3>
            <p className="text-sm text-gray-300">
              Faster iteration cycles don't mean lower quality — they mean more chances to refine and validate with users.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-studio-pink/20 rounded-lg p-6">
            <div className="text-3xl mb-3">🔄</div>
            <h3 className="text-lg font-bold text-studio-pink mb-2">Continuous Feedback Loop</h3>
            <p className="text-sm text-gray-300">
              Innovation stage feeds directly back into research, creating an organization that learns and improves continuously.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-studio-purple/20 rounded-lg p-6">
            <div className="text-3xl mb-3">👥</div>
            <h3 className="text-lg font-bold text-studio-purple mb-2">Human-Centered Throughout</h3>
            <p className="text-sm text-gray-300">
              Every stage amplified by AI, yet every decision made by humans who understand context, users, and organizational goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
