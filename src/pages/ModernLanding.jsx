import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { 
  HiSparkles, 
  HiRocketLaunch, 
  HiArrowRight, 
  HiChevronDown,
  HiBolt,
  HiLightBulb,
  HiCommandLine,
  HiCube,
  HiBeaker,
  HiDocumentText,
  HiAcademicCap,
  HiUserGroup,
  HiChartBar
} from 'react-icons/hi2';
import { FaBrain } from 'react-icons/fa6';

gsap.registerPlugin(ScrollTrigger);

const ModernLanding = () => {
  const heroRef = useRef(null);
  const researchParallaxRef = useRef(null);
  const showToolsPagesOnHome = false;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Sequence Animation
      const tl = gsap.timeline();

      tl.to('.hero-title', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
        .to('.hero-desc', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
        .to('.hero-btns', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
        .to('.hero-stats', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4');

      // Diagram progress fill animation
      gsap.set('.progress-fill', { width: '0%' });
      gsap.to('.progress-fill', {
        width: '75%',
        duration: 1.2,
        ease: 'power2.out',
        delay: 0.6
      });

      // 3D Tilt Effect (Hero Diagram)
      const container = document.querySelector('.perspective-container');
      const card = document.querySelector('.tilt-card');

      let onMove;
      let onLeave;

      if (container && card) {
        gsap.set(card, { transformPerspective: 1200, transformOrigin: 'center' });

        onMove = (e) => {
          const rect = container.getBoundingClientRect();
          const relX = (e.clientX - rect.left) / rect.width;
          const relY = (e.clientY - rect.top) / rect.height;

          const rotateY = (0.5 - relX) * 18; // degrees
          const rotateX = (relY - 0.5) * 14; // degrees

          gsap.to(card, {
            rotationY: rotateY,
            rotationX: rotateX,
            scale: 1.02,
            duration: 0.35,
            ease: 'power2.out',
            boxShadow:
              '0 30px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(244,90,155,0.12)'
          });
        };

        onLeave = () => {
          gsap.to(card, {
            rotationY: 0,
            rotationX: 0,
            scale: 1,
            duration: 0.8,
            ease: 'elastic.out(1, 0.35)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.45)'
          });
        };

        container.addEventListener('mousemove', onMove);
        container.addEventListener('mouseleave', onLeave);
      }

      // Workflow Steps Animation
      gsap.utils.toArray('.workflow-step').forEach((step, i) => {
        gsap.from(step, {
          scrollTrigger: {
            trigger: step,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.2,
          ease: 'power3.out'
        });
      });

      // Features Grid Animation
      gsap.utils.toArray('.glass-card').forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: '#features',
            start: 'top 75%',
          },
          y: 30,
          opacity: 0,
          duration: 0.6,
          delay: i * 0.1,
          ease: 'power2.out'
        });
      });

      // Clean up tilt listeners when this page unmounts
      return () => {
        if (container && onMove) container.removeEventListener('mousemove', onMove);
        if (container && onLeave) container.removeEventListener('mouseleave', onLeave);
      };
    }, heroRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const element = researchParallaxRef.current;
    if (!element) return;

    let rafId = null;

    const update = () => {
      rafId = null;
      const scrollY = window.scrollY || 0;
      const translateY = Math.min(36, scrollY * 0.06);
      const rotate = (scrollY * 0.25) % 360;
      element.style.transform = `translate3d(0, ${translateY}px, 0) rotate(${rotate}deg)`;
    };

    const onScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden" ref={heroRef}>
      {/* Header (match Documentation page) */}
      <header className="border-b border-gray-800 bg-black/95 backdrop-blur sticky top-0 z-50">
        <div className="w-full px-6 py-4 flex items-center justify-between">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-display font-bold">
                <span className="bg-gradient-to-r from-studio-coral via-studio-pink to-studio-purple bg-clip-text text-transparent">DRIVE</span>
                <span className="ml-2 text-sm font-semibold text-gray-400">by</span>
              </div>
              <img src={`${import.meta.env.BASE_URL}logo-s42.svg`} alt="Studio42" className="h-6 w-auto" />
            </div>
          </Link>

          <nav className="flex items-center gap-8 text-sm">
            <Link to="/docs" className="text-gray-400 hover:text-white transition-colors">Docs</Link>
            {showToolsPagesOnHome && (
              <>
                <Link to="/ai-tools" className="text-gray-400 hover:text-white transition-colors">AI Tools</Link>
                <Link to="/tools" className="text-gray-400 hover:text-white transition-colors">Tools</Link>
                <Link to="/ai-evals" className="text-gray-400 hover:text-white transition-colors">AI Evals</Link>
              </>
            )}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 pb-12 overflow-x-hidden">
        {/* Simple Background */}
        <div className="absolute inset-0 bg-gray-950"></div>

        <div className="max-w-7xl mx-auto px-8 w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Hero Content */}
          <div className="hero-content flex flex-col items-start space-y-6 pl-4 lg:pl-0 min-w-0">
            <h1 className="w-full text-left text-4xl lg:text-5xl font-bold leading-tight hero-title opacity-0 text-white break-words relative left-0">
              DRIVE Framework
            </h1>
            
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed hero-desc opacity-0 max-w-lg">
              A designer&apos;s guide to vibe coding, turn design intent into working UI with AI, and move from idea → prototype → shipped experience through the DRIVE stages.
            </p>
            
            <div className="flex flex-wrap gap-4 hero-btns opacity-0 pt-2">
              <Link 
                to="/docs" 
                className="px-8 py-3 rounded-lg font-semibold text-base flex items-center gap-2 group bg-studio-pink hover:bg-studio-pink-dark transition-colors"
              >
                Read Documentation
                <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              {showToolsPagesOnHome && (
                <Link 
                  to="/ai-tools" 
                  className="px-8 py-3 rounded-lg font-semibold text-base border-2 border-gray-700 hover:border-gray-600 transition-colors"
                >
                  Browse AI Tools
                </Link>
              )}
            </div>

            <div className="flex items-center gap-8 pt-6 border-t border-gray-800 hero-stats opacity-0">
              <div>
                <div className="text-2xl font-bold text-white font-mono">4</div>
                <div className="text-sm text-gray-400">Stages</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white font-mono">100+</div>
                <div className="text-sm text-gray-400">AI Tools</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white font-mono">50+</div>
                <div className="text-sm text-gray-400">Guides</div>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="hidden lg:block min-w-0">
            <div className="perspective-container">
              <div className="tilt-card group relative bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-xl transition-transform duration-200 will-change-transform overflow-hidden">
                {/* Subtle animated accents */}
                <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-studio-pink/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-studio-coral/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="space-y-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-12 h-12 rounded-lg bg-studio-pink flex items-center justify-center">
                      <HiBolt className="w-6 h-6 text-white" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-white">Research Phase</div>
                      <div className="text-xs text-gray-400 flex items-center gap-1.5">
                        <span className="relative inline-flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60 animate-ping" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                        </span>
                        <span className="text-gray-300">Active</span>
                      </div>
                    </div>
                  </div>

                  <div
                    ref={researchParallaxRef}
                    className="h-10 w-10 rounded-xl bg-gray-950 border border-gray-800 flex items-center justify-center will-change-transform"
                    aria-hidden="true"
                  >
                    <div className="h-4 w-4 rotate-45 rounded-sm bg-studio-purple/30 border border-studio-purple/40" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden progress-track">
                    <div className="h-full bg-studio-pink rounded-full progress-fill progress-shimmer"></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Progress</span>
                    <span className="text-studio-pink">75%</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-950 rounded-lg p-3 border border-gray-800 transition-transform duration-200 group-hover:-translate-y-0.5">
                    <FaBrain className="w-5 h-5 text-studio-purple mb-2" />
                    <div className="text-xs font-medium text-white">Human Input</div>
                  </div>
                  <div className="bg-gray-950 rounded-lg p-3 border border-gray-800 transition-transform duration-200 group-hover:-translate-y-0.5">
                    <HiSparkles className="w-5 h-5 text-studio-coral mb-2" />
                    <div className="text-xs font-medium text-white">AI Synthesis</div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* Workflow Section */}
      <section id="workflow" className="py-24 relative bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">The Four Stages</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Each stage has specific tools, techniques, and best practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Step 1 - Research */}
            <div className="workflow-step">
              <div className="bg-gray-950 border border-gray-800 p-8 rounded-xl hover:border-studio-pink transition-colors h-full">
                <div className="w-12 h-12 bg-studio-pink/20 rounded-lg flex items-center justify-center mb-6 text-studio-pink">
                  <HiLightBulb className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Research</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Discover insights and synthesize information with AI research tools.
                </p>
              </div>
            </div>

            {/* Step 2 - Design */}
            <div className="workflow-step">
              <div className="bg-gray-950 border border-gray-800 p-8 rounded-xl hover:border-studio-coral transition-colors h-full">
                <div className="w-12 h-12 bg-studio-coral/20 rounded-lg flex items-center justify-center mb-6 text-studio-coral">
                  <HiCube className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Design</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Explore design solutions and iterate faster with AI assistance.
                </p>
              </div>
            </div>

            {/* Step 3 - Prototype */}
            <div className="workflow-step">
              <div className="bg-gray-950 border border-gray-800 p-8 rounded-xl hover:border-studio-purple transition-colors h-full">
                <div className="w-12 h-12 bg-studio-purple/20 rounded-lg flex items-center justify-center mb-6 text-studio-purple">
                  <HiCommandLine className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Prototype</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Build functional code quickly using AI coding assistants.
                </p>
              </div>
            </div>

            {/* Step 4 - Deliver */}
            <div className="workflow-step">
              <div className="bg-gray-950 border border-gray-800 p-8 rounded-xl hover:border-studio-blue transition-colors h-full">
                <div className="w-12 h-12 bg-studio-blue/20 rounded-lg flex items-center justify-center mb-6 text-studio-blue">
                  <HiRocketLaunch className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Deliver</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Ship and validate products while maintaining quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Documentation Resources</h2>
            <p className="text-lg text-gray-300">Guides, tools, and references for implementing DRIVE</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Documentation */}
            <Link 
              to="/docs" 
              className="md:col-span-2 bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-studio-pink transition-colors"
            >
              <div className="h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-studio-pink/20 rounded-lg flex items-center justify-center mb-6">
                    <HiDocumentText className="w-6 h-6 text-studio-pink" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">Framework Guides</h3>
                  <p className="text-gray-400">
                    Step-by-step documentation for each stage of the DRIVE methodology.
                  </p>
                </div>
              </div>
            </Link>

            {showToolsPagesOnHome && (
              <>
                {/* AI Tools */}
                <Link 
                  to="/ai-tools" 
                  className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-studio-coral transition-colors"
                >
                  <div className="w-12 h-12 bg-studio-coral/20 rounded-lg flex items-center justify-center mb-6">
                    <HiSparkles className="w-6 h-6 text-studio-coral" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">AI Tools</h3>
                  <p className="text-sm text-gray-400">
                    Curated database of AI tools for each workflow stage.
                  </p>
                </Link>

                {/* Vibe Tools */}
                <Link 
                  to="/tools" 
                  className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-studio-purple transition-colors"
                >
                  <div className="w-12 h-12 bg-studio-purple/20 rounded-lg flex items-center justify-center mb-6">
                    <HiCommandLine className="w-6 h-6 text-studio-purple" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Dev Tools</h3>
                  <p className="text-sm text-gray-400">
                    Essential development tools and resources.
                  </p>
                </Link>

                {/* Evaluations */}
                <Link 
                  to="/ai-evals" 
                  className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-studio-blue transition-colors"
                >
                  <div className="w-12 h-12 bg-studio-blue/20 rounded-lg flex items-center justify-center mb-6">
                    <HiBeaker className="w-6 h-6 text-studio-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Evaluations</h3>
                  <p className="text-sm text-gray-400">
                    Research and testing of AI models.
                  </p>
                </Link>
              </>
            )}

            {/* Best Practices */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-colors">
              <div className="w-12 h-12 bg-gray-700/50 rounded-lg flex items-center justify-center mb-6">
                <HiAcademicCap className="w-6 h-6 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Best Practices</h3>
              <p className="text-sm text-gray-400">
                Tips and patterns from real implementations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Start Learning
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Explore the documentation to learn how to integrate AI into your development workflow.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/docs" 
              className="px-8 py-3 rounded-lg font-semibold bg-studio-pink hover:bg-studio-pink-dark transition-colors"
            >
              Read Documentation
            </Link>
            {showToolsPagesOnHome && (
              <Link 
                to="/ai-tools" 
                className="px-8 py-3 rounded-lg font-semibold border-2 border-gray-700 hover:border-gray-600 transition-colors"
              >
                Browse Tools
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-studio-pink rounded-lg flex items-center justify-center">
                <span className="font-bold text-white text-sm">D</span>
              </div>
              <span className="text-xl font-bold text-white">DRIVE</span>
            </Link>
            
            <div className="text-sm text-gray-400">
              © 2026 DRIVE Framework Documentation
            </div>

            <div className="flex items-center gap-6">
              <Link to="/docs" className="text-sm text-gray-400 hover:text-white transition-colors">
                Documentation
              </Link>
              {showToolsPagesOnHome && (
                <>
                  <Link to="/ai-tools" className="text-sm text-gray-400 hover:text-white transition-colors">
                    AI Tools
                  </Link>
                  <Link to="/tools" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Resources
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default ModernLanding;
