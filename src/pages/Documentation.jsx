import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { VscCode } from 'react-icons/vsc';
import { TbSparkles } from 'react-icons/tb';
import { FaClock, FaBook, FaCheckCircle, FaRocket, FaBullseye, FaBug, FaSearch, FaChevronDown, FaExclamationTriangle, FaLightbulb, FaRobot, FaTimesCircle, FaUser, FaCamera, FaPalette, FaRulerCombined, FaSyncAlt, FaCopy, FaCheck, FaServer, FaCodeBranch, FaWrench, FaFolderOpen, FaComment, FaImage, FaCode, FaBan, FaHeart, FaMagic, FaDownload } from 'react-icons/fa';
import { MdArchitecture } from 'react-icons/md';

const Documentation = () => {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState(['getting-started']);
  const [activePage, setActivePage] = useState('welcome');
  const [selectedTool, setSelectedTool] = useState('vscode'); // 'vscode' or 'spark'
  const [expandedBestPractices, setExpandedBestPractices] = useState([1]); // Track which best practice sections are open
  const [expandedMistakes, setExpandedMistakes] = useState([1]); // Track which mistake sections are open
  const [copiedCode, setCopiedCode] = useState(null);

  const copyToClipboard = async (code, id) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(id);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const CodeBlock = ({ code, language = 'jsx', id }) => (
    <div className="relative bg-gray-950 border border-gray-700 rounded-lg p-4 overflow-x-auto group">
      <button
        onClick={() => copyToClipboard(code, id)}
        className="absolute top-3 right-3 p-2 bg-gray-800 hover:bg-gray-700 rounded transition-colors opacity-0 group-hover:opacity-100"
        aria-label="Copy code"
      >
        {copiedCode === id ? (
          <FaCheck className="text-green-400 text-sm" />
        ) : (
          <FaCopy className="text-gray-400 text-sm" />
        )}
      </button>
      <code className="text-studio-pink text-sm">{code}</code>
    </div>
  );

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
            
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
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
            <p className="text-xl text-gray-300 mb-8">Build an interactive dashboard with stats cards in 30 minutes</p>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-2">What you'll build</h3>
              <p className="text-gray-300 mb-2">A responsive analytics dashboard with stat cards, a simple chart, and interactive filters</p>
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

            {selectedTool === 'vscode' && (
              <>
                <h2 className="text-3xl font-bold text-white mb-4">Understanding Copilot Modes</h2>
                <div className="bg-gradient-to-r from-studio-blue/20 to-studio-purple/20 border border-studio-blue/30 rounded-xl p-6 mb-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 rounded bg-studio-pink/20 flex items-center justify-center text-studio-pink text-sm"><FaComment /></span>
                        Chat Mode
                      </h4>
                      <p className="text-gray-300 text-sm mb-2">Best for starting out, asking questions, and planning.</p>
                      <ul className="text-gray-400 text-xs space-y-1">
                        <li>• Ask questions about your code</li>
                        <li>• Get explanations and suggestions</li>
                        <li>• Plan before you build</li>
                        <li>• Use <kbd className="bg-gray-800 px-1.5 py-0.5 rounded">⌘+I</kbd> or <kbd className="bg-gray-800 px-1.5 py-0.5 rounded">Ctrl+I</kbd></li>
                      </ul>
                    </div>
                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 rounded bg-studio-purple/20 flex items-center justify-center text-studio-purple text-sm"><FaRobot /></span>
                        Agent Mode
                      </h4>
                      <p className="text-gray-300 text-sm mb-2">Best for building, editing files, and executing tasks.</p>
                      <ul className="text-gray-400 text-xs space-y-1">
                        <li>• Creates and edits multiple files</li>
                        <li>• Runs terminal commands</li>
                        <li>• Autonomous multi-step tasks</li>
                        <li>• Toggle in the Chat panel dropdown</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-studio-coral/10 border border-studio-coral/30 rounded-lg">
                    <p className="text-gray-300 text-sm">
                      <span className="text-studio-coral font-semibold">Pro Workflow:</span> Start in <strong>Chat mode</strong> to discuss and plan your approach, 
                      then switch to <strong>Agent mode</strong> to build. Agent mode can create files, run commands, and make edits across your project.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-white mb-4">Switching Models</h2>
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
                  <p className="text-gray-300 mb-4">
                    Copilot gives you access to multiple AI models. Click the model name in the Chat panel to switch between them.
                  </p>
                  <div className="space-y-3">
                    <div className="p-3 bg-gray-950 rounded-lg">
                      <p className="text-white text-sm font-medium mb-1">Different models, different strengths</p>
                      <p className="text-gray-400 text-xs">Some models are faster, others reason more deeply. Some excel at UI code, others at complex logic.</p>
                    </div>
                    <div className="p-3 bg-gray-950 rounded-lg">
                      <p className="text-white text-sm font-medium mb-1">Experiment to find what works</p>
                      <p className="text-gray-400 text-xs">If one model's output doesn't feel right, try another. You'll develop preferences over time.</p>
                    </div>
                    <div className="p-3 bg-gray-950 rounded-lg">
                      <p className="text-white text-sm font-medium mb-1">Switch based on task</p>
                      <p className="text-gray-400 text-xs">Quick UI tweaks might work great with a fast model. Complex architecture decisions might benefit from a deeper-thinking one.</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mt-4 italic">
                    Models evolve quickly—explore what's available and see what fits your workflow best.
                  </p>
                </div>
              </>
            )}

            <h2 className="text-3xl font-bold text-white mb-4">Part 1: Setup (5 min)</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
              {selectedTool === 'vscode' ? (
                <>
                  <div className="flex items-center gap-2 mb-4">
                    <VscCode className="text-studio-pink text-xl" />
                    <p className="text-gray-300 font-semibold">Using VS Code + Copilot</p>
                  </div>
                  <ol className="space-y-3 text-gray-300 list-decimal list-inside">
                    <li>Open VS Code and create a new folder: <code className="text-studio-coral bg-gray-800 px-2 py-1 rounded">analytics-dashboard</code></li>
                    <li>Open the Copilot Chat panel (<kbd className="bg-gray-800 px-1.5 py-0.5 rounded">⌘+I</kbd>)</li>
                    <li>Make sure you're in <strong>Chat mode</strong> first (check the dropdown)</li>
                    <li>Pick a model from the dropdown (try a few over time to see what you prefer)</li>
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
                    <li>Create a new project named "Analytics Dashboard"</li>
                    <li>Start with a blank canvas</li>
                  </ol>
                </>
              )}
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Part 2: Plan with Chat (5 min)</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
              <p className="text-gray-300 mb-3">{selectedTool === 'vscode' ? 'In Chat mode, start by describing your vision:' : 'Start by describing your vision:'}</p>
              <pre className="bg-gray-950 border border-gray-700 rounded-lg p-4 overflow-x-auto">
                <code className="text-studio-pink text-sm">{`I want to build an analytics dashboard with:
- Header with logo and navigation
- 4 stat cards showing: Total Revenue, Active Users, Conversion Rate, Avg Session
- Each card should have an icon, value, label, and % change indicator
- A simple bar chart section (placeholder is fine)
- Filter buttons to switch between "Today", "Week", "Month"
- Dark theme with gradient accents
- Responsive: cards stack on mobile
- Use React with Tailwind CSS

Can you help me plan the component structure first?`}</code>
              </pre>
              <p className="text-gray-400 text-sm mt-4">
                <strong>Why plan first?</strong> Discussing the structure helps AI understand your full vision before generating code.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Part 3: Build with Agent Mode (15 min)</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
              {selectedTool === 'vscode' ? (
                <>
                  <div className="flex items-center gap-2 mb-4">
                    <VscCode className="text-studio-pink text-xl" />
                    <p className="text-gray-300 font-semibold">Switch to Agent Mode</p>
                  </div>
                  <ol className="space-y-3 text-gray-300 list-decimal list-inside mb-4">
                    <li>In the Chat panel, click the mode dropdown and select <strong>"Agent"</strong></li>
                    <li>Now prompt: <em>"Set up this project and create the dashboard with all components we discussed"</em></li>
                    <li>Agent will create files, install dependencies, and build components</li>
                    <li>Review each change before accepting (Agent asks for confirmation)</li>
                  </ol>
                  <div className="bg-yellow-900/20 border border-yellow-700/30 rounded-lg p-4">
                    <p className="text-yellow-200 text-sm">
                      <strong>Agent Mode Tip:</strong> Agent can run terminal commands like <code>npm install</code> and <code>npm run dev</code>. 
                      Say "yes" when it asks to execute commands, but always review what it's doing.
                    </p>
                  </div>
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
                      <span>Paste your full description and let Spark generate</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-studio-pink">2.</span>
                      <span>Watch as AI creates the dashboard layout</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-studio-purple">3.</span>
                      <span>See live preview update in real-time</span>
                    </li>
                  </ul>
                </>
              )}
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Part 4: Preview in Your Browser (2 min)</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
              {selectedTool === 'vscode' ? (
                <>
                  <div className="flex items-center gap-2 mb-4">
                    <VscCode className="text-studio-pink text-xl" />
                    <p className="text-gray-300 font-semibold">Run the Local Server</p>
                  </div>
                  <p className="text-gray-300 mb-3">Time to see your dashboard in action! Ask the agent:</p>
                  <pre className="bg-gray-950 border border-gray-700 rounded-lg p-4 overflow-x-auto mb-4">
                    <code className="text-studio-pink text-sm">{`Start the development server so I can preview this in my browser`}</code>
                  </pre>
                  <p className="text-gray-300 mb-3">The agent will run a command like <code className="text-studio-coral bg-gray-800 px-2 py-1 rounded">npm run dev</code> and give you a URL (usually <code className="text-studio-coral bg-gray-800 px-2 py-1 rounded">http://localhost:5173</code>)</p>
                  <ol className="space-y-2 text-gray-300 list-decimal list-inside mb-4">
                    <li>Click the URL in the terminal or open it in your browser</li>
                    <li>You'll see your dashboard live!</li>
                    <li>Keep this browser tab open—it auto-refreshes when you make changes</li>
                  </ol>
                  <div className="bg-studio-purple/10 border border-studio-purple/30 rounded-lg p-4">
                    <p className="text-gray-300 text-sm flex items-start gap-2">
                      <FaLightbulb className="text-studio-purple mt-0.5 flex-shrink-0" />
                      <span><strong>Tip:</strong> To stop the server later, click in the terminal and press <kbd className="bg-gray-800 px-1.5 py-0.5 rounded">Ctrl+C</kbd>. 
                      To restart it, just ask the agent again or run <code className="text-studio-coral bg-gray-800 px-1 py-0.5 rounded text-xs">npm run dev</code>.</span>
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2 mb-4">
                    <TbSparkles className="text-studio-purple text-xl" />
                    <p className="text-gray-300 font-semibold">With GitHub Spark</p>
                  </div>
                  <p className="text-gray-300 mb-3">
                    <span className="text-studio-purple font-semibold">No server needed!</span> Spark shows a live preview automatically 
                    in the right panel. Your dashboard updates in real-time as you make changes.
                  </p>
                </>
              )}
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Part 5: Iterate & Polish (5 min)</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
              <p className="text-gray-300 mb-4">Refine your dashboard with follow-up prompts:</p>
              <ul className="space-y-2 text-gray-300">
                <li>• <em>"Make the stat cards have a subtle hover animation"</em></li>
                <li>• <em>"Add green/red colors to the % change based on positive/negative"</em></li>
                <li>• <em>"The filter buttons should highlight the active one"</em></li>
                <li>• <em>"Make the chart section show actual bar elements with gradient fills"</em></li>
                <li>• <em>"Test on mobile - stack the cards in a 2x2 grid on tablet, single column on phone"</em></li>
              </ul>
            </div>

            <div className="bg-studio-pink/10 border border-studio-pink/30 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <FaRocket className="text-studio-pink" /> Checkpoint
              </h3>
              <p className="text-gray-300 mb-4">You built a real dashboard in 30 minutes! Key takeaways:</p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2"><FaCheckCircle className="text-green-400 flex-shrink-0" /> <strong>Chat mode</strong> for planning and questions, <strong>Agent mode</strong> for building</li>
                <li className="flex items-center gap-2"><FaCheckCircle className="text-green-400 flex-shrink-0" /> Model selection matters: pick based on task complexity</li>
                <li className="flex items-center gap-2"><FaCheckCircle className="text-green-400 flex-shrink-0" /> Start with the big picture, then iterate on details</li>
                <li className="flex items-center gap-2"><FaCheckCircle className="text-green-400 flex-shrink-0" /> AI handles the code, you drive the design decisions</li>
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
                onClick={() => setActivePage('starter-prompts')}
                className="px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white rounded-xl transition-colors font-medium"
              >
                Helpful Starter Prompts
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
            <h1 className="text-5xl font-bold text-white mb-6">Best Practices & Common Mistakes</h1>
            <p className="text-xl text-gray-300 mb-8">Learn what works (and what doesn't) in AI-assisted development</p>
            
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <p className="text-gray-300 mb-4">
                This guide combines proven strategies with real-world pitfalls to help you succeed faster. Each practice includes
                the mistake to avoid and the better approach to take.
              </p>
              <p className="text-gray-400 text-sm flex items-center gap-2">
                <FaLightbulb className="text-yellow-400 flex-shrink-0" />
                <span><span className="text-white font-semibold">Pro tip:</span> Open the sections relevant to where you are in your journey.</span>
              </p>
            </div>

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
              
              {/* Mistake to Avoid */}
              <div className="bg-red-950/20 border border-red-700/30 rounded-lg p-4 mb-6">
                <p className="text-red-400 font-semibold mb-2 flex items-center gap-2">
                  <FaTimesCircle /> Mistake: Skipping Context Documentation
                </p>
                <p className="text-gray-300 text-sm mb-3">
                  Jumping straight into building without documenting project context leads to:
                </p>
                <ul className="space-y-1 text-gray-400 text-sm">
                  <li>• Inconsistent UI patterns across your app</li>
                  <li>• Repeating the same context in every prompt</li>
                  <li>• AI generating generic defaults instead of your style</li>
                  <li>• Wasting time correcting preventable errors</li>
                </ul>
              </div>
              
              <div className="bg-studio-coral/10 border-l-4 border-studio-coral p-4 rounded-r mb-6">
                <p className="text-white font-semibold mb-2">✓ Best Practice:</p>
                <p className="text-gray-300">Spend 15-30 minutes documenting your project context before your first prompt. This foundation makes every subsequent interaction faster and more accurate.</p>
              </div>

              <p className="text-white font-semibold mb-3">Essential elements to document:</p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• <span className="text-white font-medium">Product Vision:</span> What problem are you solving? Who is it for?</li>
                <li>• <span className="text-white font-medium">User Personas:</span> Who will use this? What are their goals?</li>
                <li>• <span className="text-white font-medium">Design System:</span> Colors, typography, spacing, components</li>
                <li>• <span className="text-white font-medium">Technical Stack:</span> Framework, libraries, constraints</li>
                <li>• <span className="text-white font-medium">Brand Guidelines:</span> Tone, voice, visual style</li>
              </ul>

              <div className="bg-studio-purple/10 border-l-4 border-studio-purple p-4 rounded-r mb-6">
                <p className="text-white font-semibold mb-2">Example Context Document:</p>
                <div className="text-sm text-gray-300 space-y-2 mt-3">
                  <p><span className="text-studio-pink font-mono">Project:</span> Task Management Dashboard</p>
                  <p><span className="text-studio-pink font-mono">Users:</span> Product managers tracking projects</p>
                  <p><span className="text-studio-pink font-mono">Style:</span> Modern, clean, inspired by Linear</p>
                  <p><span className="text-studio-pink font-mono">Colors:</span> Primary #6366f1, Secondary #ec4899</p>
                  <p><span className="text-studio-pink font-mono">Stack:</span> React, Tailwind CSS, Framer Motion</p>
                  <p><span className="text-studio-pink font-mono">Must-have:</span> Mobile-responsive, keyboard shortcuts, dark mode</p>
                </div>
              </div>

              <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 relative group">
                <button
                  onClick={() => copyToClipboard('Analyze my current project and create a comprehensive context document including design patterns, component structure, and technical decisions.', 'context-doc')}
                  className="absolute top-3 right-3 p-2 bg-gray-800 hover:bg-gray-700 rounded transition-colors opacity-0 group-hover:opacity-100"
                  aria-label="Copy code"
                >
                  {copiedCode === 'context-doc' ? (
                    <FaCheck className="text-green-400 text-sm" />
                  ) : (
                    <FaCopy className="text-gray-400 text-sm" />
                  )}
                </button>
                <p className="text-sm text-gray-400 mb-2">Prompt to generate context:</p>
                <code className="text-studio-pink text-sm">Analyze my current project and create a comprehensive context document including design patterns, component structure, and technical decisions.</code>
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
                <div className="bg-gray-950 border border-green-700 rounded-lg p-4 relative group">
                  <button
                    onClick={() => copyToClipboard('Create a primary CTA button with rounded corners, coral background (#FF6B6B), white text, and a subtle hover animation that scales to 1.05x', 'button-prompt')}
                    className="absolute top-2 right-2 p-1.5 bg-gray-800 hover:bg-gray-700 rounded transition-colors opacity-0 group-hover:opacity-100"
                    aria-label="Copy code"
                  >
                    {copiedCode === 'button-prompt' ? (
                      <FaCheck className="text-green-400 text-xs" />
                    ) : (
                      <FaCopy className="text-gray-400 text-xs" />
                    )}
                  </button>
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
                  <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 relative group">
                    <button
                      onClick={() => copyToClipboard('On the /dashboard page, create a statistics card showing total users. It should display a large number, a label, and a +X% growth indicator. Style it to match our existing cards with a dark background and coral accent.', 'context-example')}
                      className="absolute top-2 right-2 p-1.5 bg-gray-800 hover:bg-gray-700 rounded transition-colors opacity-0 group-hover:opacity-100"
                      aria-label="Copy code"
                    >
                      {copiedCode === 'context-example' ? (
                        <FaCheck className="text-green-400 text-xs" />
                      ) : (
                        <FaCopy className="text-gray-400 text-xs" />
                      )}
                    </button>
                    <code className="text-studio-pink text-sm">On the /dashboard page, create a statistics card showing total users. It should display a large number, a label, and a +X% growth indicator. Style it to match our existing cards with a dark background and coral accent.</code>
                  </div>
                </div>

                <div>
                  <p className="text-white font-semibold mb-2">2. Use Visual References:</p>
                  <p className="text-gray-400 text-sm mb-3">Reference existing designs or attach screenshots.</p>
                  <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 relative group">
                    <button
                      onClick={() => copyToClipboard('Create a navigation bar similar to the one on Stripe\'s dashboard—horizontal layout, subtle shadows, smooth transitions between sections. [Attach screenshot]', 'visual-ref')}
                      className="absolute top-2 right-2 p-1.5 bg-gray-800 hover:bg-gray-700 rounded transition-colors opacity-0 group-hover:opacity-100"
                      aria-label="Copy code"
                    >
                      {copiedCode === 'visual-ref' ? (
                        <FaCheck className="text-green-400 text-xs" />
                      ) : (
                        <FaCopy className="text-gray-400 text-xs" />
                      )}
                    </button>
                    <code className="text-studio-pink text-sm">Create a navigation bar similar to the one on Stripe's dashboard—horizontal layout, subtle shadows, smooth transitions between sections. [Attach screenshot]</code>
                  </div>
                </div>

                <div>
                  <p className="text-white font-semibold mb-2">3. Define Expected Behavior:</p>
                  <p className="text-gray-400 text-sm mb-3">Describe interactions and edge cases.</p>
                  <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 relative group">
                    <button
                      onClick={() => copyToClipboard('When users click "Export", show a loading spinner, then download a CSV file. If the export fails, show an error toast at the top-right. The button should be disabled during the export process.', 'behavior-example')}
                      className="absolute top-2 right-2 p-1.5 bg-gray-800 hover:bg-gray-700 rounded transition-colors opacity-0 group-hover:opacity-100"
                      aria-label="Copy code"
                    >
                      {copiedCode === 'behavior-example' ? (
                        <FaCheck className="text-green-400 text-xs" />
                      ) : (
                        <FaCopy className="text-gray-400 text-xs" />
                      )}
                    </button>
                    <code className="text-studio-pink text-sm">When users click "Export", show a loading spinner, then download a CSV file. If the export fails, show an error toast at the top-right. The button should be disabled during the export process.</code>
                  </div>
                </div>

                <div>
                  <p className="text-white font-semibold mb-2">4. Set Boundaries:</p>
                  <p className="text-gray-400 text-sm mb-3">Tell the AI what NOT to change.</p>
                  <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 relative group">
                    <button
                      onClick={() => copyToClipboard('Add this feature to UserProfile.jsx. Do not modify the authentication logic, Header component, or any shared utilities.', 'boundaries-example')}
                      className="absolute top-2 right-2 p-1.5 bg-gray-800 hover:bg-gray-700 rounded transition-colors opacity-0 group-hover:opacity-100"
                      aria-label="Copy code"
                    >
                      {copiedCode === 'boundaries-example' ? (
                        <FaCheck className="text-green-400 text-xs" />
                      ) : (
                        <FaCopy className="text-gray-400 text-xs" />
                      )}
                    </button>
                    <code className="text-studio-pink text-sm">Add this feature to UserProfile.jsx. Do not modify the authentication logic, Header component, or any shared utilities.</code>
                  </div>
                </div>

                <div>
                  <p className="text-white font-semibold mb-2">5. Request Alternatives:</p>
                  <p className="text-gray-400 text-sm mb-3">Get options before committing to implementation.</p>
                  <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 relative group">
                    <button
                      onClick={() => copyToClipboard('Suggest 3 different approaches for implementing the filter system: (1) dropdown menus, (2) sidebar with checkboxes, (3) tag-based filtering. Explain pros/cons of each.', 'alternatives-example')}
                      className="absolute top-2 right-2 p-1.5 bg-gray-800 hover:bg-gray-700 rounded transition-colors opacity-0 group-hover:opacity-100"
                      aria-label="Copy code"
                    >
                      {copiedCode === 'alternatives-example' ? (
                        <FaCheck className="text-green-400 text-xs" />
                      ) : (
                        <FaCopy className="text-gray-400 text-xs" />
                      )}
                    </button>
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
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 mt-3 relative group">
                  <button
                    onClick={() => copyToClipboard('Before implementing, explain how you would build a real-time notification system. What components would you create? How would you handle state updates? What potential issues should we consider?', 'explain-first')}
                    className="absolute top-2 right-2 p-1.5 bg-gray-800 hover:bg-gray-700 rounded transition-colors opacity-0 group-hover:opacity-100"
                    aria-label="Copy code"
                  >
                    {copiedCode === 'explain-first' ? (
                      <FaCheck className="text-green-400 text-xs" />
                    ) : (
                      <FaCopy className="text-gray-400 text-xs" />
                    )}
                  </button>
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
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 relative group">
                  <button
                    onClick={() => copyToClipboard('I want to add a calendar view to the dashboard. What are 3 different UI approaches I could take? Consider mobile responsiveness and data visualization.', 'calendar-approaches')}
                    className="absolute top-2 right-2 p-1.5 bg-gray-800 hover:bg-gray-700 rounded transition-colors opacity-0 group-hover:opacity-100"
                    aria-label="Copy code"
                  >
                    {copiedCode === 'calendar-approaches' ? (
                      <FaCheck className="text-green-400 text-xs" />
                    ) : (
                      <FaCopy className="text-gray-400 text-xs" />
                    )}
                  </button>
                  <p className="text-white font-medium mb-2 flex items-center gap-2">
                    <FaBullseye className="text-studio-coral" /> Before Starting New Features
                  </p>
                  <p className="text-gray-400 text-sm mb-2">Explore approaches and get recommendations</p>
                  <code className="text-studio-pink text-sm">I want to add a calendar view to the dashboard. What are 3 different UI approaches I could take? Consider mobile responsiveness and data visualization.</code>
                </div>

                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 relative group">
                  <button
                    onClick={() => copyToClipboard('The filter isn\'t working correctly—it\'s not clearing when I click reset. Don\'t fix it yet. First, analyze the component structure and explain what might be causing this issue.', 'debug-analyze')}
                    className="absolute top-2 right-2 p-1.5 bg-gray-800 hover:bg-gray-700 rounded transition-colors opacity-0 group-hover:opacity-100"
                    aria-label="Copy code"
                  >
                    {copiedCode === 'debug-analyze' ? (
                      <FaCheck className="text-green-400 text-xs" />
                    ) : (
                      <FaCopy className="text-gray-400 text-xs" />
                    )}
                  </button>
                  <p className="text-white font-medium mb-2 flex items-center gap-2">
                    <FaBug className="text-red-400" /> When Debugging
                  </p>
                  <p className="text-gray-400 text-sm mb-2">After 2-3 failed attempts, switch to analysis mode</p>
                  <code className="text-studio-pink text-sm">The filter isn't working correctly—it's not clearing when I click reset. Don't fix it yet. First, analyze the component structure and explain what might be causing this issue.</code>
                </div>

                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 relative group">
                  <button
                    onClick={() => copyToClipboard('I\'m building a multi-step form with 5 sections. Should I use a single component with conditional rendering, separate components for each step, or a wizard pattern? Explain trade-offs for each.', 'architecture-decision')}
                    className="absolute top-2 right-2 p-1.5 bg-gray-800 hover:bg-gray-700 rounded transition-colors opacity-0 group-hover:opacity-100"
                    aria-label="Copy code"
                  >
                    {copiedCode === 'architecture-decision' ? (
                      <FaCheck className="text-green-400 text-xs" />
                    ) : (
                      <FaCopy className="text-gray-400 text-xs" />
                    )}
                  </button>
                  <p className="text-white font-medium mb-2 flex items-center gap-2">
                    <MdArchitecture className="text-blue-400" /> For Architecture Decisions
                  </p>
                  <p className="text-gray-400 text-sm mb-2">Validate your approach before building</p>
                  <code className="text-studio-pink text-sm">I'm building a multi-step form with 5 sections. Should I use a single component with conditional rendering, separate components for each step, or a wizard pattern? Explain trade-offs for each.</code>
                </div>

                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 relative group">
                  <button
                    onClick={() => copyToClipboard('Review the UserProfile component we just created. Are there any accessibility issues? Performance concerns? Better patterns we should consider?', 'code-review')}
                    className="absolute top-2 right-2 p-1.5 bg-gray-800 hover:bg-gray-700 rounded transition-colors opacity-0 group-hover:opacity-100"
                    aria-label="Copy code"
                  >
                    {copiedCode === 'code-review' ? (
                      <FaCheck className="text-green-400 text-xs" />
                    ) : (
                      <FaCopy className="text-gray-400 text-xs" />
                    )}
                  </button>
                  <p className="text-white font-medium mb-2 flex items-center gap-2">
                    <FaSearch className="text-purple-400" /> For Code Reviews
                  </p>
                  <p className="text-gray-400 text-sm mb-2">Audit what was just built</p>
                  <code className="text-studio-pink text-sm">Review the UserProfile component we just created. Are there any accessibility issues? Performance concerns? Better patterns we should consider?</code>
                </div>

                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 relative group">
                  <button
                    onClick={() => copyToClipboard('Explain how Framer Motion\'s layout animations work and show me 3 use cases where they\'d improve the user experience in our dashboard.', 'learning-example')}
                    className="absolute top-2 right-2 p-1.5 bg-gray-800 hover:bg-gray-700 rounded transition-colors opacity-0 group-hover:opacity-100"
                    aria-label="Copy code"
                  >
                    {copiedCode === 'learning-example' ? (
                      <FaCheck className="text-green-400 text-xs" />
                    ) : (
                      <FaCopy className="text-gray-400 text-xs" />
                    )}
                  </button>
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
                  <div className="bg-gray-950 border border-gray-700 rounded-lg p-3 relative group">
                    <button
                      onClick={() => copyToClipboard('Analyze this error but don\'t make any changes yet.', 'analyze-only')}
                      className="absolute top-2 right-2 p-1.5 bg-gray-800 hover:bg-gray-700 rounded transition-colors opacity-0 group-hover:opacity-100"
                      aria-label="Copy code"
                    >
                      {copiedCode === 'analyze-only' ? (
                        <FaCheck className="text-green-400 text-xs" />
                      ) : (
                        <FaCopy className="text-gray-400 text-xs" />
                      )}
                    </button>
                    <code className="text-studio-pink text-sm">Analyze this error but don't make any changes yet.</code>
                  </div>
                  <div className="bg-gray-950 border border-gray-700 rounded-lg p-3 relative group">
                    <button
                      onClick={() => copyToClipboard('Suggest solutions without implementing them.', 'suggest-only')}
                      className="absolute top-2 right-2 p-1.5 bg-gray-800 hover:bg-gray-700 rounded transition-colors opacity-0 group-hover:opacity-100"
                      aria-label="Copy code"
                    >
                      {copiedCode === 'suggest-only' ? (
                        <FaCheck className="text-green-400 text-xs" />
                      ) : (
                        <FaCopy className="text-gray-400 text-xs" />
                      )}
                    </button>
                    <code className="text-studio-pink text-sm">Suggest solutions without implementing them.</code>
                  </div>
                  <div className="bg-gray-950 border border-gray-700 rounded-lg p-3 relative group">
                    <button
                      onClick={() => copyToClipboard('Explain what would need to change, but wait for my confirmation.', 'explain-wait')}
                      className="absolute top-2 right-2 p-1.5 bg-gray-800 hover:bg-gray-700 rounded transition-colors opacity-0 group-hover:opacity-100"
                      aria-label="Copy code"
                    >
                      {copiedCode === 'explain-wait' ? (
                        <FaCheck className="text-green-400 text-xs" />
                      ) : (
                        <FaCopy className="text-gray-400 text-xs" />
                      )}
                    </button>
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
                      <p className="text-yellow-400 font-medium mb-2 flex items-center gap-2">
                        <FaExclamationTriangle className="text-yellow-400" />
                        Work in Progress
                      </p>
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
                    <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 relative group">
                      <button
                        onClick={() => copyToClipboard('Show me what changed between the current version and the last working commit. Highlight any modifications to [ComponentName].', 'compare-versions')}
                        className="absolute top-2 right-2 p-1.5 bg-gray-800 hover:bg-gray-700 rounded transition-colors opacity-0 group-hover:opacity-100"
                        aria-label="Copy code"
                      >
                        {copiedCode === 'compare-versions' ? (
                          <FaCheck className="text-green-400 text-xs" />
                        ) : (
                          <FaCopy className="text-gray-400 text-xs" />
                        )}
                      </button>
                      <p className="text-gray-400 text-sm mb-2">1. Compare with last working version:</p>
                      <code className="text-studio-pink text-sm">Show me what changed between the current version and the last working commit. Highlight any modifications to [ComponentName].</code>
                    </div>
                    
                    <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 relative group">
                      <button
                        onClick={() => copyToClipboard('Compare the previous 3 commits. Which changes could have caused the navigation to break?', 'breaking-changes')}
                        className="absolute top-2 right-2 p-1.5 bg-gray-800 hover:bg-gray-700 rounded transition-colors opacity-0 group-hover:opacity-100"
                        aria-label="Copy code"
                      >
                        {copiedCode === 'breaking-changes' ? (
                          <FaCheck className="text-green-400 text-xs" />
                        ) : (
                          <FaCopy className="text-gray-400 text-xs" />
                        )}
                      </button>
                      <p className="text-gray-400 text-sm mb-2">2. Identify breaking changes:</p>
                      <code className="text-studio-pink text-sm">Compare the previous 3 commits. Which changes could have caused the navigation to break?</code>
                    </div>
                    
                    <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 relative group">
                      <button
                        onClick={() => copyToClipboard('Revert only the changes to UserAuth.jsx from the last commit, but keep everything else.', 'rollback-selective')}
                        className="absolute top-2 right-2 p-1.5 bg-gray-800 hover:bg-gray-700 rounded transition-colors opacity-0 group-hover:opacity-100"
                        aria-label="Copy code"
                      >
                        {copiedCode === 'rollback-selective' ? (
                          <FaCheck className="text-green-400 text-xs" />
                        ) : (
                          <FaCopy className="text-gray-400 text-xs" />
                        )}
                      </button>
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
                  <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 mt-2 relative group">
                    <button
                      onClick={() => copyToClipboard('Create a component specifically for [role X] and do not reuse shared components unless clearly scoped.', 'component-isolation')}
                      className="absolute top-2 right-2 p-1.5 bg-gray-800 hover:bg-gray-700 rounded transition-colors opacity-0 group-hover:opacity-100"
                      aria-label="Copy code"
                    >
                      {copiedCode === 'component-isolation' ? (
                        <FaCheck className="text-green-400 text-xs" />
                      ) : (
                        <FaCopy className="text-gray-400 text-xs" />
                      )}
                    </button>
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
                  <FaTimesCircle className="text-red-500" />
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
                  <FaTimesCircle className="text-red-500" />
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
                  <p className="text-red-400 font-medium mb-2 flex items-center gap-2">
                    <FaTimesCircle className="text-red-400" />
                    Vague
                  </p>
                  <code className="text-gray-400 text-sm">"Add a form"</code>
                </div>
                <div className="bg-green-950/30 border border-green-700 rounded-lg p-4 relative group">
                  <button
                    onClick={() => copyToClipboard('Create a login form with email and password fields, a \'Remember me\' checkbox, and a primary submit button. Style it with our brand colors and add inline validation.', 'login-form-example')}
                    className="absolute top-2 right-2 p-1.5 bg-gray-800 hover:bg-gray-700 rounded transition-colors opacity-0 group-hover:opacity-100"
                    aria-label="Copy code"
                  >
                    {copiedCode === 'login-form-example' ? (
                      <FaCheck className="text-green-400 text-xs" />
                    ) : (
                      <FaCopy className="text-gray-400 text-xs" />
                    )}
                  </button>
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
                  <FaTimesCircle className="text-red-500" />
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
                  <FaTimesCircle className="text-red-500" />
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
                  <FaTimesCircle className="text-red-500" />
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
                  <FaTimesCircle className="text-red-500" />
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
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-3 mt-3 relative group">
                  <button
                    onClick={() => copyToClipboard('Explain your approach before implementing. What are potential issues I should be aware of?', 'explain-approach')}
                    className="absolute top-2 right-2 p-1.5 bg-gray-800 hover:bg-gray-700 rounded transition-colors opacity-0 group-hover:opacity-100"
                    aria-label="Copy code"
                  >
                    {copiedCode === 'explain-approach' ? (
                      <FaCheck className="text-green-400 text-xs" />
                    ) : (
                      <FaCopy className="text-gray-400 text-xs" />
                    )}
                  </button>
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
                  <FaTimesCircle className="text-red-500" />
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
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-3 mt-3 relative group">
                  <button
                    onClick={() => copyToClipboard('Implement this in ProfilePage.jsx only. Do not modify Header.jsx, AuthContext.tsx, or any shared utilities.', 'boundaries-profilepage')}
                    className="absolute top-2 right-2 p-1.5 bg-gray-800 hover:bg-gray-700 rounded transition-colors opacity-0 group-hover:opacity-100"
                    aria-label="Copy code"
                  >
                    {copiedCode === 'boundaries-profilepage' ? (
                      <FaCheck className="text-green-400 text-xs" />
                    ) : (
                      <FaCopy className="text-gray-400 text-xs" />
                    )}
                  </button>
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
                  <FaTimesCircle className="text-red-500" />
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
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-3 mt-3 relative group">
                  <button
                    onClick={() => copyToClipboard('Create a navigation menu that\'s fully responsive (mobile-first), keyboard navigable, and includes proper ARIA labels for screen readers.', 'responsive-accessible')}
                    className="absolute top-2 right-2 p-1.5 bg-gray-800 hover:bg-gray-700 rounded transition-colors opacity-0 group-hover:opacity-100"
                    aria-label="Copy code"
                  >
                    {copiedCode === 'responsive-accessible' ? (
                      <FaCheck className="text-green-400 text-xs" />
                    ) : (
                      <FaCopy className="text-gray-400 text-xs" />
                    )}
                  </button>
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
                  <FaTimesCircle className="text-red-500" />
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
                  <FaTimesCircle className="text-red-500" />
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
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-3 mt-3 relative group">
                  <button
                    onClick={() => copyToClipboard('Explain the pattern you used for this animation. When should I use this approach vs alternatives?', 'learn-pattern')}
                    className="absolute top-2 right-2 p-1.5 bg-gray-800 hover:bg-gray-700 rounded transition-colors opacity-0 group-hover:opacity-100"
                    aria-label="Copy code"
                  >
                    {copiedCode === 'learn-pattern' ? (
                      <FaCheck className="text-green-400 text-xs" />
                    ) : (
                      <FaCopy className="text-gray-400 text-xs" />
                    )}
                  </button>
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

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
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
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <FaPalette className="text-studio-pink" />
                  Design Access
                </h3>
                <p className="text-gray-400">Read frames, components, and design tokens directly from Figma files</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <FaRulerCombined className="text-studio-coral" />
                  Style Extraction
                </h3>
                <p className="text-gray-400">Automatically extract colors, typography, spacing, and layout specs</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <FaSyncAlt className="text-studio-blue" />
                  Real-time Sync
                </h3>
                <p className="text-gray-400">Changes in Figma are instantly available to your AI assistant</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <FaBullseye className="text-studio-purple" />
                  Component Library
                </h3>
                <p className="text-gray-400">AI understands your design system and reusable components</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Installation</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <p className="text-gray-300 mb-4">Install the Figma MCP server via npm:</p>
              <pre className="bg-gray-950 border border-gray-700 rounded-lg p-4 mb-4 overflow-x-auto relative group">
                <button
                  onClick={() => copyToClipboard('npm install -g @modelcontextprotocol/server-figma', 'npm-install-figma')}
                  className="absolute top-2 right-2 p-1.5 bg-gray-800 hover:bg-gray-700 rounded transition-colors opacity-0 group-hover:opacity-100"
                  aria-label="Copy code"
                >
                  {copiedCode === 'npm-install-figma' ? (
                    <FaCheck className="text-green-400 text-xs" />
                  ) : (
                    <FaCopy className="text-gray-400 text-xs" />
                  )}
                </button>
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
              <pre className="bg-gray-950 border border-gray-700 rounded-lg p-4 overflow-x-auto relative group">
                <button
                  onClick={() => copyToClipboard(`{
  "mcpServers": {
    "figma": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-figma"],
      "env": {
        "FIGMA_PERSONAL_ACCESS_TOKEN": "your-token-here"
      }
    }
  }
}`, 'figma-config')}
                  className="absolute top-2 right-2 p-1.5 bg-gray-800 hover:bg-gray-700 rounded transition-colors opacity-0 group-hover:opacity-100"
                  aria-label="Copy code"
                >
                  {copiedCode === 'figma-config' ? (
                    <FaCheck className="text-green-400 text-xs" />
                  ) : (
                    <FaCopy className="text-gray-400 text-xs" />
                  )}
                </button>
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
                onClick={() => setActivePage('figma-to-code')}
                className="px-6 py-3 bg-studio-pink hover:bg-studio-coral text-white rounded-xl transition-colors font-medium"
              >
                See Full Workflow →
              </button>
              <button
                onClick={() => setActivePage('matching-your-vision')}
                className="px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white rounded-xl transition-colors font-medium"
              >
                Achieving Design Fidelity
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
              
              <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 mt-4 relative group">
                <button
                  onClick={() => copyToClipboard('I want to implement this design: [Figma URL]\n\nCreate a React component that matches this design. Use Tailwind CSS for styling. Make it responsive and add hover states for interactive elements.', 'figma-url-example')}
                  className="absolute top-2 right-2 p-1.5 bg-gray-800 hover:bg-gray-700 rounded transition-colors opacity-0 group-hover:opacity-100"
                  aria-label="Copy code"
                >
                  {copiedCode === 'figma-url-example' ? (
                    <FaCheck className="text-green-400 text-xs" />
                  ) : (
                    <FaCopy className="text-gray-400 text-xs" />
                  )}
                </button>
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
                onClick={() => setActivePage('design-system-prompts')}
                className="px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white rounded-xl transition-colors font-medium"
              >
                Design System Prompts
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
                Learn to Import Designs →
              </button>
              <button
                onClick={() => setActivePage('iterative-design')}
                className="px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white rounded-xl transition-colors font-medium"
              >
                Iterative Design Process
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

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
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
                <h3 className="text-xl font-bold text-studio-coral mb-3 flex items-center gap-2">
                  <FaExclamationTriangle className="text-studio-coral" />
                  Needs Guidance On
                </h3>
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
                    <FaUser className="text-studio-purple" />
                    You (The Designer)
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
                    <FaRobot className="text-studio-pink" />
                    AI (The Executor)
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
                  <p className="text-red-400 font-semibold mb-2 flex items-center gap-2">
                    <FaTimesCircle className="text-red-400" />
                    Vague Prompt
                  </p>
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
                  <p className="text-red-400 font-semibold mb-2 flex items-center gap-2">
                    <FaTimesCircle className="text-red-400" />
                    Vague Prompt
                  </p>
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
                  <p className="text-red-400 font-semibold mb-2 flex items-center gap-2">
                    <FaTimesCircle className="text-red-400" />
                    Vague Prompt
                  </p>
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
                <p className="text-white font-semibold mb-2 flex items-center gap-2">
                  <FaLightbulb className="text-studio-blue" />
                  Use Code Comments as Prompts
                </p>
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
                <p className="text-white font-semibold mb-2 flex items-center gap-2">
                  <FaLightbulb className="text-studio-pink" />
                  Ask for Explanations
                </p>
                <p className="text-gray-300 text-sm">
                  "Explain this approach" or "What are the trade-offs?" helps you learn and validate AI decisions
                </p>
              </div>

              <div className="bg-studio-purple/10 border-l-4 border-studio-purple p-4 rounded-r">
                <p className="text-white font-semibold mb-2 flex items-center gap-2">
                  <FaLightbulb className="text-studio-purple" />
                  Request Multiple Options
                </p>
                <p className="text-gray-300 text-sm">
                  "Show me 3 different approaches for implementing this feature" gives you choices to evaluate
                </p>
              </div>

              <div className="bg-studio-coral/10 border-l-4 border-studio-coral p-4 rounded-r">
                <p className="text-white font-semibold mb-2 flex items-center gap-2">
                  <FaLightbulb className="text-studio-coral" />
                  Include Success Criteria
                </p>
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
                <h3 className="text-xl font-bold text-studio-pink mb-3 flex items-center gap-2">
                  <FaBullseye className="text-studio-pink" />
                  Start Ugly, End Beautiful
                </h3>
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
                <h3 className="text-xl font-bold text-studio-blue mb-3 flex items-center gap-2">
                  <FaClock className="text-studio-blue" />
                  Timeboxing
                </h3>
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
                <h3 className="text-xl font-bold text-studio-purple mb-3 flex items-center gap-2">
                  <FaSyncAlt className="text-studio-purple" />
                  Parallel Exploration
                </h3>
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
                <h3 className="text-lg font-bold text-studio-pink mb-3 flex items-center gap-2">
                  <FaPalette className="text-studio-pink" />
                  Design Context
                </h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Brand colors & fonts</li>
                  <li>• Design system rules</li>
                  <li>• Spacing scale</li>
                  <li>• Component patterns</li>
                  <li>• Visual style (modern, minimal, etc.)</li>
                </ul>
              </div>
              
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-studio-blue mb-3 flex items-center gap-2">
                  <MdArchitecture className="text-studio-blue" />
                  Technical Context
                </h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Framework (React, Vue, etc.)</li>
                  <li>• Libraries in use</li>
                  <li>• File structure</li>
                  <li>• Naming conventions</li>
                  <li>• Code patterns</li>
                </ul>
              </div>
              
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-studio-purple mb-3 flex items-center gap-2">
                  <FaBullseye className="text-studio-purple" />
                  Project Context
                </h3>
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
              <h3 className="text-yellow-300 font-bold mb-3 flex items-center gap-2">
                <FaExclamationTriangle className="text-yellow-300" />
                AI Has Limited Memory
              </h3>
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

      case 'custom-assets':
        return (
          <div className="prose prose-invert max-w-none">
            <h1 className="text-5xl font-bold text-white mb-6">Adding Custom Assets</h1>
            <p className="text-xl text-gray-300 mb-8">
              How to add your own SVG icons, images, and design assets to your project
            </p>

            <div className="bg-gradient-to-r from-studio-coral/20 to-studio-pink/20 border border-studio-coral/30 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Why Custom Assets Matter</h2>
              <p className="text-gray-300 mb-4">
                AI can generate placeholder icons and images, but your designs often need specific brand assets, 
                custom icons, or images that match your design system exactly.
              </p>
              <p className="text-gray-300">
                <span className="text-studio-coral font-semibold">Learning to add your own assets</span> gives you 
                full control over the visual details that make your design unique.
              </p>
            </div>

            {/* THE EASY WAY - Natural Language */}
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3"><FaRocket className="text-studio-purple" /> The Easy Way (No Code Required)</h2>
            <div className="bg-gradient-to-r from-studio-purple/20 to-studio-blue/20 border border-studio-purple/30 rounded-xl p-6 mb-8">
              <p className="text-gray-300 mb-4">
                You don't need to understand code to add your own assets. Just talk to the AI naturally and 
                show it what you have. Here's how:
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><FaImage className="text-studio-coral" /> For Images & Videos: Drag and Drop</h3>
              <p className="text-gray-300 mb-4">
                The simplest way to add images or videos to your project:
              </p>
              <ol className="space-y-3 text-gray-300 list-decimal list-inside mb-4">
                <li>Put your images/videos in a folder on your computer</li>
                <li><span className="text-studio-coral font-medium">Drag and drop the folder</span> directly into the chat window</li>
                <li>Tell the AI what you want in plain English</li>
              </ol>
              <div className="space-y-3">
                <div className="bg-studio-coral/10 border-l-4 border-studio-coral p-4 rounded-r">
                  <p className="text-gray-400 text-xs mb-1">EXAMPLE PROMPT</p>
                  <p className="text-gray-300 text-sm">
                    "I've added my images folder. Use 'team-photo.jpg' as the background for the About section, 
                    and use 'product-demo.mp4' as the video in the hero section."
                  </p>
                </div>
                <div className="bg-studio-pink/10 border-l-4 border-studio-pink p-4 rounded-r">
                  <p className="text-gray-400 text-xs mb-1">EXAMPLE PROMPT</p>
                  <p className="text-gray-300 text-sm">
                    "Here are my brand assets. Replace all the placeholder images with the matching ones from this folder."
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><FaCode className="text-studio-pink" /> For SVG Icons: Get the Code and Paste It</h3>
              <p className="text-gray-300 mb-4">
                SVGs are special—they're actually code, not image files. Here's how to get that code:
              </p>
              
              <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 mb-4">
                <p className="text-white font-medium mb-2">Option 1: Use an Online Converter</p>
                <ol className="space-y-2 text-gray-300 text-sm list-decimal list-inside">
                  <li>Go to <a href="https://nikitahl.github.io/svg-2-code/" target="_blank" rel="noopener noreferrer" className="text-studio-coral hover:underline">svg-2-code</a> (or search "SVG to code converter")</li>
                  <li>Upload or paste your SVG file</li>
                  <li>Copy the code it gives you</li>
                  <li>Paste it into the chat and tell the AI what to do with it</li>
                </ol>
              </div>
              
              <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 mb-4">
                <p className="text-white font-medium mb-2">Option 2: Open in Browser + Inspect</p>
                <ol className="space-y-2 text-gray-300 text-sm list-decimal list-inside">
                  <li>Drag your .svg file into a browser window (Chrome, Firefox, etc.)</li>
                  <li>Right-click on the SVG and select "Inspect" or "Inspect Element"</li>
                  <li>Find the <code className="text-studio-coral">&lt;svg&gt;...&lt;/svg&gt;</code> code in the panel that opens</li>
                  <li>Right-click on it and choose "Copy" → "Copy element"</li>
                  <li>Paste into the chat window</li>
                </ol>
              </div>

              <div className="space-y-3 mt-4">
                <div className="bg-studio-purple/10 border-l-4 border-studio-purple p-4 rounded-r">
                  <p className="text-gray-400 text-xs mb-1">EXAMPLE PROMPT (after pasting SVG code)</p>
                  <p className="text-gray-300 text-sm">
                    "Here's my company logo as SVG code. Use this for the logo in the navbar and footer. 
                    Make it white in the navbar and match the brand color in the footer."
                  </p>
                </div>
                <div className="bg-studio-coral/10 border-l-4 border-studio-coral p-4 rounded-r">
                  <p className="text-gray-400 text-xs mb-1">EXAMPLE PROMPT (after pasting SVG code)</p>
                  <p className="text-gray-300 text-sm">
                    "I'm pasting my custom arrow icon SVG below. Use this instead of the default arrow icon 
                    for all the 'Learn More' buttons."
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-900/20 border border-yellow-700/30 rounded-lg p-4 mb-8">
              <p className="text-yellow-200 text-sm flex items-start gap-2">
                <FaLightbulb className="text-yellow-400 mt-0.5 flex-shrink-0" />
                <span><strong>Pro Tip:</strong> You can mix both methods! Drag-drop a folder of images, then paste 
                SVG code for icons in the same conversation. The AI will keep track of everything.</span>
              </p>
            </div>

            {/* TECHNICAL METHODS */}
            <h2 className="text-3xl font-bold text-white mb-4 mt-12 flex items-center gap-3"><FaWrench className="text-studio-coral" /> Technical Methods (For More Control)</h2>
            <p className="text-gray-400 mb-6">
              If you want to understand how assets work in code, or need more control over how they're used, 
              here are the technical approaches:
            </p>

            <h3 className="text-2xl font-bold text-white mb-4">Adding SVG Icons</h3>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <h4 className="text-xl font-bold text-white mb-4">Method 1: Inline SVG (Recommended)</h4>
              <p className="text-gray-300 mb-4">Copy your SVG code directly into your component for full control over styling:</p>
              <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 mb-4 overflow-x-auto">
                <code className="text-studio-pink text-sm">{`// In your React component
<svg className="w-6 h-6 text-studio-pink" fill="currentColor" viewBox="0 0 24 24">
  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
</svg>`}</code>
              </div>
              <p className="text-gray-400 text-sm">
                <strong>Tip:</strong> Use <code className="text-studio-coral">currentColor</code> for fill/stroke so your icon inherits text color from Tailwind classes.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <h4 className="text-xl font-bold text-white mb-4">Method 2: SVG as Component</h4>
              <p className="text-gray-300 mb-4">Create reusable icon components:</p>
              <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 mb-4 overflow-x-auto">
                <code className="text-studio-pink text-sm">{`// src/components/icons/CustomIcon.jsx
const CustomIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="..." />
  </svg>
);

export default CustomIcon;

// Usage in your component
import CustomIcon from './icons/CustomIcon';
<CustomIcon className="w-8 h-8 text-studio-coral" />`}</code>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <h4 className="text-xl font-bold text-white mb-4">Method 3: Import SVG as Image</h4>
              <p className="text-gray-300 mb-4">For simpler cases, import SVGs like regular images:</p>
              <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 mb-4 overflow-x-auto">
                <code className="text-studio-pink text-sm">{`// Import the SVG file
import logo from './assets/logo.svg';

// Use in your component
<img src={logo} alt="Logo" className="w-32 h-auto" />`}</code>
              </div>
              <p className="text-gray-400 text-sm">
                <strong>Note:</strong> This method doesn't allow you to change colors with CSS.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">Adding Images (Technical)</h3>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <h4 className="text-xl font-bold text-white mb-4">Project Structure for Assets</h4>
              <p className="text-gray-300 mb-4">Organize your images in a dedicated folder:</p>
              <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 mb-4 overflow-x-auto">
                <code className="text-studio-pink text-sm">{`project/
├── public/
│   └── images/          ← Static images (referenced by URL)
│       ├── hero-bg.jpg
│       └── logo.png
├── src/
│   └── assets/          ← Imported images (bundled)
│       ├── icons/
│       │   └── custom-icon.svg
│       └── images/
│           └── feature-image.png`}</code>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <h4 className="text-xl font-bold text-white mb-4">Using Images in Code</h4>
              <div className="space-y-4">
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                  <p className="text-gray-400 text-sm mb-2">From public folder (use URL path):</p>
                  <code className="text-studio-pink text-sm">{`<img src="/images/hero-bg.jpg" alt="Hero" className="w-full" />`}</code>
                </div>
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                  <p className="text-gray-400 text-sm mb-2">From src/assets (import first):</p>
                  <code className="text-studio-pink text-sm">{`import featureImg from './assets/images/feature-image.png';
<img src={featureImg} alt="Feature" className="w-full rounded-xl" />`}</code>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">Prompt Examples for AI (Technical)</h3>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <p className="text-gray-300 mb-4">Tell AI to use your custom assets with file paths:</p>
              <div className="space-y-4">
                <div className="bg-studio-coral/10 border-l-4 border-studio-coral p-4 rounded-r">
                  <p className="text-gray-400 text-xs mb-1">PROMPT</p>
                  <p className="text-gray-300 text-sm">
                    "I have a custom SVG icon at src/assets/icons/dashboard.svg. Create a navigation component 
                    that imports and uses this icon for the dashboard link."
                  </p>
                </div>
                <div className="bg-studio-pink/10 border-l-4 border-studio-pink p-4 rounded-r">
                  <p className="text-gray-400 text-xs mb-1">PROMPT</p>
                  <p className="text-gray-300 text-sm">
                    "Replace the placeholder hero image with my custom image at /images/hero-background.jpg. 
                    Make sure it covers the full section with object-cover."
                  </p>
                </div>
                <div className="bg-studio-purple/10 border-l-4 border-studio-purple p-4 rounded-r">
                  <p className="text-gray-400 text-xs mb-1">PROMPT</p>
                  <p className="text-gray-300 text-sm">
                    "Create an IconButton component that accepts an 'icon' prop with inline SVG. 
                    The SVG should use currentColor so it inherits the button's text color."
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">Exporting from Figma</h3>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <ol className="space-y-3 text-gray-300 list-decimal list-inside">
                <li>Select your icon or image in Figma</li>
                <li>Go to <span className="text-white font-medium">Export</span> in the right panel</li>
                <li>Choose format: <span className="text-studio-coral font-medium">SVG</span> for icons, <span className="text-studio-coral font-medium">PNG/JPG</span> for images</li>
                <li>For SVGs, enable "Include 'id' attribute" for better accessibility</li>
                <li>Click Export and save to your project's assets folder</li>
              </ol>
              <div className="bg-yellow-900/20 border border-yellow-700/30 rounded-lg p-4 mt-4">
                <p className="text-yellow-200 text-sm">
                  <strong>Pro Tip:</strong> When exporting icons from Figma, flatten complex shapes first 
                  to get cleaner SVG code. Use the "Outline Stroke" option if your icon has strokes.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setActivePage('importing-designs')}
                className="px-6 py-3 bg-studio-pink hover:bg-studio-coral text-white rounded-xl transition-colors font-medium"
              >
                ← Importing Designs
              </button>
              <button
                onClick={() => setActivePage('design-system-prompts')}
                className="px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white rounded-xl transition-colors font-medium"
              >
                Design System Prompts
              </button>
            </div>
          </div>
        );

      case 'starter-prompts':
        return (
          <div className="prose prose-invert max-w-none">
            <h1 className="text-5xl font-bold text-white mb-6">Starter Prompts for Non-Designers</h1>
            <p className="text-xl text-gray-300 mb-8">
              Essential AI prompts for Git, local servers, and common development tasks
            </p>

            <div className="bg-gradient-to-r from-studio-purple/20 to-studio-blue/20 border border-studio-purple/30 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Beyond Design: Development Essentials</h2>
              <p className="text-gray-300">
                Vibe coding isn't just about building UIs—you'll also need to save your work, preview it locally, 
                and manage your project. Here are copy-paste prompts for common tasks that trip up non-developers.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-2">
              <FaServer className="text-studio-purple" />
              Starting a Local Server
            </h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <div className="space-y-4">
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                  <p className="text-gray-400 text-xs mb-2">PROMPT: Start Development Server</p>
                  <code className="text-studio-pink text-sm block">
                    "How do I start the local development server for this project? Give me the exact terminal command to run."
                  </code>
                </div>
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                  <p className="text-gray-400 text-xs mb-2">PROMPT: Start on a Specific Port</p>
                  <code className="text-studio-pink text-sm block">
                    "Start the local dev server on port 5173 (example). Give me the exact command for this project (e.g., Vite/React), and tell me what to change if that port is already in use."
                  </code>
                </div>
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                  <p className="text-gray-400 text-xs mb-2">PROMPT: View in Browser</p>
                  <code className="text-studio-pink text-sm block">
                    "The server is running. What URL do I open in my browser to see my project?"
                  </code>
                </div>
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                  <p className="text-gray-400 text-xs mb-2">PROMPT: Stop the Server</p>
                  <code className="text-studio-pink text-sm block">
                    "How do I stop the running development server?"
                  </code>
                  <p className="text-gray-400 text-xs mt-2">Answer: Press <kbd className="bg-gray-800 px-2 py-0.5 rounded">Ctrl+C</kbd> in the terminal</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-2">
              <FaCodeBranch className="text-studio-purple" />
              Git: Saving Your Work
            </h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <p className="text-gray-300 mb-4">Git saves snapshots of your work so you can go back if something breaks.</p>
              <div className="space-y-4">
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                  <p className="text-gray-400 text-xs mb-2">PROMPT: Save All Changes</p>
                  <code className="text-studio-pink text-sm block">
                    "I made changes to my project. Give me the git commands to save all my changes with the message 'Added hero section'."
                  </code>
                </div>
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                  <p className="text-gray-400 text-xs mb-2">PROMPT: Check What Changed</p>
                  <code className="text-studio-pink text-sm block">
                    "Show me what files I've changed since my last save."
                  </code>
                </div>
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                  <p className="text-gray-400 text-xs mb-2">PROMPT: Undo Last Changes</p>
                  <code className="text-studio-pink text-sm block">
                    "I broke something. How do I undo my changes and go back to the last working version?"
                  </code>
                </div>
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                  <p className="text-gray-400 text-xs mb-2">PROMPT: Push to GitHub</p>
                  <code className="text-studio-pink text-sm block">
                    "I committed my changes. Now how do I push them to GitHub so they're backed up online?"
                  </code>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-2">
              <FaWrench className="text-studio-purple" />
              Installing Dependencies
            </h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <div className="space-y-4">
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                  <p className="text-gray-400 text-xs mb-2">PROMPT: Install Project Dependencies</p>
                  <code className="text-studio-pink text-sm block">
                    "I just cloned this project. What command do I run to install all the dependencies?"
                  </code>
                </div>
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                  <p className="text-gray-400 text-xs mb-2">PROMPT: Add a New Package</p>
                  <code className="text-studio-pink text-sm block">
                    "I want to add the framer-motion animation library. Give me the command to install it."
                  </code>
                </div>
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                  <p className="text-gray-400 text-xs mb-2">PROMPT: Fix 'Module Not Found' Error</p>
                  <code className="text-studio-pink text-sm block">
                    "I'm getting 'Module not found: react-icons'. How do I fix this?"
                  </code>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-2">
              <FaBug className="text-studio-purple" />
              Fixing Common Errors
            </h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <div className="space-y-4">
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                  <p className="text-gray-400 text-xs mb-2">PROMPT: Understand an Error</p>
                  <code className="text-studio-pink text-sm block">
                    "I'm getting this error: [paste error message]. What does it mean and how do I fix it?"
                  </code>
                </div>
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                  <p className="text-gray-400 text-xs mb-2">PROMPT: Page is Blank</p>
                  <code className="text-studio-pink text-sm block">
                    "My page is showing blank white screen. How do I debug this? Check the browser console for me."
                  </code>
                </div>
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                  <p className="text-gray-400 text-xs mb-2">PROMPT: Styles Not Applying</p>
                  <code className="text-studio-pink text-sm block">
                    "My Tailwind classes aren't working. The styles aren't showing up. What could be wrong?"
                  </code>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-2">
              <FaFolderOpen className="text-studio-purple" />
              File Management
            </h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <div className="space-y-4">
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                  <p className="text-gray-400 text-xs mb-2">PROMPT: Create New Component</p>
                  <code className="text-studio-pink text-sm block">
                    "Create a new component file called Button.jsx in the components folder with a basic button template."
                  </code>
                </div>
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                  <p className="text-gray-400 text-xs mb-2">PROMPT: Rename a File</p>
                  <code className="text-studio-pink text-sm block">
                    "I want to rename Header.jsx to Navbar.jsx. What's the safest way to do this so imports don't break?"
                  </code>
                </div>
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                  <p className="text-gray-400 text-xs mb-2">PROMPT: Find a File</p>
                  <code className="text-studio-pink text-sm block">
                    "Where is the main App component located in this project?"
                  </code>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-2">
              <FaPalette className="text-studio-purple" />
              Quick Design Tasks
            </h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <div className="space-y-4">
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                  <p className="text-gray-400 text-xs mb-2">PROMPT: Change Colors</p>
                  <code className="text-studio-pink text-sm block">
                    "Change all the blue colors in this component to purple (#8B5CF6)."
                  </code>
                </div>
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                  <p className="text-gray-400 text-xs mb-2">PROMPT: Make Responsive</p>
                  <code className="text-studio-pink text-sm block">
                    "This layout looks good on desktop but broken on mobile. Make it stack vertically on small screens."
                  </code>
                </div>
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                  <p className="text-gray-400 text-xs mb-2">PROMPT: Add Animation</p>
                  <code className="text-studio-pink text-sm block">
                    "Add a subtle fade-in animation when this card appears on screen."
                  </code>
                </div>
              </div>
            </div>

            <div className="bg-studio-coral/10 border-l-4 border-studio-coral p-6 rounded-r mb-8">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <FaLightbulb className="text-studio-coral" />
                Pro Tip: Just Ask!
              </h3>
              <p className="text-gray-300">
                Don't know the technical term? Just describe what you want in plain English. 
                AI assistants like Copilot are great at understanding intent. Instead of trying to 
                remember "git commit -m", just say "save my changes with the message..."
              </p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setActivePage('best-practices')}
                className="px-6 py-3 bg-studio-purple hover:bg-studio-pink text-white rounded-xl transition-colors font-medium"
              >
                Best Practices →
              </button>
              <button
                onClick={() => setActivePage('first-session')}
                className="px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white rounded-xl transition-colors font-medium"
              >
                ← Your First Session
              </button>
            </div>
          </div>
        );

      case 'advanced-polish':
        return (
          <div className="prose prose-invert max-w-none">
            <h1 className="text-5xl font-bold text-white mb-6">AI Design Guide: Overview</h1>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-studio-blue/10 border border-studio-blue/20">
                  <TbSparkles className="text-studio-blue text-xl" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">A UX designer&apos;s playbook</p>
                  <p className="text-gray-300 m-0">
                    Steer AI away from generic defaults by forcing a bold direction, then executing it consistently.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8 border-t-2 border-t-studio-purple/40">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <FaSearch className="text-studio-purple" /> Why AI UI Converges
              </h2>
              <p className="text-gray-300 mb-4">
                Without explicit direction, AI tends to sample from the statistical center of “safe” design decisions. That&apos;s why
                outputs often look similar across projects.
              </p>
              <p className="text-gray-400 font-semibold mb-2">Common defaults</p>
              <ul className="space-y-1 text-gray-300">
                <li>• Inter/Roboto typography</li>
                <li>• Purple gradients on white</li>
                <li>• Centered card grids</li>
                <li>• Decorative shadows + low-contrast text</li>
                <li>• Scattered micro-animations</li>
              </ul>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8 border-t-2 border-t-studio-pink/40">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <FaBullseye className="text-studio-pink" /> How to Break Convergence
              </h2>
              <p className="text-gray-300 mb-4">
                Make the model <span className="text-white font-semibold">commit to a bold aesthetic direction</span> first, then execute consistently across the four pillars.
              </p>
              <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                <p className="text-gray-400 text-xs mb-2">Strategic prompt example</p>
                <p className="text-gray-200 text-sm m-0">
                  Build a dashboard. Commit to brutalist/industrial precision. Monospace for data, condensed sans for labels, dark charcoal base with neon green accents,
                  snappy motion under 150ms, dense asymmetric layout with intentional overlap.
                </p>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8 border-t-2 border-t-studio-blue/40">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <MdArchitecture className="text-studio-blue" /> Aesthetic Direction Framework
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                  <p className="text-white font-semibold mb-2">1) Purpose &amp; context</p>
                  <p className="text-gray-400 text-sm">Who is this for, what are they doing, and what should they feel?</p>
                </div>
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                  <p className="text-white font-semibold mb-2">2) Choose an extreme</p>
                  <p className="text-gray-400 text-sm">Avoid “modern and clean.” Pick bold so AI can&apos;t drift back to generic.</p>
                </div>
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                  <p className="text-white font-semibold mb-2">3) Execute consistently</p>
                  <p className="text-gray-400 text-sm">Typography, color, motion, and layout must reinforce the direction.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <FaRocket className="text-studio-coral" /> Quick Links
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <button
                  onClick={() => setActivePage('ai-design-pillars')}
                  className="p-4 bg-gray-950 border border-gray-700 rounded-lg text-left hover:border-studio-pink/50 transition-colors"
                >
                  <p className="text-white font-semibold mb-1 flex items-center gap-2"><MdArchitecture className="text-studio-blue" /> Four Pillars</p>
                  <p className="text-gray-400 text-sm">Typography, color, motion, composition</p>
                </button>
                <button
                  onClick={() => setActivePage('ai-design-workflow')}
                  className="p-4 bg-gray-950 border border-gray-700 rounded-lg text-left hover:border-studio-pink/50 transition-colors"
                >
                  <p className="text-white font-semibold mb-1 flex items-center gap-2"><TbSparkles className="text-studio-pink" /> Workflow &amp; Prompts</p>
                  <p className="text-gray-400 text-sm">Brief → prompt formula → refinement language</p>
                </button>
                <button
                  onClick={() => setActivePage('ai-design-anti-patterns')}
                  className="p-4 bg-gray-950 border border-gray-700 rounded-lg text-left hover:border-studio-pink/50 transition-colors"
                >
                  <p className="text-white font-semibold mb-1 flex items-center gap-2"><FaBug className="text-studio-purple" /> Anti-Patterns</p>
                  <p className="text-gray-400 text-sm">Spot and eliminate AI defaults fast</p>
                </button>
                <button
                  onClick={() => setActivePage('starter-prompts')}
                  className="p-4 bg-gray-950 border border-gray-700 rounded-lg text-left hover:border-studio-pink/50 transition-colors"
                >
                  <p className="text-white font-semibold mb-1 flex items-center gap-2"><FaLightbulb className="text-studio-coral" /> Starter Prompts</p>
                  <p className="text-gray-400 text-sm">Copy/paste prompts to get unstuck fast</p>
                </button>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setActivePage('starter-prompts')}
                className="px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white rounded-xl transition-colors font-medium"
              >
                ← Starter Prompts
              </button>
              <button
                onClick={() => setActivePage('ai-design-pillars')}
                className="px-6 py-3 bg-studio-pink hover:bg-studio-coral text-white rounded-xl transition-colors font-medium"
              >
                Four Pillars →
              </button>
            </div>
          </div>
        );

      case 'ai-design-pillars':
        return (
          <div className="prose prose-invert max-w-none">
            <h1 className="text-5xl font-bold text-white mb-6">Four Pillars of Distinctive Design</h1>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-studio-purple/10 border border-studio-purple/20">
                  <MdArchitecture className="text-studio-purple text-xl" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Consistency creates distinction</p>
                  <p className="text-gray-300 m-0">Execute across typography, color, motion, and composition as one coherent system.</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 border-t-2 border-t-studio-blue/40">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2"><FaBook className="text-studio-blue" /> 1) Typography</h3>
                <p className="text-gray-400 text-sm font-semibold mb-2">Avoid</p>
                <ul className="space-y-1 text-gray-300 text-sm mb-4">
                  <li>• Inter/Roboto/Arial defaults</li>
                  <li>• One font everywhere</li>
                  <li>• Predictable scale</li>
                </ul>
                <p className="text-gray-400 text-sm font-semibold mb-2">Embrace</p>
                <ul className="space-y-1 text-gray-300 text-sm mb-4">
                  <li>• Characterful fonts matching the vibe</li>
                  <li>• Display + body pairing</li>
                  <li>• Intentional hierarchy</li>
                </ul>
                <p className="text-gray-400 text-sm font-semibold mb-2">Prompt ideas</p>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• “Editorial and magazine-like with dramatic scale contrast”</li>
                  <li>• “Brutalist with monospace and raw technical feel”</li>
                  <li>• “Luxury refined with sophisticated serif pairings”</li>
                </ul>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 border-t-2 border-t-studio-pink/40">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><FaPalette className="text-studio-pink" /> 2) Color &amp; Theme</h3>
                
                <div className="bg-red-950/30 border border-red-900/30 rounded-lg p-3 mb-3">
                  <p className="text-red-400 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5"><FaBan className="text-red-500" /> Avoid</p>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li className="flex items-start gap-2"><span className="text-red-500/60">×</span> Purple gradient cliché</li>
                    <li className="flex items-start gap-2"><span className="text-red-500/60">×</span> Timid palette with no dominant base</li>
                    <li className="flex items-start gap-2"><span className="text-red-500/60">×</span> Generic blue primary buttons</li>
                  </ul>
                </div>
                
                <div className="bg-green-950/30 border border-green-900/30 rounded-lg p-3 mb-3">
                  <p className="text-green-400 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5"><FaHeart className="text-green-500" /> Embrace</p>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li className="flex items-start gap-2"><span className="text-green-500/60">✓</span> Dominant base + sharp accent</li>
                    <li className="flex items-start gap-2"><span className="text-green-500/60">✓</span> CSS variables for consistency</li>
                    <li className="flex items-start gap-2"><span className="text-green-500/60">✓</span> Full commitment to light OR dark</li>
                  </ul>
                </div>
                
                <div className="bg-studio-purple/10 border border-studio-purple/30 rounded-lg p-3">
                  <p className="text-studio-purple text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5"><FaMagic className="text-studio-purple" /> Prompt Ideas</p>
                  <ul className="space-y-1 text-gray-400 text-sm italic">
                    <li>"Deep blue base with electric cyan accents (dark theme)"</li>
                    <li>"Warm terracotta base with sage highlights"</li>
                    <li>"High contrast black/white with a single red accent"</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 border-t-2 border-t-studio-purple/40">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><FaRocket className="text-studio-purple" /> 3) Motion</h3>
                
                <div className="bg-red-950/30 border border-red-900/30 rounded-lg p-3 mb-3">
                  <p className="text-red-400 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5"><FaBan className="text-red-500" /> Avoid</p>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li className="flex items-start gap-2"><span className="text-red-500/60">×</span> Fade-in on everything</li>
                    <li className="flex items-start gap-2"><span className="text-red-500/60">×</span> Random micro-interactions</li>
                    <li className="flex items-start gap-2"><span className="text-red-500/60">×</span> 300ms ease-in-out everywhere</li>
                  </ul>
                </div>
                
                <div className="bg-green-950/30 border border-green-900/30 rounded-lg p-3 mb-3">
                  <p className="text-green-400 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5"><FaHeart className="text-green-500" /> Embrace</p>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li className="flex items-start gap-2"><span className="text-green-500/60">✓</span> One orchestrated entrance sequence</li>
                    <li className="flex items-start gap-2"><span className="text-green-500/60">✓</span> Motion that guides attention / confirms actions</li>
                    <li className="flex items-start gap-2"><span className="text-green-500/60">✓</span> Timing matched to the aesthetic</li>
                  </ul>
                </div>
                
                <div className="bg-studio-purple/10 border border-studio-purple/30 rounded-lg p-3">
                  <p className="text-studio-purple text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5"><FaMagic className="text-studio-purple" /> Prompt Ideas</p>
                  <ul className="space-y-1 text-gray-400 text-sm italic">
                    <li>"Snappy: under 150–200ms"</li>
                    <li>"Luxurious: weighted 800ms easing"</li>
                    <li>"Subtle and professional: barely noticeable"</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 border-t-2 border-t-studio-coral/40">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><FaRulerCombined className="text-studio-coral" /> 4) Space &amp; Composition</h3>
                
                <div className="bg-red-950/30 border border-red-900/30 rounded-lg p-3 mb-3">
                  <p className="text-red-400 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5"><FaBan className="text-red-500" /> Avoid</p>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li className="flex items-start gap-2"><span className="text-red-500/60">×</span> Perfect symmetry</li>
                    <li className="flex items-start gap-2"><span className="text-red-500/60">×</span> Predictable centered layout</li>
                    <li className="flex items-start gap-2"><span className="text-red-500/60">×</span> Flat hierarchy (no rhythm)</li>
                  </ul>
                </div>
                
                <div className="bg-green-950/30 border border-green-900/30 rounded-lg p-3 mb-3">
                  <p className="text-green-400 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5"><FaHeart className="text-green-500" /> Embrace</p>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li className="flex items-start gap-2"><span className="text-green-500/60">✓</span> Asymmetry and intentional overlap</li>
                    <li className="flex items-start gap-2"><span className="text-green-500/60">✓</span> Layering and depth (purposeful)</li>
                    <li className="flex items-start gap-2"><span className="text-green-500/60">✓</span> Rhythm in spacing (compression vs expansion)</li>
                  </ul>
                </div>
                
                <div className="bg-studio-purple/10 border border-studio-purple/30 rounded-lg p-3">
                  <p className="text-studio-purple text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5"><FaMagic className="text-studio-purple" /> Prompt Ideas</p>
                  <ul className="space-y-1 text-gray-400 text-sm italic">
                    <li>"Editorial: dramatic whitespace and asymmetry"</li>
                    <li>"Brutalist: dense, overlapping sections"</li>
                    <li>"Geometric: repeating motifs as structure"</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setActivePage('advanced-polish')}
                className="px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white rounded-xl transition-colors font-medium"
              >
                ← Overview
              </button>
              <button
                onClick={() => setActivePage('ai-design-workflow')}
                className="px-6 py-3 bg-studio-pink hover:bg-studio-coral text-white rounded-xl transition-colors font-medium"
              >
                Workflow &amp; Prompts →
              </button>
            </div>
          </div>
        );

      case 'ai-design-workflow':
        return (
          <div className="prose prose-invert max-w-none">
            <h1 className="text-5xl font-bold text-white mb-6">Workflow &amp; Prompts</h1>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-studio-pink/10 border border-studio-pink/20">
                  <TbSparkles className="text-studio-pink text-xl" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">A practical loop</p>
                  <p className="text-gray-300 m-0">Brief → strategic prompt → iterative refinement, with language you can reuse.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 border-l-4 border-l-studio-blue/50">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2"><FaBullseye className="text-studio-blue" /> Phase 1: Aesthetic Strategy Brief</h2>
                <p className="text-gray-300 mb-4">Write a brief that forces commitment before generating any UI.</p>
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 overflow-x-auto">
                  <pre className="m-0 text-gray-200 text-sm whitespace-pre">PROJECT: [Name and type]
PURPOSE: [Problem it solves, for whom]
USER CONTEXT: [State of mind, environment, goals, frustrations]
AESTHETIC DIRECTION: [Choose your extreme]
REFERENCE VIBE: [Feelings, moments, analogies]

TYPOGRAPHIC PERSONALITY: [Character and feeling]
COLOR COMMITMENT: [Dominant approach + accent strategy]
MOTION CHARACTER: [How interactions should feel]
SPATIAL APPROACH: [Layout philosophy and rhythm]</pre>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 border-l-4 border-l-studio-pink/50">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2"><TbSparkles className="text-studio-pink" /> Phase 2: Craft Your AI Prompt</h2>
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 overflow-x-auto">
                  <pre className="m-0 text-gray-200 text-sm whitespace-pre">Build [PROJECT TYPE].

Context: [PURPOSE] for [USER CONTEXT]

Aesthetic Direction: Commit fully to [AESTHETIC DIRECTION]. Every design decision should reinforce this.

Typography: [PERSONALITY DESCRIPTION]
Color: [COMMITMENT DESCRIPTION]
Motion: [CHARACTER DESCRIPTION]
Layout: [SPATIAL APPROACH DESCRIPTION]

Requirements:
- [Functional needs]
- [Technical constraints]
- [Content requirements]

Avoid these generic patterns:
- Inter/Roboto fonts
- Purple gradients
- Centered card layouts
- Decorative animations</pre>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 border-l-4 border-l-studio-purple/50">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2"><FaSyncAlt className="text-studio-purple" /> Phase 3: Iterative Refinement</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                    <p className="text-white font-semibold mb-2">Discovery &amp; diagnosis</p>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• “Review this design and identify generic patterns.”</li>
                      <li>• “What feels most generic? What could be more distinctive?”</li>
                    </ul>
                  </div>
                  <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                    <p className="text-white font-semibold mb-2">Simplification &amp; clarity</p>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• “Remove unnecessary complexity while keeping the vibe.”</li>
                      <li>• “Improve hierarchy—what should I see first?”</li>
                      <li>• “Make patterns consistent across components.”</li>
                    </ul>
                  </div>
                  <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                    <p className="text-white font-semibold mb-2">Visual direction</p>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• “Increase visual impact and strengthen hierarchy.”</li>
                      <li>• “Reduce noise while maintaining character.”</li>
                      <li>• “Handle edge cases and validation states.”</li>
                    </ul>
                  </div>
                  <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                    <p className="text-white font-semibold mb-2">Polish &amp; enhancement</p>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• “Refine the overall aesthetic quality.”</li>
                      <li>• “Add thoughtful motion to key moments only.”</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 border-l-4 border-l-studio-coral/50">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2"><FaBook className="text-studio-coral" /> Quick Reference: Prompting Patterns</h2>
                <div className="space-y-4">
                  <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 overflow-x-auto">
                    <p className="text-gray-400 text-xs mb-2">Starting any design</p>
                    <pre className="m-0 text-gray-200 text-sm whitespace-pre">Build [TYPE] for [CONTEXT].

Aesthetic Direction: [EXTREME DIRECTION]
Typography: [PERSONALITY]
Color: [COMMITMENT]
Motion: [CHARACTER]
Layout: [SPATIAL APPROACH]

Avoid: Inter/Roboto, purple gradients, centered layouts, decorative animation</pre>
                  </div>
                  <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 overflow-x-auto">
                    <p className="text-gray-400 text-xs mb-2">Refining an existing design</p>
                    <pre className="m-0 text-gray-200 text-sm whitespace-pre">Review this design. Identify:
1) Generic patterns
2) Misalignments with the [AESTHETIC DIRECTION]
3) Hierarchy opportunities
4) Inconsistencies

