import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AIFirstFramework = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const stagesRef = useRef([]);
  const aiPointsRef = useRef([]);

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

    // Stages stagger animation
    stagesRef.current.forEach((stage, index) => {
      if (stage) {
        gsap.from(stage, {
          scrollTrigger: {
            trigger: stage,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          opacity: 0,
          y: 40,
          duration: 0.6,
          delay: index * 0.1
        });
      }
    });

    // AI points pulse animation
    aiPointsRef.current.forEach((point, index) => {
      if (point) {
        gsap.to(point, {
          scrollTrigger: {
            trigger: point,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          boxShadow: '0 0 20px rgba(244, 114, 182, 0.6)',
          duration: 0.4,
          delay: index * 0.15 + 0.3
        });

        // Continuous subtle pulse
        gsap.to(point, {
          boxShadow: [
            '0 0 20px rgba(244, 114, 182, 0.6)',
            '0 0 30px rgba(244, 114, 182, 0.3)',
            '0 0 20px rgba(244, 114, 182, 0.6)'
          ],
          duration: 2,
          repeat: -1,
          delay: index * 0.15 + 0.3
        });
      }
    });
  }, []);

  const stages = [
    {
      number: '01',
      title: 'Research',
      description: 'Gather insights, understand user needs, explore market opportunities',
      aiRole: 'AI accelerates data synthesis, identifies patterns, surfaces insights from interviews and analytics'
    },
    {
      number: '02',
      title: 'Design',
      description: 'Create wireframes, iterate on concepts, establish visual direction',
      aiRole: 'AI generates layout suggestions, maintains design consistency, rapidly explores variations'
    },
    {
      number: '03',
      title: 'Storytelling',
      description: 'Craft compelling narratives, define messaging, create brand coherence',
      aiRole: 'AI helps articulate stories, refines messaging, ensures narrative consistency across touchpoints'
    },
    {
      number: '04',
      title: 'Prototyping',
      description: 'Build interactive experiences, validate interactions, test user flows',
      aiRole: 'AI powers Vibe Coding to generate components, accelerate development, enable rapid validation'
    },
    {
      number: '05',
      title: 'Delivery',
      description: 'Ship polished products, deploy to production, enable user access',
      aiRole: 'AI optimizes performance, automates deployment, monitors quality in real-time'
    },
    {
      number: '06',
      title: 'Innovation',
      description: 'Gather feedback, analyze usage, iterate and improve continuously',
      aiRole: 'AI analyzes user behavior, recommends improvements, identifies next opportunities'
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-studio-pink/5 via-transparent to-studio-purple/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10" ref={containerRef}>
        {/* Title */}
        <div className="text-center mb-16" ref={titleRef}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-studio-pink via-studio-coral to-studio-pink bg-clip-text text-transparent">
            The AI-First Framework
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Six interconnected stages where design remains human-centered and AI amplifies every capability
          </p>
        </div>

        {/* Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stages.map((stage, index) => (
            <div
              key={index}
              ref={el => (stagesRef.current[index] = el)}
              className="group bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-studio-pink/20 hover:border-studio-pink/50 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-studio-pink/10"
            >
              {/* Stage Number */}
              <div className="mb-4 flex items-center gap-4">
                <div className="text-4xl font-bold bg-gradient-to-r from-studio-pink to-studio-coral bg-clip-text text-transparent">
                  {stage.number}
                </div>
                <div className="h-12 w-1 bg-gradient-to-b from-studio-pink to-transparent rounded-full" />
              </div>

              {/* Stage Title */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-studio-pink transition-colors">
                {stage.title}
              </h3>

              {/* Stage Description */}
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {stage.description}
              </p>

              {/* AI Role - Highlighted */}
              <div
                ref={el => (aiPointsRef.current[index] = el)}
                className="bg-gradient-to-br from-studio-pink/10 to-studio-purple/10 border border-studio-pink/30 rounded-lg p-3 mt-4"
                style={{
                  boxShadow: '0 0 20px rgba(244, 114, 182, 0.3)'
                }}
              >
                <div className="flex items-start gap-2">
                  <span className="text-studio-pink font-bold mt-1">✨</span>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    {stage.aiRole}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Principle */}
        <div className="mt-16 p-8 bg-gradient-to-r from-studio-pink/5 via-studio-purple/5 to-studio-pink/5 border border-studio-pink/20 rounded-2xl text-center">
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            In this framework, <span className="text-studio-pink font-semibold">design remains fundamentally human-centered</span> — humans make decisions, set direction, and define quality. <span className="text-studio-coral font-semibold">AI amplifies capability</span> by handling research synthesis, design iteration, consistency maintenance, component generation, and continuous analysis. The result: <span className="text-studio-pink font-semibold">organizations that move faster while maintaining human values and artistic integrity</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIFirstFramework;
