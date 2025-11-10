import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { FaPalette, FaBook, FaBullseye, FaUsers, FaBolt } from 'react-icons/fa6';

gsap.registerPlugin(ScrollTrigger);

const personas = [
  {
    role: 'Researchers',
    icon: HiMagnifyingGlass,
    color: 'from-studio-coral to-studio-pink',
    borderColor: 'border-studio-coral/30 hover:border-studio-coral/60',
    bgColor: 'bg-studio-coral/5',
    description: 'Transform research data into actionable insights with AI-powered synthesis and pattern recognition.'
  },
  {
    role: 'Designers',
    icon: FaPalette,
    color: 'from-studio-pink to-studio-purple',
    borderColor: 'border-studio-pink/30 hover:border-studio-pink/60',
    bgColor: 'bg-studio-pink/5',
    description: 'Build high-fidelity prototypes that test real interactions with AI-generated design variations.'
  },
  {
    role: 'Storytellers',
    icon: FaBook,
    color: 'from-studio-purple to-studio-pink',
    borderColor: 'border-studio-purple/30 hover:border-studio-purple/60',
    bgColor: 'bg-studio-purple/5',
    description: 'Craft compelling narratives with AI-assisted refinement and brand voice consistency.'
  },
  {
    role: 'Product Managers',
    icon: FaBullseye,
    color: 'from-studio-coral to-studio-purple',
    borderColor: 'border-studio-coral/20 hover:border-studio-coral/50',
    bgColor: 'bg-studio-coral/5',
    description: 'Ship features backed by evidence with full visibility from research to launched products.'
  },
  {
    role: 'Leaders',
    icon: FaUsers,
    color: 'from-studio-pink to-studio-coral',
    borderColor: 'border-studio-pink/20 hover:border-studio-pink/50',
    bgColor: 'bg-studio-pink/5',
    description: 'Transform organizational capability with teams that move faster without sacrificing quality.'
  },
  {
    role: 'Engineers',
    icon: FaBolt,
    color: 'from-studio-purple to-studio-coral',
    borderColor: 'border-studio-purple/20 hover:border-studio-purple/50',
    bgColor: 'bg-studio-purple/5',
    description: 'Build at the speed of design with AI-generated production-ready components and optimizations.'
  }
];

const WhoItsFor = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.persona-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
        y: 80,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="who-its-for"
      ref={sectionRef}
      className="py-16 md:py-20 bg-gray-950"
    >
      <div className="container mx-auto px-6 max-w-7xl">
      {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-studio-pink via-studio-coral to-studio-pink bg-clip-text text-transparent">
            Who It's For
          </h2>
          <p className="text-xl md:text-2xl text-gray-300">
            Everyone in your organization benefits from AI-First workflow
          </p>
        </div>

        {/* Persona Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {personas.map((persona, index) => (
            <div key={index} className="persona-card group h-full">
              <div className={`${persona.bgColor} backdrop-blur-xl rounded-2xl p-8 h-full border ${persona.borderColor} hover:shadow-xl hover:shadow-studio-pink/10 transition-all duration-300 hover:-translate-y-1 flex flex-col`}>
                {/* Icon */}
                <persona.icon className="text-5xl md:text-6xl text-studio-pink mb-6" />

                {/* Role Title */}
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  {persona.role}
                </h3>

                {/* Description */}
                <p className="text-lg text-gray-300 leading-relaxed">
                  {persona.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
