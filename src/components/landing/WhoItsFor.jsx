import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

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
        stagger: 0.2,
        duration: 1,
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
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 text-white">
            Who It's For
          </h2>
        </div>

        {/* Persona Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Designers Card */}
          <div className="persona-card group">
            <div className="bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 h-full border border-white/10 hover:border-white/20 transition-all duration-300">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-studio-pink/20 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-studio-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-4xl font-bold mb-6 text-white">Designers</h3>

              {/* Description */}
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Build high-fidelity prototypes that go beyond Figma. Test with real users, gather feedback, and iterate quickly, creating near-production experiences without writing code.
              </p>

              {/* CTA */}
              <Link
                to="/docs/designer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-studio-pink/20 hover:bg-studio-pink/30 border border-studio-pink/40 rounded-xl text-studio-pink font-semibold transition-all"
              >
                Enter Designer Docs →
              </Link>
            </div>
          </div>

          {/* Engineers Card */}
          <div className="persona-card group">
            <div className="bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 h-full border border-white/10 relative overflow-hidden">
              {/* Coming Soon Badge */}
              <div className="absolute top-6 right-6 bg-studio-purple/20 border border-studio-purple/40 text-studio-purple text-xs font-bold px-3 py-1 rounded-full">
                COMING SOON
              </div>

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-studio-purple/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-studio-purple/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-4xl font-bold mb-6 text-gray-500">Engineers</h3>

              {/* Description */}
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                AI-powered tools for precision and performance. Coming soon.
              </p>

              {/* CTA */}
              <button
                disabled
                className="inline-flex items-center gap-2 px-6 py-3 bg-studio-purple/10 border border-studio-purple/20 rounded-xl text-studio-purple/50 font-semibold cursor-not-allowed"
              >
                Coming Soon
              </button>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-500">
            Join our community and shape the future of DRIVE for engineers
          </p>
          <button className="mt-4 px-6 py-3 border border-white/10 hover:border-white/20 rounded-xl text-gray-400 hover:text-white transition-all">
            Get Notified When Engineering Docs Launch
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
