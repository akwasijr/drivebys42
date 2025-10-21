import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const OnlyVibes = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title reveal
      gsap.from('.vibes-title', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
      });

      // Cards stagger
      gsap.from('.vibes-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          toggleActions: 'play none none reverse',
        },
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'back.out(1.2)',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="only-vibes"
      ref={sectionRef}
      className="py-24 md:py-32 bg-gradient-to-br from-gray-950 via-purple-900/20 to-gray-950"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20 vibes-title">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 text-white">
            Why Join Only Vibes?
          </h2>
        </div>

        {/* Why Join Cards */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="vibes-card text-center">
            <div className="w-16 h-16 rounded-full bg-studio-coral/20 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-studio-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-2xl font-bold text-white mb-4">Learn by Doing</h4>
            <p className="text-gray-400 text-lg leading-relaxed">
              Every session is hands-on with real-time coding and shared learning
            </p>
          </div>

          <div className="vibes-card text-center">
            <div className="w-16 h-16 rounded-full bg-studio-pink/20 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-studio-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h4 className="text-2xl font-bold text-white mb-4">Stay Ahead</h4>
            <p className="text-gray-400 text-lg leading-relaxed">
              Explore emerging tools and workflows shaping the future of development
            </p>
          </div>

          <div className="vibes-card text-center">
            <div className="w-16 h-16 rounded-full bg-studio-purple/20 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-studio-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h4 className="text-2xl font-bold text-white mb-4">Grow Together</h4>
            <p className="text-gray-400 text-lg leading-relaxed">
              Share insights, learn from others, define best practices for AI-assisted coding
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlyVibes;
