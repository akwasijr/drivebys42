import { Link } from 'react-router-dom';

const AIEvals = () => {
  return (
    <div className="min-h-screen bg-black">
      <header className="border-b border-gray-800 bg-black/95 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <div className="text-2xl font-display font-bold bg-gradient-to-r from-studio-coral via-studio-pink to-studio-purple bg-clip-text text-transparent">
              DRIVE
            </div>
          </Link>

          <nav className="flex items-center gap-8 text-sm">
            <Link to="/docs" className="text-gray-400 hover:text-white transition-colors">Docs</Link>
            <Link to="/ai-evals" className="text-white font-medium">AI Evals</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-8 py-16">
        <div className="bg-gray-950 border border-gray-800 rounded-2xl p-10">
          <div className="flex items-center gap-4 mb-6">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white">AI Evals</h1>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-studio-pink/20 text-studio-pink border border-studio-pink/30">
              Coming soon
            </span>
          </div>

          <p className="text-gray-400 text-lg max-w-2xl">
            This section is temporarily frozen while we finalize the evaluation framework and how it fits into DRIVE.
          </p>

          <div className="mt-10 flex gap-4">
            <Link
              to="/docs"
              className="px-6 py-3 bg-studio-pink hover:bg-studio-coral text-white rounded-xl transition-colors font-medium"
            >
              Back to Docs
            </Link>
            <Link
              to="/labs"
              className="px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white rounded-xl transition-colors font-medium"
            >
              View Labs
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AIEvals;
