import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FiArrowLeft, FiExternalLink, FiStar, FiCheck, 
  FiCode, FiLink, FiBookOpen, FiTag, FiZap, FiAlertTriangle, FiHeart
} from 'react-icons/fi';
import { getVibeToolById } from '../data/vibeToolsDatabase';

gsap.registerPlugin(ScrollTrigger);

const VibeToolDetail = () => {
  const { toolId } = useParams();
  const navigate = useNavigate();
  const [tool, setTool] = useState(null);

  useEffect(() => {
    const foundTool = getVibeToolById(toolId);
    if (foundTool) {
      setTool(foundTool);
    } else {
      // Tool not found, redirect to Tools page
      navigate('/tools');
    }
  }, [toolId, navigate]);

  useEffect(() => {
    if (tool) {
      const ctx = gsap.context(() => {
        gsap.from('.detail-hero', {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out'
        });

        gsap.from('.detail-section', {
          scrollTrigger: {
            trigger: '.detail-content',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          y: 20,
          opacity: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power2.out'
        });
      });

      return () => ctx.revert();
    }
  }, [tool]);

  if (!tool) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-studio-coral mx-auto mb-4"></div>
          <p className="text-gray-400">Loading tool details...</p>
        </div>
      </div>
    );
  }

  const IconComponent = tool.icon;

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/95 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <div className="text-2xl font-display font-bold bg-gradient-to-r from-studio-coral via-studio-pink to-studio-purple bg-clip-text text-transparent">
              DRIVE
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <Link 
              to="/tools" 
              className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <FiArrowLeft />
              Back to Vibe Coding Tools
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="detail-hero relative pt-12 pb-8 px-6 border-b border-gray-800">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start justify-between gap-6 mb-6">
            <div className="flex items-start gap-6 flex-1">
              {/* Icon */}
              {IconComponent && (
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-xl bg-studio-coral/10 flex items-center justify-center border-2 border-studio-coral/20">
                    <IconComponent className="w-12 h-12 text-studio-coral" />
                  </div>
                </div>
              )}
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-400 uppercase tracking-wider">
                    {tool.categoryLabel || tool.category}
                  </span>
                  {tool.pricing === 'free' && (
                    <span className="text-xs px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 uppercase tracking-wider flex items-center gap-1">
                      <FiZap className="text-xs" />
                      Free
                    </span>
                  )}
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                  {tool.name}
                </h1>
                
                <p className="text-xl text-gray-400 mb-6">
                  {tool.tagline}
                </p>

                <div className="flex items-center gap-6 text-sm text-gray-400">
                  {tool.rating && (
                    <div className="flex items-center gap-2">
                      <FiStar className="text-yellow-500 fill-yellow-500" />
                      <span className="text-white font-semibold">{tool.rating}</span>
                      <span>rating</span>
                    </div>
                  )}
                  {tool.learningCurve && (
                    <div className="flex items-center gap-2">
                      <FiBookOpen />
                      <span className="capitalize">{tool.learningCurve}</span>
                    </div>
                  )}
                  {tool.likes && (
                    <div className="flex items-center gap-2">
                      <FiHeart className="text-studio-coral" />
                      <span>{tool.likes.toLocaleString()} likes</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3">
              {tool.website && (
                <a
                  href={tool.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-studio-coral hover:bg-studio-pink text-white rounded-xl transition-all flex items-center gap-2 font-semibold"
                >
                  Visit Website
                  <FiExternalLink />
                </a>
              )}
              {tool.docs && (
                <a
                  href={tool.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl transition-all flex items-center gap-2"
                >
                  <FiBookOpen />
                  Documentation
                </a>
              )}
            </div>
          </div>

          {/* Best For Pills */}
          {tool.bestFor && (
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-sm text-gray-400 mb-2">Best for:</p>
              <p className="text-white">{tool.bestFor}</p>
            </div>
          )}
        </div>
      </section>

      {/* Main Content */}
      <section className="detail-content py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div className="detail-section bg-white/5 border border-white/10 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <FiBookOpen className="text-studio-coral" />
                  Overview
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {tool.description}
                </p>
              </div>

              {/* Features */}
              {tool.features && tool.features.length > 0 && (
                <div className="detail-section bg-white/5 border border-white/10 rounded-xl p-6">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <FiCheck className="text-studio-pink" />
                    Key Features
                  </h2>
                  <ul className="space-y-3">
                    {tool.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300">
                        <FiCheck className="text-studio-pink flex-shrink-0 mt-1" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Starter Prompts - VIBE CODING */}
              {tool.starterPrompts && tool.starterPrompts.length > 0 && (
                <div className="detail-section bg-white/5 border border-white/10 rounded-xl p-6">
                  <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                    <FiCode className="text-studio-coral" />
                    Starter Prompts
                  </h2>
                  <p className="text-gray-400 text-sm mb-6">Ready-to-use prompts to get started quickly</p>
                  <div className="space-y-4">
                    {tool.starterPrompts.map((promptItem, index) => (
                      <div key={index} className="bg-black/40 rounded-lg p-5 border border-white/10 hover:border-studio-coral/50 transition-colors">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <h3 className="text-white font-semibold text-lg">{promptItem.title}</h3>
                          <button
                            onClick={() => {
                              navigator.clipboard.writeText(promptItem.prompt);
                            }}
                            className="px-3 py-1 bg-studio-coral/20 hover:bg-studio-coral/30 border border-studio-coral/50 rounded-lg text-xs text-white transition-colors flex items-center gap-1"
                            title="Copy prompt"
                          >
                            <FiCode className="text-xs" />
                            Copy
                          </button>
                        </div>
                        <div className="bg-black/60 rounded p-4 mb-3 border border-white/5">
                          <p className="text-gray-300 text-sm leading-relaxed font-mono">
                            {promptItem.prompt}
                          </p>
                        </div>
                        {promptItem.example && (
                          <div className="flex items-start gap-2">
                            <span className="text-studio-pink text-xs flex-shrink-0 mt-0.5">✓</span>
                            <p className="text-gray-400 text-xs italic">{promptItem.example}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Detailed Use Cases - VIBE CODING */}
              {tool.detailedUseCases && tool.detailedUseCases.length > 0 && (
                <div className="detail-section bg-white/5 border border-white/10 rounded-xl p-6">
                  <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                    <FiBookOpen className="text-studio-pink" />
                    Detailed Use Cases
                  </h2>
                  <p className="text-gray-400 text-sm mb-6">Step-by-step scenarios for real-world applications</p>
                  <div className="space-y-6">
                    {tool.detailedUseCases.map((useCase, index) => (
                      <div key={index} className="bg-black/30 rounded-lg p-5 border border-white/5">
                        <h3 className="text-white font-bold text-lg mb-2">{useCase.scenario}</h3>
                        <p className="text-gray-400 text-sm mb-4">{useCase.description}</p>
                        
                        {useCase.steps && useCase.steps.length > 0 && (
                          <div className="mb-4">
                            <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Steps:</p>
                            <ol className="space-y-2">
                              {useCase.steps.map((step, stepIndex) => (
                                <li key={stepIndex} className="flex items-start gap-3 text-gray-300 text-sm">
                                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-studio-pink/20 flex items-center justify-center text-studio-pink text-xs font-bold">
                                    {stepIndex + 1}
                                  </span>
                                  <span className="pt-0.5">{step}</span>
                                </li>
                              ))}
                            </ol>
                          </div>
                        )}
                        
                        {useCase.prompt && (
                          <div className="bg-black/50 rounded p-4 mb-3 border border-white/5">
                            <p className="text-xs text-gray-500 mb-2">Example Prompt:</p>
                            <p className="text-gray-300 text-sm leading-relaxed font-mono">
                              {useCase.prompt}
                            </p>
                          </div>
                        )}
                        
                        {useCase.outcome && (
                          <div className="flex items-start gap-2 bg-green-500/5 rounded p-3 border border-green-500/20">
                            <FiCheck className="text-green-500 flex-shrink-0 mt-0.5" />
                            <p className="text-gray-300 text-sm"><strong className="text-green-400">Outcome:</strong> {useCase.outcome}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Best Practices - VIBE CODING */}
              {tool.bestPractices && tool.bestPractices.length > 0 && (
                <div className="detail-section bg-white/5 border border-white/10 rounded-xl p-6">
                  <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                    <FiCheck className="text-studio-purple" />
                    Best Practices
                  </h2>
                  <p className="text-gray-400 text-sm mb-6">Tips for getting the most out of this tool</p>
                  <ul className="space-y-3">
                    {tool.bestPractices.map((practice, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300">
                        <span className="flex-shrink-0 w-2 h-2 rounded-full bg-studio-purple mt-2"></span>
                        <span className="text-sm leading-relaxed">{practice}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Project Examples - VIBE CODING */}
              {tool.projectExamples && tool.projectExamples.length > 0 && (
                <div className="detail-section bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-xl p-6">
                  <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                    <FiCode className="text-purple-400" />
                    Project Examples
                  </h2>
                  <p className="text-gray-400 text-sm mb-6">Complete project ideas with starter prompts</p>
                  <div className="grid grid-cols-1 gap-4">
                    {tool.projectExamples.map((project, index) => (
                      <div key={index} className="bg-black/40 rounded-lg p-5 border border-white/10 hover:border-purple-500/50 transition-colors">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div>
                            <h3 className="text-white font-bold text-lg mb-1">{project.type}</h3>
                            <p className="text-gray-400 text-sm">{project.description}</p>
                          </div>
                          <div className="flex flex-col items-end gap-1">
                            <span className={`px-2 py-1 rounded text-xs font-semibold ${
                              project.complexity === 'Beginner' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                              project.complexity === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                              'bg-red-500/20 text-red-400 border border-red-500/30'
                            }`}>
                              {project.complexity}
                            </span>
                            {project.timeEstimate && (
                              <span className="text-xs text-gray-500">{project.timeEstimate}</span>
                            )}
                          </div>
                        </div>
                        
                        {project.starterPrompt && (
                          <div className="bg-black/60 rounded p-4 border border-white/5">
                            <div className="flex items-center justify-between mb-2">
                              <p className="text-xs text-purple-400 font-semibold">Starter Prompt:</p>
                              <button
                                onClick={() => {
                                  navigator.clipboard.writeText(project.starterPrompt);
                                }}
                                className="px-2 py-1 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/50 rounded text-xs text-white transition-colors"
                                title="Copy prompt"
                              >
                                Copy
                              </button>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed font-mono">
                              {project.starterPrompt}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Limitations */}
              {tool.limitations && tool.limitations.length > 0 && (
                <div className="detail-section bg-white/5 border border-white/10 rounded-xl p-6">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <FiAlertTriangle className="text-yellow-500" />
                    Considerations
                  </h2>
                  <ul className="space-y-3">
                    {tool.limitations.map((limitation, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-400 text-sm">
                        <span className="flex-shrink-0 text-yellow-500 mt-0.5">•</span>
                        <span>{limitation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Quick Info */}
              <div className="detail-section bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Quick Info</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-gray-500 mb-1">Category</p>
                    <p className="text-white capitalize">{tool.categoryLabel || tool.category}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Learning Curve</p>
                    <p className="text-white capitalize">{tool.learningCurve || 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Pricing</p>
                    <p className="text-white capitalize">{tool.pricing || 'Free'}</p>
                  </div>
                  {tool.integration && tool.integration.length > 0 && (
                    <div>
                      <p className="text-gray-500 mb-1">Integration</p>
                      <div className="flex flex-wrap gap-2">
                        {tool.integration.map((method, index) => (
                          <span 
                            key={index}
                            className="px-2 py-1 bg-studio-coral/10 border border-studio-coral/30 rounded text-xs text-studio-coral"
                          >
                            {method}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Links */}
              <div className="detail-section bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <FiLink className="text-studio-coral" />
                  Resources
                </h3>
                <div className="space-y-2">
                  {tool.website && (
                    <a 
                      href={tool.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-studio-coral hover:text-studio-pink transition-colors"
                    >
                      Official Website →
                    </a>
                  )}
                  {tool.docs && (
                    <a 
                      href={tool.docs}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-studio-coral hover:text-studio-pink transition-colors"
                    >
                      Documentation →
                    </a>
                  )}
                  {tool.cdnLink && (
                    <a 
                      href={tool.cdnLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-studio-coral hover:text-studio-pink transition-colors"
                    >
                      CDN Link →
                    </a>
                  )}
                </div>
              </div>

              {/* Tags */}
              {tool.tags && tool.tags.length > 0 && (
                <div className="detail-section bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <FiTag className="text-studio-coral" />
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {tool.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-studio-coral/10 to-studio-pink/10 border border-studio-coral/30 rounded-full text-gray-300 text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VibeToolDetail;
