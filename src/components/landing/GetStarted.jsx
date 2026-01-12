import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const GetStarted = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-content', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.2)',
      });

      gsap.from('.cta-btn', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-tr from-gray-950 via-pink-900/25 to-purple-900/20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <div className="cta-content mb-12">
            <h2 className="text-6xl md:text-8xl font-display font-black mb-8 text-white">
              Get Started
            </h2>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
            <Link
              to="/docs/designer"
              className="cta-btn inline-flex items-center justify-center px-8 py-4 bg-studio-pink/20 hover:bg-studio-pink/30 rounded-xl text-studio-pink font-semibold transition-colors"
            >
              I'm a Designer
            </Link>

            <button
              disabled
              className="cta-btn inline-flex items-center justify-center px-8 py-4 bg-gray-900/50 rounded-xl text-gray-500 font-semibold cursor-not-allowed"
            >
              I'm an Engineer (Soon)
            </button>

            <Link
              to="/labs"
              className="cta-btn inline-flex items-center justify-center px-8 py-4 bg-gray-900/50 hover:bg-gray-900/60 rounded-xl text-white font-semibold transition-colors"
            >
              Explore Labs
            </Link>
          </div>

          {/* Additional Links */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm">
            <a href="#what-is-vibe" className="text-gray-400 hover:text-studio-pink transition-colors">
              Learn More About Vibe Coding
            </a>
            <span className="text-gray-700">•</span>
            <a href="#process" className="text-gray-400 hover:text-studio-pink transition-colors">
              Explore the DRIVE Process
            </a>
            <span className="text-gray-700">•</span>
            <Link to="/docs/faq" className="text-gray-400 hover:text-studio-pink transition-colors">
              Read FAQs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
