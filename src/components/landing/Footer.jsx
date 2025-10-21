import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <img src="/logo-s42.svg" alt="Studio42" className="h-10 w-auto mb-4" />
            <p className="text-gray-400 text-sm mb-4">
              Accelerating UX development through vibe coding and the DRIVE methodology.
            </p>
            <div className="text-studio-pink font-bold">Studio42</div>
          </div>

          {/* DRIVE Column */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">DRIVE</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#what-is-vibe" className="text-gray-400 hover:text-white transition-colors">
                  What is Vibe Coding
                </a>
              </li>
              <li>
                <a href="#why-drive" className="text-gray-400 hover:text-white transition-colors">
                  Why It Matters
                </a>
              </li>
              <li>
                <a href="#process" className="text-gray-400 hover:text-white transition-colors">
                  The Process
                </a>
              </li>
              <li>
                <Link to="/docs" className="text-gray-400 hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/docs/designer/getting-started" className="text-gray-400 hover:text-white transition-colors">
                  Getting Started
                </Link>
              </li>
              <li>
                <Link to="/docs/designer/guides" className="text-gray-400 hover:text-white transition-colors">
                  Guides & Tutorials
                </Link>
              </li>
              <li>
                <Link to="/labs" className="text-gray-400 hover:text-white transition-colors">
                  Labs
                </Link>
              </li>
              <li>
                <Link to="/docs/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Teams Channel
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Studio42. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
