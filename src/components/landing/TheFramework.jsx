import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HiMagnifyingGlass, HiSparkles } from 'react-icons/hi2';
import { FaPalette, FaBook, FaBolt, FaRocket, FaLightbulb } from 'react-icons/fa6';

gsap.registerPlugin(ScrollTrigger);

const TheFramework = () => {
  const sectionRef = useRef(null);
  const [hoveredStage, setHoveredStage] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.framework-title', {
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

      gsap.from('.stage-node', {
        scrollTrigger: {
          trigger: '.stages-container',
          start: 'top 75%',
          once: true,
        },
        scale: 0,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'back.out(1.5)',
      });

      gsap.from('.center-label', {
        scrollTrigger: {
          trigger: '.stages-container',
          start: 'top 70%',
          once: true,
        },
        scale: 0,
        opacity: 0,
        duration: 0.8,
        delay: 0.6,
        ease: 'back.out(1.5)',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stages = [
    {
      icon: HiMagnifyingGlass,
      title: 'Research',
      description: 'Understand users and identify opportunities',
      color: 'studio-coral'
    },
    {
      icon: FaPalette,
      title: 'Design',
      description: 'Create and iterate on concepts rapidly',
      color: 'studio-pink'
    },
    {
      icon: FaBook,
      title: 'Storytelling',
      description: 'Craft compelling product narratives',
      color: 'studio-purple'
    },
    {
      icon: FaBolt,
      title: 'Prototyping',
      description: 'Build and validate interactions quickly',
      color: 'studio-coral'
    },
    {
      icon: FaRocket,
      title: 'Delivery',
      description: 'Ship with confidence and quality',
      color: 'studio-pink'
    },
    {
      icon: FaLightbulb,
      title: 'Innovation',
      description: 'Learn and improve continuously',
      color: 'studio-purple'
    }
  ];

  return (
    <section
      id="the-framework"
      ref={sectionRef}
      className="py-16 md:py-20 bg-gray-950"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Title */}
        <div className="text-center mb-16 framework-title">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Six Connected Stages
          </h2>
          <p className="text-xl md:text-2xl text-gray-300">
            One unified system from insight to delivery
          </p>
        </div>

        {/* Grid Layout - Much Simpler */}
        <div className="stages-container max-w-6xl mx-auto">
          {/* Stage Cards in Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {stages.map((stage, index) => (
              <div
                key={index}
                className="stage-node group"
                onMouseEnter={() => setHoveredStage(index)}
                onMouseLeave={() => setHoveredStage(null)}
              >
                <div className="bg-gray-900 rounded-2xl p-8 border-2 border-studio-pink/30 hover:border-studio-pink transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-studio-pink/20 h-full">
                  {/* Icon */}
                  <div className="mb-6">
                    <stage.icon className={`text-5xl text-studio-pink`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {stage.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* AI Amplification Message */}
          <div className="center-label text-center bg-gradient-to-br from-studio-pink/20 to-studio-purple/20 border-2 border-studio-pink/50 rounded-2xl p-8 backdrop-blur-sm">
            <HiSparkles className="text-5xl text-studio-pink mb-4 mx-auto" />
            <p className="text-xl md:text-2xl font-bold text-white">AI amplifies every stage</p>
            <p className="text-gray-300 mt-3">
              Rather than replacing humans, AI enhances capability at each step of the journey
            </p>
          </div>
        </div>

        {/* Connection Message */}
        <div className="text-center mt-12 max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            These stages form a <span className="text-studio-pink font-semibold">continuous loop</span>, 
            with AI seamlessly amplifying human capability at every step.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TheFramework;
