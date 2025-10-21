import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrambleText from '../common/ScrambleText';
import swrikfImage from '../../assets/swrikf image.png';

gsap.registerPlugin(ScrollTrigger);

const WhatIsVibeCoding = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const [titleInView, setTitleInView] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title reveal with blur effect
      gsap.from('.section-title', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
          onEnter: () => setTitleInView(true),
        },
        y: 50,
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: 'power4.out',
      });

      // Content fade with stagger - sequential top to bottom
      const contentElements = contentRef.current?.querySelectorAll('.space-y-6 > p');
      if (contentElements) {
        gsap.from(contentElements, {
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          y: 30,
          opacity: 0,
          stagger: 0.3,
          duration: 0.8,
          ease: 'power3.out',
        });
      }

      // Image reveal with scale
      if (imageRef.current) {
        gsap.from(imageRef.current, {
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
          scale: 0.8,
          opacity: 0,
          duration: 1.2,
          ease: 'back.out(1.2)',
        });

        // Parallax effect
        gsap.to(imageRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
          y: -50,
          ease: 'none',
        });
      }

      // Icon animations
      gsap.from('.icon-card', {
        scrollTrigger: {
          trigger: '.icon-card',
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
        y: 30,
        opacity: 0,
        scale: 0.8,
        stagger: 0.15,
        duration: 0.8,
        ease: 'back.out(1.5)',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="what-is-vibe-coding"
      ref={sectionRef}
      className="py-24 md:py-32 bg-gradient-to-b from-gray-950 via-gray-900/80 to-gray-950"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 section-title">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 text-white">
            What is Vibe Coding?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            AI-assisted design that amplifies creativity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Content */}
          <div ref={contentRef}>
            <div className="space-y-6 text-lg text-gray-400">
              <p>
                <span className="text-white font-semibold">Vibe coding is the practice of rapidly translating design intent into working code through AI-assisted development.</span> It's a mindset shift from perfect specifications to iterative conversation—where you design by building, not by documenting.
              </p>
              <p>
                With AI partners like VS Code with Copilot or GitHub Spark, designers can turn creative ideas into functional prototypes in hours while maintaining full creative control. Let AI handle boilerplate, you handle vision.
              </p>
              <p className="text-studio-pink/80 font-medium">
                DRIVE doesn't replace your workflow—it <span className="text-studio-coral">amplifies</span> it. Iterate in minutes. Validate immediately. Ship quality, not perfection-paralysis.
              </p>
            </div>

            {/* Key Points */}
            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="icon-card text-center">
                <div className="w-12 h-12 rounded-full bg-studio-coral/20 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-studio-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-bold text-white">AI-Powered</h3>
              </div>

              <div className="icon-card text-center">
                <div className="w-12 h-12 rounded-full bg-studio-pink/20 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-studio-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-white">Quality First</h3>
              </div>

              <div className="icon-card text-center">
                <div className="w-12 h-12 rounded-full bg-studio-purple/20 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-studio-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-white">Human-Centered</h3>
              </div>
            </div>
          </div>

          {/* Feature Visual */}
          <div ref={imageRef} className="relative">
            <div className="relative mx-auto w-full max-w-sm md:max-w-md">
              <img
                src={swrikfImage}
                alt="Gradient swirl representing DRIVE flow"
                className="w-full h-full object-contain drop-shadow-[0_40px_80px_rgba(59,130,246,0.35)]"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsVibeCoding;
