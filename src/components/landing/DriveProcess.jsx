import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DriveProcess = () => {
  const sectionRef = useRef(null);
  const collaborationRef = useRef(null);
  const horizontalRef = useRef(null);
  const [expandedCard, setExpandedCard] = useState(null);

  const phases = [
    {
      letter: 'D',
      title: 'Design',
      color: 'bg-studio-coral',
      iconPath: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
      description: 'Conceptualize with speed and precision'
    },
    {
      letter: 'R',
      title: 'Rapid',
      color: 'bg-studio-pink',
      iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
      description: 'Build prototypes in minutes, not days'
    },
    {
      letter: 'I',
      title: 'Iterate',
      color: 'bg-studio-purple',
      iconPath: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
      description: 'Refine based on instant feedback'
    },
    {
      letter: 'V',
      title: 'Validate',
      color: 'bg-studio-coral',
      iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      description: 'Test with real users, real data'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Horizontal scroll animation for collaboration section
      const sections = horizontalRef.current?.querySelectorAll('.collab-section');
      
      if (sections && sections.length > 0 && collaborationRef.current) {
        // Simple horizontal scroll with better snap behavior
        const scrollTween = gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: 'none',
          scrollTrigger: {
            trigger: collaborationRef.current,
            pin: true,
            scrub: 1,
            snap: {
              snapTo: 1 / (sections.length - 1),
              duration: 0.8,
              delay: 0.1,
              ease: 'power2.inOut',
            },
            end: () => {
              // Calculate base end position plus extra 4rem of scroll distance
              const baseEnd = collaborationRef.current.offsetWidth * sections.length;
              const extraScroll = parseFloat(getComputedStyle(document.documentElement).fontSize) * 4; // 4rem
              return `+=${baseEnd + extraScroll}`;
            },
            pinSpacing: true,
          }
        });

        // Split text and animate characters for titles
        sections.forEach((section, index) => {
          const title = section.querySelector('.section-title');
          
          if (title && title.textContent) {
            // Split text into words and characters
            const words = title.textContent.trim().split(' ');
            title.innerHTML = words.map(word => {
              const chars = word.split('').map(char => 
                `<span class="inline-block opacity-0">${char}</span>`
              ).join('');
              return `<span class="inline-block mr-4">${chars}</span>`;
            }).join('');

            const chars = title.querySelectorAll('span span');
            
            // Animate characters when section comes into view
            gsap.fromTo(chars,
              {
                opacity: 0,
                y: 50,
                rotationX: -90,
              },
              {
                opacity: 1,
                y: 0,
                rotationX: 0,
                stagger: 0.02,
                duration: 0.8,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                  trigger: section,
                  containerAnimation: scrollTween,
                  start: 'left center',
                  end: 'right center',
                  toggleActions: 'play none none reverse',
                }
              }
            );
          }

          // Fade in descriptions with subtle slide
          const description = section.querySelector('.section-description');
          if (description) {
            gsap.fromTo(description,
              { opacity: 0, y: 15, filter: 'blur(10px)' },
              {
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
                duration: 1.2,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: section,
                  containerAnimation: scrollTween,
                  start: 'left center',
                  end: 'right center',
                  toggleActions: 'play none none reverse',
                }
              }
            );
          }

          // Animate features with gentle cascade
          const features = section.querySelectorAll('.feature-item');
          if (features.length > 0) {
            gsap.fromTo(features,
              { opacity: 0, y: 20, scale: 0.95 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                stagger: 0.15,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: section,
                  containerAnimation: scrollTween,
                  start: 'left center',
                  end: 'right center',
                  toggleActions: 'play none none reverse',
                }
              }
            );
          }

          // Icon animation - subtle float in
          const icon = section.querySelector('.section-icon');
          if (icon) {
            gsap.fromTo(icon,
              { opacity: 0, scale: 0.8, y: 20 },
              {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: section,
                  containerAnimation: scrollTween,
                  start: 'left center',
                  end: 'right center',
                  toggleActions: 'play none none reverse',
                }
              }
            );

            // Add subtle continuous floating animation after initial animation
            gsap.to(icon, {
              y: -10,
              duration: 2,
              ease: 'sine.inOut',
              repeat: -1,
              yoyo: true,
              delay: 1,
            });
          }
        });
      }

      // Process cards animation
      gsap.from('.process-card', {
        scrollTrigger: {
          trigger: '.process-cards-container',
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
        y: 50,
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
      id="process"
      ref={sectionRef}
      className="py-24 md:py-32 bg-gradient-to-br from-gray-950 via-purple-900/30 to-gray-950"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 text-white">
            The DRIVE Process
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Combining Figma design, UX research, and vibe coding to create validated prototypes that become production-ready applications
          </p>

          {/* Designer-Developer Synergy - Horizontal Scroll */}
          <div ref={collaborationRef} className="relative overflow-hidden mb-16 min-h-screen flex items-center">
            <div ref={horizontalRef} className="flex w-full">
              {/* Section 1: Intro */}
              <div className="collab-section min-w-[100vw] h-[70vh] flex items-center justify-center px-12">
                <div className="max-w-4xl mx-auto text-center">
                  <div className="inline-block mb-8 section-icon">
                    <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-studio-coral/20 via-studio-pink/20 to-studio-purple/20 backdrop-blur-sm flex items-center justify-center border border-studio-pink/30 shadow-2xl shadow-studio-pink/20 mx-auto mb-6">
                      <svg className="w-12 h-12 text-studio-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="section-title text-7xl font-bold text-white mb-8 leading-tight" style={{ perspective: '1000px' }}>
                    Seamless Collaboration
                  </h3>
                  <p className="section-description text-3xl text-gray-400 mb-12 font-light">Two roles, one unified workflow</p>
                  <div className="flex items-center justify-center gap-4 text-gray-500">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-studio-pink animate-pulse"></div>
                      <div className="w-2 h-2 rounded-full bg-studio-purple animate-pulse delay-75"></div>
                      <div className="w-2 h-2 rounded-full bg-studio-coral animate-pulse delay-150"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: UX Designer */}
              <div className="collab-section min-w-[100vw] h-[70vh] flex items-center justify-center px-12">
                <div className="max-w-5xl w-full relative">
                  {/* Decorative background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-studio-pink/10 via-studio-pink/5 to-transparent rounded-3xl blur-3xl"></div>
                  
                  <div className="relative backdrop-blur-sm rounded-3xl p-12 border border-studio-pink/10">
                    <div className="flex items-start gap-10 mb-12">
                      <div className="section-icon flex-shrink-0">
                        <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-studio-pink/30 to-studio-pink/10 flex items-center justify-center shadow-2xl shadow-studio-pink/30 border border-studio-pink/20">
                          <svg className="w-14 h-14 text-studio-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="section-title text-6xl font-bold text-white mb-6 leading-tight" style={{ perspective: '1000px' }}>UX Designers</h3>
                        <p className="section-description text-2xl text-gray-300 leading-relaxed font-light">
                          Transform Figma designs into interactive prototypes. Guide AI with structured prompts. Test with real users and iterate rapidly.
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-8">
                      <div className="feature-item text-center p-6 rounded-2xl bg-gradient-to-br from-studio-pink/10 to-transparent hover:from-studio-pink/20 transition-all duration-300">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-studio-pink/30 to-studio-pink/10 flex items-center justify-center mx-auto mb-4 shadow-lg">
                          <svg className="w-8 h-8 text-studio-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <span className="text-lg text-gray-200 font-semibold">Rapid Prototyping</span>
                      </div>
                      <div className="feature-item text-center p-6 rounded-2xl bg-gradient-to-br from-studio-pink/10 to-transparent hover:from-studio-pink/20 transition-all duration-300">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-studio-pink/30 to-studio-pink/10 flex items-center justify-center mx-auto mb-4 shadow-lg">
                          <svg className="w-8 h-8 text-studio-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span className="text-lg text-gray-200 font-semibold">User Testing</span>
                      </div>
                      <div className="feature-item text-center p-6 rounded-2xl bg-gradient-to-br from-studio-pink/10 to-transparent hover:from-studio-pink/20 transition-all duration-300">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-studio-pink/30 to-studio-pink/10 flex items-center justify-center mx-auto mb-4 shadow-lg">
                          <svg className="w-8 h-8 text-studio-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                        </div>
                        <span className="text-lg text-gray-200 font-semibold">Fast Iteration</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3: Handoff Arrow */}
              <div className="collab-section min-w-[100vw] h-[70vh] flex items-center justify-center px-12">
                <div className="text-center relative">
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <div className="w-[600px] h-[600px] bg-gradient-to-r from-studio-coral via-studio-pink to-studio-purple rounded-full blur-3xl"></div>
                  </div>
                  <div className="relative">
                    <div className="section-icon mb-12">
                      <div className="inline-flex items-center gap-6">
                        <div className="w-3 h-3 rounded-full bg-studio-pink animate-pulse"></div>
                        <div className="w-3 h-3 rounded-full bg-studio-pink animate-pulse delay-100"></div>
                        <svg className="w-48 h-48 text-studio-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                        <div className="w-3 h-3 rounded-full bg-studio-purple animate-pulse delay-200"></div>
                        <div className="w-3 h-3 rounded-full bg-studio-purple animate-pulse delay-300"></div>
                      </div>
                    </div>
                    <h3 className="section-title text-6xl font-bold text-white mb-8 leading-tight" style={{ perspective: '1000px' }}>
                      Seamless Handoff
                    </h3>
                    <p className="section-description text-3xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                      <span className="text-studio-coral font-semibold">Validated designs</span> flow directly to engineering.
                      <br />
                      <span className="text-studio-pink font-semibold">Zero wasted effort.</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 4: UX Engineer */}
              <div className="collab-section min-w-[100vw] h-[70vh] flex items-center justify-center px-12">
                <div className="max-w-5xl w-full relative">
                  {/* Decorative background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-studio-purple/10 via-studio-purple/5 to-transparent rounded-3xl blur-3xl"></div>
                  
                  <div className="relative backdrop-blur-sm rounded-3xl p-12 border border-studio-purple/10">
                    <div className="flex items-start gap-10 mb-12">
                      <div className="section-icon flex-shrink-0">
                        <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-studio-purple/30 to-studio-purple/10 flex items-center justify-center shadow-2xl shadow-studio-purple/30 border border-studio-purple/20">
                          <svg className="w-14 h-14 text-studio-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="section-title text-6xl font-bold text-white mb-6 leading-tight" style={{ perspective: '1000px' }}>UX Engineers</h3>
                        <p className="section-description text-2xl text-gray-300 leading-relaxed font-light">
                          Receive validated prototypes with proven user value. Refine codebase, optimize performance, and ship production-ready features.
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-8">
                      <div className="feature-item text-center p-6 rounded-2xl bg-gradient-to-br from-studio-purple/10 to-transparent hover:from-studio-purple/20 transition-all duration-300">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-studio-purple/30 to-studio-purple/10 flex items-center justify-center mx-auto mb-4 shadow-lg">
                          <svg className="w-8 h-8 text-studio-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span className="text-lg text-gray-200 font-semibold">Validated Designs</span>
                      </div>
                      <div className="feature-item text-center p-6 rounded-2xl bg-gradient-to-br from-studio-purple/10 to-transparent hover:from-studio-purple/20 transition-all duration-300">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-studio-purple/30 to-studio-purple/10 flex items-center justify-center mx-auto mb-4 shadow-lg">
                          <svg className="w-8 h-8 text-studio-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                        </div>
                        <span className="text-lg text-gray-200 font-semibold">Code Quality</span>
                      </div>
                      <div className="feature-item text-center p-6 rounded-2xl bg-gradient-to-br from-studio-purple/10 to-transparent hover:from-studio-purple/20 transition-all duration-300">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-studio-purple/30 to-studio-purple/10 flex items-center justify-center mx-auto mb-4 shadow-lg">
                          <svg className="w-8 h-8 text-studio-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-lg text-gray-200 font-semibold">Ship Fast</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Cards */}
        <div className="process-cards-container grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="process-card relative bg-gray-900/50 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              {/* Letter Badge */}
              <div
                className={`w-16 h-16 rounded-full ${phase.color} flex items-center justify-center text-white text-3xl font-bold mb-4 mx-auto`}
              >
                {phase.letter}
              </div>

              {/* Icon */}
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={phase.iconPath} />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-center mb-2 text-white">{phase.title}</h3>

              {/* Description */}
              <p className="text-center text-gray-400 text-sm">
                {phase.description}
              </p>
            </div>
          ))}
        </div>

        {/* Flow Indicator */}
        <div className="mt-16 flex justify-center items-center gap-4 opacity-40">
          <div className="w-8 h-8 rounded-full bg-studio-coral"></div>
          <div className="w-16 h-1 bg-gradient-to-r from-studio-coral to-studio-pink"></div>
          <div className="w-8 h-8 rounded-full bg-studio-pink"></div>
          <div className="w-16 h-1 bg-gradient-to-r from-studio-pink to-studio-purple"></div>
          <div className="w-8 h-8 rounded-full bg-studio-purple"></div>
          <div className="w-16 h-1 bg-gradient-to-r from-studio-purple to-studio-coral"></div>
          <div className="w-8 h-8 rounded-full bg-studio-coral"></div>
        </div>
      </div>
    </section>
  );
};

export default DriveProcess;