Then refine to eliminate defaults and strengthen direction.</pre>
                  </div>
                  <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 overflow-x-auto">
                    <p className="text-gray-400 text-xs mb-2">Creating variations</p>
                    <pre className="m-0 text-gray-200 text-sm whitespace-pre">Create 3 variations of [PAGE] (same content/functionality):

1) Brutalist/raw
2) Luxury/refined
3) Playful/approachable</pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setActivePage('ai-design-pillars')}
                className="px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white rounded-xl transition-colors font-medium"
              >
                ← Four Pillars
              </button>
              <button
                onClick={() => setActivePage('ai-design-anti-patterns')}
                className="px-6 py-3 bg-studio-pink hover:bg-studio-coral text-white rounded-xl transition-colors font-medium"
              >
                Anti-Patterns →
              </button>
            </div>
          </div>
        );

      case 'ai-design-anti-patterns':
        return (
          <div className="prose prose-invert max-w-none">
            <h1 className="text-5xl font-bold text-white mb-6">Anti-Patterns</h1>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-studio-purple/10 border border-studio-purple/20">
                  <FaBug className="text-studio-purple text-xl" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Spot the defaults fast</p>
                  <p className="text-gray-300 m-0">Replace generic AI patterns with deliberate choices that reinforce the direction.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
                <div className="p-6 border-b border-gray-800">
                  <p className="text-white font-semibold">Typography</p>
                </div>
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-950 border-b border-gray-800">
                    <tr>
                      <th className="p-4 text-gray-400">
                        <span className="inline-flex items-center gap-2">
                          <FaTimesCircle className="text-studio-pink" /> Generic Default
                        </span>
                      </th>
                      <th className="p-4 text-gray-400">
                        <span className="inline-flex items-center gap-2">
                          <FaCheckCircle className="text-green-400" /> Distinctive Alternative
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-gray-800">
                      <td className="p-4">Inter/Roboto (statistically safe)</td>
                      <td className="p-4">Fonts matched to the aesthetic (e.g., Space Mono for brutalist, Playfair for luxury)</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="p-4">Single font family</td>
                      <td className="p-4">Display + body pairing with contrast</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="p-4">Predictable scale</td>
                      <td className="p-4">Dramatic jumps or intentional compression</td>
                    </tr>
                    <tr>
                      <td className="p-4">Equal weight everywhere</td>
                      <td className="p-4">Strategic weight changes for hierarchy</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
                <div className="p-6 border-b border-gray-800">
                  <p className="text-white font-semibold">Color</p>
                </div>
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-950 border-b border-gray-800">
                    <tr>
                      <th className="p-4 text-gray-400">
                        <span className="inline-flex items-center gap-2">
                          <FaTimesCircle className="text-studio-pink" /> Generic Default
                        </span>
                      </th>
                      <th className="p-4 text-gray-400">
                        <span className="inline-flex items-center gap-2">
                          <FaCheckCircle className="text-green-400" /> Distinctive Alternative
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-gray-800">
                      <td className="p-4">Purple gradient on white</td>
                      <td className="p-4">Committed color story with dominant base + sharp accent</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="p-4">Many colors evenly distributed</td>
                      <td className="p-4">Base + accent + highlight (e.g., 80/15/5)</td>
                    </tr>
                    <tr>
                      <td className="p-4">Light mode by default</td>
                      <td className="p-4">Intentional light OR dark choice based on user context</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
                <div className="p-6 border-b border-gray-800">
                  <p className="text-white font-semibold">Layout</p>
                </div>
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-950 border-b border-gray-800">
                    <tr>
                      <th className="p-4 text-gray-400">
                        <span className="inline-flex items-center gap-2">
                          <FaTimesCircle className="text-studio-pink" /> Generic Default
                        </span>
                      </th>
                      <th className="p-4 text-gray-400">
                        <span className="inline-flex items-center gap-2">
                          <FaCheckCircle className="text-green-400" /> Distinctive Alternative
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-gray-800">
                      <td className="p-4">Centered hero + three-column features</td>
                      <td className="p-4">Asymmetry, overlap, intentional composition</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="p-4">Perfect grid of equal cards</td>
                      <td className="p-4">Varied sizing + rhythm breaks</td>
                    </tr>
                    <tr>
                      <td className="p-4">Predictable header-sidebar-content</td>
                      <td className="p-4">Layout that serves the content, not convention</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
                <div className="p-6 border-b border-gray-800">
                  <p className="text-white font-semibold">Motion</p>
                </div>
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-950 border-b border-gray-800">
                    <tr>
                      <th className="p-4 text-gray-400">
                        <span className="inline-flex items-center gap-2">
                          <FaTimesCircle className="text-studio-pink" /> Generic Default
                        </span>
                      </th>
                      <th className="p-4 text-gray-400">
                        <span className="inline-flex items-center gap-2">
                          <FaCheckCircle className="text-green-400" /> Distinctive Alternative
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-gray-800">
                      <td className="p-4">Fade-in on everything</td>
                      <td className="p-4">One orchestrated entrance sequence</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="p-4">Same easing everywhere</td>
                      <td className="p-4">Timing matched to aesthetic (snappy vs luxurious)</td>
                    </tr>
                    <tr>
                      <td className="p-4">Scattered micro-interactions</td>
                      <td className="p-4">Focused moments where motion adds meaning</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setActivePage('ai-design-workflow')}
                className="px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white rounded-xl transition-colors font-medium"
              >
                ← Workflow &amp; Prompts
              </button>
              <button
                onClick={() => setActivePage('ui-constitution')}
                className="px-6 py-3 bg-studio-pink hover:bg-studio-coral text-white rounded-xl transition-colors font-medium"
              >
                UI Constitution →
              </button>
            </div>
          </div>
        );

      case 'ui-constitution':
        return (
          <div className="prose prose-invert max-w-none">
            <h1 className="text-5xl font-bold text-white mb-2">Anti-Default UI Constitution</h1>
            <p className="text-gray-400 mb-6">Studio SaaS Interface Law · v1.0</p>
            
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-studio-coral/10 border border-studio-coral/20">
                  <FaExclamationTriangle className="text-studio-coral text-xl" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Use this file as AI context</p>
                  <p className="text-gray-300 m-0">Copy or download this constitution and include it in your AI prompts or project context to suppress generic defaults and maintain studio-quality interfaces.</p>
                </div>
              </div>
            </div>

            {/* Framed Constitution Content */}
            <div className="relative bg-gradient-to-b from-studio-purple/5 to-studio-blue/5 border-2 border-studio-purple/30 rounded-2xl p-1 mb-8">
              {/* Header bar with actions */}
              <div className="flex items-center justify-between bg-gray-900 rounded-t-xl px-4 py-3 border-b border-gray-800">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/60"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/60"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500/60"></span>
                  </div>
                  <span className="text-gray-400 text-sm font-mono">copilot-instructions.md</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      const content = document.getElementById('constitution-content').innerText;
                      navigator.clipboard.writeText(content);
                      alert('Constitution copied to clipboard!');
                    }}
                    className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors text-sm font-medium border border-gray-700"
                  >
                    <FaCopy className="text-xs" /> Copy
                  </button>
                  <button
                    onClick={() => {
                      const content = document.getElementById('constitution-content').innerText;
                      const blob = new Blob([content], { type: 'text/markdown' });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = url;
                      a.download = 'copilot-instructions.md';
                      document.body.appendChild(a);
                      a.click();
                      document.body.removeChild(a);
                      URL.revokeObjectURL(url);
                    }}
                    className="flex items-center gap-2 px-3 py-1.5 bg-studio-purple hover:bg-studio-pink text-white rounded-lg transition-colors text-sm font-medium"
                  >
                    <FaDownload className="text-xs" /> Download .md
                  </button>
                </div>
              </div>
              
              {/* Content area */}
              <div id="constitution-content" className="bg-gray-950 rounded-b-xl p-6 font-mono text-sm overflow-x-auto max-h-[600px] overflow-y-auto">
                <pre className="text-gray-300 whitespace-pre-wrap m-0">{`# ANTI-DEFAULT UI CONSTITUTION
Studio SaaS Interface Law · v1.0

This file governs all SaaS / application interface generation within the studio.
It exists to suppress latent AI design fingerprints and preserve studio interface identity.

APPLIES TO: dashboards, admin panels, internal tools, SaaS platforms, data applications
PRIORITY: Overrides all generic AI UI defaults

---

## 1. Fingerprint Suppression — Hard Bans

The following patterns are strictly forbidden unless explicitly requested by a human designer:

- Purple, indigo, magenta, neon, or pink gradients
- Synthetic gradients of any kind
- Sparkle, magic, star, wand, or "AI metaphor" icons
- Emoji usage in UI
- Spaced ALL-CAPS navigation labels
- Thin gray labels on dark surfaces
- Centered SaaS card stacks
- Fully rounded cards as default
- Thick colored accent bars on the side of panels (no border-l-4)
- Glassmorphism, glow, blur UI
- "Hero card" dashboards
- Shadcn / default Tailwind gray stacks
- Pill-shaped buttons or badges as default

---

## 2. Color & Surface Law

- Surfaces must feel architectural and structural
- Decorative gradients are forbidden
- Use flat chromatic or material tones (ink, clay, coal, stone, sand)
- Primary actions use solid color, not glow or gradient
- Accent colors must never become layout decoration
- Never use hardcoded Hex codes; always use CSS variables or theme tokens

### Dark Mode Stability

- Never use pure #000 or #fff
- Must meet WCAG AA contrast
- No component may invert to white backgrounds
- Dark mode must be visually audited in isolation

---

## 3. Typographic Law

- UI labels must not be ALL CAPS
- No excessive letter-spacing in interface text
- Editorial hierarchy is required
- Utility font stacks are forbidden unless explicitly requested
- Default to 14px (text-sm) for primary data
- Headers should stay between 16px and 20px

---

## 4. Layout Philosophy

- Avoid symmetrical centered card grids
- Use structural, editorial, asymmetric layouts
- Negative space must define hierarchy, not decoration
- Layout must communicate system logic
- Prioritize tables, grids, and side-navs over centered single-column layouts
- Avoid large "hero" whitespace; default to high-density layouts
- Default to "Dashboard" or "Control Panel" feel rather than "Website" feel

---

## 5. Shadow & Depth Law

- Cosmetic deep shadows are forbidden
- Maximum blur radius: 12px
- Prefer planes, borders, and structural depth
- Glow effects are forbidden
- Avoid soft, blurry drop shadows; use 1px borders for separation

---

## 6. Iconography Law

- Use real UI icon systems (Lucide, Heroicons, Phosphor, etc.)
- Emoji UI is forbidden
- No sparkle / magic metaphors
- Icons must represent system function
- If no library is specified, use a standard <svg> placeholder and ask which library to use

---

## 7. Accessibility Governor

- All UI must meet WCAG AA contrast minimum
- Gray-on-gray text is forbidden
- Dark mode must be manually audited
- Focus states must be visible without glow

---

## 8. Anti-Default AI Behavior

- Never apply SaaS default styling
- Never introduce sparkle, gradients, glass, glow
- Never add decorative accent bars or thick side stripes
- If uncertain about styling, ask the designer instead of defaulting
- When unsure about visual style, ask for intended "Density" or "Visual Hierarchy"

---

## 9. Homogenization Fail Conditions

Any of the following is an automatic redesign trigger:

- Looks like Stripe, Linear, Vercel, Notion, Supabase, Clerk
- Contains gradients or sparkle metaphors
- Uses centered SaaS hero cards
- Contains emoji UI
- Dark mode has inversion bugs
- Looks like a template
- Uses thick side-borders (border-l-4 patterns)
- Uses extreme "pill" rounding
- Uses generic soft shadows
- Uses marketing-style hero whitespace

---

## 10. State & Interaction Standards

- Always include visual indicators for 'Loading' and 'Empty' states
- Focus states must be clearly visible
- Interactive elements must have hover states
- Disabled states must be distinguishable but not invisible`}</pre>
              </div>
            </div>

            <div className="bg-studio-purple/10 border border-studio-purple/30 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2"><FaLightbulb className="text-studio-purple" /> How to Use</h3>
              <ol className="space-y-2 text-gray-300 list-decimal list-inside">
                <li>Download the file or copy the content using the buttons above</li>
                <li>Add it to your project's root as <code className="text-studio-coral bg-gray-800 px-1.5 py-0.5 rounded text-sm">.github/copilot-instructions.md</code> or <code className="text-studio-coral bg-gray-800 px-1.5 py-0.5 rounded text-sm">.ai-rules</code></li>
                <li>Include it in your AI assistant's context or system prompt</li>
                <li>Reference it when reviewing AI-generated interfaces</li>
              </ol>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setActivePage('ai-design-anti-patterns')}
                className="px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white rounded-xl transition-colors font-medium"
              >
                ← Anti-Patterns
              </button>
              <button
                onClick={() => setActivePage('starter-prompts')}
                className="px-6 py-3 bg-studio-pink hover:bg-studio-coral text-white rounded-xl transition-colors font-medium"
              >
                Starter Prompts →
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
                <p className="text-white font-semibold mb-2 flex items-center gap-2">
                  <FaLightbulb className="text-studio-blue" />
                  Use Comments to Guide Copilot
                </p>
                <p className="text-gray-300 text-sm mb-2">Write detailed comments, Copilot generates code below:</p>
                <div className="bg-gray-950 border border-gray-700 rounded p-2 mt-2">
                  <code className="text-xs text-gray-400">
                    {`// Fetch user data from API with error handling and loading states
// Return { data, loading, error }`}
                  </code>
                </div>
              </div>

              <div className="bg-studio-pink/10 border-l-4 border-studio-pink p-4 rounded-r">
                <p className="text-white font-semibold mb-2 flex items-center gap-2">
                  <FaLightbulb className="text-studio-pink" />
                  Name Files Descriptively
                </p>
                <p className="text-gray-300 text-sm">
                  Copilot uses filenames as context. "Button.jsx" gets better suggestions than "comp1.jsx"
                </p>
              </div>

              <div className="bg-studio-purple/10 border-l-4 border-studio-purple p-4 rounded-r">
                <p className="text-white font-semibold mb-2 flex items-center gap-2">
                  <FaLightbulb className="text-studio-purple" />
                  Accept Partials, Then Refine
                </p>
                <p className="text-gray-300 text-sm">
                  Don't wait for perfect suggestions. Accept what's useful, reject what's not, iterate quickly.
                </p>
              </div>

              <div className="bg-studio-coral/10 border-l-4 border-studio-coral p-4 rounded-r">
                <p className="text-white font-semibold mb-2 flex items-center gap-2">
                  <FaLightbulb className="text-studio-coral" />
                  Use Chat for Complex Logic
                </p>
                <p className="text-gray-300 text-sm">
                  Inline suggestions for simple code. Open Chat when you need to discuss approach or debug.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Limitations to Know</h2>
            
            <div className="bg-yellow-900/20 border border-yellow-700/30 rounded-xl p-6 mb-8">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <FaExclamationTriangle className="text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span><strong>Not Always Correct</strong> - Copilot suggests code, doesn't guarantee it works. Always test.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaExclamationTriangle className="text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span><strong>Context Window Limits</strong> - Can't see infinitely large projects. Break work into smaller files.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaExclamationTriangle className="text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span><strong>Requires Internet</strong> - Cloud-based AI, won't work offline.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaExclamationTriangle className="text-yellow-400 mt-0.5 flex-shrink-0" />
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
                    <td className="p-4"><FaTimesCircle className="text-red-400 inline-block mr-2" />No</td>
                    <td className="p-4"><FaCheckCircle className="text-green-400 inline-block mr-2" />Full Git support</td>
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
                    <td className="p-4"><FaCheckCircle className="text-green-400 inline-block mr-2" />Instant URL</td>
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
                <p className="text-white font-semibold mb-2 flex items-center gap-2">
                  <FaLightbulb className="text-studio-purple" />
                  Iterate in Small Steps
                </p>
                <p className="text-gray-300 text-sm">
                  Start simple: "Create a button." Then add: "Make it blue with rounded corners." Build complexity gradually.
                </p>
              </div>

              <div className="bg-studio-pink/10 border-l-4 border-studio-pink p-4 rounded-r">
                <p className="text-white font-semibold mb-2 flex items-center gap-2">
                  <FaLightbulb className="text-studio-pink" />
                  Reference Visual Examples
                </p>
                <p className="text-gray-300 text-sm">
                  "Make it look like Spotify's player UI" or "Use card layout similar to Pinterest" helps Spark understand your vision.
                </p>
              </div>

              <div className="bg-studio-coral/10 border-l-4 border-studio-coral p-4 rounded-r">
                <p className="text-white font-semibold mb-2 flex items-center gap-2">
                  <FaLightbulb className="text-studio-coral" />
                  Export to VS Code
                </p>
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

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
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
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <FaRocket className="text-studio-coral" />
                Starter Pack
              </h3>
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
        return (
          <div className="prose prose-invert max-w-none">
            <h1 className="text-5xl font-bold text-white mb-6">Documentation</h1>
            <p className="text-xl text-gray-300 mb-8">
              Pick a topic from the sidebar to get started.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => {
                  setActivePage('welcome');
                  setExpandedSections(['getting-started']);
                }}
                className="px-6 py-3 bg-studio-pink hover:bg-studio-coral text-white rounded-xl transition-colors font-medium"
              >
                Start Here →
              </button>
              <Link
                to="/tools"
                className="px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white rounded-xl transition-colors font-medium no-underline"
              >
                Browse Tools
              </Link>
            </div>
          </div>
        );

      case 'matching-your-vision':
        return (
          <div className="prose prose-invert max-w-none">
            <h1 className="text-5xl font-bold text-white mb-6">Matching Your Design Vision</h1>
            <p className="text-xl text-gray-300 mb-8">
              How to ensure AI output looks exactly like your Figma design or mental image
            </p>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">The Core Challenge</h2>
              <p className="text-gray-300 mb-4">
                AI models have learned from millions of websites and tend to default to common patterns. 
                Without specific guidance, you'll get <span className="text-studio-coral font-semibold">"generic AI aesthetics"</span> 
                instead of your unique design vision.
              </p>
              <p className="text-gray-300">
                The solution: <span className="text-white font-semibold">Be extremely specific about visual details</span> and 
                provide reference context at every step.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Method 1: Figma MCP Server (Best)</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <p className="text-gray-300 mb-4">
                The Figma Model Context Protocol (MCP) server enables your AI coding assistant to directly access your 
                Figma files, read design specs, extract styles, and understand your design system—all without leaving your code editor.
              </p>
              
              <div className="bg-studio-coral/10 border-l-4 border-studio-coral p-4 rounded-r mb-4">
                <p className="text-white font-semibold mb-2">Why This is Best</p>
                <p className="text-gray-300 text-sm">
                  AI can read exact colors, spacing, typography directly from Figma. No manual spec copying. No guessing. 
                  Your designs translate perfectly to code.
                </p>
              </div>

              <p className="text-gray-300 mb-3 font-semibold">Quick Setup:</p>
              <ol className="space-y-2 text-gray-300 list-decimal list-inside mb-4">
                <li>Install: <code className="text-studio-pink text-sm">npm install -g @modelcontextprotocol/server-figma</code></li>
                <li>Get your Figma API token from Figma → Settings → Personal Access Tokens</li>
                <li>Configure in VS Code Copilot settings with your token</li>
              </ol>

              <p className="text-gray-300 mb-3 font-semibold">Usage:</p>
              <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                <code className="text-studio-pink text-sm">
                  Implement this design exactly: [Figma URL]
                  <br /><br />
                  Match all spacing, colors, and typography precisely. Use Tailwind CSS and make it responsive.
                </code>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Method 2: Screenshot + Specs (Good Alternative)</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <p className="text-gray-300 mb-4">Works without MCP server using AI vision capabilities:</p>
              
              <p className="text-gray-300 mb-3 font-semibold">Steps:</p>
              <ol className="space-y-2 text-gray-300 list-decimal list-inside mb-4">
                <li>Take a screenshot of your Figma design</li>
                <li>Upload it to your AI assistant (Copilot Chat, etc.)</li>
                <li>Provide detailed specifications</li>
              </ol>

              <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                <p className="text-gray-400 text-sm mb-2">Example prompt:</p>
                <code className="text-studio-pink text-sm">
                  [Screenshot attached]
                  <br /><br />
                  Build this card component. Key specs:
                  <br />- Background: #0A0A0A
                  <br />- Border: 1px solid #1F1F1F
                  <br />- Border radius: 12px
                  <br />- Padding: 32px
                  <br />- Font: Inter, title 24px/bold, body 14px/regular
                  <br />- Shadow: 0 1px 2px rgba(0,0,0,0.1)
                  <br />- Button: #3B82F6 with rounded-lg
                </code>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Method 3: Detailed Text Specs</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <p className="text-gray-300 mb-4">
                For complex designs, create a detailed spec document:
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

            <h2 className="text-3xl font-bold text-white mb-4">Extract Design Tokens First</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <p className="text-gray-300 mb-4">Before building, establish your design language:</p>
              
              <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-400 mb-2">Prompt to extract tokens:</p>
                <code className="text-studio-pink text-sm">{`Analyze this Figma design and extract:
1. Color palette (exact hex values)
2. Typography scale (font families, sizes, weights, line-heights)
3. Spacing scale (padding, margin patterns)
4. Border radius values used
5. Shadow styles
6. Any gradient definitions

Create a CSS variables file I can reference.`}</code>
              </div>

              <p className="text-gray-300 mb-4">Then reference these tokens in every prompt:</p>
              <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                <code className="text-studio-pink text-sm">Use the design tokens we established. Button should use --color-primary, --radius-md, --spacing-4.</code>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Common Gotchas When Importing Designs</h2>
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
                  <span><strong>Fonts may differ</strong> - Specify web-safe fonts or include font imports</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400">→</span>
                  <span><strong>Interactions need describing</strong> - Figma prototypes don't auto-translate to code logic</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Compare Side-by-Side & Iterate</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <p className="text-gray-300 mb-4">After each iteration, compare and call out specific differences:</p>
              
              <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 mb-4">
                <code className="text-studio-pink text-sm">{`Compare the current output to the Figma design. I see these differences:
1. The card has more padding in Figma (looks like 32px, not 24px)
2. The title is bolder in Figma (font-weight 700, not 600)
3. The button corner radius is larger (16px in Figma)
4. There's a subtle shadow on the card that's missing

Fix these specific issues.`}</code>
              </div>

              <div className="bg-studio-pink/10 border-l-4 border-studio-pink p-4 rounded-r">
                <p className="text-white font-semibold mb-2">Pro Tip: Pixel-Level Comparison</p>
                <p className="text-gray-300 text-sm">
                  Open Figma and your browser side by side. Use Figma's inspect panel (Dev Mode) to get exact values. 
                  Browser DevTools can help verify actual rendered values.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Reference Real Examples</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <p className="text-gray-300 mb-4">Name specific design references:</p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-950 border border-red-700 rounded-lg p-4">
                  <p className="text-red-400 font-semibold mb-2 text-sm flex items-center gap-2">
                    <FaTimesCircle className="text-red-400" />
                    Vague
                  </p>
                  <code className="text-gray-400 text-sm">Make it look modern and clean</code>
                </div>
                <div className="bg-gray-950 border border-green-700 rounded-lg p-4">
                  <p className="text-green-400 font-semibold mb-2 text-sm">✓ Specific</p>
                  <code className="text-studio-pink text-sm">Style it like Linear's sidebar: minimal, dark theme, subtle borders, no heavy shadows</code>
                </div>
              </div>

              <p className="text-gray-300 mb-4">Good references to mention:</p>
              <ul className="space-y-2 text-gray-300">
                <li>• <span className="text-white">Linear</span> — Clean, minimal, dark-mode-first interfaces</li>
                <li>• <span className="text-white">Notion</span> — Content-focused, whitespace, subtle interactions</li>
                <li>• <span className="text-white">Stripe</span> — Polished gradients, attention to micro-details</li>
                <li>• <span className="text-white">Vercel</span> — Bold typography, stark contrasts, dark theme</li>
                <li>• <span className="text-white">Apple</span> — Clean typography, generous whitespace, subtle depth</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Strategy 5: Iterative Refinement</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <p className="text-gray-300 mb-4">Don't expect perfection in one prompt. Plan for refinement:</p>
              
              <div className="space-y-4">
                <div className="bg-gray-950 border-l-4 border-studio-coral rounded-r p-4">
                  <p className="text-studio-coral font-semibold mb-2">Pass 1: Structure</p>
                  <p className="text-gray-300 text-sm">Get the HTML structure and component layout right</p>
                </div>
                <div className="bg-gray-950 border-l-4 border-studio-pink rounded-r p-4">
                  <p className="text-studio-pink font-semibold mb-2">Pass 2: Spacing & Layout</p>
                  <p className="text-gray-300 text-sm">Adjust padding, margins, flex/grid properties</p>
                </div>
                <div className="bg-gray-950 border-l-4 border-studio-purple rounded-r p-4">
                  <p className="text-studio-purple font-semibold mb-2">Pass 3: Colors & Typography</p>
                  <p className="text-gray-300 text-sm">Dial in exact colors, font sizes, weights</p>
                </div>
                <div className="bg-gray-950 border-l-4 border-blue-400 rounded-r p-4">
                  <p className="text-blue-400 font-semibold mb-2">Pass 4: Polish</p>
                  <p className="text-gray-300 text-sm">Shadows, borders, hover states, transitions</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-studio-coral/10 to-studio-purple/10 border border-studio-pink/30 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Quick Checklist</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <span className="text-studio-coral">□</span>
                  <span>Did I provide visual reference (Figma URL, screenshot)?</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-studio-pink">□</span>
                  <span>Did I specify exact values (colors, spacing, typography)?</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-studio-purple">□</span>
                  <span>Did I mention what NOT to do (avoid gradients, no shadows, etc.)?</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-400">□</span>
                  <span>Am I comparing output to design after each iteration?</span>
                </li>
              </ul>
            </div>

            <div className="flex gap-4 mt-8">
              <button
                onClick={() => setActivePage('avoiding-ai-defaults')}
                className="px-6 py-3 bg-studio-pink hover:bg-studio-coral text-white rounded-xl transition-colors font-medium"
              >
                Avoiding AI Default Styles →
              </button>
            </div>
          </div>
        );

      case 'avoiding-ai-defaults':
        return (
          <div className="prose prose-invert max-w-none">
            <h1 className="text-5xl font-bold text-white mb-6">Avoiding AI Default Styles</h1>
            <p className="text-xl text-gray-300 mb-8">
              Strategies to prevent generic "AI aesthetics" and maintain your unique design language
            </p>

            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Common AI Default Patterns to Avoid</h2>
              <p className="text-gray-300 mb-4">
                Without explicit guidance, AI tends to produce these overused patterns:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2"><span className="text-red-400">•</span> Thick borders around everything</li>
                  <li className="flex items-center gap-2"><span className="text-red-400">•</span> Purple/blue gradients on every element</li>
                  <li className="flex items-center gap-2"><span className="text-red-400">•</span> ALL CAPS with wide letter-spacing</li>
                  <li className="flex items-center gap-2"><span className="text-red-400">•</span> Heavy drop shadows</li>
                </ul>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2"><span className="text-red-400">•</span> Overly rounded corners (rounded-full everywhere)</li>
                  <li className="flex items-center gap-2"><span className="text-red-400">•</span> "Glassmorphism" on everything</li>
                  <li className="flex items-center gap-2"><span className="text-red-400">•</span> Generic gradient text</li>
                  <li className="flex items-center gap-2"><span className="text-red-400">•</span> Emoji-first UI (emoji bullets/labels instead of a consistent icon set)</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Strategy 1: Explicitly State What NOT to Do</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <p className="text-gray-300 mb-4">
                Negative instructions are powerful. Tell AI what to avoid:
              </p>
              
              <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-400 mb-2">Include in your prompts:</p>
                <code className="text-studio-pink text-sm">{`Create a card component with these constraints:
- NO gradient backgrounds
- NO thick borders (use 1px max, or no borders)
- NO drop shadows (use very subtle shadows if needed)
- NO all-caps text
- NO overly rounded corners (use 8px max)
- NO glassmorphism or blur effects
- NO emoji bullets or emoji labels (use our icon library if needed)
- Keep it minimal and content-focused`}</code>
              </div>

              <div className="bg-studio-pink/10 border-l-4 border-studio-pink p-4 rounded-r">
                <p className="text-white font-semibold mb-2">Why This Works</p>
                <p className="text-gray-300 text-sm">
                  AI models assign high probability to common patterns. Explicit negatives override these defaults 
                  and force the model to find alternatives.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Strategy 2: Define Your Anti-Patterns</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <p className="text-gray-300 mb-4">
                Create a reference document of styles you want to avoid:
              </p>
              
              <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 mb-6">
                <p className="text-sm text-studio-coral font-semibold mb-3">ANTI-STYLE GUIDE</p>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-white font-medium flex items-center gap-2"><FaTimesCircle className="text-red-400" />Borders:</p>
                    <p className="text-gray-400">No thick borders (2px+). Prefer borderless or 1px subtle borders.</p>
                  </div>
                  <div>
                    <p className="text-white font-medium flex items-center gap-2"><FaTimesCircle className="text-red-400" />Gradients:</p>
                    <p className="text-gray-400">No gradient backgrounds on cards/containers. Solid colors only.</p>
                  </div>
                  <div>
                    <p className="text-white font-medium flex items-center gap-2"><FaTimesCircle className="text-red-400" />Typography:</p>
                    <p className="text-gray-400">No all-caps unless for tiny labels. No wide letter-spacing on body text.</p>
                  </div>
                  <div>
                    <p className="text-white font-medium flex items-center gap-2"><FaTimesCircle className="text-red-400" />Corners:</p>
                    <p className="text-gray-400">No pill shapes unless for tags/badges. Use 4-12px radius consistently.</p>
                  </div>
                  <div>
                    <p className="text-white font-medium flex items-center gap-2"><FaTimesCircle className="text-red-400" />Effects:</p>
                    <p className="text-gray-400">No blur/glassmorphism. Minimal shadows (only for elevation hierarchy).</p>
                  </div>
                  <div>
                    <p className="text-white font-medium flex items-center gap-2"><FaTimesCircle className="text-red-400" />Icons:</p>
                    <p className="text-gray-400">Avoid emojis in UI copy. Use a consistent icon set (e.g., react-icons) or no icons at all.</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-300">Reference this in prompts:</p>
              <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 mt-2">
                <code className="text-studio-pink text-sm">Follow our anti-style guide. No thick borders, no gradients, no all-caps titles.</code>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Strategy 3: Specify Exact Visual Values</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <p className="text-gray-300 mb-4">
                Don't say "subtle" — AI interprets vague words differently. Use exact values:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-950 border border-red-700 rounded-lg p-4">
                  <p className="text-red-400 font-semibold mb-2 text-sm flex items-center gap-2">
                    <FaTimesCircle className="text-red-400" />
                    Vague
                  </p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• "Add a subtle border"</li>
                    <li>• "Use a light shadow"</li>
                    <li>• "Make the corners rounded"</li>
                    <li>• "Use a muted color"</li>
                  </ul>
                </div>
                <div className="bg-gray-950 border border-green-700 rounded-lg p-4">
                  <p className="text-green-400 font-semibold mb-2 text-sm">✓ Specific</p>
                  <ul className="text-studio-pink text-sm space-y-1">
                    <li>• "1px border, color #2A2A2A"</li>
                    <li>• "shadow: 0 1px 2px rgba(0,0,0,0.1)"</li>
                    <li>• "border-radius: 8px"</li>
                    <li>• "background: #1A1A1A"</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Strategy 4: Use Style References</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <p className="text-gray-300 mb-4">
                Reference specific products known for their design style:
              </p>
              
              <div className="space-y-4">
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                  <p className="text-white font-semibold mb-2">For Minimal/Clean:</p>
                  <code className="text-studio-pink text-sm">"Style it like Linear or Notion — minimal, no decorative elements, focus on content and whitespace"</code>
                </div>
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                  <p className="text-white font-semibold mb-2">For Bold/Modern:</p>
                  <code className="text-studio-pink text-sm">"Style like Vercel's dashboard — high contrast, bold typography, dark theme without gradients"</code>
                </div>
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                  <p className="text-white font-semibold mb-2">For Warm/Friendly:</p>
                  <code className="text-studio-pink text-sm">"Style like Slack — friendly colors, rounded but not pill-shaped, clear visual hierarchy"</code>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Strategy 5: Create a Prompt Prefix</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <p className="text-gray-300 mb-4">
                Start every UI prompt with your style constraints:
              </p>
              
              <div className="bg-gray-950 border border-studio-coral/30 rounded-lg p-4 mb-4">
                <p className="text-sm text-studio-coral font-semibold mb-3">REUSABLE PROMPT PREFIX</p>
                <code className="text-studio-pink text-sm">{`[UI Guidelines]
- Style: Minimal, content-focused, inspired by Linear/Notion
- Colors: Use only our brand palette (provided in context)
- Borders: 1px or none, color #262626
- Radius: 8px for cards, 4px for buttons
- Shadows: None, or very subtle (0 1px 2px rgba(0,0,0,0.05))
- Typography: Normal case, no wide letter-spacing
- No gradients, no glassmorphism, no thick borders

Now create: [your actual request]`}</code>
              </div>

              <p className="text-gray-300 text-sm">Save this as a snippet you can quickly paste before any UI request.</p>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Strategy 6: Correct Immediately</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <p className="text-gray-300 mb-4">
                When AI defaults to unwanted styles, correct immediately with specifics:
              </p>
              
              <div className="space-y-4">
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                  <p className="text-gray-400 text-xs mb-2">AI outputs a card with thick border and gradient...</p>
                  <p className="text-white font-semibold mb-2">Your correction:</p>
                  <code className="text-studio-pink text-sm">{`Remove the gradient background — use solid #0A0A0A. Change the border from 2px to 1px and make it #1F1F1F. The button shouldn't have a gradient either, use solid #3B82F6.`}</code>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Common Fixes Reference</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="py-3 pr-4 text-gray-300 font-semibold">AI Default</th>
                      <th className="py-3 px-4 text-gray-300 font-semibold">Fix Prompt</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 pr-4 text-gray-400">Thick 2px+ borders</td>
                      <td className="py-3 px-4 text-studio-pink">"Remove border" or "1px border #262626"</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 pr-4 text-gray-400">Purple gradient background</td>
                      <td className="py-3 px-4 text-studio-pink">"Solid background #0A0A0A, no gradient"</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 pr-4 text-gray-400">ALL CAPS HEADING</td>
                      <td className="py-3 px-4 text-studio-pink">"Normal case, not uppercase"</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 pr-4 text-gray-400">Wide letter-spacing</td>
                      <td className="py-3 px-4 text-studio-pink">"Normal letter-spacing, tracking-normal"</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 pr-4 text-gray-400">Heavy drop shadow</td>
                      <td className="py-3 px-4 text-studio-pink">"No shadow" or "shadow-sm only"</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 pr-4 text-gray-400">Rounded-full corners</td>
                      <td className="py-3 px-4 text-studio-pink">"rounded-lg (8px)" or "rounded-md (6px)"</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 pr-4 text-gray-400">Glassmorphism</td>
                      <td className="py-3 px-4 text-studio-pink">"Solid background, no blur, no transparency"</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-gray-400">Gradient text</td>
                      <td className="py-3 px-4 text-studio-pink">"Solid text color #FFFFFF, no gradient"</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <FaCheckCircle className="text-green-400" />
                The Rule of Specificity
              </h2>
              <p className="text-xl text-gray-300 mb-4">
                The more specific you are, the less AI will fall back to defaults.
              </p>
              <p className="text-gray-400">
                Every vague word in your prompt is an opportunity for AI to inject generic styling. 
                Replace "nice", "modern", "clean", "subtle" with exact CSS values.
              </p>
            </div>

            <div className="flex gap-4 mt-8">
              <button
                onClick={() => setActivePage('design-system-prompts')}
                className="px-6 py-3 bg-studio-pink hover:bg-studio-coral text-white rounded-xl transition-colors font-medium"
              >
                Design System Prompts →
              </button>
              <button
                onClick={() => setActivePage('matching-your-vision')}
                className="px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white rounded-xl transition-colors font-medium"
              >
                ← Matching Your Vision
              </button>
            </div>
          </div>
        );

      case 'design-system-prompts':
        return (
          <div className="prose prose-invert max-w-none">
            <h1 className="text-5xl font-bold text-white mb-6">Design System Prompts</h1>
            <p className="text-xl text-gray-300 mb-8">
              Create reusable prompt templates that enforce your design language
            </p>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Why Design System Prompts?</h2>
              <p className="text-gray-300 mb-4">
                Instead of re-explaining your design preferences every time, create standardized prompts 
                that encode your design system. This ensures consistency and saves time.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Option: Reference an Existing Design System</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <p className="text-gray-300 mb-4">
                If you want to anchor the project to an established design system (Google Material, IBM Carbon, Microsoft Fluent, etc.),
                tell the AI exactly <span className="text-white font-semibold">which system</span> and <span className="text-white font-semibold">how strictly</span> to follow it.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                  <p className="text-white font-semibold mb-2">Two valid approaches</p>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• <span className="text-white font-medium">Use the official component library</span> (fastest consistency)</li>
                    <li>• <span className="text-white font-medium">Use the guidelines/tokens</span> but implement with your stack (Tailwind/components you already have)</li>
                  </ul>
                </div>
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                  <p className="text-white font-semibold mb-2">Decisions to include</p>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• System + version (e.g., Material 3 / Carbon / Fluent 2)</li>
                    <li>• Target platform (web) + framework (React)</li>
                    <li>• Theme mode (light/dark) + token source</li>
                    <li>• What to avoid (no emoji UI, no gradients, no thick borders)</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-300 mb-2">Prompt snippet you can paste:</p>
              <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 overflow-x-auto">
                <pre className="text-studio-pink text-sm whitespace-pre-wrap">{`# Design System Anchor

Use the [Material Design 3 | IBM Carbon | Microsoft Fluent] design system as the source of truth.

Implementation choice (pick one):
A) Use the official React component library for that system where possible.
B) If we stay on Tailwind/custom components, match the system's spacing, typography scale, and component patterns.

Constraints:
- No emoji bullets/labels in UI copy
- No gradient backgrounds on cards
- No thick borders; prefer borderless or 1px subtle

When unsure, ask before inventing styles.`}</pre>
              </div>

              <p className="text-gray-400 text-sm mt-3">
                Tip: If you have a Figma file using that design system, include the link and tell the AI to match it exactly.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Template: Full Design Context</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <p className="text-gray-300 mb-4">
                Use this template at the start of new projects or conversations:
              </p>
              
              <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 overflow-x-auto">
                <pre className="text-studio-pink text-sm whitespace-pre-wrap">{`# Design System Context

## Brand Style
- Aesthetic: [Minimal/Bold/Playful/Corporate]
- Inspiration: [e.g., "Linear, Notion, Vercel"]
- Mood: [e.g., "Professional but approachable"]

## Color Palette
- Background: #0A0A0A
- Surface: #141414
- Border: #262626
- Text Primary: #FFFFFF
- Text Secondary: #A3A3A3
- Accent: #3B82F6
- Success: #22C55E
- Error: #EF4444

## Typography
- Font Family: Inter, system-ui, sans-serif
- Headings: font-weight 600, normal case
- Body: font-weight 400, line-height 1.6
- No all-caps except tiny labels

## Spacing
- Base unit: 4px
- Component padding: 16px-24px
- Section spacing: 48px-64px

## Border & Radius
- Borders: 1px solid #262626 (or none)
- Card radius: 12px
- Button radius: 8px
- Input radius: 8px

## Effects
- Shadows: Minimal, only for elevation
- No gradients on backgrounds
- No glassmorphism
- Subtle hover transitions (150ms)

## Anti-Patterns (DO NOT USE)
- Thick borders (2px+)
- Purple gradients
- All-caps headings
- Wide letter-spacing
- Heavy drop shadows
- Pill-shaped containers`}</pre>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Quick Prompt Templates</h2>
            <div className="space-y-4 mb-8">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">Card Component</h3>
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                  <code className="text-studio-pink text-sm">{`Create a card with:
- Background: #141414
- Border: 1px #262626 (or none)
- Radius: 12px
- Padding: 24px
- No shadow or very subtle
- No gradient`}</code>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">Button Component</h3>
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                  <code className="text-studio-pink text-sm">{`Create a button:
- Primary: bg #3B82F6, text white, no gradient
- Padding: 12px 24px
- Radius: 8px
- Font: 14px medium, normal case
- Hover: slightly lighter bg
- Transition: 150ms ease`}</code>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">Form Input</h3>
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                  <code className="text-studio-pink text-sm">{`Create a text input:
- Background: #0A0A0A
- Border: 1px #262626
- Radius: 8px
- Padding: 12px 16px
- Text: #FFFFFF
- Placeholder: #525252
- Focus: border #3B82F6
- No shadow`}</code>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">Section Header</h3>
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                  <code className="text-studio-pink text-sm">{`Create a section header:
- Title: 24px, font-weight 600, #FFFFFF, normal case
- Subtitle: 16px, font-weight 400, #A3A3A3
- No decorative elements
- Clean spacing below (24px)`}</code>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Correction Prompts</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <p className="text-gray-300 mb-4">When AI generates unwanted styles, use these:</p>
              
              <div className="space-y-4">
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                  <p className="text-white font-semibold mb-2">Remove AI Defaults:</p>
                  <code className="text-studio-pink text-sm">"Remove all gradients, reduce border to 1px, remove shadows, use normal case text"</code>
                </div>
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                  <p className="text-white font-semibold mb-2">Simplify Styling:</p>
                  <code className="text-studio-pink text-sm">"Simplify this: solid colors only, minimal borders, no decorative effects"</code>
                </div>
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                  <p className="text-white font-semibold mb-2">Match Reference:</p>
                  <code className="text-studio-pink text-sm">"Make it more like Linear's UI: cleaner, more whitespace, less visual noise"</code>
                </div>
              </div>
            </div>

            <div className="bg-studio-pink/10 border border-studio-pink/30 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <FaLightbulb className="text-studio-pink" />
                Pro Tips
              </h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-studio-coral">1.</span>
                  <span>Save your design context as a file in your project and reference it</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-studio-pink">2.</span>
                  <span>Create snippets in VS Code for quick access to your prompt templates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-studio-purple">3.</span>
                  <span>Update your design context as your system evolves</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400">4.</span>
                  <span>Share with your team for consistent AI output across the project</span>
                </li>
              </ul>
            </div>

            <div className="flex gap-4 mt-8">
              <button
                onClick={() => setActivePage('best-practices')}
                className="px-6 py-3 bg-studio-pink hover:bg-studio-coral text-white rounded-xl transition-colors font-medium"
              >
                ← Back to Best Practices
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

      case 'ai-eval-overview':
        return (
          <div className="prose prose-invert max-w-none">
            <h1 className="text-5xl font-bold text-white mb-6">AI Eval Framework</h1>
            <p className="text-xl text-gray-300 mb-8">
              A comprehensive evaluation framework for AI-assisted design work
            </p>

            <div className="bg-gradient-to-r from-studio-purple/20 to-studio-coral/20 border border-studio-purple/30 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Purpose</h2>
              <p className="text-gray-300 mb-4">
                As we integrate Vibe coding and other AI tools into the way we make and deliver UX work, 
                we want to ensure every design we deliver is:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-studio-coral/20 flex items-center justify-center text-studio-coral">✓</div>
                  <span className="text-white font-medium">Intuitive and easy to use</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-studio-pink/20 flex items-center justify-center text-studio-pink">✓</div>
                  <span className="text-white font-medium">Fair, inclusive, and bias-aware</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-studio-purple/20 flex items-center justify-center text-studio-purple">✓</div>
                  <span className="text-white font-medium">Strategically aligned with company OKRs</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">✓</div>
                  <span className="text-white font-medium">Applying AI only where it creates real value</span>
                </div>
              </div>
              <p className="text-gray-300 mt-4">
                <span className="text-studio-coral font-semibold">AI Eval</span> is the framework we use to ensure that consistency.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">The 10 Evaluation Categories</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <div className="text-studio-coral text-2xl font-bold mb-2">A</div>
                <h3 className="text-lg font-bold text-white mb-1">Navigation</h3>
                <p className="text-gray-400 text-sm">Users always know where they are and what they can do</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <div className="text-studio-pink text-2xl font-bold mb-2">B</div>
                <h3 className="text-lg font-bold text-white mb-1">Consistency</h3>
                <p className="text-gray-400 text-sm">Similar interactions behave the same way</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <div className="text-studio-purple text-2xl font-bold mb-2">C</div>
                <h3 className="text-lg font-bold text-white mb-1">Clarity</h3>
                <p className="text-gray-400 text-sm">Interface communicates without confusion</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <div className="text-blue-400 text-2xl font-bold mb-2">D</div>
                <h3 className="text-lg font-bold text-white mb-1">Accessibility</h3>
                <p className="text-gray-400 text-sm">Usable by people with different abilities</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <div className="text-green-400 text-2xl font-bold mb-2">E</div>
                <h3 className="text-lg font-bold text-white mb-1">Performance</h3>
                <p className="text-gray-400 text-sm">Fast, stable, and responsive experience</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <div className="text-yellow-400 text-2xl font-bold mb-2">F</div>
                <h3 className="text-lg font-bold text-white mb-1">Security</h3>
                <p className="text-gray-400 text-sm">User trust protected through robust practices</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <div className="text-orange-400 text-2xl font-bold mb-2">G</div>
                <h3 className="text-lg font-bold text-white mb-1">Testing & Feedback</h3>
                <p className="text-gray-400 text-sm">Real user feedback validates usability</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <div className="text-red-400 text-2xl font-bold mb-2">H</div>
                <h3 className="text-lg font-bold text-white mb-1">Fairness</h3>
                <p className="text-gray-400 text-sm">Avoids bias, supports equitable outcomes</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <div className="text-cyan-400 text-2xl font-bold mb-2">I</div>
                <h3 className="text-lg font-bold text-white mb-1">AI Application Check</h3>
                <p className="text-gray-400 text-sm">AI used only where it outperforms simpler solutions</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <div className="text-indigo-400 text-2xl font-bold mb-2">J</div>
                <h3 className="text-lg font-bold text-white mb-1">Strategic Alignment</h3>
                <p className="text-gray-400 text-sm">Drives measurable business outcomes</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Implementation Guidance</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <p className="text-gray-300 mb-4">Use this framework throughout the design lifecycle:</p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-studio-coral/20 flex items-center justify-center text-studio-coral font-bold flex-shrink-0">1</div>
                  <div>
                    <p className="text-white font-semibold">Start with wireframes and prototypes</p>
                    <p className="text-gray-400 text-sm">Validate navigation early in the process</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-studio-pink/20 flex items-center justify-center text-studio-pink font-bold flex-shrink-0">2</div>
                  <div>
                    <p className="text-white font-semibold">Establish a design system early</p>
                    <p className="text-gray-400 text-sm">Ensure consistency across the product</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-studio-purple/20 flex items-center justify-center text-studio-purple font-bold flex-shrink-0">3</div>
                  <div>
                    <p className="text-white font-semibold">Run checks continuously</p>
                    <p className="text-gray-400 text-sm">Accessibility, fairness, AI, and performance checks throughout</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold flex-shrink-0">4</div>
                  <div>
                    <p className="text-white font-semibold">Embed feedback loops</p>
                    <p className="text-gray-400 text-sm">In every release cycle</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-bold flex-shrink-0">5</div>
                  <div>
                    <p className="text-white font-semibold">Validate alignment before delivery</p>
                    <p className="text-gray-400 text-sm">OKR and metric alignment confirmed</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Expected Outcomes</h2>
            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-xl p-6 mb-8">
              <p className="text-gray-300 mb-4">When applied consistently, the AI Eval framework ensures that studio work is:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-white">User-centered</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-white">Fair and responsible</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-white">Strategically effective</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-white">Thoughtful in its use of AI</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setActivePage('ai-eval-ux-quality')}
                className="px-6 py-3 bg-studio-pink hover:bg-studio-coral text-white rounded-xl transition-colors font-medium"
              >
                UX Quality Checks →
              </button>
              <button
                onClick={() => setActivePage('ai-eval-gate-checklist')}
                className="px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white rounded-xl transition-colors font-medium"
              >
                View Gate Checklist
              </button>
            </div>
          </div>
        );

      case 'ai-eval-ux-quality':
        return (
          <div className="prose prose-invert max-w-none">
            <h1 className="text-5xl font-bold text-white mb-6">UX Quality Checks</h1>
            <p className="text-xl text-gray-300 mb-8">
              Navigation, Consistency, and Clarity evaluation criteria
            </p>

            {/* Navigation */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-studio-coral/20 flex items-center justify-center text-studio-coral font-bold text-xl">A</div>
                <h2 className="text-2xl font-bold text-white">Navigation</h2>
              </div>
              
              <div className="bg-studio-coral/10 border-l-4 border-studio-coral p-4 rounded-r mb-4">
                <p className="text-white font-semibold mb-2">Principle</p>
                <p className="text-gray-300">Users should always understand: Where they are, what they can do next, and how to recover or go back.</p>
              </div>

              <div className="mb-4">
                <p className="text-white font-semibold mb-2">Tools</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">Figma / Sketch</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">Card sorting</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">User journey maps</span>
                </div>
              </div>

              <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                <p className="text-white font-semibold mb-3">Checklist</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="w-5 h-5 border-2 border-gray-600 rounded flex-shrink-0"></span>
                    Main navigation is visible and consistent
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="w-5 h-5 border-2 border-gray-600 rounded flex-shrink-0"></span>
                    User paths are logical and familiar
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="w-5 h-5 border-2 border-gray-600 rounded flex-shrink-0"></span>
                    Users can easily return to a home or primary screen
                  </li>
                </ul>
              </div>
            </div>

            {/* Consistency */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-studio-pink/20 flex items-center justify-center text-studio-pink font-bold text-xl">B</div>
                <h2 className="text-2xl font-bold text-white">Consistency</h2>
              </div>
              
              <div className="bg-studio-pink/10 border-l-4 border-studio-pink p-4 rounded-r mb-4">
                <p className="text-white font-semibold mb-2">Principle</p>
                <p className="text-gray-300">Similar interactions should behave the same way across the product.</p>
              </div>

              <div className="mb-4">
                <p className="text-white font-semibold mb-2">Tools</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">Design systems (Storybook, Material Design)</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">Style guides</span>
                </div>
              </div>

              <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                <p className="text-white font-semibold mb-3">Checklist</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="w-5 h-5 border-2 border-gray-600 rounded flex-shrink-0"></span>
                    Buttons, icons, and labels are consistent
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="w-5 h-5 border-2 border-gray-600 rounded flex-shrink-0"></span>
                    Repeated actions produce consistent results
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="w-5 h-5 border-2 border-gray-600 rounded flex-shrink-0"></span>
                    Typography and color usage follow a system
                  </li>
                </ul>
              </div>
            </div>

            {/* Clarity */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-studio-purple/20 flex items-center justify-center text-studio-purple font-bold text-xl">C</div>
                <h2 className="text-2xl font-bold text-white">Clarity</h2>
              </div>
              
              <div className="bg-studio-purple/10 border-l-4 border-studio-purple p-4 rounded-r mb-4">
                <p className="text-white font-semibold mb-2">Principle</p>
                <p className="text-gray-300">The interface communicates intent without confusion or jargon.</p>
              </div>

              <div className="mb-4">
                <p className="text-white font-semibold mb-2">Tools</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">Content style guides</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">Usability testing</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">Plain-language checks</span>
                </div>
              </div>

              <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                <p className="text-white font-semibold mb-3">Checklist</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="w-5 h-5 border-2 border-gray-600 rounded flex-shrink-0"></span>
                    Labels are short and descriptive
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="w-5 h-5 border-2 border-gray-600 rounded flex-shrink-0"></span>
                    Help text explains without technical language
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="w-5 h-5 border-2 border-gray-600 rounded flex-shrink-0"></span>
                    System feedback is immediate and clear
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setActivePage('ai-eval-technical')}
                className="px-6 py-3 bg-studio-pink hover:bg-studio-coral text-white rounded-xl transition-colors font-medium"
              >
                Technical Quality →
              </button>
              <button
                onClick={() => setActivePage('ai-eval-overview')}
                className="px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white rounded-xl transition-colors font-medium"
              >
                ← Back to Overview
              </button>
            </div>
          </div>
        );

      case 'ai-eval-technical':
        return (
          <div className="prose prose-invert max-w-none">
            <h1 className="text-5xl font-bold text-white mb-6">Technical Quality</h1>
            <p className="text-xl text-gray-300 mb-8">
              Accessibility, Performance, and Security evaluation criteria
            </p>

            {/* Accessibility */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xl">D</div>
                <h2 className="text-2xl font-bold text-white">Accessibility</h2>
              </div>
              
              <div className="bg-blue-500/10 border-l-4 border-blue-400 p-4 rounded-r mb-4">
                <p className="text-white font-semibold mb-2">Principle</p>
                <p className="text-gray-300">The product is usable by people with different abilities and technologies.</p>
              </div>

              <div className="mb-4">
                <p className="text-white font-semibold mb-2">Tools</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">WAVE</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">Axe</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">Screen reader testing</span>
                </div>
              </div>

              <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                <p className="text-white font-semibold mb-3">Checklist</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="w-5 h-5 border-2 border-gray-600 rounded flex-shrink-0"></span>
                    Color contrast meets accessibility standards
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="w-5 h-5 border-2 border-gray-600 rounded flex-shrink-0"></span>
                    All interactive elements are keyboard accessible
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="w-5 h-5 border-2 border-gray-600 rounded flex-shrink-0"></span>
                    Images and icons include accessible labels
                  </li>
                </ul>
              </div>
            </div>

            {/* Performance */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-bold text-xl">E</div>
                <h2 className="text-2xl font-bold text-white">Performance</h2>
              </div>
              
              <div className="bg-green-500/10 border-l-4 border-green-400 p-4 rounded-r mb-4">
                <p className="text-white font-semibold mb-2">Principle</p>
                <p className="text-gray-300">The experience should feel fast, stable, and responsive.</p>
              </div>

              <div className="mb-4">
                <p className="text-white font-semibold mb-2">Tools</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">Lighthouse</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">GTmetrix</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">Device and browser testing</span>
                </div>
              </div>

              <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                <p className="text-white font-semibold mb-3">Checklist</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="w-5 h-5 border-2 border-gray-600 rounded flex-shrink-0"></span>
                    Pages load within acceptable thresholds
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="w-5 h-5 border-2 border-gray-600 rounded flex-shrink-0"></span>
                    Interface performs well across devices
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="w-5 h-5 border-2 border-gray-600 rounded flex-shrink-0"></span>
                    Animations are smooth and non-blocking
                  </li>
                </ul>
              </div>
            </div>

            {/* Security */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 font-bold text-xl">F</div>
                <h2 className="text-2xl font-bold text-white">Security</h2>
              </div>
              
              <div className="bg-yellow-500/10 border-l-4 border-yellow-400 p-4 rounded-r mb-4">
                <p className="text-white font-semibold mb-2">Principle</p>
                <p className="text-gray-300">User trust is protected through robust security practices.</p>
              </div>

              <div className="mb-4">
                <p className="text-white font-semibold mb-2">Tools</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">Security audits</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">Penetration testing</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">Encryption libraries</span>
                </div>
              </div>

              <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                <p className="text-white font-semibold mb-3">Checklist</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="w-5 h-5 border-2 border-gray-600 rounded flex-shrink-0"></span>
                    Inputs are validated and sanitized
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="w-5 h-5 border-2 border-gray-600 rounded flex-shrink-0"></span>
                    Sensitive data is encrypted
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="w-5 h-5 border-2 border-gray-600 rounded flex-shrink-0"></span>
                    Roles and permissions are clearly defined
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setActivePage('ai-eval-validation')}
                className="px-6 py-3 bg-studio-pink hover:bg-studio-coral text-white rounded-xl transition-colors font-medium"
              >
                Testing & Fairness →
              </button>
              <button
                onClick={() => setActivePage('ai-eval-ux-quality')}
                className="px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white rounded-xl transition-colors font-medium"
              >
                ← UX Quality
              </button>
            </div>
          </div>
        );

      case 'ai-eval-validation':
        return (
          <div className="prose prose-invert max-w-none">
            <h1 className="text-5xl font-bold text-white mb-6">Testing & Fairness</h1>
            <p className="text-xl text-gray-300 mb-8">
              User validation and bias awareness evaluation criteria
            </p>

            {/* Testing & Feedback */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold text-xl">G</div>
                <h2 className="text-2xl font-bold text-white">Testing & Feedback</h2>
              </div>
              
              <div className="bg-orange-500/10 border-l-4 border-orange-400 p-4 rounded-r mb-4">
                <p className="text-white font-semibold mb-2">Principle</p>
                <p className="text-gray-300">Real user feedback validates usability and intent.</p>
              </div>

              <div className="mb-4">
                <p className="text-white font-semibold mb-2">Tools</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">Usability testing sessions</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">A/B testing</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">Analytics dashboards</span>
                </div>
              </div>

              <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                <p className="text-white font-semibold mb-3">Checklist</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="w-5 h-5 border-2 border-gray-600 rounded flex-shrink-0"></span>
                    New users have tested the experience
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="w-5 h-5 border-2 border-gray-600 rounded flex-shrink-0"></span>
                    Drop-offs and friction are tracked
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="w-5 h-5 border-2 border-gray-600 rounded flex-shrink-0"></span>
                    Feedback is incorporated iteratively
                  </li>
                </ul>
              </div>
            </div>

            {/* Fairness */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 font-bold text-xl">H</div>
                <h2 className="text-2xl font-bold text-white">Fairness</h2>
              </div>
              
              <div className="bg-red-500/10 border-l-4 border-red-400 p-4 rounded-r mb-4">
                <p className="text-white font-semibold mb-2">Principle</p>
                <p className="text-gray-300">The product avoids bias and supports equitable outcomes for all users.</p>
              </div>

              <div className="mb-4">
                <p className="text-white font-semibold mb-2">Tools</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">Bias and ethics audits</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">Diverse user testing groups</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">Ethical design guidelines</span>
                </div>
              </div>

              <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                <p className="text-white font-semibold mb-3">Checklist</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="w-5 h-5 border-2 border-gray-600 rounded flex-shrink-0"></span>
                    Algorithms and recommendations are bias-checked
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="w-5 h-5 border-2 border-gray-600 rounded flex-shrink-0"></span>
                    Content represents diverse users
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="w-5 h-5 border-2 border-gray-600 rounded flex-shrink-0"></span>
                    Data usage policies are clear and transparent
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Why Fairness Matters</h3>
              <p className="text-gray-300 mb-4">
                AI systems can inadvertently encode or amplify biases from training data. 
                When using AI-assisted design tools, be especially mindful of:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400">•</span>
                  <span>Default personas and representations generated by AI</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400">•</span>
                  <span>Language and tone in AI-generated copy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400">•</span>
                  <span>Assumptions about user capabilities or contexts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400">•</span>
                  <span>Cultural context in visual design choices</span>
                </li>
              </ul>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setActivePage('ai-eval-strategic')}
                className="px-6 py-3 bg-studio-pink hover:bg-studio-coral text-white rounded-xl transition-colors font-medium"
              >
                AI & Strategic Alignment →
              </button>
              <button
                onClick={() => setActivePage('ai-eval-technical')}
                className="px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white rounded-xl transition-colors font-medium"
              >
                ← Technical Quality
              </button>
            </div>
          </div>
        );

      case 'ai-eval-strategic':
        return (
          <div className="prose prose-invert max-w-none">
            <h1 className="text-5xl font-bold text-white mb-6">AI & Strategic Alignment</h1>
            <p className="text-xl text-gray-300 mb-8">
              Ensuring AI is used appropriately and projects align with business goals
            </p>

            {/* AI Application Check */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-xl">I</div>
                <h2 className="text-2xl font-bold text-white">AI Application Check</h2>
              </div>
              
              <div className="bg-cyan-500/10 border-l-4 border-cyan-400 p-4 rounded-r mb-4">
                <p className="text-white font-semibold mb-2">Principle</p>
                <p className="text-gray-300">AI should only be used where it clearly outperforms simpler solutions.</p>
              </div>

              <div className="mb-4">
                <p className="text-white font-semibold mb-2">Tools</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">AI feasibility checklists</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">Cost–benefit analysis templates</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">Model evaluation dashboards</span>
                </div>
              </div>

              <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                <p className="text-white font-semibold mb-3">Checklist</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="w-5 h-5 border-2 border-gray-600 rounded flex-shrink-0"></span>
                    AI is the most appropriate solution for this problem
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="w-5 h-5 border-2 border-gray-600 rounded flex-shrink-0"></span>
                    Non-AI alternatives have been considered
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="w-5 h-5 border-2 border-gray-600 rounded flex-shrink-0"></span>
                    Compute costs and sustainability impacts are reviewed
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-white mb-4">When to Use AI</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-green-400 font-semibold mb-2">✓ Good Use Cases</p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Rapid prototyping and iteration</li>
                    <li>• Generating code from design specs</li>
                    <li>• Content variations and A/B testing</li>
                    <li>• Accessibility improvements</li>
                    <li>• Pattern recognition in user data</li>
                  </ul>
                </div>
                <div>
                  <p className="text-red-400 font-semibold mb-2">✗ Reconsider AI For</p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Simple, one-time tasks</li>
                    <li>• When deterministic logic suffices</li>
                    <li>• High-stakes decisions without human review</li>
                    <li>• Where explainability is critical</li>
                    <li>• When simpler tools work just as well</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Strategic Alignment */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-xl">J</div>
                <h2 className="text-2xl font-bold text-white">Strategic Alignment (OKRs & Metrics)</h2>
              </div>
              
              <div className="bg-indigo-500/10 border-l-4 border-indigo-400 p-4 rounded-r mb-4">
                <p className="text-white font-semibold mb-2">Principle</p>
                <p className="text-gray-300">Every project should drive measurable business outcomes.</p>
              </div>

              <div className="mb-4">
                <p className="text-white font-semibold mb-2">Tools</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">OKR platforms</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">Project management tools</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">KPI dashboards</span>
                </div>
              </div>

              <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                <p className="text-white font-semibold mb-3">Checklist</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="w-5 h-5 border-2 border-gray-600 rounded flex-shrink-0"></span>
                    Project aligns with at least one company OKR
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="w-5 h-5 border-2 border-gray-600 rounded flex-shrink-0"></span>
                    Success metrics are clearly defined
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="w-5 h-5 border-2 border-gray-600 rounded flex-shrink-0"></span>
                    Progress is reviewed regularly
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setActivePage('ai-eval-gate-checklist')}
                className="px-6 py-3 bg-studio-pink hover:bg-studio-coral text-white rounded-xl transition-colors font-medium"
              >
                Project Gate Checklist →
              </button>
              <button
                onClick={() => setActivePage('ai-eval-validation')}
                className="px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white rounded-xl transition-colors font-medium"
              >
                ← Testing & Fairness
              </button>
            </div>
          </div>
        );

      case 'ai-eval-gate-checklist':
        return (
          <div className="prose prose-invert max-w-none">
            <h1 className="text-5xl font-bold text-white mb-6">Project Gate Checklist</h1>
            <p className="text-xl text-gray-300 mb-8">
              Final review gate before launch — ensure all criteria are met
            </p>

            <div className="bg-gradient-to-r from-studio-coral/20 to-studio-purple/20 border border-studio-coral/30 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">How to Use This Checklist</h2>
              <p className="text-gray-300">
                Use this section as a final review gate before launch. All items should be checked 
                and verified before a project is considered ready for delivery.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Studio Project Gate Checklist</h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-950 rounded-lg border border-gray-700 hover:border-studio-coral/50 transition-colors">
                  <span className="w-6 h-6 border-2 border-studio-coral rounded flex-shrink-0 flex items-center justify-center text-studio-coral text-sm">A</span>
                  <span className="text-white font-medium flex-1">Navigation is clear</span>
                  <span className="w-6 h-6 border-2 border-gray-600 rounded flex-shrink-0"></span>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-950 rounded-lg border border-gray-700 hover:border-studio-pink/50 transition-colors">
                  <span className="w-6 h-6 border-2 border-studio-pink rounded flex-shrink-0 flex items-center justify-center text-studio-pink text-sm">B</span>
                  <span className="text-white font-medium flex-1">Consistency is enforced</span>
                  <span className="w-6 h-6 border-2 border-gray-600 rounded flex-shrink-0"></span>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-950 rounded-lg border border-gray-700 hover:border-studio-purple/50 transition-colors">
                  <span className="w-6 h-6 border-2 border-studio-purple rounded flex-shrink-0 flex items-center justify-center text-studio-purple text-sm">C</span>
                  <span className="text-white font-medium flex-1">Clarity is prioritized</span>
                  <span className="w-6 h-6 border-2 border-gray-600 rounded flex-shrink-0"></span>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-950 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-colors">
                  <span className="w-6 h-6 border-2 border-blue-400 rounded flex-shrink-0 flex items-center justify-center text-blue-400 text-sm">D</span>
                  <span className="text-white font-medium flex-1">Accessibility has been tested</span>
                  <span className="w-6 h-6 border-2 border-gray-600 rounded flex-shrink-0"></span>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-950 rounded-lg border border-gray-700 hover:border-green-500/50 transition-colors">
                  <span className="w-6 h-6 border-2 border-green-400 rounded flex-shrink-0 flex items-center justify-center text-green-400 text-sm">E</span>
                  <span className="text-white font-medium flex-1">Performance is optimized</span>
                  <span className="w-6 h-6 border-2 border-gray-600 rounded flex-shrink-0"></span>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-950 rounded-lg border border-gray-700 hover:border-yellow-500/50 transition-colors">
                  <span className="w-6 h-6 border-2 border-yellow-400 rounded flex-shrink-0 flex items-center justify-center text-yellow-400 text-sm">F</span>
                  <span className="text-white font-medium flex-1">Security is validated</span>
                  <span className="w-6 h-6 border-2 border-gray-600 rounded flex-shrink-0"></span>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-950 rounded-lg border border-gray-700 hover:border-orange-500/50 transition-colors">
                  <span className="w-6 h-6 border-2 border-orange-400 rounded flex-shrink-0 flex items-center justify-center text-orange-400 text-sm">G</span>
                  <span className="text-white font-medium flex-1">User feedback is applied</span>
                  <span className="w-6 h-6 border-2 border-gray-600 rounded flex-shrink-0"></span>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-950 rounded-lg border border-gray-700 hover:border-red-500/50 transition-colors">
                  <span className="w-6 h-6 border-2 border-red-400 rounded flex-shrink-0 flex items-center justify-center text-red-400 text-sm">H</span>
                  <span className="text-white font-medium flex-1">Fairness and bias are addressed</span>
                  <span className="w-6 h-6 border-2 border-gray-600 rounded flex-shrink-0"></span>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-950 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-colors">
                  <span className="w-6 h-6 border-2 border-cyan-400 rounded flex-shrink-0 flex items-center justify-center text-cyan-400 text-sm">I</span>
                  <span className="text-white font-medium flex-1">AI usage is justified and scoped</span>
                  <span className="w-6 h-6 border-2 border-gray-600 rounded flex-shrink-0"></span>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-950 rounded-lg border border-gray-700 hover:border-indigo-500/50 transition-colors">
                  <span className="w-6 h-6 border-2 border-indigo-400 rounded flex-shrink-0 flex items-center justify-center text-indigo-400 text-sm">J</span>
                  <span className="text-white font-medium flex-1">Strategic alignment is confirmed</span>
                  <span className="w-6 h-6 border-2 border-gray-600 rounded flex-shrink-0"></span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <FaCheckCircle className="text-green-400" />
                Ready for Launch
              </h2>
              <p className="text-gray-300 mb-4">
                When all items are checked, your project is:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-white">User-centered</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-white">Fair and responsible</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-white">Strategically effective</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-white">Thoughtful in its use of AI</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Quick Reference Links</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <button
                  onClick={() => setActivePage('ai-eval-ux-quality')}
                  className="p-4 bg-gray-950 border border-gray-700 rounded-lg text-left hover:border-studio-coral/50 transition-colors"
                >
                  <p className="text-studio-coral font-semibold mb-1">UX Quality (A-C)</p>
                  <p className="text-gray-400 text-sm">Navigation, Consistency, Clarity</p>
                </button>
                <button
                  onClick={() => setActivePage('ai-eval-technical')}
                  className="p-4 bg-gray-950 border border-gray-700 rounded-lg text-left hover:border-blue-500/50 transition-colors"
                >
                  <p className="text-blue-400 font-semibold mb-1">Technical Quality (D-F)</p>
                  <p className="text-gray-400 text-sm">Accessibility, Performance, Security</p>
                </button>
                <button
                  onClick={() => setActivePage('ai-eval-validation')}
                  className="p-4 bg-gray-950 border border-gray-700 rounded-lg text-left hover:border-orange-500/50 transition-colors"
                >
                  <p className="text-orange-400 font-semibold mb-1">Testing & Fairness (G-H)</p>
                  <p className="text-gray-400 text-sm">User Feedback, Bias Awareness</p>
                </button>
                <button
                  onClick={() => setActivePage('ai-eval-strategic')}
                  className="p-4 bg-gray-950 border border-gray-700 rounded-lg text-left hover:border-indigo-500/50 transition-colors"
                >
                  <p className="text-indigo-400 font-semibold mb-1">AI & Strategy (I-J)</p>
                  <p className="text-gray-400 text-sm">AI Application, OKR Alignment</p>
                </button>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setActivePage('ai-eval-overview')}
                className="px-6 py-3 bg-studio-pink hover:bg-studio-coral text-white rounded-xl transition-colors font-medium"
              >
                ← Back to Framework Overview
              </button>
              <button
                onClick={() => setActivePage('best-practices')}
                className="px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white rounded-xl transition-colors font-medium"
              >
                Best Practices
              </button>
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
      ],
    },
    {
      id: 'tools-setup',
      title: 'Tools & Setup',
      items: [
        { id: 'setup', title: 'Setting Up Your Environment', path: '/docs/setup' },
        { id: 'first-session', title: 'Your First DRIVE Session', path: '/docs/first-session' },
        { id: 'best-practices', title: 'Best Practices & Common Mistakes', path: '/docs/best-practices' },
        { id: 'extensions', title: 'Recommended Extensions', path: '/docs/extensions' },
      ],
    },
    {
      id: 'design-fidelity',
      title: 'Design Fidelity',
      items: [
        { id: 'matching-your-vision', title: 'Achieving Design Fidelity', path: '/docs/matching-your-vision' },
        { id: 'design-system-prompts', title: 'Design System Prompts', path: '/docs/design-system-prompts' },
        { id: 'figma-mcp', title: 'Figma MCP Setup', path: '/docs/figma-mcp' },
        { id: 'importing-designs', title: 'Importing Figma Designs', path: '/docs/importing-designs' },
        { id: 'custom-assets', title: 'Adding Custom Assets', path: '/docs/custom-assets' },
      ],
    },
    {
      id: 'core-concepts',
      title: 'Core Concepts',
      items: [
        { id: 'ai-assistants', title: 'Working with AI Assistants', path: '/docs/ai-assistants' },
        { id: 'prompting-strategies', title: 'Effective Prompting Strategies', path: '/docs/prompting-strategies' },
        { id: 'iterative-design', title: 'Iterative Design Process', path: '/docs/iterative-design' },
        { id: 'context-management', title: 'Managing Project Context', path: '/docs/context-management' },
        { id: 'figma-to-code', title: 'Figma to Code Workflow', path: '/docs/figma-to-code' },
        { id: 'starter-prompts', title: 'Starter Prompts for Non-Designers', path: '/docs/starter-prompts' },
      ],
    },
    {
      id: 'ai-assisted-design',
      title: 'Advanced AI Design',
      items: [
        { id: 'advanced-polish', title: 'AI Design Guide: Overview', path: '/docs/advanced-polish' },
        { id: 'ai-design-pillars', title: 'Four Pillars', path: '/docs/ai-design-pillars' },
        { id: 'ai-design-workflow', title: 'Workflow & Prompts', path: '/docs/ai-design-workflow' },
        { id: 'ai-design-anti-patterns', title: 'Anti-Patterns', path: '/docs/ai-design-anti-patterns' },
        { id: 'ui-constitution', title: 'UI Constitution', path: '/docs/ui-constitution' },
      ],
    },
  ];

  // Sync `/docs/...` URLs to the correct in-page content (fixes broken card/box links).
  useEffect(() => {
    const normalizedPath = location.pathname.replace(/\/$/, '');

    if (normalizedPath === '/docs') {
      setActivePage('welcome');
      return;
    }

    const allItems = sidebarSections.flatMap((section) => section.items);
    const matched = allItems.find((item) => item.path === normalizedPath);
    if (matched) {
      setActivePage(matched.id);
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Top Header */}
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
            <Link to="/ai-evals" className="text-gray-400 hover:text-white transition-colors">AI Evals</Link>
          </nav>
        </div>
      </header>



      {/* Main Content Container */}
      <div className="flex flex-1">
          {/* Sidebar */}
          <aside className="w-64 border-r border-gray-800 bg-black overflow-y-auto fixed left-0 top-[73px] h-[calc(100vh-73px)] z-30">
            <div className="p-6">
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
    </div>
  );
};

export default Documentation;
