import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FiGrid, FiList 
} from 'react-icons/fi';
import { 
  aiToolsDatabase, 
  categories 
} from '../data/aiToolsDatabase';
import SubmitAIToolModal from '../components/common/SubmitAIToolModal';

gsap.registerPlugin(ScrollTrigger);

const AITools = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('name');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    category: [],
    pricing: [],
    status: []
  });
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.aitools-hero', {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

      gsap.from('.tool-card', {
        scrollTrigger: {
          trigger: '.tools-grid',
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
  }, []);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter(v => v !== value)
        : [...prev[filterType], value]
    }));
  };

  const clearFilters = () => {
    setFilters({
      category: [],
      pricing: [],
      status: []
    });
    setSearchQuery('');
  };

  const hasActiveFilters = Object.values(filters).some(arr => arr.length > 0) || searchQuery;

  // Filter and search logic
  const getFilteredTools = () => {
    let tools = [...aiToolsDatabase];

    // Apply search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      tools = tools.filter(tool => 
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query) ||
        tool.tagline.toLowerCase().includes(query) ||
        tool.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Apply category filter
    if (filters.category.length > 0) {
      tools = tools.filter(tool => filters.category.includes(tool.category));
    }

    // Apply pricing filter
    if (filters.pricing.length > 0) {
      tools = tools.filter(tool => filters.pricing.includes(tool.pricing));
    }

    // Apply status filter
    if (filters.status.length > 0) {
      tools = tools.filter(tool => {
        if (filters.status.includes('new') && tool.isNew) return true;
        if (filters.status.includes('trending') && tool.isTrending) return true;
        return false;
      });
    }

    // Apply sorting
    tools.sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b.popularity - a.popularity;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'recent':
          return new Date(b.lastUpdated) - new Date(a.lastUpdated);
        default:
          return 0;
      }
    });

    return tools;
  };

  const filteredTools = getFilteredTools();

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

          <nav className="flex items-center gap-8 text-sm">
            <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
            <Link to="/tools" className="text-gray-400 hover:text-white transition-colors">Vibe Coding Tools</Link>
            <Link to="/labs" className="text-gray-400 hover:text-white transition-colors">Labs</Link>
            <Link to="/ai-tools" className="text-white font-medium">AI Tools</Link>
          </nav>
        </div>
      </header>

      {/* Page Title Section */}
      <section ref={heroRef} className="bg-black border-b border-gray-800 py-12 aitools-hero">
        <div className="container mx-auto px-6">
          <div className="flex items-start justify-between gap-8 mb-8">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                AI Tools Directory
              </h1>
              <p className="text-gray-400 text-lg max-w-3xl">
                Discover 66 powerful AI tools across 16 categories. Browse image generation, development tools, 
                automation platforms, and more to accelerate your AI-powered workflows.
              </p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <button 
                onClick={() => setIsSubmitModalOpen(true)}
                className="px-4 py-2.5 bg-studio-coral hover:bg-studio-pink text-white rounded-xl transition-colors font-medium flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Submit Tool
              </button>
            </div>
          </div>
          
          {/* Search */}
          <div className="max-w-2xl relative">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search AI tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-900 border border-gray-800 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-studio-purple transition-all duration-300"
            />
          </div>
        </div>
      </section>

      {/* Main Content: Filters + Tools Grid */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex gap-8">
            {/* Filter Sidebar */}
            <aside className="w-64 flex-shrink-0">
              <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white">Filters</h3>
                  {hasActiveFilters && (
                    <button onClick={clearFilters} className="text-sm text-studio-purple hover:text-studio-pink transition-colors">
                      Clear all
                    </button>
                  )}
                </div>

                {/* Category Filter */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-studio-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    Category
                  </h4>
                  <div className="space-y-2">
                    {categories.filter(cat => cat.id !== 'all').map(cat => (
                      <label key={cat.id} className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer transition-colors">
                        <input
                          type="checkbox"
                          checked={filters.category.includes(cat.id)}
                          onChange={() => handleFilterChange('category', cat.id)}
                          className="w-4 h-4 rounded border-gray-700 bg-gray-900 text-studio-purple focus:ring-studio-purple"
                        />
                        <span className="text-sm">{cat.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Pricing Filter */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Pricing
                  </h4>
                  <div className="space-y-2">
                    {[
                      { id: 'freemium', label: 'Freemium' },
                      { id: 'paid', label: 'Paid' },
                      { id: 'open-source', label: 'Open Source' }
                    ].map(pricing => (
                      <label key={pricing.id} className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer transition-colors">
                        <input
                          type="checkbox"
                          checked={filters.pricing.includes(pricing.id)}
                          onChange={() => handleFilterChange('pricing', pricing.id)}
                          className="w-4 h-4 rounded border-gray-700 bg-gray-900 text-green-400 focus:ring-green-400"
                        />
                        <span className="text-sm">{pricing.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Status Filter */}
                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Status
                  </h4>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer transition-colors">
                      <input
                        type="checkbox"
                        checked={filters.status.includes('new')}
                        onChange={() => handleFilterChange('status', 'new')}
                        className="w-4 h-4 rounded border-gray-700 bg-gray-900 text-yellow-400 focus:ring-yellow-400"
                      />
                      <span className="text-sm">New Tools</span>
                    </label>
                  </div>
                </div>
              </div>
            </aside>

            {/* Tools Grid */}
            <div className="flex-1">
              {/* Sort & View Controls */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 bg-gray-950 border border-gray-800 rounded-xl text-white focus:outline-none focus:border-studio-pink transition-colors cursor-pointer"
                  >
                    <option value="popular">Most Popular</option>
                    <option value="name">A-Z</option>
                    <option value="recent">Recently Updated</option>
                  </select>
                  <p className="text-gray-500 text-sm">
                    <span className="text-white font-medium">{filteredTools.length}</span> tools
                  </p>
                </div>

                <div className="flex items-center gap-2 bg-gray-950 rounded-xl p-1 border border-gray-800">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-all ${
                      viewMode === 'grid' ? 'bg-studio-coral text-white' : 'text-gray-500 hover:text-white'
                    }`}
                  >
                    <FiGrid />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-all ${
                      viewMode === 'list' ? 'bg-studio-coral text-white' : 'text-gray-500 hover:text-white'
                    }`}
                  >
                    <FiList />
                  </button>
                </div>
              </div>

              {/* Tools Grid */}
              {filteredTools.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-gray-400 text-lg">No tools found matching your criteria.</p>
                  <button
                    onClick={clearFilters}
                    className="mt-4 px-6 py-3 bg-studio-coral hover:bg-studio-pink text-white rounded-xl transition-colors font-medium"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                <div className={`tools-grid ${
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                    : 'flex flex-col gap-4'
                }`}>
                  {filteredTools.map((tool) => (
                    <Link
                      key={tool.id}
                      to={`/ai-tools/${tool.id}`}
                      className="tool-card group block"
                    >
                      <div className="bg-gray-950 border border-gray-800 rounded-xl p-6 hover:border-studio-coral transition-all duration-300 h-full">
                        <div className="flex items-start gap-4 mb-3">
                          {/* Logo */}
                          {tool.logo ? (
                            <div className="flex-shrink-0">
                              <img 
                                src={tool.logo} 
                                alt={`${tool.name} logo`}
                                className="w-12 h-12 rounded-lg object-cover bg-gray-900 border border-gray-800"
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                  e.target.nextSibling.style.display = 'flex';
                                }}
                              />
                              <div className="w-12 h-12 rounded-lg bg-gray-900 border border-gray-800 hidden items-center justify-center">
                                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                              </div>
                            </div>
                          ) : (
                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center">
                              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                              </svg>
                            </div>
                          )}
                          
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-studio-coral transition-colors">
                              {tool.name}
                            </h3>
                            <p className="text-sm text-gray-400">{tool.tagline}</p>
                          </div>
                          
                          <svg className="w-5 h-5 text-gray-500 group-hover:text-studio-coral transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </div>

                        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                          {tool.description}
                        </p>

                        {/* Badges */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className={`px-3 py-1 rounded-lg text-xs font-medium ${
                            tool.pricing === 'freemium' ? 'bg-green-500/10 text-green-400 border border-green-500/30' :
                            tool.pricing === 'paid' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/30' :
                            'bg-purple-500/10 text-purple-400 border border-purple-500/30'
                          }`}>
                            {tool.pricing === 'open-source' ? 'Open Source' : 
                             tool.pricing === 'freemium' ? 'Freemium' : 'Paid'}
                          </span>
                          {tool.isNew && (
                            <span className="px-3 py-1 rounded-lg text-xs font-medium bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 flex items-center gap-1">
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              New
                            </span>
                          )}
                        </div>

                        {/* Category */}
                        <div className="text-sm text-gray-500">
                          {tool.categoryLabel}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Submit AI Tool Modal */}
      <SubmitAIToolModal 
        isOpen={isSubmitModalOpen} 
        onClose={() => setIsSubmitModalOpen(false)} 
      />
    </div>
  );
};

export default AITools;
