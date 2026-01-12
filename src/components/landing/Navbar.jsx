import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger after scrolling past hero section (approximately viewport height)
      const heroHeight = window.innerHeight;
      setScrolled(window.scrollY > heroHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed z-50 transition-all duration-700 ease-in-out ${
        scrolled
          ? 'top-[1rem] left-[12rem] right-[12rem]'
          : 'top-[1.5rem] left-[2rem] right-[2rem]'
      }`}
    >
      <div className={`navbar-gradient backdrop-blur-xl rounded-3xl transition-all duration-700 ${
        scrolled ? 'py-2 px-4' : 'py-4 px-8'
      }`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className={`flex items-center gap-3 hover:opacity-80 transition-all duration-500 ${scrolled ? 'scale-90' : 'scale-100'}`}>
            <div className={`font-display font-bold transition-all duration-500 ${scrolled ? 'text-xl' : 'text-2xl'}`}>
              <span className="bg-gradient-to-r from-studio-coral via-studio-pink to-studio-purple bg-clip-text text-transparent">DRIVE</span>
              <span className="ml-2 text-sm font-semibold text-gray-300">by</span>
            </div>
            <img src={`${import.meta.env.BASE_URL}logo-s42.svg`} alt="Studio42" className={`w-auto transition-all duration-500 ${scrolled ? 'h-7' : 'h-9'}`} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#what-is-vibe" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              About
            </a>
            <a href="#why-drive" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Features
            </a>
            <a href="#process" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Process
            </a>
            <Link to="/docs" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Docs
            </Link>
            <Link to="/labs" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Labs
            </Link>
            <Link to="/ai-evals" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              AI Evals
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/docs"
              className={`btn btn-sm bg-studio-pink hover:bg-studio-pink/80 border-none text-white font-semibold rounded-full transition-all duration-500 ${scrolled ? 'px-4' : 'px-6'}`}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden btn btn-ghost btn-square"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a
              href="#what-is-vibe"
              className="block text-base-content hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              What is Vibe Coding
            </a>
            <a
              href="#why-drive"
              className="block text-base-content hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Why DRIVE
            </a>
            <a
              href="#process"
              className="block text-base-content hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Process
            </a>
            <Link
              to="/docs"
              className="block text-base-content hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Docs
            </Link>
            <Link
              to="/labs"
              className="block text-base-content hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Labs
            </Link>
            <Link
              to="/ai-evals"
              className="block text-base-content hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              AI Evals
            </Link>
            <Link
              to="/docs"
              className="btn btn-primary bg-studio-pink hover:bg-studio-pink/80 border-none text-white font-semibold w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
