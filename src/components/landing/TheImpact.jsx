import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HiXMark, HiCheck } from 'react-icons/hi2';

gsap.registerPlugin(ScrollTrigger);

const TheImpact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.impact-title', {
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

      gsap.from('.comparison-column', {
        scrollTrigger: {
          trigger: '.comparison-grid',
          start: 'top 75%',
          once: true,
        },
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out',
      });

      gsap.from('.comparison-item', {
        scrollTrigger: {
          trigger: '.comparison-grid',
          start: 'top 70%',
          once: true,
        },
        x: (index) => index % 2 === 0 ? -20 : 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const traditional = [
    'Disconnected tools and fragmented teams',
    'Weeks spent on manual, repetitive tasks',
    'Context and decisions lost at handoffs',
    'Reactive approach to user feedback'
  ];

  const withDrive = [
    'One unified workflow across all stages',
    'AI-accelerated synthesis and delivery',
    'Context preserved throughout the journey',
    'Continuous learning and improvement loop'
  ];

  return (
    <section
      id="the-impact"
      ref={sectionRef}
      className="py-16 md:py-20 bg-black"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Title */}
        <div className="text-center mb-16 impact-title">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Why It Matters
          </h2>
          <p className="text-xl md:text-2xl text-gray-300">
            See the difference DRIVE makes
          </p>
        </div>

        {/* Split Comparison */}
        <div className="comparison-grid grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          
          {/* Traditional Approach */}
          <div className="comparison-column">
            <div className="bg-gray-900 rounded-2xl p-8 md:p-10 border-l-4 border-red-500/50 h-full">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="text-red-500">Traditional Approach</span>
              </h3>
              
              <div className="space-y-6">
                {traditional.map((item, index) => (
                  <div
                    key={index}
                    className="comparison-item flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mt-1">
                      <HiXMark className="text-red-400 text-xl" />
                    </div>
                    <p className="text-lg text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* With DRIVE */}
          <div className="comparison-column">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-10 border-l-4 border-studio-pink h-full">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="text-studio-pink">With DRIVE</span>
              </h3>
              
              <div className="space-y-6">
                {withDrive.map((item, index) => (
                  <div
                    key={index}
                    className="comparison-item flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-studio-pink/20 flex items-center justify-center mt-1">
                      <HiCheck className="text-studio-pink text-xl" />
                    </div>
                    <p className="text-lg text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-16 max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            DRIVE transforms how teams work—moving from <span className="text-red-400 font-semibold">fragmented</span> to <span className="text-studio-pink font-semibold">unified</span>, 
            from <span className="text-red-400 font-semibold">slow</span> to <span className="text-studio-pink font-semibold">fast</span>, 
            from <span className="text-red-400 font-semibold">reactive</span> to <span className="text-studio-pink font-semibold">continuous</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TheImpact;
