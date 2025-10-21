import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const wordRef = useRef(null);
  const [currentWord, setCurrentWord] = useState('Test');
  const [hasAnimatedOnce, setHasAnimatedOnce] = useState(false);

  const cyclingWords = [
    { word: 'Test', meaning: 'Validate with real users' },
    { word: 'Iterate', meaning: 'Refine based on feedback' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Split text character animation (simplified without 3D)
      const chars = wordRef.current?.querySelectorAll('.char');
      
      if (!chars || chars.length === 0) return;
      
      // Set initial state - simple fade and slide
      gsap.set(chars, { opacity: 0, y: 80, scale: 0.8 });
      
      tl.to(chars, {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.05,
        duration: 0.6,
        ease: 'back.out(1.7)',
        delay: 0.3,
      });

      // Animate second line words separately
      tl.from('.word-1', {
        y: 100,
        opacity: 0,
        duration: 0.8,
        ease: 'power4.out',
      }, '-=0.4');

      tl.from('.word-2', {
        y: 100,
        opacity: 0,
        duration: 0.8,
        ease: 'power4.out',
      }, '-=0.6');

      tl.from('.word-meaning', {
        y: 20,
        opacity: 0,
        duration: 0.6,
      }, '-=0.3');

      tl.from('.hero-subtitle', {
        y: 30,
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
      }, '-=0.4');

      tl.from('.hero-cta', {
        y: 20,
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
      }, '-=0.4');

      // Cycle between Test and Iterate only
      let wordIndex = 0;
      const cycleWords = () => {
        const nextIndex = (wordIndex + 1) % cyclingWords.length;
        const chars = wordRef.current.querySelectorAll('.char');
        const meaning = document.querySelector('.word-meaning');
        
        // Create a timeline for smooth sequencing
        const cycleTl = gsap.timeline();
        
        // Animate out word and meaning together - smoother
        cycleTl.to(chars, {
          y: -30,
          opacity: 0,
          scale: 0.9,
          stagger: 0.015,
          duration: 0.4,
          ease: 'power3.in',
        }, 0);
        
        cycleTl.to(meaning, {
          opacity: 0,
          y: -8,
          duration: 0.35,
          ease: 'power3.in',
        }, 0);
        
        cycleTl.call(() => {
          wordIndex = nextIndex;
          setCurrentWord(cyclingWords[nextIndex].word);
        });
        
        // Wait for React to update, then animate in - smoother
        cycleTl.add(() => {
          setTimeout(() => {
            const newChars = wordRef.current.querySelectorAll('.char');
            gsap.fromTo(newChars, 
              {
                y: 50,
                opacity: 0,
                scale: 0.9,
              },
              {
                y: 0,
                opacity: 1,
                scale: 1,
                stagger: 0.02,
                duration: 0.7,
                ease: 'power3.out',
              }
            );
            
            // Animate meaning back in - smoother
            gsap.fromTo(meaning,
              {
                opacity: 0,
                y: 8,
              },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power3.out',
                delay: 0.15,
              }
            );
          }, 50);
        }, '+=0.1');
      };

      // Start word cycling after initial animation (only Test/Iterate)
      const cycleInterval = setInterval(cycleWords, 3000);

      // Floating decorative elements with more dynamic movement
      gsap.to('.deco-1', {
        y: -40,
        x: 30,
        rotation: 360,
        scale: 1.2,
        duration: 6,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });

      gsap.to('.deco-2', {
        y: 35,
        x: -25,
        rotation: -360,
        scale: 0.8,
        duration: 7,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });

      gsap.to('.deco-3', {
        y: -25,
        x: -35,
        rotation: 180,
        scale: 1.1,
        duration: 5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });

      // Add more background elements animation
      gsap.to('.deco-4', {
        y: 20,
        x: 20,
        rotation: -180,
        duration: 8,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });

      gsap.to('.deco-5', {
        y: -15,
        x: 15,
        scale: 1.3,
        duration: 6,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });

      // Parallax effect on scroll
      gsap.to(titleRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
        y: 100,
        opacity: 0.5,
        scale: 0.95,
      });

      return () => {
        clearInterval(cycleInterval);
      };
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg-gradient pt-32"
    >
      {/* Animated background elements */}
      <div className="deco-1 absolute top-20 left-10 w-24 h-24 opacity-40">
        <svg viewBox="0 0 100 100" className="text-studio-coral">
          <circle cx="50" cy="50" r="40" fill="currentColor" opacity="0.2" />
          <circle cx="50" cy="50" r="25" fill="currentColor" opacity="0.4" />
          <circle cx="50" cy="50" r="10" fill="currentColor" opacity="0.6" />
        </svg>
      </div>

      <div className="deco-2 absolute top-40 right-20 w-20 h-20 opacity-40">
        <svg viewBox="0 0 100 100" className="text-studio-pink">
          <polygon points="50,10 90,90 10,90" fill="currentColor" opacity="0.3" />
          <polygon points="50,30 70,70 30,70" fill="currentColor" opacity="0.5" />
        </svg>
      </div>

      <div className="deco-3 absolute bottom-32 left-1/4 w-16 h-16 opacity-40">
        <svg viewBox="0 0 100 100" className="text-studio-purple">
          <rect x="20" y="20" width="60" height="60" fill="currentColor" opacity="0.3" transform="rotate(45 50 50)" />
          <rect x="30" y="30" width="40" height="40" fill="currentColor" opacity="0.5" transform="rotate(45 50 50)" />
        </svg>
      </div>

      <div className="deco-4 absolute top-60 left-1/3 w-14 h-14 opacity-30">
        <svg viewBox="0 0 100 100" className="text-studio-coral">
          <path d="M50 10 L90 50 L50 90 L10 50 Z" fill="currentColor" opacity="0.4" />
        </svg>
      </div>

      <div className="deco-5 absolute bottom-20 right-1/4 w-18 h-18 opacity-35">
        <svg viewBox="0 0 100 100" className="text-studio-pink">
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.4" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.6" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Heading with Split Text Animation */}
          <div ref={titleRef} className="mb-12">
            <h1 className="font-display font-black leading-[1.1] mb-8">
              {/* Animated word with character split */}
              <div 
                ref={wordRef}
                className="text-[clamp(4rem,12vw,10rem)] mb-4"
                style={{ 
                  fontWeight: '900',
                }}
              >
                {currentWord.split('').map((char, index) => (
                  <span 
                    key={`${currentWord}-${index}`}
                    className="char inline-block"
                    style={{ 
                      display: 'inline-block',
                      background: 'linear-gradient(135deg, #fb923c 0%, #f472b6 50%, #c084fc 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      willChange: 'transform, opacity'
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </div>
              
              {/* Second line */}
              <div className="second-line text-[clamp(4rem,12vw,10rem)] text-gray-100">
                <span className="word-1">ideas</span> <span className="word-2">faster</span>
              </div>
            </h1>

            {/* Word meaning subtitle */}
            <div className="word-meaning text-xl md:text-2xl text-studio-pink font-medium mb-8 h-8">
              {cyclingWords.find(w => w.word === currentWord)?.meaning}
            </div>
          </div>

          {/* Subtitle */}
          <div className="hero-subtitle max-w-2xl mx-auto mb-6">
            <p className="text-xl md:text-2xl text-gray-400">
              Transform UX workflows with AI-assisted design and rapid validation
            </p>
          </div>

          {/* CTA Button */}
          <div className="hero-cta flex justify-end max-w-6xl mx-auto">
            <Link
              to="/docs"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-transparent hover:bg-studio-pink/10 border-2 border-studio-pink text-studio-pink rounded-full text-base font-semibold transition-all duration-300"
            >
              Get Started
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
