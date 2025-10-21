import { useState } from 'react';
import { Link } from 'react-router-dom';
import { VscCode } from 'react-icons/vsc';
import { TbSparkles } from 'react-icons/tb';
import { FaClock, FaBook, FaCheckCircle, FaRocket, FaBullseye, FaBug, FaSearch, FaChevronDown } from 'react-icons/fa';
import { MdArchitecture } from 'react-icons/md';

const Documentation = () => {
  const [activeTab, setActiveTab] = useState('design');
  const [expandedSections, setExpandedSections] = useState(['getting-started']);
  const [searchQuery, setSearchQuery] = useState('');
  const [activePage, setActivePage] = useState('overview');
  const [selectedTool, setSelectedTool] = useState('vscode'); // 'vscode' or 'spark'
  const [expandedBestPractices, setExpandedBestPractices] = useState([1]); // Track which best practice sections are open
  const [expandedMistakes, setExpandedMistakes] = useState([1]); // Track which mistake sections are open

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const toggleBestPractice = (id) => {
    setExpandedBestPractices(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const toggleMistake = (id) => {
    setExpandedMistakes(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const renderContent = () => {
    switch (activePage) {
      case 'welcome':
        return (
          <div className="prose prose-invert max-w-none">
            <h1 className="text-5xl font-bold text-white mb-6">Welcome to DRIVE</h1>
            <p className="text-xl text-gray-300 mb-8">Design. Rapid. Iterate. Validate. Execute.</p>
            
            <div className="bg-gradient-to-r from-studio-coral/20 to-studio-pink/20 border border-studio-coral/30 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Why DRIVE was created</h2>
              <p className="text-gray-300 mb-4">
                Creating Figma prototypes is slow, inefficient, and doesn't capture exactly how the application should work. 
                Prototypes often miss edge cases, interactions, and real-world behavior.
              </p>
              <p className="text-gray-300 mb-4">
                <span className="text-studio-coral font-semibold">DRIVE changes everything.</span> With AI-assisted development, 
                designers can now build, iterate, and validate in hours, not weeks. You can quickly deliver designs close to 
                what the final implementation will look like and test them with real functionality.
              </p>
              <p className="text-gray-300">
                Since we're able to move fast on the design, we can spend more time researching, building trust with users, 
                and designing for the right problems. <span className="text-white font-semibold">This doesn't replace the way 
                we work, it supercharges it!</span>
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">The DRIVE Promise</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <div className="text-studio-coral text-4xl font-bold mb-2">Design</div>
                <p className="text-gray-400">Start with intent, not specifications</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <div className="text-studio-pink text-4xl font-bold mb-2">Iterate</div>
                <p className="text-gray-400">See it, adjust it, ship it in minutes</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <div className="text-studio-purple text-4xl font-bold mb-2">Execute</div>
                <p className="text-gray-400">Ship quality, not perfection-paralysis</p>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setActivePage('what-is-vibe')}
                className="px-6 py-3 bg-studio-pink hover:bg-studio-coral text-white rounded-xl transition-colors font-medium"
              >
                What is Vibe Coding? →
              </button>
              <button
                onClick={() => setActivePage('first-session')}
                className="px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white rounded-xl transition-colors font-medium"
              >
                Your First Session →
              </button>
            </div>
          </div>
        );

      case 'what-is-vibe':
        return (
          <div className="prose prose-invert max-w-none">
            <h1 className="text-5xl font-bold text-white mb-6">What is Vibe Coding?</h1>
            <p className="text-xl text-gray-300 mb-8">
              <span className="text-white font-semibold">Vibe coding is the practice of rapidly translating design intent 
              into working code through AI-assisted development.</span>
            </p>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">The Mindset Shift</h2>
              <p className="text-gray-300 mb-4">From perfect specifications to iterative conversation:</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-studio-coral">→</span>
                  <span>Design by building, not by documenting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-studio-pink">→</span>
                  <span>Let AI handle boilerplate, you handle vision</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-studio-purple">→</span>
                  <span>Iterate in minutes, validate immediately</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-studio-coral">→</span>
                  <span>Ship quality, not perfection-paralysis</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Key Principles</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">Design by Building</h3>
                <p className="text-gray-400">
                  Instead of creating static mockups, you build functional prototypes. The code IS the design.
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">AI as Partner</h3>
                <p className="text-gray-400">
                  Tools like VS Code with Copilot or GitHub Spark understand your intent and generate code for you.
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">Rapid Iteration</h3>
                <p className="text-gray-400">
                  See changes in seconds. Test ideas immediately. No waiting for handoffs or implementations.
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">Maintain Control</h3>
                <p className="text-gray-400">
                  You guide the direction. AI executes. You validate every decision and maintain creative control.
                </p>
              </div>
            </div>

            <div className="bg-studio-pink/10 border border-studio-pink/30 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-3">DRIVE amplifies your workflow</h3>
              <p className="text-gray-300">
                DRIVE doesn't replace how you work—it makes you faster, more creative, and more effective. 
                Work the way you already do, just with AI as your development partner.
              </p>
            </div>

            <button
              onClick={() => setActivePage('setup')}
              className="px-6 py-3 bg-studio-pink hover:bg-studio-coral text-white rounded-xl transition-colors font-medium"
            >
              Set Up Your Environment →
            </button>
          </div>
        );

      case 'setup':
        return (
          <div className="prose prose-invert max-w-none">
            <h1 className="text-5xl font-bold text-white mb-6">Setting Up Your Environment</h1>
            <p className="text-xl text-gray-300 mb-8">Get your tools ready for vibe coding</p>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Prerequisites Checklist</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded bg-studio-coral/20 flex items-center justify-center text-studio-coral text-sm">✓</div>
                  <span>VS Code installed</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded bg-studio-coral/20 flex items-center justify-center text-studio-coral text-sm">✓</div>
                  <span>GitHub account created</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded bg-studio-coral/20 flex items-center justify-center text-studio-coral text-sm">✓</div>
                  <span>Basic familiarity with web browsers</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Step 1: Install VS Code</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <p className="text-gray-300 mb-4">
                Download VS Code for your operating system:
              </p>
              <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-studio-coral hover:bg-studio-pink text-white rounded-lg transition-colors font-medium">
                Download VS Code
              </a>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Option 1: VS Code + GitHub Copilot</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <p className="text-gray-300 mb-4">
                <span className="text-white font-semibold">Best for:</span> Full-featured development with local file control
              </p>
              <ol className="space-y-4 text-gray-300 list-decimal list-inside mb-4">
                <li>Navigate to GitHub Copilot page</li>
                <li>Start free trial or subscribe</li>
                <li>Install Copilot extension in VS Code</li>
                <li>Sign in and authorize</li>
              </ol>
              <a href="https://github.com/features/copilot" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-studio-pink hover:bg-studio-coral text-white rounded-lg transition-colors font-medium">
                Get GitHub Copilot
              </a>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Option 2: GitHub Spark</h2>
            <div className="bg-gradient-to-br from-studio-purple/20 to-studio-pink/20 border border-studio-purple/30 rounded-xl p-6 mb-8">
              <p className="text-gray-300 mb-4">
                <span className="text-white font-semibold">Best for:</span> Quick prototypes without any installation
              </p>
              <p className="text-gray-300 mb-4">
                <span className="text-white font-semibold">GitHub Spark</span> is a browser-based AI app builder. 
                Perfect for learning and rapid prototyping with zero setup.
              </p>
              <a href="https://githubnext.com/projects/github-spark" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-studio-purple hover:bg-studio-pink text-white rounded-lg transition-colors font-medium">
                Try GitHub Spark
              </a>
            </div>

            <button
              onClick={() => setActivePage('first-session')}
              className="px-6 py-3 bg-studio-pink hover:bg-studio-coral text-white rounded-xl transition-colors font-medium"
            >
              Start Your First DRIVE Session →
            </button>
          </div>
        );

      case 'first-session':
        return (
          <div className="prose prose-invert max-w-none">
            <h1 className="text-5xl font-bold text-white mb-6">Your First DRIVE Session</h1>
            <p className="text-xl text-gray-300 mb-8">Build a modern hero section in 30 minutes</p>

            <div className="bg-gradient-to-r from-studio-coral/10 to-studio-pink/10 border border-studio-coral/30 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-2">What you'll build</h3>
              <p className="text-gray-300 mb-2">A functional to-do app with add, complete, and delete features</p>
              <div className="flex gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-2"><FaClock /> Time: 30 minutes</span>
                <span className="flex items-center gap-2"><FaBook /> Level: Beginner</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Choose Your Path</h3>
              
              {/* Tool Selection Tabs */}
              <div className="flex gap-2 mb-6">
                <button
                  onClick={() => setSelectedTool('vscode')}
                  className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-medium transition-all ${
                    selectedTool === 'vscode'
                      ? 'bg-studio-pink text-white border-2 border-studio-pink'
                      : 'bg-gray-900 text-gray-400 border-2 border-gray-800 hover:border-studio-pink/50 hover:text-white'
                  }`}
                >
                  <VscCode className="text-xl" />
                  <div className="text-left">
                    <div className="font-semibold">VS Code + Copilot</div>
                    <div className="text-xs opacity-80">Full development environment</div>
                  </div>
                </button>
                <button
                  onClick={() => setSelectedTool('spark')}
                  className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-medium transition-all ${
                    selectedTool === 'spark'
                      ? 'bg-studio-purple text-white border-2 border-studio-purple'
                      : 'bg-gray-900 text-gray-400 border-2 border-gray-800 hover:border-studio-purple/50 hover:text-white'
                  }`}
                >
                  <TbSparkles className="text-xl" />
                  <div className="text-left">
                    <div className="font-semibold">GitHub Spark</div>
                    <div className="text-xs opacity-80">Browser-based, no install</div>
                  </div>
                </button>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Part 1: Setup (5 min)</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
              {selectedTool === 'vscode' ? (
                <>
                  <div className="flex items-center gap-2 mb-4">
                    <VscCode className="text-studio-pink text-xl" />
                    <p className="text-gray-300 font-semibold">Using VS Code + Copilot</p>
                  </div>
                  <ol className="space-y-3 text-gray-300 list-decimal list-inside">
                    <li>Create a new file: <code className="text-studio-coral bg-gray-800 px-2 py-1 rounded">todo-app.html</code></li>
                    <li>Add basic HTML boilerplate</li>
                    <li>Link Tailwind CSS CDN for styling</li>
                    <li>Open with Live Server</li>
                  </ol>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2 mb-4">
                    <TbSparkles className="text-studio-purple text-xl" />
                    <p className="text-gray-300 font-semibold">Using GitHub Spark</p>
                  </div>
                  <ol className="space-y-3 text-gray-300 list-decimal list-inside">
                    <li>Open GitHub Spark in your browser</li>
                    <li>Create a new project named "To-Do App"</li>
                    <li>Start with a blank canvas</li>
                  </ol>
                </>
              )}
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Part 2: Design Intent (5 min)</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
              <p className="text-gray-300 mb-3">Write a comment or prompt describing what you want:</p>
              <pre className="bg-gray-950 border border-gray-700 rounded-lg p-4 overflow-x-auto">
                <code className="text-studio-pink text-sm">{`<!-- Create a to-do app with:
  - Clean, modern interface
  - Input field to add new tasks
  - Add button next to input
  - List of tasks with checkboxes to mark complete
  - Delete button (X) for each task
  - Completed tasks should show strikethrough text
  - Use a gradient background
  - Mobile-responsive design
  - Store tasks in browser localStorage -->`}</code>
              </pre>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Part 3: AI-Assisted Building (10 min)</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
              {selectedTool === 'vscode' ? (
                <>
                  <div className="flex items-center gap-2 mb-4">
                    <VscCode className="text-studio-pink text-xl" />
                    <p className="text-gray-300 font-semibold">With VS Code + Copilot</p>
                  </div>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-studio-coral">1.</span>
                      <span>Invoke Copilot (press Tab when you see suggestions)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-studio-pink">2.</span>
                      <span>Accept or modify suggestions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-studio-purple">3.</span>
                      <span>Preview in browser with Live Server</span>
                    </li>
                  </ul>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2 mb-4">
                    <TbSparkles className="text-studio-purple text-xl" />
                    <p className="text-gray-300 font-semibold">With GitHub Spark</p>
                  </div>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-studio-coral">1.</span>
                      <span>Describe your design in natural language</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-studio-pink">2.</span>
                      <span>Watch as AI generates the component</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-studio-purple">3.</span>
                      <span>See live preview instantly</span>
                    </li>
                  </ul>
                </>
              )}
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Part 4: Iterate & Polish (10 min)</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
              <p className="text-gray-300 mb-4">Refine your to-do app:</p>
              <ul className="space-y-2 text-gray-300">
                <li>• Test adding, completing, and deleting tasks</li>
                <li>• Adjust colors and spacing</li>
                <li>• Add hover effects to buttons and checkboxes</li>
                <li>• Test on mobile viewport</li>
                <li>• Verify tasks persist after page refresh (localStorage)</li>
              </ul>
            </div>

            <div className="bg-studio-pink/10 border border-studio-pink/30 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <FaRocket className="text-studio-pink" /> Checkpoint
              </h3>
              <p className="text-gray-300 mb-4">You just built a functional app in 30 minutes! Key insights:</p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2"><FaCheckCircle className="text-green-400 flex-shrink-0" /> AI understood your design intent and functionality needs</li>
                <li className="flex items-center gap-2"><FaCheckCircle className="text-green-400 flex-shrink-0" /> You maintained creative control over the design</li>
                <li className="flex items-center gap-2"><FaCheckCircle className="text-green-400 flex-shrink-0" /> The app is real, functional, and can be tested immediately</li>
                <li className="flex items-center gap-2"><FaCheckCircle className="text-green-400 flex-shrink-0" /> Iterations and refinements happened in seconds</li>
              </ul>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setActivePage('best-practices')}
                className="px-6 py-3 bg-studio-pink hover:bg-studio-coral text-white rounded-xl transition-colors font-medium"
              >
                Best Practices →
              </button>
              <button
                onClick={() => setActivePage('philosophy')}
                className="px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white rounded-xl transition-colors font-medium"
              >
                Learn DRIVE Philosophy
              </button>
            </div>
          </div>
        );

      case 'philosophy':
        return (
          <div className="prose prose-invert max-w-none">
            <h1 className="text-5xl font-bold text-white mb-6">The DRIVE Philosophy</h1>
            <p className="text-xl text-gray-300 mb-8">Design. Rapid. Iterate. Validate. Execute.</p>

            <div className="grid md:grid-cols-5 gap-4 mb-12">
              <div className="bg-gradient-to-br from-studio-coral/20 to-studio-coral/10 border border-studio-coral/30 rounded-xl p-6">
                <div className="text-4xl font-bold text-studio-coral mb-2">D</div>
                <h3 className="text-xl font-bold text-white mb-2">Design</h3>
                <p className="text-gray-400 text-sm">Start with intent, not specifications</p>
              </div>
              <div className="bg-gradient-to-br from-studio-pink/20 to-studio-pink/10 border border-studio-pink/30 rounded-xl p-6">
                <div className="text-4xl font-bold text-studio-pink mb-2">R</div>
                <h3 className="text-xl font-bold text-white mb-2">Rapid</h3>
                <p className="text-gray-400 text-sm">Speed is a feature, not a bug</p>
              </div>
              <div className="bg-gradient-to-br from-studio-purple/20 to-studio-purple/10 border border-studio-purple/30 rounded-xl p-6">
                <div className="text-4xl font-bold text-studio-purple mb-2">I</div>
                <h3 className="text-xl font-bold text-white mb-2">Iterate</h3>
                <p className="text-gray-400 text-sm">Embrace the feedback loop</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/10 border border-blue-500/30 rounded-xl p-6">
                <div className="text-4xl font-bold text-blue-400 mb-2">V</div>
                <h3 className="text-xl font-bold text-white mb-2">Validate</h3>
                <p className="text-gray-400 text-sm">Test assumptions early</p>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-green-500/10 border border-green-500/30 rounded-xl p-6">
                <div className="text-4xl font-bold text-green-400 mb-2">E</div>
                <h3 className="text-xl font-bold text-white mb-2">Execute</h3>
                <p className="text-gray-400 text-sm">Ship with confidence</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Design: Start with Intent</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <p className="text-gray-300 mb-4">
                Traditional workflows start with pixel-perfect mockups and detailed specifications. 
                DRIVE starts with <span className="text-white font-semibold">design intent</span>.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Design thinking meets code thinking</li>
                <li>• Rapid sketching in the browser</li>
                <li>• Design tokens from the start</li>
                <li>• Build to understand, understand to build</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Rapid: Speed as a Feature</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <p className="text-gray-300 mb-4">
                Why speed matters: <span className="text-studio-coral font-semibold">More iterations = Better outcomes</span>
              </p>
              <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 mb-4">
                <p className="text-studio-pink font-mono text-sm mb-2">The 80/20 Rule:</p>
                <p className="text-gray-400 text-sm">Ship 80% of the solution in 20% of the time. Perfect later.</p>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>• Time-boxing techniques for DRIVE sessions</li>
                <li>• Validate ideas before investing weeks</li>
                <li>• Fail fast, learn faster</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Iterate: Embrace the Loop</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <p className="text-gray-300 mb-4">See it. Adjust it. Ship it. Repeat.</p>
              <ul className="space-y-2 text-gray-300">
                <li>• Real-time validation with stakeholders</li>
                <li>• Version control for design (Git basics)</li>
                <li>• Know when to stop iterating</li>
                <li>• Good enough {'>'} Perfect someday</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-studio-coral/10 to-studio-purple/10 border border-studio-pink/30 rounded-xl p-6 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">The DRIVE Mindset</h3>
              <p className="text-gray-300 text-lg">
                "Done is better than perfect. Shipping beats planning. Learning trumps knowing."
              </p>
            </div>

            <button
              onClick={() => setActivePage('drive-session')}
              className="px-6 py-3 bg-studio-pink hover:bg-studio-coral text-white rounded-xl transition-colors font-medium"
            >
              Learn How to Run a DRIVE Session →
            </button>
          </div>
        );

      case 'drive-session':
        return (
          <div className="prose prose-invert max-w-none">
            <h1 className="text-5xl font-bold text-white mb-6">Running a DRIVE Session</h1>
            <p className="text-xl text-gray-300 mb-8">Time-boxed design sprints that deliver results</p>

            <div className="bg-gradient-to-r from-studio-coral/10 to-studio-pink/10 border border-studio-coral/30 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-3">What is a DRIVE Session?</h3>
              <p className="text-gray-300">
                A <span className="text-white font-semibold">focused, time-boxed design sprint</span> (1-4 hours) 
                where you build, iterate, and validate specific deliverables using AI-assisted development.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Session Formats</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <div className="text-studio-coral text-2xl font-bold mb-2">Solo</div>
                <p className="text-gray-400 mb-2">1-2 hours</p>
                <p className="text-gray-300 text-sm">Personal exploration and rapid prototyping</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <div className="text-studio-pink text-2xl font-bold mb-2">Pair</div>
                <p className="text-gray-400 mb-2">2 hours</p>
                <p className="text-gray-300 text-sm">Designer + Designer or Designer + Engineer</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <div className="text-studio-purple text-2xl font-bold mb-2">Team</div>
                <p className="text-gray-400 mb-2">2-4 hours</p>
                <p className="text-gray-300 text-sm">Full team design sprint with validation</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Session Structure</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-gray-900 border-l-4 border-studio-coral rounded-r-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">1. Preparation (15 min)</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ Define the goal: What are we building?</li>
                  <li>✓ Gather inputs: References, requirements, constraints</li>
                  <li>✓ Set up environment: VS Code, Copilot, materials</li>
                  <li>✓ Time box: Decide on end time</li>
                </ul>
              </div>

              <div className="bg-gray-900 border-l-4 border-studio-pink rounded-r-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">2. Design Phase (30-60 min)</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Rapid sketching in code</li>
                  <li>• Multiple quick explorations (3-5 versions)</li>
                  <li>• Don't overthink, just build</li>
                  <li>• Diverge before you converge</li>
                </ul>
              </div>

              <div className="bg-gray-900 border-l-4 border-studio-purple rounded-r-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">3. Iterate Phase (30-60 min)</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Review what you built</li>
                  <li>• Pick the strongest direction</li>
                  <li>• Refine and polish details</li>
                  <li>• Add interactions and micro-animations</li>
                </ul>
              </div>

              <div className="bg-gray-900 border-l-4 border-blue-500 rounded-r-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">4. Validate Phase (15-30 min)</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Test on different devices</li>
                  <li>• Accessibility check</li>
                  <li>• Share with stakeholder/teammate</li>
                  <li>• Gather quick feedback</li>
                </ul>
              </div>

              <div className="bg-gray-900 border-l-4 border-green-500 rounded-r-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">5. Execute Phase (15-30 min)</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Final polish</li>
                  <li>• Documentation and comments</li>
                  <li>• Commit to Git</li>
                  <li>• Handoff or deploy</li>
                </ul>
              </div>
            </div>

            <div className="bg-studio-pink/10 border border-studio-pink/30 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-3">Retrospective (10 min)</h3>
              <p className="text-gray-300 mb-4">Always end with reflection:</p>
              <ul className="space-y-2 text-gray-300">
                <li>• What worked well?</li>
                <li>• What slowed us down?</li>
                <li>• What did we learn?</li>
                <li>• What will we do differently next time?</li>
              </ul>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setActivePage('exploration')}
                className="px-6 py-3 bg-studio-pink hover:bg-studio-coral text-white rounded-xl transition-colors font-medium"
              >
                Design Exploration Flow →
              </button>
              <button
                onClick={() => setActivePage('prototyping')}
                className="px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white rounded-xl transition-colors font-medium"
              >
                Rapid Prototyping
              </button>
            </div>
          </div>
        );

      case 'faq':
        return (
          <div className="prose prose-invert max-w-none">
            <h1 className="text-5xl font-bold text-white mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-300 mb-12">Everything you need to know about DRIVE</p>

            {/* General Questions */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 pb-3 border-b border-gray-800">General Questions</h2>
              
              <div className="space-y-3">
                <details className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden group">
                  <summary className="p-6 cursor-pointer hover:bg-gray-800/50 transition-colors flex items-center justify-between">
                    <h3 className="text-xl font-bold text-studio-coral">What exactly is DRIVE?</h3>
                    <svg className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 pt-2">
                    <p className="text-gray-300">
                      DRIVE is a methodology for rapid UX design and development that stands for <span className="text-white font-semibold">Design-Rapid-Iterate-Validate-Execute</span>. 
                      It's a framework that enables designers to move from concept to working prototypes in hours instead of days or weeks. 
                      Vibe coding is the core practice within DRIVE that uses AI-assisted development to rapidly translate design intent into functional code.
                    </p>
                  </div>
                </details>

                <details className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden group">
                  <summary className="p-6 cursor-pointer hover:bg-gray-800/50 transition-colors flex items-center justify-between">
                    <h3 className="text-xl font-bold text-studio-coral">Do I need to know how to code to use DRIVE?</h3>
                    <svg className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 pt-2">
                    <p className="text-gray-300 mb-3">
                      <span className="text-white font-semibold">No!</span> DRIVE is designed for UX designers without coding experience. 
                      You'll work with AI assistants (like GitHub Copilot) that understand design intent and generate code for you.
                    </p>
                    <p className="text-gray-300">
                      You'll learn to read and modify code over time, but you don't need to be a developer. 
                      Think of it as <span className="text-studio-pink">designing by building</span> rather than designing by documenting.
                    </p>
                  </div>
                </details>

                <details className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden group">
                  <summary className="p-6 cursor-pointer hover:bg-gray-800/50 transition-colors flex items-center justify-between">
                    <h3 className="text-xl font-bold text-studio-coral">How is DRIVE different from traditional design workflows?</h3>
                    <svg className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 pt-2">
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                        <p className="text-red-400 font-semibold mb-2">Traditional workflow:</p>
                        <ul className="text-gray-400 text-sm space-y-1">
                          <li>→ Design in Figma</li>
                          <li>→ Create specs</li>
                          <li>→ Hand off to engineering</li>
                          <li>→ Wait for build</li>
                          <li>→ Review</li>
                          <li>→ Request changes</li>
                          <li>→ Repeat...</li>
                        </ul>
                      </div>
                      <div className="bg-gray-950 border border-studio-pink/30 rounded-lg p-4">
                        <p className="text-studio-pink font-semibold mb-2">DRIVE workflow:</p>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>→ Design intent</li>
                          <li>→ AI-assisted build</li>
                          <li>→ Iterate live</li>
                          <li>→ Validate immediately</li>
                          <li>→ Ship or hand off</li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-gray-300">
                      The key difference: You're building <span className="text-white font-semibold">functional experiences</span>, not static mockups. 
                      Feedback loops are minutes, not days.
                    </p>
                  </div>
                </details>

                <details className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden group">
                  <summary className="p-6 cursor-pointer hover:bg-gray-800/50 transition-colors flex items-center justify-between">
                    <h3 className="text-xl font-bold text-studio-coral">Will DRIVE replace developers/engineers?</h3>
                    <svg className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 pt-2">
                    <p className="text-gray-300 mb-3">
                      <span className="text-white font-semibold">No.</span> DRIVE enhances collaboration between designers and engineers, it doesn't replace anyone.
                    </p>
                    <p className="text-gray-300 mb-3">
                      Designers can now prototype and validate faster, but production implementation still benefits from engineering expertise, especially for:
                    </p>
                    <ul className="text-gray-300 space-y-1">
                      <li>• Complex functionality</li>
                      <li>• Backend integration</li>
                      <li>• Performance optimization</li>
                      <li>• Scalability</li>
                    </ul>
                    <p className="text-gray-400 text-sm mt-3">
                      Think of DRIVE as expanding what designers can do, not replacing what engineers do.
                    </p>
                  </div>
                </details>

                <details className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden group">
                  <summary className="p-6 cursor-pointer hover:bg-gray-800/50 transition-colors flex items-center justify-between">
                    <h3 className="text-xl font-bold text-studio-coral">How long does it take to learn vibe coding?</h3>
                    <svg className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 pt-2">
                    <div className="space-y-3 text-gray-300">
                      <p>
                        <span className="text-studio-pink font-semibold">30 minutes:</span> Build your first component
                      </p>
                      <p>
                        <span className="text-studio-pink font-semibold">4-6 hours:</span> Comfortable with basics (2-3 DRIVE sessions)
                      </p>
                      <p>
                        <span className="text-studio-pink font-semibold">2-3 weeks:</span> True proficiency develops as you build your personal library
                      </p>
                      <p className="text-gray-400 text-sm">
                        The learning curve is gentle because AI handles much of the complexity.
                      </p>
                    </div>
                  </div>
                </details>

                <details className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden group">
                  <summary className="p-6 cursor-pointer hover:bg-gray-800/50 transition-colors flex items-center justify-between">
                    <h3 className="text-xl font-bold text-studio-coral">What's the difference between DRIVE and vibe coding?</h3>
                    <svg className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 pt-2">
                    <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                      <p className="text-white mb-2"><span className="text-studio-coral font-semibold">DRIVE:</span> The complete methodology (the "what" and "why")</p>
                      <p className="text-white"><span className="text-studio-pink font-semibold">Vibe coding:</span> The practice/technique within DRIVE (the "how")</p>
                    </div>
                    <p className="text-gray-400 text-sm mt-3">
                      It's like: Agile (methodology) contains Scrum (practice). You practice vibe coding as part of running DRIVE sessions.
                    </p>
                  </div>
                </details>

                <details className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden group">
                  <summary className="p-6 cursor-pointer hover:bg-gray-800/50 transition-colors flex items-center justify-between">
                    <h3 className="text-xl font-bold text-studio-coral">How much does DRIVE cost?</h3>
                    <svg className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 pt-2">
                    <p className="text-gray-300 mb-4">
                      <span className="text-white font-semibold">DRIVE itself is free!</span> The documentation, community, and resources are all freely available.
                    </p>
                    <p className="text-gray-300 mb-3">However, you'll need:</p>
                    <ul className="text-gray-300 space-y-2">
                      <li>• <span className="text-white">GitHub Copilot:</span> ~$10/month (free trial available, free for students/teachers)</li>
                      <li>• <span className="text-white">VS Code:</span> Free</li>
                      <li>• <span className="text-white">GitHub Spark:</span> Free</li>
                    </ul>
                    <p className="text-gray-400 text-sm mt-3">
                      Optional: Design tool subscriptions (Figma, etc.) if you don't already have them.
                    </p>
                  </div>
                </details>
              </div>
            </div>

            {/* Technical Questions */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 pb-3 border-b border-gray-800">Technical Questions</h2>
              
              <div className="space-y-3">
                <details className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden group">
                  <summary className="p-6 cursor-pointer hover:bg-gray-800/50 transition-colors flex items-center justify-between">
                    <h3 className="text-xl font-bold text-studio-pink">What browsers does code built with DRIVE support?</h3>
                    <svg className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 pt-2">
                  <p className="text-gray-300 mb-3">
                    Code generated through vibe coding typically supports <span className="text-white font-semibold">modern browsers</span> 
                    (Chrome, Firefox, Safari, Edge - last 2 versions).
                  </p>
                  <p className="text-gray-300 mb-3">Specific support depends on:</p>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Features you use (CSS Grid, Flexbox, etc.)</li>
                    <li>• Frameworks you choose</li>
                    <li>• Your AI prompts (you can specify browser support)</li>
                  </ul>
                  <p className="text-gray-400 text-sm mt-3">
                    Always test in target browsers. Use <code className="text-studio-coral bg-gray-800 px-2 py-1 rounded">caniuse.com</code> to check feature support.
                  </p>
                  </div>
                </details>

                <details className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden group">
                  <summary className="p-6 cursor-pointer hover:bg-gray-800/50 transition-colors flex items-center justify-between">
                    <h3 className="text-xl font-bold text-studio-pink">Can I use DRIVE with React, Vue, or other frameworks?</h3>
                    <svg className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 pt-2">
                  <p className="text-gray-300 mb-3">
                    <span className="text-white font-semibold">Yes!</span> While many tutorials focus on HTML/CSS/vanilla JavaScript for simplicity, 
                    you can absolutely use DRIVE with:
                  </p>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="bg-gray-950 border border-gray-700 rounded px-3 py-2 text-gray-300 text-sm">React components</div>
                    <div className="bg-gray-950 border border-gray-700 rounded px-3 py-2 text-gray-300 text-sm">Vue components</div>
                    <div className="bg-gray-950 border border-gray-700 rounded px-3 py-2 text-gray-300 text-sm">Svelte</div>
                    <div className="bg-gray-950 border border-gray-700 rounded px-3 py-2 text-gray-300 text-sm">Web Components</div>
                  </div>
                    <p className="text-gray-400 text-sm">
                      Prompt: <code className="text-studio-coral bg-gray-800 px-2 py-1 rounded">"Create a React component for..."</code>
                    </p>
                  </div>
                </details>

                <details className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden group">
                  <summary className="p-6 cursor-pointer hover:bg-gray-800/50 transition-colors flex items-center justify-between">
                    <h3 className="text-xl font-bold text-studio-pink">Can I deploy sites I build with DRIVE?</h3>
                    <svg className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 pt-2">
                  <p className="text-gray-300 mb-3">
                    <span className="text-white font-semibold">Absolutely!</span> Common deployment options:
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-gray-950 border border-gray-700 rounded-lg p-3">
                      <p className="text-white font-semibold mb-1">Vercel</p>
                      <p className="text-gray-400 text-sm">Free tier, easy deployment</p>
                    </div>
                    <div className="bg-gray-950 border border-gray-700 rounded-lg p-3">
                      <p className="text-white font-semibold mb-1">Netlify</p>
                      <p className="text-gray-400 text-sm">Free tier, great for static sites</p>
                    </div>
                    <div className="bg-gray-950 border border-gray-700 rounded-lg p-3">
                      <p className="text-white font-semibold mb-1">GitHub Pages</p>
                      <p className="text-gray-400 text-sm">Free, integrates with GitHub</p>
                    </div>
                      <div className="bg-gray-950 border border-gray-700 rounded-lg p-3">
                      <p className="text-white font-semibold mb-1">Cloudflare Pages</p>
                      <p className="text-gray-400 text-sm">Free tier, fast CDN</p>
                    </div>
                  </div>
                  </div>
                </details>

                <details className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden group">
                  <summary className="p-6 cursor-pointer hover:bg-gray-800/50 transition-colors flex items-center justify-between">
                    <h3 className="text-xl font-bold text-studio-pink">What about responsive design?</h3>
                    <svg className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 pt-2">
                  <p className="text-gray-300 mb-3">
                    Responsive design is <span className="text-white font-semibold">core to DRIVE</span>:
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Always prompt for "mobile-first responsive design"</li>
                    <li>• Test at different breakpoints in DevTools</li>
                    <li>• Use relative units (rem, %, vh/vw)</li>
                    <li>• Leverage modern CSS (Grid, Flexbox)</li>
                    <li>• AI can generate responsive code when prompted</li>
                  </ul>
                  <div className="bg-studio-pink/10 border border-studio-pink/30 rounded-lg p-3 mt-3">
                    <p className="text-gray-300 text-sm">
                      <span className="text-studio-pink font-semibold">Tip:</span> "Create a [component] that works from 320px to 1920px wide"
                    </p>
                  </div>
                  </div>
                </details>
              </div>
            </div>

            {/* Tool-Specific */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 pb-3 border-b border-gray-800">Tool-Specific FAQs</h2>
              
              <div className="space-y-3">
                <details className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden group">
                  <summary className="p-6 cursor-pointer hover:bg-gray-800/50 transition-colors flex items-center justify-between">
                    <h3 className="text-xl font-bold text-studio-purple">Copilot vs. Spark - which should I use?</h3>
                    <svg className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 pt-2">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                      <p className="text-studio-coral font-semibold mb-3">Use Copilot (VS Code) when:</p>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Building production-quality work</li>
                        <li>• Need version control</li>
                        <li>• Working with multiple files</li>
                        <li>• Want full control over code</li>
                        <li>• Need extensions ecosystem</li>
                      </ul>
                    </div>
                    <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                      <p className="text-studio-pink font-semibold mb-3">Use Spark when:</p>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Quick 5-minute prototypes</li>
                        <li>• Don't have VS Code access</li>
                        <li>• Want to share live link immediately</li>
                        <li>• Teaching/presenting</li>
                        <li>• Working on mobile/tablet</li>
                      </ul>
                    </div>
                    </div>
                  <p className="text-gray-400 text-sm mt-3">
                    Many designers use both depending on context.
                  </p>
                  </div>
                </details>

                <details className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden group">
                  <summary className="p-6 cursor-pointer hover:bg-gray-800/50 transition-colors flex items-center justify-between">
                    <h3 className="text-xl font-bold text-studio-purple">Do I need a paid Copilot subscription?</h3>
                    <svg className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 pt-2">
                  <p className="text-gray-300 mb-3">
                    GitHub Copilot is a paid tool (~$10/month), <span className="text-white font-semibold">BUT:</span>
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li>• <span className="text-studio-coral">✓</span> Free 30-day trial available</li>
                    <li>• <span className="text-studio-coral">✓</span> Free for verified students</li>
                    <li>• <span className="text-studio-coral">✓</span> Free for teachers</li>
                    <li>• <span className="text-studio-coral">✓</span> Free for open-source maintainers</li>
                    <li>• <span className="text-studio-coral">✓</span> Free for Microsoft employees</li>
                  </ul>
                  <div className="bg-studio-purple/10 border border-studio-purple/30 rounded-lg p-3 mt-3">
                    <p className="text-gray-300 text-sm">
                      <span className="text-studio-purple font-semibold">Tip:</span> Just login to GitHub with your Microsoft ID to access Copilot for free if you're a Microsoft employee.
                    </p>
                  </div>
                  </div>
                </details>
              </div>
            </div>

            {/* Team & Process */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 pb-3 border-b border-gray-800">Team & Process FAQs</h2>
              
              <div className="space-y-3">
                <details className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden group">
                  <summary className="p-6 cursor-pointer hover:bg-gray-800/50 transition-colors flex items-center justify-between">
                    <h3 className="text-xl font-bold text-blue-400">How do I introduce DRIVE to my team?</h3>
                    <svg className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 pt-2">
                  <p className="text-gray-300 mb-3">Suggested approach:</p>
                  <ol className="text-gray-300 space-y-2 list-decimal list-inside">
                    <li>Learn it yourself first (build 2-3 projects)</li>
                    <li>Show, don't tell (demo a quick build)</li>
                    <li>Start small (pilot project with willing teammate)</li>
                    <li>Document results (time saved, iterations)</li>
                    <li>Scale gradually (team workshop, official adoption)</li>
                  </ol>
                  <p className="text-gray-400 text-sm mt-3">
                    Resistance is normal. Prove value through results, not arguments.
                  </p>
                  </div>
                </details>

                <details className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden group">
                  <summary className="p-6 cursor-pointer hover:bg-gray-800/50 transition-colors flex items-center justify-between">
                    <h3 className="text-xl font-bold text-blue-400">Can remote teams use DRIVE effectively?</h3>
                    <svg className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 pt-2">
                  <p className="text-gray-300 mb-3">
                    <span className="text-white font-semibold">Absolutely!</span> Tips for remote DRIVE:
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Use video calls for synchronous sessions</li>
                    <li>• Screen share during pair designing</li>
                    <li>• Async with Loom walkthroughs</li>
                    <li>• Shared GitHub repos</li>
                    <li>• Regular show-and-tells</li>
                  </ul>
                  <p className="text-gray-400 text-sm mt-3">
                    Some teams find remote DRIVE even better (easier screen sharing, recording for async review).
                  </p>
                  </div>
                </details>

                <details className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden group">
                  <summary className="p-6 cursor-pointer hover:bg-gray-800/50 transition-colors flex items-center justify-between">
                    <h3 className="text-xl font-bold text-blue-400">What metrics should we track?</h3>
                    <svg className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 pt-2">
                  <p className="text-gray-300 mb-3">Useful DRIVE metrics:</p>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Time from concept to prototype</li>
                    <li>• Number of iterations per session</li>
                    <li>• Designer confidence scores</li>
                    <li>• Stakeholder satisfaction</li>
                    <li>• Time saved vs. traditional workflow</li>
                    <li>• Handoff clarity ratings</li>
                  </ul>
                  <p className="text-gray-400 text-sm mt-3">
                    Track what matters to your team. Start simple.
                  </p>
                  </div>
                </details>
              </div>
            </div>

            {/* Still have questions */}
            <div className="bg-gradient-to-r from-studio-coral/10 to-studio-purple/10 border border-studio-pink/30 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Still have questions?</h2>
              <p className="text-gray-300 mb-6">
                Can't find what you're looking for? We're here to help!
              </p>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => setActivePage('community')}
                  className="px-6 py-3 bg-studio-pink hover:bg-studio-coral text-white rounded-xl transition-colors font-medium"
                >
                  Join Community
                </button>
                <Link to="/labs" className="px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white rounded-xl transition-colors font-medium">
                  Browse Labs
                </Link>
              </div>
            </div>
          </div>
        );

      case 'best-practices':
        return (
          <div className="prose prose-invert max-w-none">
            <h1 className="text-5xl font-bold text-white mb-6">Best Practices</h1>
            <p className="text-xl text-gray-300 mb-8">Getting the Most Out of DRIVE</p>
            
            <p className="text-gray-300 mb-8">
              This guide helps all users—new or experienced—get up to speed quickly and avoid common pitfalls when building with DRIVE.
            </p>

            {/* 1. Set Your Foundation */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl mb-4 overflow-hidden">
              <button
                onClick={() => toggleBestPractice(1)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-800/50 transition-colors text-left"
              >
                <h2 className="text-2xl font-bold text-white">1. Set Your Foundation: Document Your Context</h2>
                <FaChevronDown 
                  className={`text-gray-400 transition-transform duration-300 ${expandedBestPractices.includes(1) ? 'rotate-180' : ''}`} 
                />
              </button>
              {expandedBestPractices.includes(1) && (
              <div className="px-6 pb-6">
              
              <div className="bg-studio-coral/10 border-l-4 border-studio-coral p-4 rounded-r mb-6">
                <p className="text-white font-semibold mb-2">Why it matters:</p>
                <p className="text-gray-300">Your project context is the foundation for effective AI assistance. A well-documented context helps the AI understand your vision, constraints, and design language—resulting in more accurate and consistent output.</p>
              </div>

              <p className="text-white font-semibold mb-3">Essential elements to document:</p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• <span className="text-white font-medium">Product Vision:</span> What problem are you solving? Who is it for?</li>
                <li>• <span className="text-white font-medium">User Personas:</span> Who will use this? What are their goals and pain points?</li>
                <li>• <span className="text-white font-medium">Design System:</span> Color palette, typography, spacing rules, component patterns</li>
                <li>• <span className="text-white font-medium">Technical Constraints:</span> Framework preferences, browser support, accessibility requirements</li>
                <li>• <span className="text-white font-medium">Brand Guidelines:</span> Tone, voice, visual style, interaction patterns</li>
              </ul>

              <div className="bg-studio-purple/10 border-l-4 border-studio-purple p-4 rounded-r mb-6">
                <p className="text-white font-semibold mb-2">Example Context Document:</p>
                <div className="text-sm text-gray-300 space-y-2 mt-3">
                  <p><span className="text-studio-pink font-mono">Project:</span> Task Management Dashboard</p>
                  <p><span className="text-studio-pink font-mono">Users:</span> Product managers and team leads who need to track projects</p>
                  <p><span className="text-studio-pink font-mono">Style:</span> Modern, clean, inspired by Linear and Notion</p>
                  <p><span className="text-studio-pink font-mono">Colors:</span> Primary: #6366f1 (indigo), Secondary: #ec4899 (pink)</p>
                  <p><span className="text-studio-pink font-mono">Stack:</span> React, Tailwind CSS, Framer Motion for animations</p>
                  <p><span className="text-studio-pink font-mono">Priority:</span> Mobile-responsive, keyboard shortcuts, dark mode</p>
                </div>
              </div>

              <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-400 mb-2">Generate context from existing work:</p>
                <code className="text-studio-pink text-sm">Analyze my current project and generate a comprehensive context document including design patterns, component structure, and technical decisions.</code>
              </div>

              <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-2">Update context as you evolve:</p>
                <code className="text-studio-pink text-sm">Update the project context to reflect the new design direction we discussed. Add the new component library and interaction patterns we've established.</code>
              </div>
              </div>
              )}
            </div>

            {/* 2. Prompting Best Practices */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl mb-4 overflow-hidden">
              <button
                onClick={() => toggleBestPractice(2)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-800/50 transition-colors text-left"
              >
                <h2 className="text-2xl font-bold text-white">2. Master the Art of Prompting</h2>
                <FaChevronDown 
                  className={`text-gray-400 transition-transform duration-300 ${expandedBestPractices.includes(2) ? 'rotate-180' : ''}`} 
                />
              </button>
              {expandedBestPractices.includes(2) && (
              <div className="px-6 pb-6">
              
              <p className="text-gray-300 mb-6">
                Effective prompts are the difference between frustration and flow. Think of the AI as your design partner—communicate clearly, provide context, and be specific about your intent.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                  <p className="text-red-400 font-semibold mb-2 flex items-center gap-2">
                    <span>✗</span> Vague Prompt
                  </p>
                  <code className="text-gray-400 text-sm">Make a button</code>
                </div>
                <div className="bg-gray-950 border border-green-700 rounded-lg p-4">
                  <p className="text-green-400 font-semibold mb-2 flex items-center gap-2">
                    <span>✓</span> Specific Prompt
                  </p>
                  <code className="text-studio-pink text-sm">Create a primary CTA button with rounded corners, coral background (#FF6B6B), white text, and a subtle hover animation that scales to 1.05x</code>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-white font-semibold mb-2">1. Provide Complete Context:</p>
                  <p className="text-gray-400 text-sm mb-3">Include where, what, why, and for whom.</p>
                  <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                    <code className="text-studio-pink text-sm">On the /dashboard page, create a statistics card showing total users. It should display a large number, a label, and a +X% growth indicator. Style it to match our existing cards with a dark background and coral accent.</code>
                  </div>
                </div>

                <div>
                  <p className="text-white font-semibold mb-2">2. Use Visual References:</p>
                  <p className="text-gray-400 text-sm mb-3">Reference existing designs or attach screenshots.</p>
                  <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                    <code className="text-studio-pink text-sm">Create a navigation bar similar to the one on Stripe's dashboard—horizontal layout, subtle shadows, smooth transitions between sections. [Attach screenshot]</code>
                  </div>
                </div>

                <div>
                  <p className="text-white font-semibold mb-2">3. Define Expected Behavior:</p>
                  <p className="text-gray-400 text-sm mb-3">Describe interactions and edge cases.</p>
                  <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                    <code className="text-studio-pink text-sm">When users click "Export", show a loading spinner, then download a CSV file. If the export fails, show an error toast at the top-right. The button should be disabled during the export process.</code>
                  </div>
                </div>

                <div>
                  <p className="text-white font-semibold mb-2">4. Set Boundaries:</p>
                  <p className="text-gray-400 text-sm mb-3">Tell the AI what NOT to change.</p>
                  <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                    <code className="text-studio-pink text-sm">Add this feature to UserProfile.jsx. Do not modify the authentication logic, Header component, or any shared utilities.</code>
                  </div>
                </div>

                <div>
                  <p className="text-white font-semibold mb-2">5. Request Alternatives:</p>
                  <p className="text-gray-400 text-sm mb-3">Get options before committing to implementation.</p>
                  <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                    <code className="text-studio-pink text-sm">Suggest 3 different approaches for implementing the filter system: (1) dropdown menus, (2) sidebar with checkboxes, (3) tag-based filtering. Explain pros/cons of each.</code>
                  </div>
                </div>
              </div>

              <div className="bg-studio-purple/10 border-l-4 border-studio-purple p-4 rounded-r mb-6">
                <p className="text-white font-semibold mb-2">The Incremental Approach:</p>
                <p className="text-gray-300 mb-3">Break complex features into small, testable steps. Validate each step before moving forward.</p>
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 mt-3">
                  <p className="text-sm text-gray-400 mb-2">Progressive Implementation:</p>
                  <ol className="space-y-1 text-studio-pink text-sm">
                    <li>1. Create the basic page structure and layout</li>
                    <li>2. Add static UI components with placeholder data</li>
                    <li>3. Connect to data sources and add real content</li>
                    <li>4. Implement interactions and state management</li>
                    <li>5. Add error handling and loading states</li>
                    <li>6. Polish animations and micro-interactions</li>
                    <li>7. Test across different user roles and scenarios</li>
                  </ol>
                </div>
              </div>

              <div className="bg-studio-coral/10 border-l-4 border-studio-coral p-4 rounded-r">
                <p className="text-white font-semibold mb-2">Pro Tip - The "Explain First" Pattern:</p>
                <p className="text-gray-300">Before asking for implementation, ask the AI to explain its approach. This helps catch issues early.</p>
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 mt-3">
                  <code className="text-studio-pink text-sm">Before implementing, explain how you would build a real-time notification system. What components would you create? How would you handle state updates? What potential issues should we consider?</code>
                </div>
              </div>
              </div>
              )}
            </div>

            {/* 3. Leverage Conversation Mode */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl mb-4 overflow-hidden">
              <button
                onClick={() => toggleBestPractice(3)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-800/50 transition-colors text-left"
              >
                <h2 className="text-2xl font-bold text-white">3. Leverage Conversation Mode Strategically</h2>
                <FaChevronDown 
                  className={`text-gray-400 transition-transform duration-300 ${expandedBestPractices.includes(3) ? 'rotate-180' : ''}`} 
                />
              </button>
              {expandedBestPractices.includes(3) && (
              <div className="px-6 pb-6">
              
              <p className="text-gray-300 mb-6">
                Conversation mode is your design thinking space. Use it to explore ideas, debug issues, and plan architecture before making changes. Think of it as sketching before committing to final designs.
              </p>

              <div className="bg-studio-pink/10 border-l-4 border-studio-pink p-4 rounded-r mb-6">
                <p className="text-white font-semibold mb-2">The 70/30 Rule:</p>
                <p className="text-gray-300">Spend 70% of your time in conversation mode planning and validating, 30% implementing. This ratio dramatically reduces errors and rework.</p>
              </div>

              <p className="text-white font-semibold mb-3">When to use Conversation Mode:</p>
              <div className="space-y-3 mb-6">
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                  <p className="text-white font-medium mb-2 flex items-center gap-2">
                    <FaBullseye className="text-studio-coral" /> Before Starting New Features
                  </p>
                  <p className="text-gray-400 text-sm mb-2">Explore approaches and get recommendations</p>
                  <code className="text-studio-pink text-sm">I want to add a calendar view to the dashboard. What are 3 different UI approaches I could take? Consider mobile responsiveness and data visualization.</code>
                </div>

                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                  <p className="text-white font-medium mb-2 flex items-center gap-2">
                    <FaBug className="text-red-400" /> When Debugging
                  </p>
                  <p className="text-gray-400 text-sm mb-2">After 2-3 failed attempts, switch to analysis mode</p>
                  <code className="text-studio-pink text-sm">The filter isn't working correctly—it's not clearing when I click reset. Don't fix it yet. First, analyze the component structure and explain what might be causing this issue.</code>
                </div>

                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                  <p className="text-white font-medium mb-2 flex items-center gap-2">
                    <MdArchitecture className="text-blue-400" /> For Architecture Decisions
                  </p>
                  <p className="text-gray-400 text-sm mb-2">Validate your approach before building</p>
                  <code className="text-studio-pink text-sm">I'm building a multi-step form with 5 sections. Should I use a single component with conditional rendering, separate components for each step, or a wizard pattern? Explain trade-offs for each.</code>
                </div>

                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                  <p className="text-white font-medium mb-2 flex items-center gap-2">
                    <FaSearch className="text-purple-400" /> For Code Reviews
                  </p>
                  <p className="text-gray-400 text-sm mb-2">Audit what was just built</p>
                  <code className="text-studio-pink text-sm">Review the UserProfile component we just created. Are there any accessibility issues? Performance concerns? Better patterns we should consider?</code>
                </div>

                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                  <p className="text-white font-medium mb-2 flex items-center gap-2">
                    <FaBook className="text-yellow-400" /> For Learning
                  </p>
                  <p className="text-gray-400 text-sm mb-2">Understand before implementing</p>
                  <code className="text-studio-pink text-sm">Explain how Framer Motion's layout animations work and show me 3 use cases where they'd improve the user experience in our dashboard.</code>
                </div>
              </div>

              <div className="bg-studio-purple/10 border-l-4 border-studio-purple p-4 rounded-r mb-6">
                <p className="text-white font-semibold mb-2">Conversation → Plan → Validate → Implement:</p>
                <p className="text-gray-300 mb-3">The safest workflow for complex features</p>
                <ol className="space-y-2 text-gray-300 text-sm">
                  <li>1. <span className="text-white font-medium">Discuss:</span> "How should I implement X?"</li>
                  <li>2. <span className="text-white font-medium">Plan:</span> "Create a detailed plan for approach #2"</li>
                  <li>3. <span className="text-white font-medium">Validate:</span> "Review this plan for potential issues"</li>
                  <li>4. <span className="text-white font-medium">Implement:</span> "Implement the validated plan"</li>
                </ol>
              </div>

              <div className="bg-studio-coral/10 border-l-4 border-studio-coral p-4 rounded-r">
                <p className="text-white font-semibold mb-2">Prevent Unwanted Changes:</p>
                <p className="text-gray-300 mb-3">Keep control over what gets modified</p>
                <div className="space-y-2">
                  <div className="bg-gray-950 border border-gray-700 rounded-lg p-3">
                    <code className="text-studio-pink text-sm">Analyze this error but don't make any changes yet.</code>
                  </div>
                  <div className="bg-gray-950 border border-gray-700 rounded-lg p-3">
                    <code className="text-studio-pink text-sm">Suggest solutions without implementing them.</code>
                  </div>
                  <div className="bg-gray-950 border border-gray-700 rounded-lg p-3">
                    <code className="text-studio-pink text-sm">Explain what would need to change, but wait for my confirmation.</code>
                  </div>
                </div>
              </div>
              </div>
              )}
            </div>

            {/* 4. Master Version Control */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl mb-4 overflow-hidden">
              <button
                onClick={() => toggleBestPractice(4)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-800/50 transition-colors text-left"
              >
                <h2 className="text-2xl font-bold text-white">4. Master Version Control & Iteration</h2>
                <FaChevronDown 
                  className={`text-gray-400 transition-transform duration-300 ${expandedBestPractices.includes(4) ? 'rotate-180' : ''}`} 
                />
              </button>
              {expandedBestPractices.includes(4) && (
              <div className="px-6 pb-6">
              
              <p className="text-gray-300 mb-6">
                Version control is your safety net. In AI-assisted development, changes happen fast—having clear checkpoints prevents hours of backtracking.
              </p>

              <div className="bg-studio-coral/10 border-l-4 border-studio-coral p-4 rounded-r mb-6">
                <p className="text-white font-semibold mb-2">The Golden Rule:</p>
                <p className="text-gray-300">Always commit working states. Never leave a session without a stable checkpoint.</p>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-white font-semibold mb-3">Commit Strategy:</p>
                  <div className="space-y-3">
                    <div className="bg-gray-950 border border-green-700 rounded-lg p-4">
                      <p className="text-green-400 font-medium mb-2">✓ Feature Complete</p>
                      <p className="text-gray-400 text-sm mb-2">Commit message: "Add user profile page with edit functionality"</p>
                      <p className="text-gray-500 text-xs">Everything works, tested, no console errors</p>
                    </div>

                    <div className="bg-gray-950 border border-blue-700 rounded-lg p-4">
                      <p className="text-blue-400 font-medium mb-2">✓ Stable Checkpoint</p>
                      <p className="text-gray-400 text-sm mb-2">Commit message: "Dashboard layout complete, before adding filters"</p>
                      <p className="text-gray-500 text-xs">Mark these as "safe return points" before major changes</p>
                    </div>

                    <div className="bg-gray-950 border border-yellow-700 rounded-lg p-4">
                      <p className="text-yellow-400 font-medium mb-2">⚠ Work in Progress</p>
                      <p className="text-gray-400 text-sm mb-2">Commit message: "WIP: Testing new animation approach"</p>
                      <p className="text-gray-500 text-xs">Clearly label experimental work</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-white font-semibold mb-3">Branching Strategy:</p>
                  <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• <span className="text-white font-medium">main:</span> Production-ready, stable code only</li>
                      <li>• <span className="text-white font-medium">develop:</span> Latest working features, daily commits</li>
                      <li>• <span className="text-white font-medium">feature/[name]:</span> Experimental work, new features</li>
                      <li>• <span className="text-white font-medium">fix/[issue]:</span> Bug fixes and patches</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <p className="text-white font-semibold mb-3">When Things Break:</p>
                  <div className="space-y-3">
                    <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                      <p className="text-gray-400 text-sm mb-2">1. Compare with last working version:</p>
                      <code className="text-studio-pink text-sm">Show me what changed between the current version and the last working commit. Highlight any modifications to [ComponentName].</code>
                    </div>
                    
                    <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                      <p className="text-gray-400 text-sm mb-2">2. Identify breaking changes:</p>
                      <code className="text-studio-pink text-sm">Compare the previous 3 commits. Which changes could have caused the navigation to break?</code>
                    </div>
                    
                    <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                      <p className="text-gray-400 text-sm mb-2">3. Selective rollback:</p>
                      <code className="text-studio-pink text-sm">Revert only the changes to UserAuth.jsx from the last commit, but keep everything else.</code>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-studio-purple/10 border-l-4 border-studio-purple p-4 rounded-r mb-6">
                <p className="text-white font-semibold mb-2">Testing Before Committing:</p>
                <ul className="space-y-2 text-gray-300 text-sm mt-3">
                  <li>• Check all interactive elements (buttons, forms, links)</li>
                  <li>• Test responsive behavior (mobile, tablet, desktop)</li>
                  <li>• Verify no console errors or warnings</li>
                  <li>• Review accessibility (keyboard navigation, screen reader labels)</li>
                  <li>• Test edge cases (empty states, loading states, errors)</li>
                </ul>
              </div>

              <div className="bg-studio-pink/10 border-l-4 border-studio-pink p-4 rounded-r">
                <p className="text-white font-semibold mb-2">Pro Tip - Tag Your Milestones:</p>
                <p className="text-gray-300 mb-2">Use tags for major versions you might want to reference later:</p>
                <ul className="space-y-1 text-gray-400 text-sm mt-3">
                  <li>• <code className="text-studio-pink">v1.0-mvp</code> - First working version</li>
                  <li>• <code className="text-studio-pink">v1.1-redesign</code> - After major UI refresh</li>
                  <li>• <code className="text-studio-pink">demo-ready</code> - Stable version for presentations</li>
                </ul>
              </div>
              </div>
              )}
            </div>

            {/* 5. Visual Edit Tool */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl mb-4 overflow-hidden">
              <button
                onClick={() => toggleBestPractice(5)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-800/50 transition-colors text-left"
              >
                <h2 className="text-2xl font-bold text-white">5. Use Visual Edit for Quick UI Fixes</h2>
                <FaChevronDown 
                  className={`text-gray-400 transition-transform duration-300 ${expandedBestPractices.includes(5) ? 'rotate-180' : ''}`} 
                />
              </button>
              {expandedBestPractices.includes(5) && (
              <div className="px-6 pb-6">
              
              <p className="text-gray-300 mb-4">
                The Visual Edit tool is fast and efficient. Use it instead of prompts for:
              </p>

              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• Changing text, colors, fonts, layout tweaks</li>
                <li>• Editing multiple small elements at once</li>
                <li>• Safe, quick commits (with undo available)</li>
              </ul>
              </div>
              )}
            </div>

            {/* 6. When All Else Fails */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl mb-4 overflow-hidden">
              <button
                onClick={() => toggleBestPractice(6)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-800/50 transition-colors text-left"
              >
                <h2 className="text-2xl font-bold text-white">6. When All Else Fails: Start Fresh</h2>
                <FaChevronDown 
                  className={`text-gray-400 transition-transform duration-300 ${expandedBestPractices.includes(6) ? 'rotate-180' : ''}`} 
                />
              </button>
              {expandedBestPractices.includes(6) && (
              <div className="px-6 pb-6">
              
              <p className="text-gray-300 mb-6">
                Many users realize: doing it all over takes less time the second time.
              </p>

              <p className="text-white font-semibold mb-3">Create a clean copy of your project:</p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• Rebuild with better prompting + clearer knowledge</li>
                <li>• Use your old project as reference only</li>
                <li>• Start with a stable foundation</li>
              </ul>

              <p className="text-white font-semibold mb-3">Use cases:</p>
              <ul className="space-y-2 text-gray-300">
                <li>• You're stuck in a buggy loop</li>
                <li>• You want to restart clean with preserved history</li>
                <li>• You need to try a new architecture approach</li>
              </ul>
              </div>
              )}
            </div>

            {/* 7. Ask for Help */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl mb-4 overflow-hidden">
              <button
                onClick={() => toggleBestPractice(7)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-800/50 transition-colors text-left"
              >
                <h2 className="text-2xl font-bold text-white">7. Use the Docs & Ask for Help</h2>
                <FaChevronDown 
                  className={`text-gray-400 transition-transform duration-300 ${expandedBestPractices.includes(7) ? 'rotate-180' : ''}`} 
                />
              </button>
              {expandedBestPractices.includes(7) && (
              <div className="px-6 pb-6">
              <ul className="space-y-3 text-gray-300 mb-6">
                <li>• Documentation contains walkthroughs, templates, and integrations</li>
                <li>• Join the community for peer support</li>
                <li>• Submit your project to DRIVE Labs when ready</li>
              </ul>
              </div>
              )}
            </div>

            {/* 8. Bonus Tips */}
            <div className="bg-gradient-to-r from-studio-purple/10 to-studio-pink/10 border border-studio-pink/30 rounded-xl mb-4 overflow-hidden">
              <button
                onClick={() => toggleBestPractice(8)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-800/50 transition-colors text-left"
              >
                <h2 className="text-2xl font-bold text-white">8. Bonus Tips</h2>
                <FaChevronDown 
                  className={`text-gray-400 transition-transform duration-300 ${expandedBestPractices.includes(8) ? 'rotate-180' : ''}`} 
                />
              </button>
              {expandedBestPractices.includes(8) && (
              <div className="px-6 pb-6">
              
              <div className="space-y-4 text-gray-300">
                <div>
                  <p className="text-white font-semibold mb-2">Voice Notes:</p>
                  <p className="text-sm">Use dictation for long prompts (e.g. On Mac, use the mic). You'll craft better input faster—especially useful when tired.</p>
                </div>

                <div>
                  <p className="text-white font-semibold mb-2">Frustration Pattern:</p>
                  <p className="text-sm">Use the "I am frustrated…" prompt pattern to nudge better AI focus.</p>
                </div>

                <div>
                  <p className="text-white font-semibold mb-2">Multi-Role Apps:</p>
                  <p className="text-sm">Always recheck multiple roles after major edits (especially with conditional logic).</p>
                </div>

                <div>
                  <p className="text-white font-semibold mb-2">Component Isolation:</p>
                  <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 mt-2">
                    <code className="text-studio-pink text-sm">Create a component specifically for [role X] and do not reuse shared components unless clearly scoped.</code>
                  </div>
                </div>
              </div>
              </div>
              )}
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-studio-coral/10 to-studio-purple/10 border border-studio-pink/30 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Build?</h2>
              <p className="text-gray-300 mb-6">
                Apply these best practices and start creating with DRIVE.
              </p>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => setActivePage('first-session')}
                  className="px-6 py-3 bg-studio-pink hover:bg-studio-coral text-white rounded-xl transition-colors font-medium"
                >
                  Your First Session →
                </button>
                <Link to="/tools" className="px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white rounded-xl transition-colors font-medium">
                  Browse Tools
                </Link>
              </div>
            </div>
          </div>
        );

      case 'common-mistakes':
        return (
          <div className="prose prose-invert max-w-none">
            <h1 className="text-5xl font-bold text-white mb-6">Common Mistakes to Avoid</h1>
            <p className="text-xl text-gray-300 mb-8">Learn from others' experiences—sidestep these pitfalls</p>
            
            <p className="text-gray-300 mb-8">
              Even experienced designers make these mistakes when starting with AI-assisted development. Knowing them upfront saves hours of frustration.
            </p>

            {/* Mistake 1 */}
            <div className="bg-gray-900 border-l-4 border-red-500 rounded-r-xl mb-4 overflow-hidden">
              <button
                onClick={() => toggleMistake(1)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-800/50 transition-colors text-left"
              >
                <h2 className="text-xl font-bold text-white flex items-center gap-3">
                  <span className="text-red-500">❌</span>
                  1. Skipping Context Documentation
                </h2>
                <FaChevronDown 
                  className={`text-gray-400 transition-transform duration-300 ${expandedMistakes.includes(1) ? 'rotate-180' : ''}`} 
                />
              </button>
              {expandedMistakes.includes(1) && (
              <div className="px-6 pb-6">
              
              <p className="text-gray-300 mb-4">
                <span className="text-red-400 font-semibold">The Mistake:</span> Jumping straight into building without documenting project context, design system, or user needs.
              </p>

              <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-400 mb-2">What happens:</p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• AI generates inconsistent UI patterns</li>
                  <li>• Each prompt requires re-explaining the same context</li>
                  <li>• Components don't follow your design language</li>
                  <li>• You waste time correcting preventable errors</li>
                </ul>
              </div>

              <div className="bg-studio-coral/10 border border-studio-coral rounded-lg p-4">
                <p className="text-studio-coral font-semibold mb-2">✓ Better Approach:</p>
                <p className="text-gray-300 text-sm">Spend 15-30 minutes documenting your project context before your first prompt. Include design system, user personas, and technical preferences.</p>
              </div>
              </div>
              )}
            </div>

            {/* Mistake 2 */}
            <div className="bg-gray-900 border-l-4 border-red-500 rounded-r-xl mb-4 overflow-hidden">
              <button
                onClick={() => toggleMistake(2)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-800/50 transition-colors text-left"
              >
                <h2 className="text-xl font-bold text-white flex items-center gap-3">
                  <span className="text-red-500">❌</span>
                  2. Vague, Ambiguous Prompts
                </h2>
                <FaChevronDown 
                  className={`text-gray-400 transition-transform duration-300 ${expandedMistakes.includes(2) ? 'rotate-180' : ''}`} 
                />
              </button>
              {expandedMistakes.includes(2) && (
              <div className="px-6 pb-6">
              
              <p className="text-gray-300 mb-4">
                <span className="text-red-400 font-semibold">The Mistake:</span> Using generic prompts like "add a button" or "make it better" without specific details.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-red-950/30 border border-red-700 rounded-lg p-4">
                  <p className="text-red-400 font-medium mb-2">❌ Vague</p>
                  <code className="text-gray-400 text-sm">"Add a form"</code>
                </div>
                <div className="bg-green-950/30 border border-green-700 rounded-lg p-4">
                  <p className="text-green-400 font-medium mb-2">✓ Specific</p>
                  <code className="text-studio-pink text-sm">"Create a login form with email and password fields, a 'Remember me' checkbox, and a primary submit button. Style it with our brand colors and add inline validation."</code>
                </div>
              </div>

              <div className="bg-studio-coral/10 border border-studio-coral rounded-lg p-4">
                <p className="text-studio-coral font-semibold mb-2">✓ Better Approach:</p>
                <p className="text-gray-300 text-sm">Always include: What (component), Where (page/location), Why (purpose), How (behavior), and Style (visual requirements).</p>
              </div>
              </div>
              )}
            </div>

            {/* Mistake 3 */}
            <div className="bg-gray-900 border-l-4 border-red-500 rounded-r-xl mb-4 overflow-hidden">
              <button
                onClick={() => toggleMistake(3)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-800/50 transition-colors text-left"
              >
                <h2 className="text-xl font-bold text-white flex items-center gap-3">
                  <span className="text-red-500">❌</span>
                  3. Implementing Everything at Once
                </h2>
                <FaChevronDown 
                  className={`text-gray-400 transition-transform duration-300 ${expandedMistakes.includes(3) ? 'rotate-180' : ''}`} 
                />
              </button>
              {expandedMistakes.includes(3) && (
              <div className="px-6 pb-6">
              
              <p className="text-gray-300 mb-4">
                <span className="text-red-400 font-semibold">The Mistake:</span> Trying to build an entire feature in one massive prompt.
              </p>

              <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-400 mb-2">What happens:</p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• AI makes unexpected changes to unrelated code</li>
                  <li>• Hard to identify where bugs were introduced</li>
                  <li>• Difficult to roll back specific changes</li>
                  <li>• Testing becomes overwhelming</li>
                </ul>
              </div>

              <div className="bg-studio-coral/10 border border-studio-coral rounded-lg p-4">
                <p className="text-studio-coral font-semibold mb-2">✓ Better Approach:</p>
                <p className="text-gray-300 text-sm mb-3">Break features into 3-5 small steps. Build → Test → Validate → Next step.</p>
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-3 mt-3">
                  <p className="text-gray-400 text-xs mb-2">Example breakdown:</p>
                  <ol className="space-y-1 text-studio-pink text-xs">
                    <li>1. Create empty dashboard page with header</li>
                    <li>2. Add statistics cards with placeholder data</li>
                    <li>3. Connect real data from API</li>
                    <li>4. Add filtering functionality</li>
                    <li>5. Implement loading and error states</li>
                  </ol>
                </div>
              </div>
              </div>
              )}
            </div>

            {/* Mistake 4 */}
            <div className="bg-gray-900 border-l-4 border-red-500 rounded-r-xl mb-4 overflow-hidden">
              <button
                onClick={() => toggleMistake(4)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-800/50 transition-colors text-left"
              >
                <h2 className="text-xl font-bold text-white flex items-center gap-3">
                  <span className="text-red-500">❌</span>
                  4. Not Testing Before Moving Forward
                </h2>
                <FaChevronDown 
                  className={`text-gray-400 transition-transform duration-300 ${expandedMistakes.includes(4) ? 'rotate-180' : ''}`} 
                />
              </button>
              {expandedMistakes.includes(4) && (
              <div className="px-6 pb-6">
              
              <p className="text-gray-300 mb-4">
                <span className="text-red-400 font-semibold">The Mistake:</span> Chaining multiple changes without testing each one.
              </p>

              <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-400 mb-2">Consequences:</p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Bugs compound on top of bugs</li>
                  <li>• Can't identify which change broke what</li>
                  <li>• End up with a broken project and no clear path back</li>
                </ul>
              </div>

              <div className="bg-studio-coral/10 border border-studio-coral rounded-lg p-4">
                <p className="text-studio-coral font-semibold mb-2">✓ Better Approach:</p>
                <p className="text-gray-300 text-sm">After each implementation: (1) Check it works, (2) Test interactions, (3) Review console, (4) Commit, then (5) Move to next feature.</p>
              </div>
              </div>
              )}
            </div>

            {/* Mistake 5 */}
            <div className="bg-gray-900 border-l-4 border-red-500 rounded-r-xl mb-4 overflow-hidden">
              <button
                onClick={() => toggleMistake(5)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-800/50 transition-colors text-left"
              >
                <h2 className="text-xl font-bold text-white flex items-center gap-3">
                  <span className="text-red-500">❌</span>
                  5. Ignoring Version Control
                </h2>
                <FaChevronDown 
                  className={`text-gray-400 transition-transform duration-300 ${expandedMistakes.includes(5) ? 'rotate-180' : ''}`} 
                />
              </button>
              {expandedMistakes.includes(5) && (
              <div className="px-6 pb-6">
              
              <p className="text-gray-300 mb-4">
                <span className="text-red-400 font-semibold">The Mistake:</span> Working without commits, or committing only at the end of the day.
              </p>

              <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-400 mb-2">What happens:</p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• No way to return to working states</li>
                  <li>• Can't compare what changed when bugs appear</li>
                  <li>• Lose hours of work if something breaks badly</li>
                  <li>• Stressful, high-risk development</li>
                </ul>
              </div>

              <div className="bg-studio-coral/10 border border-studio-coral rounded-lg p-4">
                <p className="text-studio-coral font-semibold mb-2">✓ Better Approach:</p>
                <p className="text-gray-300 text-sm">Commit after every working feature. Use descriptive messages. Tag stable versions you can return to.</p>
              </div>
              </div>
              )}
            </div>

            {/* Mistake 6 */}
            <div className="bg-gray-900 border-l-4 border-red-500 rounded-r-xl mb-4 overflow-hidden">
              <button
                onClick={() => toggleMistake(6)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-800/50 transition-colors text-left"
              >
                <h2 className="text-xl font-bold text-white flex items-center gap-3">
                  <span className="text-red-500">❌</span>
                  6. Accepting First AI Output Without Review
                </h2>
                <FaChevronDown 
                  className={`text-gray-400 transition-transform duration-300 ${expandedMistakes.includes(6) ? 'rotate-180' : ''}`} 
                />
              </button>
              {expandedMistakes.includes(6) && (
              <div className="px-6 pb-6">
              
              <p className="text-gray-300 mb-4">
                <span className="text-red-400 font-semibold">The Mistake:</span> Implementing AI suggestions immediately without questioning or validating.
              </p>

              <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-400 mb-2">Why this hurts:</p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• AI might not understand full context</li>
                  <li>• May introduce anti-patterns or technical debt</li>
                  <li>• Could break accessibility or responsive behavior</li>
                  <li>• Might use outdated or inefficient approaches</li>
                </ul>
              </div>

              <div className="bg-studio-coral/10 border border-studio-coral rounded-lg p-4">
                <p className="text-studio-coral font-semibold mb-2">✓ Better Approach:</p>
                <p className="text-gray-300 text-sm mb-3">Use conversation mode first: "Suggest 3 approaches and explain trade-offs." Review before implementing.</p>
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-3 mt-3">
                  <code className="text-studio-pink text-sm">Explain your approach before implementing. What are potential issues I should be aware of?</code>
                </div>
              </div>
              </div>
              )}
            </div>

            {/* Mistake 7 */}
            <div className="bg-gray-900 border-l-4 border-red-500 rounded-r-xl mb-4 overflow-hidden">
              <button
                onClick={() => toggleMistake(7)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-800/50 transition-colors text-left"
              >
                <h2 className="text-xl font-bold text-white flex items-center gap-3">
                  <span className="text-red-500">❌</span>
                  7. Letting AI Make Unconstrained Changes
                </h2>
                <FaChevronDown 
                  className={`text-gray-400 transition-transform duration-300 ${expandedMistakes.includes(7) ? 'rotate-180' : ''}`} 
                />
              </button>
              {expandedMistakes.includes(7) && (
              <div className="px-6 pb-6">
              
              <p className="text-gray-300 mb-4">
                <span className="text-red-400 font-semibold">The Mistake:</span> Not setting boundaries on what code the AI can modify.
              </p>

              <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-400 mb-2">Result:</p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Unrelated components get "improved" unexpectedly</li>
                  <li>• Shared utilities get modified, breaking other features</li>
                  <li>• Working features suddenly stop functioning</li>
                </ul>
              </div>

              <div className="bg-studio-coral/10 border border-studio-coral rounded-lg p-4">
                <p className="text-studio-coral font-semibold mb-2">✓ Better Approach:</p>
                <p className="text-gray-300 text-sm mb-3">Always specify what NOT to touch in your prompts.</p>
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-3 mt-3">
                  <code className="text-studio-pink text-sm">Implement this in ProfilePage.jsx only. Do not modify Header.jsx, AuthContext.tsx, or any shared utilities.</code>
                </div>
              </div>
              </div>
              )}
            </div>

            {/* Mistake 8 */}
            <div className="bg-gray-900 border-l-4 border-red-500 rounded-r-xl mb-4 overflow-hidden">
              <button
                onClick={() => toggleMistake(8)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-800/50 transition-colors text-left"
              >
                <h2 className="text-xl font-bold text-white flex items-center gap-3">
                  <span className="text-red-500">❌</span>
                  8. Forgetting Responsive & Accessibility
                </h2>
                <FaChevronDown 
                  className={`text-gray-400 transition-transform duration-300 ${expandedMistakes.includes(8) ? 'rotate-180' : ''}`} 
                />
              </button>
              {expandedMistakes.includes(8) && (
              <div className="px-6 pb-6">
              
              <p className="text-gray-300 mb-4">
                <span className="text-red-400 font-semibold">The Mistake:</span> Only testing on desktop, ignoring mobile and accessibility considerations.
              </p>

              <div className="bg-studio-coral/10 border border-studio-coral rounded-lg p-4">
                <p className="text-studio-coral font-semibold mb-2">✓ Better Approach:</p>
                <p className="text-gray-300 text-sm mb-3">Include requirements in every UI prompt:</p>
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-3 mt-3">
                  <code className="text-studio-pink text-sm">Create a navigation menu that's fully responsive (mobile-first), keyboard navigable, and includes proper ARIA labels for screen readers.</code>
                </div>
              </div>
              </div>
              )}
            </div>

            {/* Mistake 9 */}
            <div className="bg-gray-900 border-l-4 border-red-500 rounded-r-xl mb-4 overflow-hidden">
              <button
                onClick={() => toggleMistake(9)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-800/50 transition-colors text-left"
              >
                <h2 className="text-xl font-bold text-white flex items-center gap-3">
                  <span className="text-red-500">❌</span>
                  9. Working When Frustrated
                </h2>
                <FaChevronDown 
                  className={`text-gray-400 transition-transform duration-300 ${expandedMistakes.includes(9) ? 'rotate-180' : ''}`} 
                />
              </button>
              {expandedMistakes.includes(9) && (
              <div className="px-6 pb-6">
              
              <p className="text-gray-300 mb-4">
                <span className="text-red-400 font-semibold">The Mistake:</span> Pushing through when stuck in a loop of bugs and failed fixes.
              </p>

              <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-400 mb-2">What happens:</p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Prompts become less clear and more emotional</li>
                  <li>• You make impulsive changes that create more problems</li>
                  <li>• Miss obvious solutions</li>
                  <li>• Quality of work drops significantly</li>
                </ul>
              </div>

              <div className="bg-studio-coral/10 border border-studio-coral rounded-lg p-4">
                <p className="text-studio-coral font-semibold mb-2">✓ Better Approach:</p>
                <p className="text-gray-300 text-sm">After 3 failed attempts: (1) Switch to conversation mode, (2) Ask AI to analyze the problem, (3) Take a 10-minute break, or (4) Revert to last working version and try a different approach.</p>
              </div>
              </div>
              )}
            </div>

            {/* Mistake 10 */}
            <div className="bg-gray-900 border-l-4 border-red-500 rounded-r-xl mb-4 overflow-hidden">
              <button
                onClick={() => toggleMistake(10)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-800/50 transition-colors text-left"
              >
                <h2 className="text-xl font-bold text-white flex items-center gap-3">
                  <span className="text-red-500">❌</span>
                  10. Not Learning from AI Outputs
                </h2>
                <FaChevronDown 
                  className={`text-gray-400 transition-transform duration-300 ${expandedMistakes.includes(10) ? 'rotate-180' : ''}`} 
                />
              </button>
              {expandedMistakes.includes(10) && (
              <div className="px-6 pb-6">
              <p className="text-gray-300 mb-4">
                <span className="text-red-400 font-semibold">The Mistake:</span> Treating AI as a black box—never reviewing or learning from generated code.
              </p>

              <div className="bg-studio-coral/10 border border-studio-coral rounded-lg p-4">
                <p className="text-studio-coral font-semibold mb-2">✓ Better Approach:</p>
                <p className="text-gray-300 text-sm mb-3">Ask AI to explain its decisions. Learn patterns you can reuse.</p>
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-3 mt-3">
                  <code className="text-studio-pink text-sm">Explain the pattern you used for this animation. When should I use this approach vs alternatives?</code>
                </div>
              </div>
              </div>
              )}
            </div>

            {/* Summary */}
            <div className="bg-gradient-to-r from-studio-coral/10 to-studio-purple/10 border border-studio-pink/30 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Remember</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Most mistakes come from rushing, being vague, or not testing. Slow down, be specific, test often, and commit frequently. These habits transform AI assistance from frustrating to magical.
              </p>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => setActivePage('best-practices')}
                  className="px-6 py-3 bg-studio-pink hover:bg-studio-coral text-white rounded-xl transition-colors font-medium"
                >
                  ← Back to Best Practices
                </button>
                <Link to="/labs" className="px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white rounded-xl transition-colors font-medium">
                  See Examples in Labs
                </Link>
              </div>
            </div>
          </div>
        );

      case 'figma-mcp':
        return (
          <div className="prose prose-invert max-w-none">
            <h1 className="text-5xl font-bold text-white mb-6">Figma MCP Server</h1>
            <p className="text-xl text-gray-300 mb-8">
              Connect your AI assistant directly to Figma for seamless design-to-code workflows
            </p>

            <div className="bg-gradient-to-r from-studio-purple/20 to-studio-pink/20 border border-studio-purple/30 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">What is Figma MCP?</h2>
              <p className="text-gray-300 mb-4">
                The Figma Model Context Protocol (MCP) server enables your AI coding assistant to directly access your 
                Figma files, read design specs, extract styles, and understand your design system—all without leaving your code editor.
              </p>
              <p className="text-gray-300">
                <span className="text-studio-coral font-semibold">No more switching tabs.</span> No more manual spec copying. 
                Your AI can see exactly what you see in Figma.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">🎨 Design Access</h3>
                <p className="text-gray-400">Read frames, components, and design tokens directly from Figma files</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">📐 Style Extraction</h3>
                <p className="text-gray-400">Automatically extract colors, typography, spacing, and layout specs</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">🔄 Real-time Sync</h3>
                <p className="text-gray-400">Changes in Figma are instantly available to your AI assistant</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">🎯 Component Library</h3>
                <p className="text-gray-400">AI understands your design system and reusable components</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Installation</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <p className="text-gray-300 mb-4">Install the Figma MCP server via npm:</p>
              <pre className="bg-gray-950 border border-gray-700 rounded-lg p-4 mb-4 overflow-x-auto">
                <code className="text-studio-pink text-sm">npm install -g @modelcontextprotocol/server-figma</code>
              </pre>
              <p className="text-gray-300 mb-4">Or using the VS Code Copilot extension:</p>
              <ol className="space-y-2 text-gray-300 list-decimal list-inside">
                <li>Open VS Code settings</li>
                <li>Search for "MCP Servers"</li>
                <li>Add Figma MCP server configuration</li>
                <li>Enter your Figma API token</li>
              </ol>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Getting Your Figma API Token</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <ol className="space-y-3 text-gray-300 list-decimal list-inside">
                <li>Go to Figma → Settings → Account</li>
                <li>Scroll to "Personal Access Tokens"</li>
                <li>Click "Generate new token"</li>
                <li>Name it "DRIVE MCP" and copy the token</li>
                <li>Add to your MCP server configuration</li>
              </ol>
              <div className="bg-yellow-900/20 border border-yellow-700/30 rounded-lg p-4 mt-4">
                <p className="text-yellow-200 text-sm">
                  <strong>Security Note:</strong> Keep your API token secure. Never commit it to version control. 
                  Use environment variables or secure storage.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Configuration Example</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <p className="text-gray-300 mb-4">Add this to your MCP server configuration:</p>
              <pre className="bg-gray-950 border border-gray-700 rounded-lg p-4 overflow-x-auto">
                <code className="text-studio-pink text-sm">{`{
  "mcpServers": {
    "figma": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-figma"],
      "env": {
        "FIGMA_PERSONAL_ACCESS_TOKEN": "your-token-here"
      }
    }
  }
}`}</code>
              </pre>
            </div>

            <div className="bg-studio-coral/10 border-l-4 border-studio-coral p-6 rounded-r mb-8">
              <h3 className="text-xl font-bold text-white mb-3">Pro Tip</h3>
              <p className="text-gray-300">
                Once configured, your AI can reference Figma designs by file URL. Just paste a Figma link in your 
                prompt and ask the AI to implement that design!
              </p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setActivePage('importing-designs')}
                className="px-6 py-3 bg-studio-pink hover:bg-studio-coral text-white rounded-xl transition-colors font-medium"
              >
                Learn to Import Designs →
              </button>
              <button
                onClick={() => setActivePage('figma-to-code')}
                className="px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white rounded-xl transition-colors font-medium"
              >
                Figma to Code Workflow
              </button>
            </div>
          </div>
        );

      case 'importing-designs':
        return (
          <div className="prose prose-invert max-w-none">
            <h1 className="text-5xl font-bold text-white mb-6">Importing Figma Designs</h1>
            <p className="text-xl text-gray-300 mb-8">
              Turn your Figma designs into working code with AI assistance
            </p>

            <div className="bg-gradient-to-r from-studio-coral/10 to-studio-pink/10 border border-studio-coral/30 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">The DRIVE Approach</h2>
              <p className="text-gray-300">
                Instead of pixel-perfect copying, DRIVE helps you <span className="text-white font-semibold">translate design 
                intent into functional code</span>. The AI understands your design system, spacing patterns, and component 
                structure to generate clean, maintainable code.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Method 1: Direct Figma Link (With MCP)</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <p className="text-gray-300 mb-4">
                If you've set up the Figma MCP server, this is the fastest method:
              </p>
              <ol className="space-y-4 text-gray-300 list-decimal list-inside">
                <li>Copy your Figma frame or component link</li>
                <li>Paste it in your AI assistant chat</li>
                <li>Describe what you want to build</li>
              </ol>
              
              <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 mt-4">
                <p className="text-gray-400 text-sm mb-2">Example prompt:</p>
                <code className="text-studio-pink text-sm">
                  I want to implement this design: [Figma URL]
                  <br /><br />
                  Create a React component that matches this design. Use Tailwind CSS for styling. 
                  Make it responsive and add hover states for interactive elements.
                </code>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Method 2: Screenshot + Description</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <p className="text-gray-300 mb-4">
                Works without MCP server (using AI vision capabilities):
              </p>
              <ol className="space-y-4 text-gray-300 list-decimal list-inside">
                <li>Take a screenshot of your Figma design</li>
                <li>Upload it to your AI assistant (Copilot Chat, Spark, etc.)</li>
                <li>Provide detailed specifications</li>
              </ol>
              
              <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 mt-4">
                <p className="text-gray-400 text-sm mb-2">Example prompt:</p>
                <code className="text-studio-pink text-sm">
                  [Screenshot attached]
                  <br /><br />
                  Build this card component. Key specs:
                  <br />- Background: gradient from purple to pink
                  <br />- Border radius: 16px
                  <br />- Padding: 24px
                  <br />- Shadow: medium elevation
                  <br />- Font: Inter, title 24px bold, body 14px regular
                  <br />- Button: primary style with hover effect
                </code>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Method 3: Design Specs Manual</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <p className="text-gray-300 mb-4">
                For complex designs, create a mini spec document:
              </p>
              <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                <code className="text-studio-pink text-sm">{`Component: User Profile Card

Structure:
- Container: 400px wide, auto height
- Avatar: 80px circle, top-left
- Name: h3, right of avatar
- Bio: 2 lines max, ellipsis overflow
- Stats: 3 columns (followers, following, posts)
- Action buttons: Follow + Message

Colors:
- Background: #1a1a1a
- Text primary: #ffffff
- Text secondary: #9ca3af
- Accent: #ec4899

Spacing:
- Container padding: 24px
- Gap between elements: 16px
- Button spacing: 8px

Interactions:
- Hover state on buttons
- Click to expand bio`}</code>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Best Practices</h2>
            <div className="space-y-4 mb-8">
              <div className="bg-studio-coral/10 border-l-4 border-studio-coral p-4 rounded-r">
                <p className="text-white font-semibold mb-2">✓ Start with Structure</p>
                <p className="text-gray-300 text-sm">
                  First get the layout and components right. Worry about pixel-perfect styling later.
                </p>
              </div>
              
              <div className="bg-studio-pink/10 border-l-4 border-studio-pink p-4 rounded-r">
                <p className="text-white font-semibold mb-2">✓ Reference Your Design System</p>
                <p className="text-gray-300 text-sm">
                  Tell the AI about your existing components, colors, and patterns. Consistency matters more than perfection.
                </p>
              </div>
              
              <div className="bg-studio-purple/10 border-l-4 border-studio-purple p-4 rounded-r">
                <p className="text-white font-semibold mb-2">✓ Iterate in Small Steps</p>
                <p className="text-gray-300 text-sm">
                  Build the basic version first. Then refine spacing, colors, responsive behavior, and interactions one at a time.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Common Gotchas</h2>
            <div className="bg-red-900/20 border border-red-700/30 rounded-xl p-6 mb-8">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400">→</span>
                  <span><strong>AI can't read private Figma files</strong> without MCP and proper token access</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400">→</span>
                  <span><strong>Auto-layout != Flexbox</strong> - AI translates intent, not exact Figma properties</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400">→</span>
                  <span><strong>Fonts may differ</strong> - Make sure you specify web-safe fonts or include font imports</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400">→</span>
                  <span><strong>Interactions need describing</strong> - Figma prototypes don't auto-translate to code logic</span>
                </li>
              </ul>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setActivePage('figma-to-code')}
                className="px-6 py-3 bg-studio-pink hover:bg-studio-coral text-white rounded-xl transition-colors font-medium"
              >
                See Full Workflow →
              </button>
              <button
                onClick={() => setActivePage('figma-mcp')}
                className="px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white rounded-xl transition-colors font-medium"
              >
                Setup Figma MCP
              </button>
            </div>
          </div>
        );

      case 'figma-to-code':
        return (
          <div className="prose prose-invert max-w-none">
            <h1 className="text-5xl font-bold text-white mb-6">Figma to Code Workflow</h1>
            <p className="text-xl text-gray-300 mb-8">
              The complete process from design file to functional code
            </p>

            <div className="bg-gradient-to-r from-studio-purple/20 to-studio-coral/20 border border-studio-purple/30 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">The 4-Step Workflow</h2>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-studio-coral mb-2">1</div>
                  <p className="text-white font-semibold">Prepare</p>
                  <p className="text-gray-400 text-sm">Review design</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-studio-pink mb-2">2</div>
                  <p className="text-white font-semibold">Import</p>
                  <p className="text-gray-400 text-sm">Connect to AI</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-studio-purple mb-2">3</div>
                  <p className="text-white font-semibold">Build</p>
                  <p className="text-gray-400 text-sm">Generate code</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">4</div>
                  <p className="text-white font-semibold">Refine</p>
                  <p className="text-gray-400 text-sm">Iterate & polish</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Step 1: Prepare Your Design (5 min)</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">In Figma:</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-studio-coral">✓</span>
                  <span>Organize your design into clear frames/components</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-studio-coral">✓</span>
                  <span>Name layers meaningfully (button-primary, card-header, etc.)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-studio-coral">✓</span>
                  <span>Use consistent spacing and sizing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-studio-coral">✓</span>
                  <span>Document any complex interactions or states</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Step 2: Import to Your Workspace (2 min)</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <p className="text-gray-300 mb-4">Choose your method:</p>
              
              <div className="space-y-4">
                <div className="bg-gray-950 border border-studio-pink/30 rounded-lg p-4">
                  <p className="text-studio-pink font-semibold mb-2">Option A: With Figma MCP (Recommended)</p>
                  <ol className="text-gray-300 text-sm space-y-2 list-decimal list-inside">
                    <li>Copy Figma frame URL</li>
                    <li>Paste in AI chat with implementation request</li>
                    <li>AI reads design specs automatically</li>
                  </ol>
                </div>

                <div className="bg-gray-950 border border-studio-purple/30 rounded-lg p-4">
                  <p className="text-studio-purple font-semibold mb-2">Option B: Screenshot Method</p>
                  <ol className="text-gray-300 text-sm space-y-2 list-decimal list-inside">
                    <li>Screenshot your design</li>
                    <li>Upload to AI assistant</li>
                    <li>Add written specs and requirements</li>
                  </ol>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Step 3: Build with AI (10-15 min)</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <p className="text-gray-300 mb-4">Prompt template:</p>
              <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 mb-4">
                <code className="text-studio-pink text-sm">{`I need to implement this design: [Figma URL or attach screenshot]

Requirements:
- Framework: React with TypeScript
- Styling: Tailwind CSS
- Responsive: Mobile-first approach
- Accessibility: WCAG 2.1 Level AA
- Components: Use our existing Button and Card components

Please:
1. Create the component structure first
2. Then add styling to match the design
3. Make it fully responsive
4. Add proper TypeScript types`}</code>
              </div>

              <div className="bg-studio-pink/10 border-l-4 border-studio-pink p-4 rounded-r">
                <p className="text-white font-semibold mb-2">Pro Tip:</p>
                <p className="text-gray-300 text-sm">
                  Start with structure, then styling, then interactivity. Don't try to get everything perfect in one prompt.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Step 4: Refine & Polish (10-15 min)</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <p className="text-gray-300 mb-4">Common refinements:</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-studio-coral">1.</span>
                  <span><strong>Spacing adjustments:</strong> "Increase the padding on the card to 24px"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-studio-pink">2.</span>
                  <span><strong>Color tweaks:</strong> "Make the background slightly darker, use #1a1a1a"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-studio-purple">3.</span>
                  <span><strong>Responsive fixes:</strong> "On mobile, stack the buttons vertically"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400">4.</span>
                  <span><strong>Interactions:</strong> "Add a smooth hover animation to the card"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400">5.</span>
                  <span><strong>Accessibility:</strong> "Add aria-labels to the icon buttons"</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Example: Complete Session</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <div className="space-y-4">
                <div className="bg-gray-950 border-l-4 border-studio-coral rounded-r p-4">
                  <p className="text-gray-400 text-xs mb-2">PROMPT 1 (Structure)</p>
                  <p className="text-gray-300 text-sm">
                    Create a pricing card component with header, price, features list, and CTA button. Use the design from: 
                    [Figma URL]
                  </p>
                </div>

                <div className="bg-gray-950 border-l-4 border-studio-pink rounded-r p-4">
                  <p className="text-gray-400 text-xs mb-2">PROMPT 2 (Styling)</p>
                  <p className="text-gray-300 text-sm">
                    Add a gradient border, update colors to match our brand (purple/pink), and add shadow on hover
                  </p>
                </div>

                <div className="bg-gray-950 border-l-4 border-studio-purple rounded-r p-4">
                  <p className="text-gray-400 text-xs mb-2">PROMPT 3 (Responsive)</p>
                  <p className="text-gray-300 text-sm">
                    Make it responsive: full width on mobile, max 400px on desktop, adjust text sizes for mobile
                  </p>
                </div>

                <div className="bg-gray-950 border-l-4 border-green-400 rounded-r p-4">
                  <p className="text-gray-400 text-xs mb-2">PROMPT 4 (Polish)</p>
                  <p className="text-gray-300 text-sm">
                    Add smooth transitions, loading state for the button, and make feature checkmarks animated
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-900/20 border border-green-700/30 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <FaCheckCircle className="text-green-400" /> Success Metrics
              </h3>
              <p className="text-gray-300 mb-4">You'll know you're done when:</p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400 flex-shrink-0 text-sm" /> 
                  Design matches at 90%+ fidelity
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400 flex-shrink-0 text-sm" /> 
                  Responsive on all breakpoints
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400 flex-shrink-0 text-sm" /> 
                  All interactions work smoothly
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400 flex-shrink-0 text-sm" /> 
                  Code is clean and maintainable
                </li>
              </ul>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setActivePage('importing-designs')}
                className="px-6 py-3 bg-studio-pink hover:bg-studio-coral text-white rounded-xl transition-colors font-medium"
              >
                Import Methods →
              </button>
              <button
                onClick={() => setActivePage('iteration-workflow')}
                className="px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white rounded-xl transition-colors font-medium"
              >
                Learn Iteration Loop
              </button>
            </div>
          </div>
        );

      case 'ai-assistants':
        return (
          <div className="prose prose-invert max-w-none">
            <h1 className="text-5xl font-bold text-white mb-6">Working with AI Assistants</h1>
            <p className="text-xl text-gray-300 mb-8">
              Understanding AI as your coding partner in the DRIVE workflow
            </p>

            <div className="bg-gradient-to-r from-studio-purple/20 to-studio-pink/20 border border-studio-purple/30 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">AI as Your Coding Partner</h2>
              <p className="text-gray-300 mb-4">
                AI assistants like GitHub Copilot aren't just autocomplete on steroids—they're collaborative partners that understand 
                context, intent, and design patterns. The key to success is knowing how to work <span className="text-white font-semibold">with</span> AI, 
                not just use it.
              </p>
              <p className="text-gray-300">
                Think of AI as a junior developer who's read millions of codebases but needs your guidance on what you're building 
                and why. You're the designer, architect, and decision-maker. AI is the executor.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">What AI Can Do</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-studio-pink mb-3">✓ Excels At</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Generating boilerplate code and structure</li>
                  <li>• Translating design specs into components</li>
                  <li>• Creating variations of existing patterns</li>
                  <li>• Writing repetitive code (forms, CRUD, etc.)</li>
                  <li>• Suggesting modern syntax and patterns</li>
                  <li>• Adapting code to different frameworks</li>
                  <li>• Adding responsive and accessible features</li>
                </ul>
              </div>
              
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-studio-coral mb-3">⚠️ Needs Guidance On</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Complex business logic</li>
                  <li>• Architectural decisions</li>
                  <li>• Brand-specific design details</li>
                  <li>• Performance optimization trade-offs</li>
                  <li>• Security considerations</li>
                  <li>• User experience nuances</li>
                  <li>• Edge case handling</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">The Human-AI Partnership</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <span className="text-studio-purple">👤</span> You (The Designer)
                  </h3>
                  <ul className="text-gray-300 space-y-2 ml-8">
                    <li>• Define the vision and requirements</li>
                    <li>• Make creative and UX decisions</li>
                    <li>• Set constraints and boundaries</li>
                    <li>• Validate and refine output</li>
                    <li>• Test and ensure quality</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <span className="text-studio-pink">🤖</span> AI (The Executor)
                  </h3>
                  <ul className="text-gray-300 space-y-2 ml-8">
                    <li>• Generates code based on your instructions</li>
                    <li>• Suggests patterns and best practices</li>
                    <li>• Handles implementation details</li>
                    <li>• Adapts to your feedback</li>
                    <li>• Speeds up iteration cycles</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">AI Interaction Modes</h2>
            <div className="space-y-4 mb-8">
              <div className="bg-gradient-to-r from-studio-blue/10 to-studio-blue/5 border-l-4 border-studio-blue p-6 rounded-r-xl">
                <h3 className="text-xl font-bold text-white mb-2">1. Inline Completion Mode</h3>
                <p className="text-gray-300 mb-3">
                  <span className="text-white font-semibold">When:</span> Writing code directly in your editor
                </p>
                <p className="text-gray-300 mb-3">
                  <span className="text-white font-semibold">How it works:</span> AI suggests completions as you type. Press Tab to accept.
                </p>
                <p className="text-gray-300 text-sm">
                  <span className="text-studio-blue font-semibold">Best for:</span> Building component structure, adding styles, writing functions
                </p>
              </div>

              <div className="bg-gradient-to-r from-studio-pink/10 to-studio-pink/5 border-l-4 border-studio-pink p-6 rounded-r-xl">
                <h3 className="text-xl font-bold text-white mb-2">2. Chat/Conversation Mode</h3>
                <p className="text-gray-300 mb-3">
                  <span className="text-white font-semibold">When:</span> You need to explain complex requirements or debug
                </p>
                <p className="text-gray-300 mb-3">
                  <span className="text-white font-semibold">How it works:</span> Open chat panel, describe what you want, get targeted responses
                </p>
                <p className="text-gray-300 text-sm">
                  <span className="text-studio-pink font-semibold">Best for:</span> Problem-solving, refactoring, getting explanations
                </p>
              </div>

              <div className="bg-gradient-to-r from-studio-purple/10 to-studio-purple/5 border-l-4 border-studio-purple p-6 rounded-r-xl">
                <h3 className="text-xl font-bold text-white mb-2">3. Comment-Driven Development</h3>
                <p className="text-gray-300 mb-3">
                  <span className="text-white font-semibold">When:</span> Starting a new feature or component
                </p>
                <p className="text-gray-300 mb-3">
                  <span className="text-white font-semibold">How it works:</span> Write detailed comments describing what you want, AI generates the code
                </p>
                <p className="text-gray-300 text-sm">
                  <span className="text-studio-purple font-semibold">Best for:</span> Rapid prototyping, learning new patterns
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Best Practices</h2>
            <div className="space-y-4 mb-8">
              <div className="bg-studio-pink/10 border-l-4 border-studio-pink p-4 rounded-r">
                <p className="text-white font-semibold mb-2">✓ Start Conversations, Not Commands</p>
                <p className="text-gray-300 text-sm">
                  Instead of: "Make a button"<br />
                  Try: "I need a primary button component that matches our brand. It should have hover states, loading states, and be accessible."
                </p>
              </div>
              
              <div className="bg-studio-blue/10 border-l-4 border-studio-blue p-4 rounded-r">
                <p className="text-white font-semibold mb-2">✓ Build Trust Through Testing</p>
                <p className="text-gray-300 text-sm">
                  Don't blindly accept AI suggestions. Test every feature. Build confidence by verifying outputs.
                </p>
              </div>
              
              <div className="bg-studio-purple/10 border-l-4 border-studio-purple p-4 rounded-r">
                <p className="text-white font-semibold mb-2">✓ Iterate and Refine</p>
                <p className="text-gray-300 text-sm">
                  First pass rarely perfect. Use follow-up prompts: "Make it more responsive" or "Add error handling"
                </p>
              </div>

              <div className="bg-studio-coral/10 border-l-4 border-studio-coral p-4 rounded-r">
                <p className="text-white font-semibold mb-2">✓ Learn from AI Code</p>
                <p className="text-gray-300 text-sm">
                  Don't just copy-paste. Read the generated code. Understand patterns. Ask AI to explain unfamiliar concepts.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">When NOT to Use AI</h2>
            <div className="bg-red-900/20 border border-red-700/30 rounded-xl p-6 mb-8">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">→</span>
                  <span><strong>Security-critical code</strong> - Always have human review for auth, payment, data handling</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">→</span>
                  <span><strong>When you don't understand the output</strong> - If you can't explain what the code does, don't ship it</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">→</span>
                  <span><strong>Proprietary or sensitive contexts</strong> - Be mindful of what data you share with AI</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">→</span>
                  <span><strong>As a replacement for learning</strong> - Use AI to accelerate, not avoid understanding fundamentals</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-studio-purple/10 to-studio-pink/10 border border-studio-purple/30 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-3">Remember</h3>
              <p className="text-gray-300">
                AI amplifies your abilities—it doesn't replace them. The best DRIVE sessions happen when you bring 
                design thinking and AI brings execution speed. You're always in control.
              </p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setActivePage('prompting-strategies')}
                className="px-6 py-3 bg-studio-pink hover:bg-studio-purple text-white rounded-xl transition-colors font-medium"
              >
                Prompting Strategies →
              </button>
              <button
                onClick={() => setActivePage('philosophy')}
                className="px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white rounded-xl transition-colors font-medium"
              >
                ← DRIVE Philosophy
              </button>
            </div>
          </div>
        );

      case 'prompting-strategies':
        return (
          <div className="prose prose-invert max-w-none">
            <h1 className="text-5xl font-bold text-white mb-6">Effective Prompting Strategies</h1>
            <p className="text-xl text-gray-300 mb-8">
              Master the art of communicating with AI to get better, faster results
            </p>

            <div className="bg-gradient-to-r from-studio-blue/20 to-studio-purple/20 border border-studio-blue/30 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Why Prompting Matters</h2>
              <p className="text-gray-300 mb-4">
                The difference between frustration and flow in vibe coding often comes down to how you communicate with AI. 
                A vague prompt gets vague results. A specific, context-rich prompt unlocks AI's full potential.
              </p>
              <p className="text-gray-300">
                <span className="text-studio-blue font-semibold">Good prompting isn't about being technical—it's about being clear.</span> Think 
                of it like briefing a designer: the more context and constraints you provide, the closer the first draft gets to your vision.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Anatomy of a Great Prompt</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-studio-pink mb-2">1. Context (What & Why)</h3>
                  <p className="text-gray-400 text-sm mb-2">Set the stage. What are you building and why?</p>
                  <div className="bg-gray-950 border border-gray-700 rounded-lg p-3">
                    <code className="text-studio-pink text-sm">"I'm building a SaaS dashboard for project management..."</code>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-studio-blue mb-2">2. Requirements (What it needs)</h3>
                  <p className="text-gray-400 text-sm mb-2">List specific features, behaviors, and constraints</p>
                  <div className="bg-gray-950 border border-gray-700 rounded-lg p-3">
                    <code className="text-studio-blue text-sm">"...needs a sidebar navigation with icons, responsive mobile menu, and active state highlighting..."</code>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-studio-purple mb-2">3. Technical Details (How)</h3>
                  <p className="text-gray-400 text-sm mb-2">Specify frameworks, libraries, patterns to use</p>
                  <div className="bg-gray-950 border border-gray-700 rounded-lg p-3">
                    <code className="text-studio-purple text-sm">"...using React hooks, Tailwind CSS, and React Router for navigation..."</code>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-studio-coral mb-2">4. Style & Polish (Look & Feel)</h3>
                  <p className="text-gray-400 text-sm mb-2">Describe visual style, animations, interactions</p>
                  <div className="bg-gray-950 border border-gray-700 rounded-lg p-3">
                    <code className="text-studio-coral text-sm">"...with smooth transitions, hover effects, and a modern glassmorphism design"</code>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Before & After Examples</h2>
            
            <div className="space-y-6 mb-8">
              {/* Example 1 */}
              <div className="bg-gray-950 border border-gray-800 rounded-xl overflow-hidden">
                <div className="bg-red-900/20 border-b border-red-700/30 p-4">
                  <p className="text-red-400 font-semibold mb-2">❌ Vague Prompt</p>
                  <code className="text-gray-400 text-sm">"Make a button"</code>
                </div>
                <div className="bg-green-900/20 p-4">
                  <p className="text-green-400 font-semibold mb-2">✓ Specific Prompt</p>
                  <code className="text-gray-300 text-sm">
                    "Create a primary button component in React with:<br />
                    - Props for label, onClick, disabled, loading states<br />
                    - Tailwind CSS styling with gradient background (coral to pink)<br />
                    - Hover animation that scales slightly and shifts gradient<br />
                    - Loading state shows spinner and disables interaction<br />
                    - Accessible with proper ARIA labels<br />
                    - Responsive sizing (smaller on mobile)"
                  </code>
                </div>
              </div>

              {/* Example 2 */}
              <div className="bg-gray-950 border border-gray-800 rounded-xl overflow-hidden">
                <div className="bg-red-900/20 border-b border-red-700/30 p-4">
                  <p className="text-red-400 font-semibold mb-2">❌ Vague Prompt</p>
                  <code className="text-gray-400 text-sm">"Add animation to the hero section"</code>
                </div>
                <div className="bg-green-900/20 p-4">
                  <p className="text-green-400 font-semibold mb-2">✓ Specific Prompt</p>
                  <code className="text-gray-300 text-sm">
                    "Add GSAP scroll-triggered animation to the hero section:<br />
                    - Fade in and slide up title from 30px below on page load<br />
                    - Stagger animation for each text line (0.2s delay between)<br />
                    - Parallax effect on background gradient as user scrolls<br />
                    - Smooth easing (power3.out)<br />
                    - Ensure animations work on mobile without janky performance"
                  </code>
                </div>
              </div>

              {/* Example 3 */}
              <div className="bg-gray-950 border border-gray-800 rounded-xl overflow-hidden">
                <div className="bg-red-900/20 border-b border-red-700/30 p-4">
                  <p className="text-red-400 font-semibold mb-2">❌ Vague Prompt</p>
                  <code className="text-gray-400 text-sm">"Fix the form"</code>
                </div>
                <div className="bg-green-900/20 p-4">
                  <p className="text-green-400 font-semibold mb-2">✓ Specific Prompt</p>
                  <code className="text-gray-300 text-sm">
                    "The contact form isn't validating properly. Issues:<br />
                    - Email field accepts invalid formats<br />
                    - Submit button works even when fields are empty<br />
                    - No error messages shown to user<br />
                    <br />
                    Please add:<br />
                    - Real-time validation with regex for email<br />
                    - Disable submit until all required fields valid<br />
                    - Red border and error text below invalid fields<br />
                    - Success message after successful submission"
                  </code>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Prompting Techniques</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-studio-pink mb-4">Progressive Enhancement</h3>
                <p className="text-gray-300 mb-3 text-sm">Build in layers, starting simple</p>
                <div className="space-y-2 text-sm">
                  <div className="bg-gray-950 border border-gray-700 rounded p-2">
                    <p className="text-gray-500">Step 1:</p>
                    <code className="text-studio-pink">"Create basic card component"</code>
                  </div>
                  <div className="bg-gray-950 border border-gray-700 rounded p-2">
                    <p className="text-gray-500">Step 2:</p>
                    <code className="text-studio-pink">"Add hover effects and shadows"</code>
                  </div>
                  <div className="bg-gray-950 border border-gray-700 rounded p-2">
                    <p className="text-gray-500">Step 3:</p>
                    <code className="text-studio-pink">"Make it responsive for mobile"</code>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-studio-blue mb-4">Reference Examples</h3>
                <p className="text-gray-300 mb-3 text-sm">Point to similar work or screenshots</p>
                <div className="bg-gray-950 border border-gray-700 rounded p-3">
                  <code className="text-studio-blue text-sm">
                    "Create a pricing table similar to Stripe's pricing page, with:<br />
                    - Three tier columns<br />
                    - Toggle for monthly/annual<br />
                    - Highlighted 'Popular' tier<br />
                    - Feature comparison checkmarks"
                  </code>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-studio-purple mb-4">Constraint-Based</h3>
                <p className="text-gray-300 mb-3 text-sm">Tell AI what NOT to do</p>
                <div className="bg-gray-950 border border-gray-700 rounded p-3">
                  <code className="text-studio-purple text-sm">
                    "Create a modal component but:<br />
                    - Don't use any external libraries<br />
                    - Don't modify global styles<br />
                    - Keep under 100 lines of code<br />
                    - No jQuery or vanilla DOM manipulation"
                  </code>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-studio-coral mb-4">Conversational Refinement</h3>
                <p className="text-gray-300 mb-3 text-sm">Iterate through dialogue</p>
                <div className="bg-gray-950 border border-gray-700 rounded p-3 space-y-1">
                  <p className="text-studio-coral text-sm">"Create a search bar"</p>
                  <p className="text-gray-500 text-xs">→ AI generates basic version</p>
                  <p className="text-studio-coral text-sm">"Add autocomplete dropdown"</p>
                  <p className="text-gray-500 text-xs">→ AI adds dropdown</p>
                  <p className="text-studio-coral text-sm">"Highlight matching text"</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Advanced Prompting Tips</h2>
            
            <div className="space-y-4 mb-8">
              <div className="bg-studio-blue/10 border-l-4 border-studio-blue p-4 rounded-r">
                <p className="text-white font-semibold mb-2">💡 Use Code Comments as Prompts</p>
                <p className="text-gray-300 text-sm mb-2">Write what you want in comments, let AI fill in the code:</p>
                <div className="bg-gray-950 border border-gray-700 rounded p-2 mt-2">
                  <code className="text-xs text-gray-400">
                    {`// Create a custom hook that fetches user data
// - Accept userId as parameter
// - Return loading, error, and data states
// - Cache results to prevent re-fetching
// - Handle authentication errors`}
                  </code>
                </div>
              </div>

              <div className="bg-studio-pink/10 border-l-4 border-studio-pink p-4 rounded-r">
                <p className="text-white font-semibold mb-2">💡 Ask for Explanations</p>
                <p className="text-gray-300 text-sm">
                  "Explain this approach" or "What are the trade-offs?" helps you learn and validate AI decisions
                </p>
              </div>

              <div className="bg-studio-purple/10 border-l-4 border-studio-purple p-4 rounded-r">
                <p className="text-white font-semibold mb-2">💡 Request Multiple Options</p>
                <p className="text-gray-300 text-sm">
                  "Show me 3 different approaches for implementing this feature" gives you choices to evaluate
                </p>
              </div>

              <div className="bg-studio-coral/10 border-l-4 border-studio-coral p-4 rounded-r">
                <p className="text-white font-semibold mb-2">💡 Include Success Criteria</p>
                <p className="text-gray-300 text-sm">
                  "I'll know this works when [specific outcome]" helps AI understand your definition of done
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-studio-blue/10 to-studio-purple/10 border border-studio-blue/30 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-3">The Golden Rule</h3>
              <p className="text-gray-300 mb-3">
                <span className="text-studio-blue font-semibold">Prompt like you're explaining to a skilled developer who doesn't know your project.</span>
              </p>
              <p className="text-gray-300 text-sm">
                Be specific, provide context, state your constraints, and describe the outcome you want. 
                The 30 seconds you spend crafting a good prompt saves 10 minutes of back-and-forth refinement.
              </p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setActivePage('iterative-design')}
                className="px-6 py-3 bg-studio-blue hover:bg-studio-purple text-white rounded-xl transition-colors font-medium"
              >
                Iterative Design →
              </button>
              <button
                onClick={() => setActivePage('ai-assistants')}
                className="px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white rounded-xl transition-colors font-medium"
              >
                ← AI Assistants
              </button>
            </div>
          </div>
        );

      case 'iterative-design':
        return (
          <div className="prose prose-invert max-w-none">
            <h1 className="text-5xl font-bold text-white mb-6">Iterative Design Process</h1>
            <p className="text-xl text-gray-300 mb-8">
              Master the design-build-test loop that powers rapid DRIVE workflows
            </p>

            <div className="bg-gradient-to-r from-studio-purple/20 to-studio-pink/20 border border-studio-purple/30 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Why Iteration Matters</h2>
              <p className="text-gray-300 mb-4">
                Traditional design workflows move in waterfall: design → handoff → development → feedback → redesign. 
                This cycle takes days or weeks. <span className="text-white font-semibold">DRIVE collapses this into minutes.</span>
              </p>
              <p className="text-gray-300">
                The secret? Tight iteration loops. You're not trying to perfect each step—you're rapidly cycling through 
                design, build, and test to discover what works. Think evolution, not perfection.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">The DRIVE Iteration Loop</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 mb-8">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-studio-pink/20 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-studio-pink">1</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Design Intent</h3>
                  <p className="text-gray-400 text-sm">Sketch rough vision, define requirements</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-studio-blue/20 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-studio-blue">2</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Build Fast</h3>
                  <p className="text-gray-400 text-sm">AI-assisted implementation in minutes</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-studio-purple/20 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-studio-purple">3</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Test & Learn</h3>
                  <p className="text-gray-400 text-sm">Interact, break things, discover issues</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-studio-coral/20 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-studio-coral">4</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Refine</h3>
                  <p className="text-gray-400 text-sm">Adjust based on learnings, repeat</p>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <svg className="w-full h-8" viewBox="0 0 400 30">
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#F45A9B" />
                    </marker>
                  </defs>
                  <path d="M 50 15 Q 125 5, 200 15 T 350 15" stroke="#F45A9B" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
                </svg>
                <p className="text-studio-pink text-sm mt-2">Complete loop in 10-30 minutes →</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Iteration Strategies</h2>

            <div className="space-y-6 mb-8">
              <div className="bg-gray-950 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-studio-pink mb-3">🎯 Start Ugly, End Beautiful</h3>
                <p className="text-gray-300 mb-4">
                  Don't waste time perfecting v1. Build the basic structure first, get it working, THEN polish.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
                    <p className="text-gray-500 text-xs mb-1">Iteration 1</p>
                    <p className="text-white font-semibold text-sm">Functional, no styling</p>
                    <p className="text-gray-400 text-xs mt-2">Validate the logic works</p>
                  </div>
                  <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
                    <p className="text-gray-500 text-xs mb-1">Iteration 2</p>
                    <p className="text-white font-semibold text-sm">Add basic layout</p>
                    <p className="text-gray-400 text-xs mt-2">Get structure right</p>
                  </div>
                  <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
                    <p className="text-gray-500 text-xs mb-1">Iteration 3</p>
                    <p className="text-white font-semibold text-sm">Polish & refine</p>
                    <p className="text-gray-400 text-xs mt-2">Add animations, colors</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-950 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-studio-blue mb-3">⚡ Timeboxing</h3>
                <p className="text-gray-300 mb-4">
                  Set strict time limits for each iteration. Forces decision-making and prevents perfectionism.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 bg-gray-900 rounded p-3">
                    <div className="text-studio-blue font-mono text-sm">15min</div>
                    <div className="flex-1 text-gray-300 text-sm">Build basic version</div>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-900 rounded p-3">
                    <div className="text-studio-blue font-mono text-sm">10min</div>
                    <div className="flex-1 text-gray-300 text-sm">Test in browser, note issues</div>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-900 rounded p-3">
                    <div className="text-studio-blue font-mono text-sm">15min</div>
                    <div className="flex-1 text-gray-300 text-sm">Refine based on testing</div>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-900 rounded p-3">
                    <div className="text-studio-blue font-mono text-sm">10min</div>
                    <div className="flex-1 text-gray-300 text-sm">Polish and commit</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-950 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-studio-purple mb-3">🔄 Parallel Exploration</h3>
                <p className="text-gray-300 mb-4">
                  When stuck between options, build multiple versions quickly and compare.
                </p>
                <div className="bg-gray-900 border border-gray-700 rounded p-4">
                  <code className="text-studio-purple text-sm">
                    "Generate 3 variations of this navigation:<br />
                    1. Sidebar with icons<br />
                    2. Top horizontal bar<br />
                    3. Bottom mobile-style tabs<br />
                    <br />
                    I'll test all three and pick the best"
                  </code>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Feedback Integration</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Self-Feedback</h3>
                <p className="text-gray-300 mb-3 text-sm">Questions to ask yourself during testing:</p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>✓ Does it work on mobile?</li>
                  <li>✓ Can I navigate with keyboard?</li>
                  <li>✓ What happens when I resize the window?</li>
                  <li>✓ What if data is missing?</li>
                  <li>✓ Does it feel responsive?</li>
                  <li>✓ Would my users understand this?</li>
                </ul>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Quick User Testing</h3>
                <p className="text-gray-300 mb-3 text-sm">Get fast feedback:</p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>✓ Show to colleague for 30 seconds</li>
                  <li>✓ Ask: "What would you click first?"</li>
                  <li>✓ Watch them try to use it</li>
                  <li>✓ Note where they hesitate</li>
                  <li>✓ Don't explain—just observe</li>
                  <li>✓ Iterate based on confusion points</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Version Control for Iterations</h2>
            
            <div className="bg-gray-950 border border-gray-800 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-white mb-3">Git Commit Strategy</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Commit after each working iteration. This creates restore points if you need to backtrack.
              </p>
              
              <div className="space-y-2 font-mono text-sm">
                <div className="bg-gray-900 border border-gray-700 rounded p-3">
                  <span className="text-green-400">git commit -m</span> <span className="text-studio-pink">"feat: basic hero section structure"</span>
                </div>
                <div className="bg-gray-900 border border-gray-700 rounded p-3">
                  <span className="text-green-400">git commit -m</span> <span className="text-studio-blue">"style: add responsive breakpoints"</span>
                </div>
                <div className="bg-gray-900 border border-gray-700 rounded p-3">
                  <span className="text-green-400">git commit -m</span> <span className="text-studio-purple">"feat: add scroll animations"</span>
                </div>
                <div className="bg-gray-900 border border-gray-700 rounded p-3">
                  <span className="text-green-400">git commit -m</span> <span className="text-studio-coral">"polish: final styling tweaks"</span>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">When to Stop Iterating</h2>
            
            <div className="bg-yellow-900/20 border border-yellow-700/30 rounded-xl p-6 mb-8">
              <h3 className="text-yellow-300 font-bold mb-3">Know When "Good Enough" is Perfect</h3>
              <p className="text-gray-300 mb-3">
                Iteration is powerful, but endless iteration is procrastination. Stop when:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>✓ It solves the user need</li>
                <li>✓ It works across devices</li>
                <li>✓ It's accessible</li>
                <li>✓ Further changes are cosmetic</li>
                <li>✓ You're making changes just to make changes</li>
              </ul>
              <p className="text-gray-400 text-sm mt-4 italic">
                Ship and learn from real users. You can always iterate after launch.
              </p>
            </div>

            <div className="bg-gradient-to-r from-studio-purple/10 to-studio-pink/10 border border-studio-purple/30 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-3">The Iteration Mindset</h3>
              <p className="text-gray-300">
                <span className="text-studio-purple font-semibold">Progress over perfection.</span> Each iteration teaches you something. 
                The goal isn't to get it right on the first try—it's to learn quickly what "right" even means for this specific project.
              </p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setActivePage('context-management')}
                className="px-6 py-3 bg-studio-purple hover:bg-studio-pink text-white rounded-xl transition-colors font-medium"
              >
                Project Context →
              </button>
              <button
                onClick={() => setActivePage('prompting-strategies')}
                className="px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white rounded-xl transition-colors font-medium"
              >
                ← Prompting Strategies
              </button>
            </div>
          </div>
        );

      case 'context-management':
        return (
          <div className="prose prose-invert max-w-none">
            <h1 className="text-5xl font-bold text-white mb-6">Managing Project Context</h1>
            <p className="text-xl text-gray-300 mb-8">
              Keep AI informed so it generates better, more consistent code
            </p>

            <div className="bg-gradient-to-r from-studio-coral/20 to-studio-purple/20 border border-studio-coral/30 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Why Context Matters</h2>
              <p className="text-gray-300 mb-4">
                AI doesn't remember your project unless you tell it. Every time you start a new chat or file, 
                AI starts fresh—no memory of your design system, naming conventions, or project structure.
              </p>
              <p className="text-gray-300">
                <span className="text-studio-coral font-semibold">Good context management = consistent, high-quality code.</span> The more AI 
                knows about your project, the better its suggestions align with your existing work.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Types of Context</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-studio-pink mb-3">🎨 Design Context</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Brand colors & fonts</li>
                  <li>• Design system rules</li>
                  <li>• Spacing scale</li>
                  <li>• Component patterns</li>
                  <li>• Visual style (modern, minimal, etc.)</li>
                </ul>
              </div>
              
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-studio-blue mb-3">⚙️ Technical Context</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Framework (React, Vue, etc.)</li>
                  <li>• Libraries in use</li>
                  <li>• File structure</li>
                  <li>• Naming conventions</li>
                  <li>• Code patterns</li>
                </ul>
              </div>
              
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-studio-purple mb-3">🎯 Project Context</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• What you're building</li>
                  <li>• Target users</li>
                  <li>• Key features</li>
                  <li>• Constraints</li>
                  <li>• Success criteria</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Context Delivery Methods</h2>

            <div className="space-y-6 mb-8">
              <div className="bg-gray-950 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-studio-coral mb-3">1. Project README</h3>
                <p className="text-gray-300 mb-4">
                  Create a comprehensive README that AI can reference. Include this info:
                </p>
                <div className="bg-gray-900 border border-gray-700 rounded p-4">
                  <code className="text-sm text-gray-300 whitespace-pre-wrap">{`# Project Name
SaaS Dashboard for Project Management

## Tech Stack
- React 18 with TypeScript
- Tailwind CSS for styling
- React Router for navigation
- GSAP for animations

## Design System
### Colors
- Primary: #F45A9B (studio-pink)
- Secondary: #7E80EE (studio-purple)
- Accent: #F2A573 (studio-coral)
- Background: #000000 (black)
- Text: #FFFFFF (white), #9CA3AF (gray-400)

### Typography
- Headings: Plus Jakarta Sans
- Body: Inter

### Spacing Scale
- xs: 4px, sm: 8px, md: 16px, lg: 24px, xl: 32px

## Component Patterns
- All buttons use rounded-xl (12px border radius)
- Cards have border-gray-800 and hover:border-studio-pink
- Animations use GSAP with power3.out easing

## Naming Conventions
- Components: PascalCase (UserProfile.jsx)
- Hooks: camelCase with 'use' prefix (useAuth.js)
- Utils: camelCase (formatDate.js)`}</code>
                </div>
              </div>

              <div className="bg-gray-950 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-studio-pink mb-3">2. Inline Context Comments</h3>
                <p className="text-gray-300 mb-4">
                  Add context directly in your code files where AI will see it:
                </p>
                <div className="bg-gray-900 border border-gray-700 rounded p-4">
                  <code className="text-sm text-gray-300 whitespace-pre-wrap">{`// Design System Reference:
// - Use studio-pink for primary actions
// - Use studio-purple for secondary actions  
// - All spacing uses Tailwind's scale (p-4, p-6, etc.)
// - Buttons always have rounded-xl and hover transitions

function Button({ children, variant = 'primary' }) {
  // Component implementation...
}`}</code>
                </div>
              </div>

              <div className="bg-gray-950 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-studio-blue mb-3">3. Context in Chat Prompts</h3>
                <p className="text-gray-300 mb-4">
                  Start conversations by providing project context:
                </p>
                <div className="bg-gray-900 border border-gray-700 rounded p-4">
                  <code className="text-studio-blue text-sm">
                    "I'm working on a SaaS dashboard using React + Tailwind. <br />
                    Our design system uses:<br />
                    - studio-pink (#F45A9B) for primary actions<br />
                    - rounded-xl borders on all components<br />
                    - Plus Jakarta Sans for headings<br />
                    <br />
                    Please create a sidebar navigation that matches this style..."
                  </code>
                </div>
              </div>

              <div className="bg-gray-950 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-studio-purple mb-3">4. Reference Existing Files</h3>
                <p className="text-gray-300 mb-4">
                  Point AI to similar existing components:
                </p>
                <div className="bg-gray-900 border border-gray-700 rounded p-4">
                  <code className="text-studio-purple text-sm">
                    "Create a modal component similar to the Button component in Button.jsx.<br />
                    Use the same styling patterns, hover states, and animation approach."
                  </code>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">File Organization for Context</h2>
            
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-white mb-4">Recommended Structure</h3>
              <div className="bg-gray-950 border border-gray-700 rounded p-4 font-mono text-sm">
                <div className="text-gray-400">
                  project/<br />
                  ├── <span className="text-studio-pink">README.md</span> <span className="text-gray-500">← Project context</span><br />
                  ├── <span className="text-studio-pink">DESIGN_SYSTEM.md</span> <span className="text-gray-500">← Colors, typography, spacing</span><br />
                  ├── src/<br />
                  │   ├── components/<br />
                  │   │   ├── common/ <span className="text-gray-500">← Reusable components</span><br />
                  │   │   │   ├── Button.jsx<br />
                  │   │   │   ├── Card.jsx<br />
                  │   │   │   └── Modal.jsx<br />
                  │   │   └── features/ <span className="text-gray-500">← Feature-specific</span><br />
                  │   ├── hooks/ <span className="text-gray-500">← Custom React hooks</span><br />
                  │   ├── utils/ <span className="text-gray-500">← Helper functions</span><br />
                  │   └── styles/<br />
                  │       └── <span className="text-studio-blue">tailwind.config.js</span> <span className="text-gray-500">← Design tokens</span><br />
                  └── docs/<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;└── <span className="text-studio-purple">CONVENTIONS.md</span> <span className="text-gray-500">← Code standards</span>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Context Window Management</h2>
            
            <div className="bg-yellow-900/20 border border-yellow-700/30 rounded-xl p-6 mb-8">
              <h3 className="text-yellow-300 font-bold mb-3">⚠️ AI Has Limited Memory</h3>
              <p className="text-gray-300 mb-4">
                AI can only "see" a limited amount of text at once (the context window). Long conversations 
                or huge files may cause it to "forget" earlier context.
              </p>
              
              <div className="space-y-3">
                <div className="bg-gray-950 border border-gray-700 rounded p-3">
                  <p className="text-white font-semibold text-sm mb-1">✓ Do This</p>
                  <p className="text-gray-400 text-sm">Start new chats for different features. Re-provide key context at the start.</p>
                </div>
                
                <div className="bg-gray-950 border border-gray-700 rounded p-3">
                  <p className="text-red-400 font-semibold text-sm mb-1">✗ Avoid This</p>
                  <p className="text-gray-400 text-sm">Massive single conversation covering 10+ features. AI will lose track.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Living Documentation</h2>
            
            <div className="bg-gray-950 border border-gray-800 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-white mb-3">Keep Context Current</h3>
              <p className="text-gray-300 mb-4">
                As your project evolves, update your context documentation. Outdated context leads to inconsistent code.
              </p>
              
              <div className="space-y-2">
                <div className="flex items-start gap-3 bg-gray-900 rounded p-3">
                  <span className="text-studio-pink">→</span>
                  <div className="flex-1">
                    <p className="text-white text-sm font-semibold">After adding a new component pattern</p>
                    <p className="text-gray-400 text-xs">Document it in DESIGN_SYSTEM.md</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 bg-gray-900 rounded p-3">
                  <span className="text-studio-blue">→</span>
                  <div className="flex-1">
                    <p className="text-white text-sm font-semibold">After refactoring file structure</p>
                    <p className="text-gray-400 text-xs">Update README with new organization</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 bg-gray-900 rounded p-3">
                  <span className="text-studio-purple">→</span>
                  <div className="flex-1">
                    <p className="text-white text-sm font-semibold">After changing design tokens</p>
                    <p className="text-gray-400 text-xs">Update tailwind.config.js comments</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Quick Context Checklist</h2>
            
            <div className="bg-studio-coral/10 border-l-4 border-studio-coral p-6 rounded-r mb-8">
              <p className="text-white font-semibold mb-3">Before starting a new DRIVE session, ensure AI knows:</p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>☐ What framework/libraries you're using</li>
                <li>☐ Your design system colors and typography</li>
                <li>☐ Key component patterns to follow</li>
                <li>☐ File organization structure</li>
                <li>☐ Naming conventions</li>
                <li>☐ What this specific feature should do</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-studio-coral/10 to-studio-purple/10 border border-studio-coral/30 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-3">The Context Rule</h3>
              <p className="text-gray-300">
                <span className="text-studio-coral font-semibold">Spend 2 minutes setting context, save 20 minutes fixing inconsistencies.</span> Clear 
                context upfront means AI generates code that fits seamlessly into your existing project instead of code you have to heavily refactor.
              </p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setActivePage('vscode-copilot')}
                className="px-6 py-3 bg-studio-coral hover:bg-studio-pink text-white rounded-xl transition-colors font-medium"
              >
                VS Code Setup →
              </button>
              <button
                onClick={() => setActivePage('iterative-design')}
                className="px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white rounded-xl transition-colors font-medium"
              >
                ← Iterative Design
              </button>
            </div>
          </div>
        );

      case 'vscode-copilot':
        return (
          <div className="prose prose-invert max-w-none">
            <h1 className="text-5xl font-bold text-white mb-6">VS Code + GitHub Copilot</h1>
            <p className="text-xl text-gray-300 mb-8">
              The powerhouse setup for professional vibe coding
            </p>

            <div className="bg-gradient-to-r from-studio-blue/20 to-studio-purple/20 border border-studio-blue/30 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">The Professional Choice</h2>
              <p className="text-gray-300 mb-4">
                VS Code with GitHub Copilot is the go-to setup for serious DRIVE work. You get full IDE features, 
                complete version control, extension ecosystem, and AI assistance that understands your entire project.
              </p>
              <p className="text-gray-300">
                <span className="text-studio-blue font-semibold">Best for:</span> Production work, complex projects, team collaboration, 
                and when you need full control over your development environment.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Setup Guide</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-gray-950 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">1️⃣</span> Install VS Code
                </h3>
                <p className="text-gray-300 mb-4">Download and install Visual Studio Code for your operating system:</p>
                <a 
                  href="https://code.visualstudio.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-studio-blue hover:bg-studio-purple text-white rounded-xl transition-colors font-medium"
                >
                  Download VS Code →
                </a>
              </div>

              <div className="bg-gray-950 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">2️⃣</span> Get GitHub Copilot
                </h3>
                <p className="text-gray-300 mb-4">Sign up for GitHub Copilot (30-day free trial, then ~$10/month):</p>
                
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 mb-4">
                  <p className="text-white font-semibold mb-2">Free Access Options:</p>
                  <ul className="space-y-1 text-gray-400 text-sm">
                    <li>✓ Verified students (with GitHub Student Developer Pack)</li>
                    <li>✓ Teachers and educators</li>
                    <li>✓ Open source maintainers</li>
                    <li>✓ Microsoft employees (login with Microsoft ID)</li>
                  </ul>
                </div>
                
                <a 
                  href="https://github.com/features/copilot" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-studio-pink hover:bg-studio-purple text-white rounded-xl transition-colors font-medium"
                >
                  Get GitHub Copilot →
                </a>
              </div>

              <div className="bg-gray-950 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">3️⃣</span> Install Copilot Extension
                </h3>
                <p className="text-gray-300 mb-4">In VS Code:</p>
                <ol className="space-y-2 text-gray-300 list-decimal list-inside">
                  <li>Open Extensions panel (⌘+Shift+X / Ctrl+Shift+X)</li>
                  <li>Search for "GitHub Copilot"</li>
                  <li>Click Install on both:
                    <ul className="ml-6 mt-2 space-y-1 text-sm text-gray-400">
                      <li>• GitHub Copilot (inline suggestions)</li>
                      <li>• GitHub Copilot Chat (conversational interface)</li>
                    </ul>
                  </li>
                  <li>Sign in with your GitHub account when prompted</li>
                </ol>
              </div>

              <div className="bg-gray-950 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">4️⃣</span> Verify It Works
                </h3>
                <p className="text-gray-300 mb-3">Create a new file and try this:</p>
                <div className="bg-gray-900 border border-gray-700 rounded p-4 mb-3">
                  <code className="text-studio-blue text-sm">
                    // Create a function that takes a name and returns a greeting
                  </code>
                </div>
                <p className="text-gray-400 text-sm">Copilot should suggest code completion. Press Tab to accept.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Key Features</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-studio-pink mb-3">Inline Completions</h3>
                <p className="text-gray-300 mb-3 text-sm">As you type, Copilot suggests code in ghost text.</p>
                <div className="space-y-2 text-xs">
                  <div className="bg-gray-950 border border-gray-700 rounded p-2">
                    <kbd className="text-gray-400">Tab</kbd> <span className="text-gray-500">→ Accept suggestion</span>
                  </div>
                  <div className="bg-gray-950 border border-gray-700 rounded p-2">
                    <kbd className="text-gray-400">Esc</kbd> <span className="text-gray-500">→ Dismiss suggestion</span>
                  </div>
                  <div className="bg-gray-950 border border-gray-700 rounded p-2">
                    <kbd className="text-gray-400">Alt+]</kbd> <span className="text-gray-500">→ Next suggestion</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-studio-blue mb-3">Copilot Chat</h3>
                <p className="text-gray-300 mb-3 text-sm">Ask questions and get targeted code help.</p>
                <div className="space-y-2 text-xs">
                  <div className="bg-gray-950 border border-gray-700 rounded p-2">
                    <kbd className="text-gray-400">⌘+I / Ctrl+I</kbd> <span className="text-gray-500">→ Quick chat</span>
                  </div>
                  <div className="bg-gray-950 border border-gray-700 rounded p-2">
                    <kbd className="text-gray-400">Chat icon</kbd> <span className="text-gray-500">→ Open chat panel</span>
                  </div>
                  <div className="bg-gray-950 border border-gray-700 rounded p-2">
                    <span className="text-gray-400">Select code + Chat</span> <span className="text-gray-500">→ Context-aware</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-studio-purple mb-3">Multi-File Context</h3>
                <p className="text-gray-300 text-sm">
                  Copilot sees your entire project structure, imports, and related files to generate consistent code.
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-studio-coral mb-3">Slash Commands</h3>
                <p className="text-gray-300 mb-2 text-sm">Quick actions in Copilot Chat:</p>
                <ul className="space-y-1 text-gray-400 text-xs">
                  <li>• /explain - Explain selected code</li>
                  <li>• /fix - Suggest fixes for errors</li>
                  <li>• /test - Generate tests</li>
                  <li>• /doc - Add documentation</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Pro Tips</h2>
            
            <div className="space-y-4 mb-8">
              <div className="bg-studio-blue/10 border-l-4 border-studio-blue p-4 rounded-r">
                <p className="text-white font-semibold mb-2">💡 Use Comments to Guide Copilot</p>
                <p className="text-gray-300 text-sm mb-2">Write detailed comments, Copilot generates code below:</p>
                <div className="bg-gray-950 border border-gray-700 rounded p-2 mt-2">
                  <code className="text-xs text-gray-400">
                    {`// Fetch user data from API with error handling and loading states
// Return { data, loading, error }`}
                  </code>
                </div>
              </div>

              <div className="bg-studio-pink/10 border-l-4 border-studio-pink p-4 rounded-r">
                <p className="text-white font-semibold mb-2">💡 Name Files Descriptively</p>
                <p className="text-gray-300 text-sm">
                  Copilot uses filenames as context. "Button.jsx" gets better suggestions than "comp1.jsx"
                </p>
              </div>

              <div className="bg-studio-purple/10 border-l-4 border-studio-purple p-4 rounded-r">
                <p className="text-white font-semibold mb-2">💡 Accept Partials, Then Refine</p>
                <p className="text-gray-300 text-sm">
                  Don't wait for perfect suggestions. Accept what's useful, reject what's not, iterate quickly.
                </p>
              </div>

              <div className="bg-studio-coral/10 border-l-4 border-studio-coral p-4 rounded-r">
                <p className="text-white font-semibold mb-2">💡 Use Chat for Complex Logic</p>
                <p className="text-gray-300 text-sm">
                  Inline suggestions for simple code. Open Chat when you need to discuss approach or debug.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Limitations to Know</h2>
            
            <div className="bg-yellow-900/20 border border-yellow-700/30 rounded-xl p-6 mb-8">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">⚠️</span>
                  <span><strong>Not Always Correct</strong> - Copilot suggests code, doesn't guarantee it works. Always test.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">⚠️</span>
                  <span><strong>Context Window Limits</strong> - Can't see infinitely large projects. Break work into smaller files.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">⚠️</span>
                  <span><strong>Requires Internet</strong> - Cloud-based AI, won't work offline.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">⚠️</span>
                  <span><strong>Sometimes Generic</strong> - May suggest vanilla patterns instead of your framework's idioms. Provide context!</span>
                </li>
              </ul>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setActivePage('github-spark')}
                className="px-6 py-3 bg-studio-blue hover:bg-studio-purple text-white rounded-xl transition-colors font-medium"
              >
                GitHub Spark →
              </button>
              <button
                onClick={() => setActivePage('extensions')}
                className="px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white rounded-xl transition-colors font-medium"
              >
                Recommended Extensions →
              </button>
            </div>
          </div>
        );

      case 'github-spark':
        return (
          <div className="prose prose-invert max-w-none">
            <h1 className="text-5xl font-bold text-white mb-6">GitHub Spark</h1>
            <p className="text-xl text-gray-300 mb-8">
              AI-powered app builder in your browser—no installation needed
            </p>

            <div className="bg-gradient-to-r from-studio-purple/20 to-studio-pink/20 border border-studio-purple/30 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">The Zero-Setup Option</h2>
              <p className="text-gray-300 mb-4">
                GitHub Spark is a browser-based AI app builder from GitHub Next. Describe what you want to build in plain English, 
                and Spark generates a working app instantly—no coding, no setup, no install.
              </p>
              <p className="text-gray-300">
                <span className="text-studio-purple font-semibold">Best for:</span> Quick prototypes, learning vibe coding, testing ideas 
                in minutes, and working on mobile devices or shared computers.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Getting Started</h2>
            
            <div className="bg-gray-950 border border-gray-800 rounded-xl p-6 mb-8">
              <ol className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-studio-pink font-bold">1.</span>
                  <div className="flex-1">
                    <p className="font-semibold text-white mb-1">Visit GitHub Spark</p>
                    <p className="text-gray-400 text-sm">Go to <code className="text-studio-pink bg-gray-900 px-2 py-1 rounded">githubnext.com/projects/github-spark</code></p>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <span className="text-studio-blue font-bold">2.</span>
                  <div className="flex-1">
                    <p className="font-semibold text-white mb-1">Sign in with GitHub</p>
                    <p className="text-gray-400 text-sm">Free to use with any GitHub account</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <span className="text-studio-purple font-bold">3.</span>
                  <div className="flex-1">
                    <p className="font-semibold text-white mb-1">Start with a Prompt</p>
                    <p className="text-gray-400 text-sm">Describe what you want: "Create a to-do app with dark mode"</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <span className="text-studio-coral font-bold">4.</span>
                  <div className="flex-1">
                    <p className="font-semibold text-white mb-1">Watch It Build</p>
                    <p className="text-gray-400 text-sm">Spark generates the app live—instant preview</p>
                  </div>
                </li>
              </ol>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Key Features</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-studio-pink mb-3">Natural Language Building</h3>
                <p className="text-gray-300 text-sm mb-3">Just describe features, Spark builds them:</p>
                <div className="bg-gray-950 border border-gray-700 rounded p-3">
                  <code className="text-xs text-studio-pink">
                    "Add a search bar at the top that filters the list as I type"
                  </code>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-studio-blue mb-3">Live Preview</h3>
                <p className="text-gray-300 text-sm">
                  Every change shows instantly in the preview pane. No refresh needed, no build step.
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-studio-purple mb-3">Shareable Links</h3>
                <p className="text-gray-300 text-sm">
                  Get a live URL for your app. Share with teammates or stakeholders for instant feedback.
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-studio-coral mb-3">Mobile Ready</h3>
                <p className="text-gray-300 text-sm">
                  Works on tablets and phones. Prototype on-the-go without needing a laptop.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">When to Use Spark</h2>
            
            <div className="space-y-4 mb-8">
              <div className="bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r">
                <p className="text-green-400 font-semibold mb-2">✓ Perfect For</p>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• Quick 5-minute prototypes for meetings</li>
                  <li>• Testing interaction ideas rapidly</li>
                  <li>• Learning vibe coding without setup</li>
                  <li>• Getting stakeholder feedback fast</li>
                  <li>• Working from devices without VS Code</li>
                </ul>
              </div>

              <div className="bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r">
                <p className="text-red-400 font-semibold mb-2">✗ Not Ideal For</p>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• Production applications</li>
                  <li>• Complex multi-page websites</li>
                  <li>• Projects requiring version control</li>
                  <li>• Backend integration</li>
                  <li>• Custom build processes</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Spark vs VS Code Copilot</h2>
            
            <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden mb-8">
              <table className="w-full text-sm">
                <thead className="bg-gray-950 border-b border-gray-800">
                  <tr>
                    <th className="text-left p-4 text-white">Feature</th>
                    <th className="text-left p-4 text-studio-purple">GitHub Spark</th>
                    <th className="text-left p-4 text-studio-blue">VS Code + Copilot</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-800">
                    <td className="p-4 text-gray-400">Setup Time</td>
                    <td className="p-4">0 minutes (browser)</td>
                    <td className="p-4">10-15 minutes (install)</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="p-4 text-gray-400">Best For</td>
                    <td className="p-4">Quick prototypes</td>
                    <td className="p-4">Production work</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="p-4 text-gray-400">Version Control</td>
                    <td className="p-4">❌ No</td>
                    <td className="p-4">✅ Full Git support</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="p-4 text-gray-400">File Management</td>
                    <td className="p-4">Limited</td>
                    <td className="p-4">Complete control</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="p-4 text-gray-400">Customization</td>
                    <td className="p-4">Basic</td>
                    <td className="p-4">Extensive (extensions)</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="p-4 text-gray-400">Sharing</td>
                    <td className="p-4">✅ Instant URL</td>
                    <td className="p-4">Deploy separately</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-400">Cost</td>
                    <td className="p-4">Free</td>
                    <td className="p-4">~$10/month (Copilot)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Pro Tips for Spark</h2>
            
            <div className="space-y-4 mb-8">
              <div className="bg-studio-purple/10 border-l-4 border-studio-purple p-4 rounded-r">
                <p className="text-white font-semibold mb-2">💡 Iterate in Small Steps</p>
                <p className="text-gray-300 text-sm">
                  Start simple: "Create a button." Then add: "Make it blue with rounded corners." Build complexity gradually.
                </p>
              </div>

              <div className="bg-studio-pink/10 border-l-4 border-studio-pink p-4 rounded-r">
                <p className="text-white font-semibold mb-2">💡 Reference Visual Examples</p>
                <p className="text-gray-300 text-sm">
                  "Make it look like Spotify's player UI" or "Use card layout similar to Pinterest" helps Spark understand your vision.
                </p>
              </div>

              <div className="bg-studio-coral/10 border-l-4 border-studio-coral p-4 rounded-r">
                <p className="text-white font-semibold mb-2">💡 Export to VS Code</p>
                <p className="text-gray-300 text-sm">
                  Once your prototype is validated, export code and continue development in VS Code for production.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-studio-purple/10 to-studio-pink/10 border border-studio-purple/30 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-3">The Workflow</h3>
              <p className="text-gray-300">
                <span className="text-studio-purple font-semibold">Use Spark for fast validation, VS Code for serious development.</span> Many designers 
                start in Spark to test ideas in minutes, then move to VS Code once they've validated the direction.
              </p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setActivePage('extensions')}
                className="px-6 py-3 bg-studio-purple hover:bg-studio-pink text-white rounded-xl transition-colors font-medium"
              >
                Recommended Extensions →
              </button>
              <button
                onClick={() => setActivePage('vscode-copilot')}
                className="px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white rounded-xl transition-colors font-medium"
              >
                ← VS Code + Copilot
              </button>
            </div>
          </div>
        );

      case 'extensions':
        return (
          <div className="prose prose-invert max-w-none">
            <h1 className="text-5xl font-bold text-white mb-6">Recommended Extensions</h1>
            <p className="text-xl text-gray-300 mb-8">
              Supercharge your VS Code setup for optimal vibe coding
            </p>

            <div className="bg-gradient-to-r from-studio-coral/20 to-studio-pink/20 border border-studio-coral/30 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Why Extensions Matter</h2>
              <p className="text-gray-300">
                VS Code is powerful out of the box, but extensions transform it into a vibe coding powerhouse. 
                The right extensions provide live previews, better IntelliSense, formatting, and quality-of-life improvements 
                that make DRIVE sessions faster and more enjoyable.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Essential Extensions</h2>
            
            <div className="space-y-4 mb-8">
              <div className="bg-gray-950 border border-gray-800 rounded-xl p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-studio-pink mb-1">Live Server</h3>
                    <p className="text-gray-500 text-sm">ritwickdey.liveserver</p>
                  </div>
                  <span className="px-3 py-1 bg-studio-pink/20 text-studio-pink text-xs rounded-full">Must-Have</span>
                </div>
                <p className="text-gray-300 mb-3 text-sm">
                  Launch a local development server with live reload. Every save instantly updates your browser—essential for rapid iteration.
                </p>
                <div className="bg-gray-900 border border-gray-700 rounded p-3">
                  <p className="text-gray-400 text-xs mb-1">Usage:</p>
                  <p className="text-white text-sm">Right-click HTML file → Open with Live Server</p>
                </div>
              </div>

              <div className="bg-gray-950 border border-gray-800 rounded-xl p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-studio-blue mb-1">Tailwind CSS IntelliSense</h3>
                    <p className="text-gray-500 text-sm">bradlc.vscode-tailwindcss</p>
                  </div>
                  <span className="px-3 py-1 bg-studio-blue/20 text-studio-blue text-xs rounded-full">Must-Have</span>
                </div>
                <p className="text-gray-300 mb-3 text-sm">
                  Autocomplete Tailwind classes, show color previews, and lint your utility classes. Makes Tailwind 10x easier.
                </p>
                <div className="bg-gray-900 border border-gray-700 rounded p-3">
                  <p className="text-gray-400 text-xs mb-1">Features:</p>
                  <ul className="text-white text-sm space-y-1">
                    <li>• Class name suggestions</li>
                    <li>• Color/size previews on hover</li>
                    <li>• Warnings for invalid classes</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-950 border border-gray-800 rounded-xl p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-studio-purple mb-1">ES7+ React/Redux Snippets</h3>
                    <p className="text-gray-500 text-sm">dsznajder.es7-react-js-snippets</p>
                  </div>
                  <span className="px-3 py-1 bg-studio-purple/20 text-studio-purple text-xs rounded-full">React</span>
                </div>
                <p className="text-gray-300 mb-3 text-sm">
                  Lightning-fast React snippets. Type shortcuts to generate components, hooks, and more.
                </p>
                <div className="bg-gray-900 border border-gray-700 rounded p-3">
                  <p className="text-gray-400 text-xs mb-1">Quick examples:</p>
                  <div className="space-y-1 text-sm">
                    <div><code className="text-studio-purple">rafce</code> → <span className="text-gray-400">React arrow function component</span></div>
                    <div><code className="text-studio-purple">useState</code> → <span className="text-gray-400">useState hook</span></div>
                    <div><code className="text-studio-purple">useEffect</code> → <span className="text-gray-400">useEffect hook</span></div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-950 border border-gray-800 rounded-xl p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-studio-coral mb-1">Prettier - Code Formatter</h3>
                    <p className="text-gray-500 text-sm">esbenp.prettier-vscode</p>
                  </div>
                  <span className="px-3 py-1 bg-studio-coral/20 text-studio-coral text-xs rounded-full">Must-Have</span>
                </div>
                <p className="text-gray-300 mb-3 text-sm">
                  Auto-format code on save. Never worry about indentation, spacing, or style consistency again.
                </p>
                <div className="bg-gray-900 border border-gray-700 rounded p-3">
                  <p className="text-gray-400 text-xs mb-1">Enable format on save:</p>
                  <p className="text-white text-sm">Settings → Editor: Format On Save ✓</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Productivity Boosters</h2>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h3 className="text-lg font-bold text-white mb-2">Auto Rename Tag</h3>
                <p className="text-gray-500 text-xs mb-2">formulahendry.auto-rename-tag</p>
                <p className="text-gray-400 text-sm">Rename paired HTML/JSX tags automatically</p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h3 className="text-lg font-bold text-white mb-2">Path Intellisense</h3>
                <p className="text-gray-500 text-xs mb-2">christian-kohler.path-intellisense</p>
                <p className="text-gray-400 text-sm">Autocomplete file paths in imports</p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h3 className="text-lg font-bold text-white mb-2">Color Highlight</h3>
                <p className="text-gray-500 text-xs mb-2">naumovs.color-highlight</p>
                <p className="text-gray-400 text-sm">Visualize color codes in your editor</p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h3 className="text-lg font-bold text-white mb-2">Bracket Pair Colorizer 2</h3>
                <p className="text-gray-500 text-xs mb-2">built-in (enable in settings)</p>
                <p className="text-gray-400 text-sm">Color-code matching brackets for clarity</p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h3 className="text-lg font-bold text-white mb-2">GitLens</h3>
                <p className="text-gray-500 text-xs mb-2">eamodio.gitlens</p>
                <p className="text-gray-400 text-sm">Supercharge Git with blame, history, and more</p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h3 className="text-lg font-bold text-white mb-2">Error Lens</h3>
                <p className="text-gray-500 text-xs mb-2">usernamehw.errorlens</p>
                <p className="text-gray-400 text-sm">Highlight errors inline, not just in sidebar</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Framework-Specific</h2>
            
            <div className="space-y-4 mb-8">
              <div className="bg-gray-950 border border-gray-800 rounded-xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-white">Vite</h3>
                  <span className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded">antfu.vite</span>
                </div>
                <p className="text-gray-400 text-sm">Syntax highlighting and IntelliSense for Vite config files</p>
              </div>

              <div className="bg-gray-950 border border-gray-800 rounded-xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-white">Vue Language Features (Volar)</h3>
                  <span className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded">vue.volar</span>
                </div>
                <p className="text-gray-400 text-sm">Essential for Vue 3 development</p>
              </div>

              <div className="bg-gray-950 border border-gray-800 rounded-xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-white">Svelte for VS Code</h3>
                  <span className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded">svelte.svelte-vscode</span>
                </div>
                <p className="text-gray-400 text-sm">Svelte syntax highlighting and IntelliSense</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Themes for Focus</h2>
            
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <p className="text-gray-300 mb-4">
                A good theme reduces eye strain and helps you code longer. Popular choices for DRIVE:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                  <p className="text-white font-semibold mb-1">One Dark Pro</p>
                  <p className="text-gray-500 text-xs mb-2">zhuangtongfa.material-theme</p>
                  <p className="text-gray-400 text-sm">Clean, popular, easy on eyes</p>
                </div>
                
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                  <p className="text-white font-semibold mb-1">Night Owl</p>
                  <p className="text-gray-500 text-xs mb-2">sdras.night-owl</p>
                  <p className="text-gray-400 text-sm">Optimized for night coding</p>
                </div>
                
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                  <p className="text-white font-semibold mb-1">Dracula Official</p>
                  <p className="text-gray-500 text-xs mb-2">dracula-theme.theme-dracula</p>
                  <p className="text-gray-400 text-sm">High contrast, vibrant</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Quick Setup Guide</h2>
            
            <div className="bg-gray-950 border border-gray-800 rounded-xl p-6 mb-8">
              <ol className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-studio-pink font-bold">1.</span>
                  <span>Open Extensions panel: <kbd className="bg-gray-900 px-2 py-1 rounded text-sm">⌘+Shift+X</kbd> (Mac) or <kbd className="bg-gray-900 px-2 py-1 rounded text-sm">Ctrl+Shift+X</kbd> (Windows/Linux)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-studio-blue font-bold">2.</span>
                  <span>Search for extension name</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-studio-purple font-bold">3.</span>
                  <span>Click "Install"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-studio-coral font-bold">4.</span>
                  <span>Reload VS Code if prompted</span>
                </li>
              </ol>
            </div>

            <div className="bg-studio-coral/10 border-l-4 border-studio-coral p-6 rounded-r mb-8">
              <h3 className="text-xl font-bold text-white mb-3">⚡ Starter Pack</h3>
              <p className="text-gray-300 mb-3">New to vibe coding? Install these first:</p>
              <ol className="space-y-1 text-gray-300 text-sm">
                <li>1. GitHub Copilot + Copilot Chat</li>
                <li>2. Live Server</li>
                <li>3. Tailwind CSS IntelliSense</li>
                <li>4. Prettier</li>
                <li>5. Auto Rename Tag</li>
              </ol>
              <p className="text-gray-400 text-xs mt-3">This covers 90% of DRIVE workflows</p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setActivePage('figma-mcp')}
                className="px-6 py-3 bg-studio-coral hover:bg-studio-pink text-white rounded-xl transition-colors font-medium"
              >
                Figma MCP Setup →
              </button>
              <button
                onClick={() => setActivePage('github-spark')}
                className="px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white rounded-xl transition-colors font-medium"
              >
                ← GitHub Spark
              </button>
            </div>
          </div>
        );

      default:
        // Overview/Home content
        return (
          <div>
            <div className="text-center mb-8">
              <p className="text-sm text-gray-400 mb-4">
                A wildly robust design-to-code workflow. Built for professionals
              </p>
              <h1 className="text-6xl md:text-7xl font-display font-bold text-white mb-8">
                Design Anything
              </h1>
            </div>

            {/* Search */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full pl-12 pr-4 py-4 bg-gray-900 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gray-700"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
                  <kbd className="px-2 py-1 text-xs bg-gray-800 border border-gray-700 rounded">⌘</kbd>
                  <kbd className="px-2 py-1 text-xs bg-gray-800 border border-gray-700 rounded">K</kbd>
                </div>
              </div>
            </div>

            {/* Overview Section */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 mb-8">
              <h2 className="text-3xl font-bold text-white mb-6">DRIVE Overview</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                The Core contains <span className="text-white font-semibold">everything</span> you need to create blazingly fast, responsive designs for all workflows.
              </p>

              {/* Included Box */}
              <div className="mt-8 bg-gradient-to-br from-studio-coral/10 to-studio-pink/10 border border-studio-coral/30 rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white">Included in DRIVE's Core</h3>
                  <span className="px-3 py-1 bg-gray-900 text-studio-coral text-xs font-mono rounded border border-gray-800">
                    CDN
                  </span>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-studio-coral font-semibold mb-3">DRIVE</h4>
                    <p className="text-sm text-gray-400 mb-4">AI and Workflow</p>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>Design anything</li>
                      <li>Rapid prototyping</li>
                      <li>Real-time iteration</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-3">Tools</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>VS Code + Copilot</li>
                      <li>GitHub Spark</li>
                      <li>Vibe Design System</li>
                      <li>MCP Server</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-3">Design efficiently</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>Component thinking</li>
                      <li>Design tokens</li>
                      <li>Accessibility-first</li>
                      <li>Responsive by default</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <button
                onClick={() => {
                  setActivePage('welcome');
                  setExpandedSections(['getting-started']);
                }}
                className="bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded-xl p-6 text-left transition-colors"
              >
                <h3 className="text-xl font-bold text-white mb-2">Getting Started</h3>
                <p className="text-gray-400">New to DRIVE? Start here</p>
              </button>
              <button
                onClick={() => {
                  setActivePage('ai-assistants');
                  setExpandedSections(['getting-started']);
                }}
                className="bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded-xl p-6 text-left transition-colors"
              >
                <h3 className="text-xl font-bold text-white mb-2">Core Concepts</h3>
                <p className="text-gray-400">Learn the DRIVE methodology</p>
              </button>
              <button
                onClick={() => {
                  setActivePage('drive-session');
                  setExpandedSections(['workflows']);
                }}
                className="bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded-xl p-6 text-left transition-colors"
              >
                <h3 className="text-xl font-bold text-white mb-2">Workflows</h3>
                <p className="text-gray-400">Master DRIVE sessions</p>
              </button>
            </div>

            {/* Coming Soon */}
            <div className="text-center py-16 border-t border-gray-800 mt-12">
              <p className="text-gray-400 text-lg mb-6">
                Full documentation is being written. Check back soon!
              </p>
              <div className="flex gap-4 justify-center">
                <Link to="/" className="px-6 py-3 bg-studio-pink hover:bg-studio-coral text-white rounded-xl transition-colors font-medium">
                  Back to Home
                </Link>
                <Link to="/labs" className="px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white rounded-xl transition-colors font-medium">
                  Visit Labs
                </Link>
              </div>
            </div>
          </div>
        );
    }
  };

  const sidebarSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      items: [
        { id: 'welcome', title: 'Welcome to DRIVE', path: '/docs/welcome' },
        { id: 'what-is-vibe', title: 'What is Vibe Coding?', path: '/docs/what-is-vibe-coding' },
        { id: 'setup', title: 'Setting Up Your Environment', path: '/docs/setup' },
        { id: 'first-session', title: 'Your First DRIVE Session', path: '/docs/first-session' },
        { id: 'best-practices', title: 'Best Practices', path: '/docs/best-practices' },
        { id: 'common-mistakes', title: 'Common Mistakes to Avoid', path: '/docs/common-mistakes' },
      ],
    },
    {
      id: 'core-concepts',
      title: 'Core Concepts',
      items: [
        { id: 'philosophy', title: 'The DRIVE Philosophy', path: '/docs/philosophy' },
        { id: 'ai-assistants', title: 'Working with AI Assistants', path: '/docs/ai-assistants' },
        { id: 'prompting-strategies', title: 'Effective Prompting Strategies', path: '/docs/prompting-strategies' },
        { id: 'iterative-design', title: 'Iterative Design Process', path: '/docs/iterative-design' },
        { id: 'context-management', title: 'Managing Project Context', path: '/docs/context-management' },
      ],
    },
    {
      id: 'tools-setup',
      title: 'Tools & Setup',
      items: [
        { id: 'vscode-copilot', title: 'VS Code + GitHub Copilot', path: '/docs/vscode-copilot' },
        { id: 'github-spark', title: 'GitHub Spark', path: '/docs/github-spark' },
        { id: 'figma-mcp', title: 'Figma MCP Server', path: '/docs/figma-mcp' },
        { id: 'importing-designs', title: 'Importing Figma Designs', path: '/docs/importing-designs' },
        { id: 'extensions', title: 'Recommended Extensions', path: '/docs/extensions' },
      ],
    },
    {
      id: 'workflows',
      title: 'Workflows',
      items: [
        { id: 'figma-to-code', title: 'Figma to Code Workflow', path: '/docs/figma-to-code' },
        { id: 'prototyping', title: 'Rapid Prototyping', path: '/docs/prototyping' },
        { id: 'component-creation', title: 'Building Components', path: '/docs/component-creation' },
        { id: 'iteration-workflow', title: 'Design Iteration Loop', path: '/docs/iteration-workflow' },
        { id: 'testing-validation', title: 'Testing & Validation', path: '/docs/testing-validation' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Top Header */}
      <header className="border-b border-gray-800 bg-black/95 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <div className="text-2xl font-display font-bold bg-gradient-to-r from-studio-coral via-studio-pink to-studio-purple bg-clip-text text-transparent">
              DRIVE
            </div>
          </Link>

          <nav className="flex items-center gap-8 text-sm">
            <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
            <Link to="/tools" className="text-gray-400 hover:text-white transition-colors">Vibe Coding Tools</Link>
            <Link to="/labs" className="text-gray-400 hover:text-white transition-colors">Labs</Link>
            <Link to="/ai-tools" className="text-gray-400 hover:text-white transition-colors">AI Tools</Link>
          </nav>
        </div>
      </header>

      {/* Sub-header with tabs */}
      <div className="border-b border-gray-800 bg-black/95 backdrop-blur sticky top-[73px] z-40">
        <div className="px-6 flex gap-8">
          <button
            onClick={() => setActiveTab('design')}
            className={`px-4 py-4 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'design'
                ? 'border-studio-pink text-white'
                : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            Design
          </button>
          <button
            onClick={() => setActiveTab('engineering')}
            className={`px-4 py-4 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'engineering'
                ? 'border-studio-pink text-white'
                : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            Engineering
          </button>
        </div>
      </div>

      {/* Main Content Container */}
      {activeTab === 'design' ? (
        <div className="flex flex-1">
          {/* Sidebar */}
          <aside className="w-64 border-r border-gray-800 bg-black overflow-y-auto fixed left-0 top-[145px] h-[calc(100vh-145px)] z-30">
            <div className="p-6">
              {/* Search */}
              <div className="relative mb-6">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                <input
                  type="text"
                  placeholder="Filter sidebar..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gray-700"
                />
              </div>

              {/* Navigation */}
              <nav className="space-y-6">
                {sidebarSections.map((section) => (
                  <div key={section.id}>
                    <button
                      onClick={() => toggleSection(section.id)}
                      className="w-full flex items-center justify-between text-sm font-medium text-white mb-3 hover:text-studio-pink transition-colors"
                    >
                      <span>{section.title}</span>
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          expandedSections.includes(section.id) ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {expandedSections.includes(section.id) && (
                      <ul className="space-y-1 mb-3">
                        {section.items.map((item) => (
                          <li key={item.id}>
                            <button
                              onClick={() => setActivePage(item.id)}
                              className={`block w-full text-left text-sm transition-colors py-1.5 pl-3 hover:bg-gray-900/50 rounded ${
                                activePage === item.id ? 'text-studio-pink font-medium' : 'text-gray-400 hover:text-white'
                              }`}
                            >
                              {item.title}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 overflow-y-auto bg-black ml-64">
            <div className="max-w-5xl mx-auto px-8 py-12">
              {renderContent()}
            </div>
          </main>
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center bg-black p-12">
          <div className="text-center max-w-2xl">
            <div className="text-6xl mb-6">🚀</div>
            <h2 className="text-4xl font-bold text-white mb-4">Engineering Docs</h2>
            <p className="text-xl text-gray-400 mb-8">
              Documentation for UX Engineers and Frontend Developers is coming soon.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setActiveTab('design')}
                className="px-6 py-3 bg-studio-pink hover:bg-studio-coral text-white rounded-xl transition-colors font-medium"
              >
                View Design Docs
              </button>
              <Link to="/" className="px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white rounded-xl transition-colors font-medium">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Documentation;
