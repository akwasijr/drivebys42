import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const personas = [
  {
    role: 'Researchers',
    emoji: '🔍',
    color: 'from-studio-coral to-studio-pink',
    borderColor: 'border-studio-coral/30 hover:border-studio-coral/60',
    bgColor: 'bg-studio-coral/5',
    description: 'Transform research data into actionable insights. AI synthesizes interview notes, survey responses, and usage data into clear findings the entire team understands.',
    benefit: 'Move from scattered notes to synthesized insights in hours'
  },
  {
    role: 'Designers',
    emoji: '🎨',
    color: 'from-studio-pink to-studio-purple',
    borderColor: 'border-studio-pink/30 hover:border-studio-pink/60',
    bgColor: 'bg-studio-pink/5',
    description: 'Build high-fidelity prototypes that test real interactions. AI generates design variations, maintains consistency, and enables rapid iteration with user feedback.',
    benefit: 'Clickable prototypes in minutes, not weeks'
  },
  {
    role: 'Storytellers',
    emoji: '📖',
    color: 'from-studio-purple to-studio-pink',
    borderColor: 'border-studio-purple/30 hover:border-studio-purple/60',
    bgColor: 'bg-studio-purple/5',
    description: 'Craft compelling narratives with consistency. AI helps refine copy, ensures brand voice alignment, and articulates product stories that resonate across channels.',
    benefit: 'Coherent messaging across all touchpoints'
  },
  {
    role: 'Product Managers',
    emoji: '🎯',
    color: 'from-studio-coral to-studio-purple',
    borderColor: 'border-studio-coral/20 hover:border-studio-coral/50',
    bgColor: 'bg-studio-coral/5',
    description: 'Ship features backed by evidence. See the complete journey from research through delivery, make data-driven roadmap decisions, and continuously validate with users.',
    benefit: 'Full visibility into progress from research to launched features'
  },
  {
    role: 'Leaders',
    emoji: '👥',
    color: 'from-studio-pink to-studio-coral',
    borderColor: 'border-studio-pink/20 hover:border-studio-pink/50',
    bgColor: 'bg-studio-pink/5',
    description: 'Transform organizational capability. Build teams that move faster without sacrificing quality. Make the shift to AI-First methodology that drives continuous innovation.',
    benefit: 'Empower teams to double delivery speed within 6 months'
  },
  {
    role: 'Engineers',
    emoji: '⚡',
    color: 'from-studio-purple to-studio-coral',
    borderColor: 'border-studio-purple/20 hover:border-studio-purple/50',
    bgColor: 'bg-studio-purple/5',
    description: 'Build at the speed of design. Vibe Coding generates production-ready components from design files, eliminating back-and-forth handoffs. Focus on architecture and optimization.',
    benefit: 'Reduce design-to-code time by 70%'
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
      className="py-24 md:py-32 bg-gradient-to-b from-gray-950 via-pink-900/20 to-gray-950"
    >
      <div className="container mx-auto px-6">
      {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-studio-pink via-studio-coral to-studio-pink bg-clip-text text-transparent">
            Who It's For
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everyone in your organization benefits from the AI-First way of working
          </p>
        </div>

        {/* Persona Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {personas.map((persona, index) => (
            <div key={index} className="persona-card group h-full">
              <div className={`${persona.bgColor} backdrop-blur-xl rounded-2xl p-6 h-full border ${persona.borderColor} hover:shadow-lg hover:shadow-studio-pink/10 transition-all duration-300 flex flex-col`}>
                {/* Emoji Icon */}
                <div className="text-5xl mb-4">{persona.emoji}</div>

                {/* Role Title */}
                <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r ${persona.color} bg-clip-text text-transparent">
                  {persona.role}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 flex-grow leading-relaxed">
                  {persona.description}
                </p>

                {/* Benefit Card */}
                <div className="mt-auto p-3 bg-black/40 rounded-lg border border-white/5">
                  <p className="text-xs text-studio-pink font-semibold mb-1">Key Benefit</p>
                  <p className="text-sm text-gray-200">{persona.benefit}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
