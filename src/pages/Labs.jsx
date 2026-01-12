import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SubmitProjectModal from '../components/common/SubmitProjectModal';

gsap.registerPlugin(ScrollTrigger);

const Labs = () => {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [sortBy, setSortBy] = useState('recent');
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    category: [],
    timeRange: [],
    tools: [],
    solutionAreas: [],
    tags: []
  });
  const [searchQuery, setSearchQuery] = useState('');
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.from('.labs-hero', {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

      // Project cards animation
      gsap.from('.project-card', {
        scrollTrigger: {
          trigger: '.projects-grid',
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

  // Comprehensive showcase projects database
  const projects = [
    {
      id: 1,
      title: 'Interactive Portfolio with GSAP Animations',
      author: 'Jamie Liu',
      description: 'Modern portfolio featuring smooth scroll-triggered animations, magnetic cursor effects, and dynamic project showcases built entirely with AI assistance',
      image: 'https://placehold.co/400x300/1a1a1a/FF6B6B?text=Portfolio+Animation&font=raleway',
      tags: ['Portfolio', 'GSAP', 'Responsive', 'Animation'],
      time: '6 hours',
      likes: 234,
      views: 3420,
      rating: 4.8,
      isNew: true,
      category: 'Landing Page',
      tools: ['VS Code (Github Copilot)']
    },
    {
      id: 2,
      title: 'SaaS Pricing Comparison Builder',
      author: 'Taylor Woods',
      description: 'Dynamic pricing table generator with toggle animations, feature comparisons, and mobile-optimized layouts. Includes dark mode and accessibility features',
      image: 'https://placehold.co/400x300/1a1a1a/FF6B6B?text=SaaS+Pricing&font=raleway',
      tags: ['UI', 'SaaS', 'Interactive', 'Accessible'],
      time: '4 hours',
      likes: 189,
      views: 2800,
      rating: 4.7,
      isTrending: true,
      category: 'Web Application',
      tools: ['VS Code (Github Copilot)']
    },
    {
      id: 3,
      title: 'Kanban Task Management Dashboard',
      author: 'Morgan Park',
      description: 'Full-featured drag-and-drop task board with column management, priority tagging, filtering, and localStorage persistence',
      image: 'https://placehold.co/400x300/1a1a1a/FF6B6B?text=Task+Board&font=raleway',
      tags: ['Dashboard', 'Drag-Drop', 'LocalStorage', 'Interactive'],
      time: '8 hours',
      likes: 312,
      views: 4150,
      rating: 4.9,
      category: 'Web Application',
      tools: ['VS Code (Github Copilot)']
    },
    {
      id: 4,
      title: 'E-commerce Product Showcase',
      author: 'Alex Chen',
      description: 'Product gallery with image zoom, variant selection, shopping cart functionality, and checkout flow. Fully responsive with touch gestures',
      image: 'https://placehold.co/400x300/1a1a1a/FF6B6B?text=E-commerce&font=raleway',
      tags: ['E-commerce', 'Responsive', 'Interactive', 'Cart'],
      time: '1 day',
      likes: 276,
      views: 5200,
      rating: 4.6,
      isTrending: true,
      category: 'Web Application',
      tools: ['VS Code (Github Copilot)', 'Figma Make']
    },
    {
      id: 5,
      title: 'Weather Dashboard with API Integration',
      author: 'Riley Martinez',
      description: 'Real-time weather data visualization with location search, 7-day forecast, animated weather icons, and hourly breakdowns',
      image: 'https://placehold.co/400x300/1a1a1a/FF6B6B?text=Weather+App&font=raleway',
      tags: ['Dashboard', 'API', 'Data Viz', 'Responsive'],
      time: '5 hours',
      likes: 198,
      views: 3650,
      rating: 4.5,
      category: 'Web Application',
      tools: ['VS Code (Github Copilot)']
    },
    {
      id: 6,
      title: 'Blog Platform with CMS Features',
      author: 'Sam Rodriguez',
      description: 'Content management system with markdown editor, tag filtering, search functionality, and reading time estimates. Includes dark mode',
      image: 'https://placehold.co/400x300/1a1a1a/FF6B6B?text=Blog+CMS&font=raleway',
      tags: ['CMS', 'Markdown', 'Search', 'Dark Mode'],
      time: '2 days',
      likes: 445,
      views: 6890,
      rating: 4.8,
      category: 'Web Application',
      tools: ['VS Code (Github Copilot)']
    },
    {
      id: 7,
      title: 'Music Player Interface',
      author: 'Jordan Lee',
      description: 'Spotify-inspired music player with playlist management, audio visualization, playback controls, and shuffle/repeat functionality',
      image: 'https://placehold.co/400x300/1a1a1a/FF6B6B?text=Music+Player&font=raleway',
      tags: ['Audio', 'Interactive', 'Visualization', 'UI'],
      time: '6 hours',
      likes: 321,
      views: 4720,
      rating: 4.7,
      isNew: true,
      category: 'Prototype',
      tools: ['VS Code (Github Copilot)']
    },
    {
      id: 8,
      title: 'Recipe Finder with Dietary Filters',
      author: 'Casey Thompson',
      description: 'Recipe search application with advanced filtering (vegan, gluten-free, etc.), ingredient lists, cooking timers, and save favorites feature',
      image: 'https://placehold.co/400x300/1a1a1a/FF6B6B?text=Recipe+App&font=raleway',
      tags: ['Search', 'Filter', 'LocalStorage', 'Responsive'],
      time: '7 hours',
      likes: 267,
      views: 3980,
      rating: 4.6,
      category: 'Web Application',
      tools: ['VS Code (Github Copilot)', 'Spark']
    },
    {
      id: 9,
      title: 'Real Estate Listing Gallery',
      author: 'Drew Anderson',
      description: 'Property showcase with filtering by price/location, lightbox image galleries, map integration, and contact forms',
      image: 'https://placehold.co/400x300/1a1a1a/FF6B6B?text=Real+Estate&font=raleway',
      tags: ['Gallery', 'Filter', 'Forms', 'Interactive'],
      time: '1 day',
      likes: 189,
      views: 3240,
      rating: 4.5,
      category: 'Landing Page',
      tools: ['VS Code (Github Copilot)']
    },
    {
      id: 10,
      title: 'Fitness Tracker Dashboard',
      author: 'Avery Kim',
      description: 'Personal fitness tracking with workout logs, progress charts, calorie counter, and goal setting. Includes data visualization with Chart.js',
      image: 'https://placehold.co/400x300/1a1a1a/FF6B6B?text=Fitness+Tracker&font=raleway',
      tags: ['Dashboard', 'Charts', 'LocalStorage', 'Health'],
      time: '8 hours',
      likes: 412,
      views: 5670,
      rating: 4.8,
      isTrending: true,
      category: 'Dashboard',
      tools: ['VS Code (Github Copilot)']
    },
    {
      id: 11,
      title: 'Interactive Quiz Builder',
      author: 'Quinn Baker',
      description: 'Create and take custom quizzes with multiple question types, timer functionality, score tracking, and result analytics',
      image: 'https://placehold.co/400x300/1a1a1a/FF6B6B?text=Quiz+Builder&font=raleway',
      tags: ['Interactive', 'Education', 'Forms', 'Analytics'],
      time: '5 hours',
      likes: 178,
      views: 2890,
      rating: 4.4,
      category: 'Web Application',
      tools: ['Spark']
    },
    {
      id: 12,
      title: 'Crypto Price Tracker',
      author: 'Skylar Davis',
      description: 'Real-time cryptocurrency price monitoring with historical charts, portfolio tracking, and price alerts. Live API integration',
      image: 'https://placehold.co/400x300/1a1a1a/FF6B6B?text=Crypto+Tracker&font=raleway',
      tags: ['API', 'Charts', 'Real-time', 'Finance'],
      time: '6 hours',
      likes: 298,
      views: 4560,
      rating: 4.7,
      isNew: true,
      category: 'Dashboard',
      tools: ['VS Code (Github Copilot)']
    },
    {
      id: 13,
      title: 'Social Media Card Generator',
      author: 'River Walsh',
      description: 'Create custom social media graphics with text overlays, gradient backgrounds, and export to PNG. Built-in templates for Twitter, Instagram, LinkedIn',
      image: 'https://placehold.co/400x300/1a1a1a/FF6B6B?text=Card+Generator&font=raleway',
      tags: ['Design Tool', 'Export', 'Templates', 'Canvas'],
      time: '4 hours',
      likes: 234,
      views: 3120,
      rating: 4.6,
      category: 'Design System',
      tools: ['VS Code (Github Copilot)']
    },
    {
      id: 14,
      title: 'Event Calendar & Booking System',
      author: 'Dakota Green',
      description: 'Interactive calendar with event scheduling, availability checking, booking confirmations, and email reminders simulation',
      image: 'https://placehold.co/400x300/1a1a1a/FF6B6B?text=Event+Calendar&font=raleway',
      tags: ['Calendar', 'Booking', 'Forms', 'Interactive'],
      time: '1 day',
      likes: 356,
      views: 4890,
      rating: 4.7,
      isTrending: true,
      category: 'Web Application',
      tools: ['VS Code (Github Copilot)']
    },
    {
      id: 15,
      title: 'Markdown Documentation Site',
      author: 'Sage Mitchell',
      description: 'Static documentation generator with markdown rendering, syntax highlighting, sidebar navigation, and full-text search',
      image: 'https://placehold.co/400x300/1a1a1a/FF6B6B?text=Docs+Site&font=raleway',
      tags: ['Documentation', 'Markdown', 'Search', 'Navigation'],
      time: '7 hours',
      likes: 289,
      views: 3780,
      rating: 4.8,
      category: 'Other',
      tools: ['VS Code (Github Copilot)']
    }
  ];

  const handleFilterChange = (category, value) => {
    setFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(v => v !== value)
        : [...prev[category], value]
    }));
  };

  const clearFilters = () => {
    setFilters({
      category: [],
      timeRange: [],
      tools: [],
      solutionAreas: [],
      tags: []
    });
  };

  const hasActiveFilters = Object.values(filters).some(arr => arr.length > 0);

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
            <Link to="/docs" className="text-gray-400 hover:text-white transition-colors">Docs</Link>
            <Link to="/labs" className="text-white font-medium">Labs</Link>
            <Link to="/ai-evals" className="text-gray-400 hover:text-white transition-colors">AI Evals</Link>
          </nav>
        </div>
      </header>

      {/* Page Title Section */}
      <section ref={heroRef} className="bg-black border-b border-gray-800 py-12 labs-hero">
        <div className="container mx-auto px-6">
          <div className="flex items-start justify-between gap-8 mb-8">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                DRIVE Labs
              </h1>
              <p className="text-gray-400 text-lg max-w-3xl">
                Explore projects built with vibe coding. Get inspired, learn from real examples, 
                and share your own AI-assisted creations with the community.
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
                Submit Project
              </button>
            </div>
          </div>
          
          {/* Expandable Search */}
          <div className="max-w-2xl relative">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-900 border border-gray-800 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-studio-purple transition-all duration-300"
            />
          </div>
        </div>
      </section>

      {/* Main Content: Filters + Projects Grid */}
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                    Category
                  </h4>
                  <div className="space-y-2">
                    {['Landing Page', 'Web Application', 'Mobile App', 'Prototype', 'Design System', 'Dashboard', 'Other'].map(cat => (
                      <label key={cat} className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer transition-colors">
                        <input
                          type="checkbox"
                          checked={filters.category.includes(cat)}
                          onChange={() => handleFilterChange('category', cat)}
                          className="w-4 h-4 rounded border-gray-700 bg-gray-900 text-studio-purple focus:ring-studio-purple"
                        />
                        <span className="text-sm">{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Time Range Filter */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-studio-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Time to Build
                  </h4>
                  <div className="space-y-2">
                    {['Half day', '1 day', '2-3 days', '4-7 days', 'Multiple days'].map(time => (
                      <label key={time} className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer transition-colors">
                        <input
                          type="checkbox"
                          checked={filters.timeRange.includes(time)}
                          onChange={() => handleFilterChange('timeRange', time)}
                          className="w-4 h-4 rounded border-gray-700 bg-gray-900 text-studio-purple focus:ring-studio-purple"
                        />
                        <span className="text-sm">{time}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Tools Filter */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Tools Used
                  </h4>
                  <div className="space-y-2">
                    {['VS Code (Github Copilot)', 'Spark', 'Figma Make'].map(tool => (
                      <label key={tool} className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer transition-colors">
                        <input
                          type="checkbox"
                          checked={filters.tools.includes(tool)}
                          onChange={() => handleFilterChange('tools', tool)}
                          className="w-4 h-4 rounded border-gray-700 bg-gray-900 text-blue-400 focus:ring-blue-400"
                        />
                        <span className="text-sm">{tool}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Solution Areas Filter */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Solution Areas
                  </h4>
                  <div className="space-y-2">
                    {['AI Business Solutions', 'Cloud & AI Platforms', 'Security'].map(area => (
                      <label key={area} className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer transition-colors">
                        <input
                          type="checkbox"
                          checked={filters.solutionAreas.includes(area)}
                          onChange={() => handleFilterChange('solutionAreas', area)}
                          className="w-4 h-4 rounded border-gray-700 bg-gray-900 text-yellow-400 focus:ring-yellow-400"
                        />
                        <span className="text-sm">{area}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Industries */}
                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    Industries
                  </h4>
                  <div className="space-y-2">
                    {['Financial Services', 'Healthcare', 'Public Sector & Government', 'Manufacturing & Industrials', 'Mobility & Automotive', 'Telecommunications & Media'].map(tag => (
                      <label key={tag} className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer transition-colors">
                        <input
                          type="checkbox"
                          checked={filters.tags.includes(tag)}
                          onChange={() => handleFilterChange('tags', tag)}
                          className="w-4 h-4 rounded border-gray-700 bg-gray-900 text-green-400 focus:ring-green-400"
                        />
                        <span className="text-sm">{tag}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Projects Grid */}
            <div className="flex-1">
              {/* Sort & View Controls */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 bg-gray-950 border border-gray-800 rounded-xl text-white focus:outline-none focus:border-studio-pink transition-colors cursor-pointer"
                  >
                    <option value="recent">Most Recent</option>
                    <option value="popular">Most Popular</option>
                    <option value="views">Most Viewed</option>
                    <option value="trending">Trending</option>
                    <option value="alphabetical">Alphabetical A-Z</option>
                  </select>
                  <span className="text-gray-500 text-sm">
                    {projects.length} projects
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'grid'
                        ? 'bg-studio-purple text-white'
                        : 'bg-gray-900 text-gray-400 hover:text-white'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'list'
                        ? 'bg-studio-purple text-white'
                        : 'bg-gray-900 text-gray-400 hover:text-white'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Grid View */}
              {viewMode === 'grid' && (
                <div className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map(project => (
                    <div key={project.id} className="project-card group cursor-pointer">
                      <div className="bg-gray-950 rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                        <div className="relative aspect-video bg-gray-900 overflow-hidden">
                          <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          {project.isNew && (
                            <div className="absolute top-3 left-3">
                              <span className="px-2 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">New</span>
                            </div>
                          )}
                          {project.isTrending && (
                            <div className="absolute top-3 left-3">
                              <span className="px-2 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full flex items-center gap-1">
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                                Trending
                              </span>
                            </div>
                          )}
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <button className="px-4 py-2 bg-white text-black rounded-lg font-semibold hover:bg-studio-purple hover:text-white transition-colors">
                              View Project
                            </button>
                          </div>
                        </div>
                        <div className="p-5">
                          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-studio-purple transition-colors line-clamp-1">
                            {project.title}
                          </h3>
                          <p className="text-gray-400 text-sm mb-3">by {project.author}</p>
                          <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                          <div className="flex flex-wrap gap-1 mb-4">
                            {project.tags.map(tag => (
                              <span key={tag} className="px-2 py-1 bg-gray-900 text-gray-400 text-xs rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {project.time}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* List View */}
              {viewMode === 'list' && (
                <div className="space-y-4">
                  {projects.map(project => (
                    <div key={project.id} className="project-card group cursor-pointer">
                      <div className="bg-gray-950 rounded-xl overflow-hidden transition-colors duration-300">
                        <div className="flex gap-6 p-6">
                          <div className="relative w-64 h-48 flex-shrink-0 bg-gray-900 rounded-lg overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            {project.isNew && (
                              <div className="absolute top-3 left-3">
                                <span className="px-2 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">New</span>
                              </div>
                            )}
                            {project.isTrending && (
                              <div className="absolute top-3 left-3">
                                <span className="px-2 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full flex items-center gap-1">
                                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                  </svg>
                                  Trending
                                </span>
                              </div>
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h3 className="text-2xl font-bold text-white group-hover:text-studio-pink transition-colors mb-1">
                                  {project.title}
                                </h3>
                                <p className="text-gray-400">by {project.author}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 mb-3 text-sm text-gray-500">
                              <span className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Built in {project.time}
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-3">
                              {project.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-gray-900 text-gray-400 text-sm rounded-full">
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <p className="text-gray-300 mb-4">{project.description}</p>
                            <div className="flex items-center justify-end">
                              <button className="px-4 py-2 bg-studio-purple hover:bg-studio-pink text-white rounded-lg transition-colors text-sm font-semibold">
                                View Project
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Load More Button */}
              <div className="mt-12 text-center">
                <button className="px-8 py-3 bg-gray-950 hover:bg-gray-900 text-white rounded-xl transition-colors font-medium">
                  Load More Projects
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Submit Project Modal */}
      <SubmitProjectModal 
        isOpen={isSubmitModalOpen} 
        onClose={() => setIsSubmitModalOpen(false)} 
      />
    </div>
  );
};

export default Labs;
