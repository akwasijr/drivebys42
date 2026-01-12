import { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  SiGreensock, SiTailwindcss, SiReact, SiVuedotjs, SiSvelte, 
  SiD3Dotjs, SiChartdotjs, SiFramer, SiVite,
  SiGithub, SiVercel, SiNetlify, SiTypescript, SiFigma,
  SiBootstrap, SiSass, SiWebpack, SiEsbuild,
  SiPrettier, SiEslint, SiVitest, 
  SiStorybook, SiAstro, SiNextdotjs, SiRemix, SiAngular,
  SiChakraui, SiMui, SiRedux, SiSocketdotio, SiBulma,
  SiRadixui, SiAlpinedotjs, SiUnocss
} from 'react-icons/si';
import { 
  FaCode, FaPaintBrush, FaFont, FaImage, FaRocket, FaTheaterMasks,
  FaSearchPlus, FaMousePointer, FaPalette, FaShapes, FaGripLines,
  FaFeather, FaFontAwesome, FaRegLightbulb, FaRegImages
} from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';
import { TbBrandThreejs, TbSparkles, TbTypography, TbBoxMultiple, TbCircleDot, TbGripVertical } from 'react-icons/tb';
import { RiMovie2Line, RiDragMove2Line, RiParentLine } from 'react-icons/ri';
import { MdAnimation, MdColorLens, MdGradient, MdTouchApp } from 'react-icons/md';
import { BiSolidColorFill } from 'react-icons/bi';
import { IoColorPaletteOutline } from 'react-icons/io5';
import SubmitToolModal from '../components/common/SubmitToolModal';

gsap.registerPlugin(ScrollTrigger);

const ToolsResources = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [sortBy, setSortBy] = useState('popular');
  const [filters, setFilters] = useState({
    category: [],
    integration: ['cdn', 'npm'],
    framework: ['vanilla'],
    learningCurve: ['beginner'],
    tags: [],
    trending: false
  });
  const [searchQuery, setSearchQuery] = useState('');
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.tools-hero', {
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

  // Icon mapping for categories
  const getCategoryIcon = (categoryId) => {
    const icons = {
      'animation': <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />,
      'styling': <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />,
      'icons': <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />,
      'utilities': <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />,
      'ui-components': <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />,
      'data-viz': <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />,
      'effects': <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
      'forms': <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
      'gestures': <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />,
      'media': <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />,
      'dev-tools': <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    };
    return icons[categoryId];
  };

  // Comprehensive tools database with real brand icons
  const tools = [
    // ANIMATION LIBRARIES
    {
      id: 1,
      name: 'GSAP',
      icon: SiGreensock,
      tagline: 'Professional-grade JavaScript animation',
      category: 'animation',
      description: 'Professional-grade JavaScript animation library for complex, high-performance animations',
      bestFor: 'Scroll-triggered animations, complex sequences, timeline-based animations',
      vibeUse: 'Create a scroll-triggered fade-in animation using GSAP ScrollTrigger',
      integration: ['cdn', 'npm'],
      pricing: 'freemium',
      learningCurve: 'intermediate',
      tags: ['animation', 'scroll-effects', 'timeline'],
      website: 'https://greensock.com',
      docs: 'https://greensock.com/docs/'
    },
    {
      id: 2,
      name: 'Tailwind CSS',
      icon: SiTailwindcss,
      tagline: 'Utility-first CSS framework',
      category: 'styling',
      description: 'Utility-first CSS framework for rapid UI development',
      bestFor: 'Fast prototyping, consistent design systems, responsive design',
      vibeUse: 'Create a responsive card layout using Tailwind',
      integration: ['cdn', 'npm'],
      pricing: 'free',
      learningCurve: 'beginner',
      tags: ['css', 'utility-first', 'responsive', 'design-system'],
      rating: 4.8,
      likes: 2100,
      views: 89000,
      website: 'https://tailwindcss.com',
      docs: 'https://tailwindcss.com/docs',
      cdnLink: 'https://cdn.tailwindcss.com'
    },
    {
      id: 3,
      name: 'React',
      icon: SiReact,
      tagline: 'A JavaScript library for building user interfaces',
      category: 'ui-components',
      description: 'A JavaScript library for building user interfaces with reusable components',
      bestFor: 'Single-page applications, component-based architecture, large-scale apps',
      vibeUse: 'Build an interactive dashboard with React hooks',
      integration: ['cdn', 'npm'],
      pricing: 'free',
      learningCurve: 'intermediate',
      tags: ['javascript', 'ui', 'components', 'hooks'],
      rating: 4.9,
      likes: 3200,
      views: 125000,
      website: 'https://react.dev',
      docs: 'https://react.dev/learn'
    },
    {
      id: 4,
      name: 'Framer Motion',
      icon: SiFramer,
      tagline: 'Motion library for React',
      category: 'animation',
      description: 'Production-ready motion library for React with declarative animations',
      bestFor: 'React projects, gesture-based interactions, page transitions',
      vibeUse: 'Add smooth page transitions with Framer Motion',
      integration: ['npm'],
      pricing: 'free',
      learningCurve: 'intermediate',
      tags: ['react', 'animation', 'gestures', 'transitions'],
      rating: 4.8,
      likes: 980,
      views: 41000,
      website: 'https://www.framer.com/motion/',
      docs: 'https://www.framer.com/motion/introduction/'
    },
    {
      id: 5,
      name: 'Chart.js',
      icon: SiChartdotjs,
      tagline: 'Simple JavaScript charting',
      category: 'data-viz',
      description: 'Simple yet flexible JavaScript charting library',
      bestFor: 'Basic charts, responsive, canvas-based',
      vibeUse: 'Create responsive bar chart with Chart.js',
      integration: ['cdn', 'npm'],
      pricing: 'free',
      learningCurve: 'beginner',
      tags: ['charts', 'visualization', 'canvas'],
      rating: 4.6,
      likes: 1100,
      views: 52000,
      website: 'https://www.chartjs.org',
      docs: 'https://www.chartjs.org/docs/'
    },
    {
      id: 6,
      name: 'D3.js',
      icon: SiD3Dotjs,
      tagline: 'Data-Driven Documents',
      category: 'data-viz',
      description: 'JavaScript library for producing dynamic, interactive data visualizations',
      bestFor: 'Custom visualizations, complex data manipulation, SVG graphics',
      vibeUse: 'Create custom interactive data visualization',
      integration: ['cdn', 'npm'],
      pricing: 'free',
      learningCurve: 'advanced',
      tags: ['data', 'visualization', 'svg', 'interactive'],
      rating: 4.7,
      likes: 1450,
      views: 67000,
      website: 'https://d3js.org',
      docs: 'https://d3js.org/getting-started'
    },
    {
      id: 7,
      name: 'Vue.js',
      icon: SiVuedotjs,
      tagline: 'The Progressive JavaScript Framework',
      category: 'ui-components',
      description: 'Progressive JavaScript framework for building user interfaces',
      bestFor: 'Progressive enhancement, flexible architecture, easy integration',
      vibeUse: 'Build a reactive form with Vue composition API',
      integration: ['cdn', 'npm'],
      pricing: 'free',
      learningCurve: 'beginner',
      tags: ['javascript', 'framework', 'reactive', 'progressive'],
      rating: 4.8,
      likes: 2800,
      views: 98000,
      website: 'https://vuejs.org',
      docs: 'https://vuejs.org/guide/'
    },
    {
      id: 8,
      name: 'Svelte',
      icon: SiSvelte,
      tagline: 'Cybernetically enhanced web apps',
      category: 'ui-components',
      description: 'Compiler-based framework that generates optimal JavaScript',
      bestFor: 'Performance-critical apps, minimal bundle size, reactive updates',
      vibeUse: 'Create a lightweight interactive widget with Svelte',
      integration: ['npm'],
      pricing: 'free',
      learningCurve: 'beginner',
      tags: ['framework', 'compiler', 'reactive', 'performance'],
      rating: 4.9,
      likes: 1650,
      views: 54000,
      website: 'https://svelte.dev',
      docs: 'https://svelte.dev/docs'
    },
    {
      id: 9,
      name: 'Vite',
      icon: SiVite,
      tagline: 'Next Generation Frontend Tooling',
      category: 'dev-tools',
      description: 'Lightning-fast build tool and dev server with hot module replacement',
      bestFor: 'Modern frontend development, fast builds, instant hot reload',
      vibeUse: 'Set up a React project with Vite in seconds',
      integration: ['npm'],
      pricing: 'free',
      learningCurve: 'beginner',
      tags: ['build-tool', 'dev-server', 'hmr', 'performance'],
      rating: 4.9,
      likes: 2300,
      views: 78000,
      website: 'https://vitejs.dev',
      docs: 'https://vitejs.dev/guide/'
    },
    {
      id: 10,
      name: 'TypeScript',
      icon: SiTypescript,
      tagline: 'JavaScript with syntax for types',
      category: 'utilities',
      description: 'Strongly typed programming language that builds on JavaScript',
      bestFor: 'Large codebases, type safety, better IDE support',
      vibeUse: 'Add type safety to your JavaScript project',
      integration: ['npm'],
      pricing: 'free',
      learningCurve: 'intermediate',
      tags: ['types', 'javascript', 'compiler', 'safety'],
      rating: 4.8,
      likes: 2900,
      views: 112000,
      website: 'https://www.typescriptlang.org',
      docs: 'https://www.typescriptlang.org/docs/'
    },
    {
      id: 11,
      name: 'VS Code',
      icon: VscCode,
      tagline: 'Code editing. Redefined.',
      category: 'dev-tools',
      description: 'Free, open-source code editor with IntelliSense, debugging, and Git integration',
      bestFor: 'Code editing, debugging, extensions, AI copilot',
      vibeUse: 'Use VS Code with GitHub Copilot for AI-assisted coding',
      integration: ['vscode'],
      pricing: 'free',
      learningCurve: 'beginner',
      tags: ['editor', 'ide', 'debugging', 'extensions'],
      rating: 4.9,
      likes: 4200,
      views: 156000,
      website: 'https://code.visualstudio.com',
      docs: 'https://code.visualstudio.com/docs'
    },
    // STYLING & CSS
    {
      id: 12,
      name: 'Figma',
      icon: SiFigma,
      tagline: 'Where teams design together',
      category: 'utilities',
      description: 'Collaborative interface design tool for creating prototypes and designs',
      bestFor: 'UI/UX design, prototyping, design systems, collaboration',
      vibeUse: 'Design a landing page mockup in Figma',
      integration: ['copy-paste'],
      pricing: 'freemium',
      learningCurve: 'beginner',
      tags: ['design', 'ui', 'prototyping'],
      website: 'https://www.figma.com',
      docs: 'https://help.figma.com'
    },
    {
      id: 13,
      name: 'Bootstrap',
      icon: SiBootstrap,
      tagline: 'The most popular CSS framework',
      category: 'styling',
      description: 'Feature-rich CSS framework for responsive, mobile-first sites',
      bestFor: 'Rapid prototyping, grid systems, pre-built components',
      vibeUse: 'Build a responsive navbar with Bootstrap',
      integration: ['cdn', 'npm'],
      pricing: 'free',
      learningCurve: 'beginner',
      tags: ['css', 'components', 'responsive'],
      website: 'https://getbootstrap.com',
      docs: 'https://getbootstrap.com/docs/'
    },
    {
      id: 14,
      name: 'Sass',
      icon: SiSass,
      tagline: 'CSS with superpowers',
      category: 'styling',
      description: 'CSS preprocessor with variables, nesting, and mixins',
      bestFor: 'Complex stylesheets, maintainable CSS, design systems',
      vibeUse: 'Create reusable CSS components with Sass mixins',
      integration: ['npm'],
      pricing: 'free',
      learningCurve: 'beginner',
      tags: ['css', 'preprocessor', 'variables'],
      website: 'https://sass-lang.com',
      docs: 'https://sass-lang.com/documentation/'
    },
    // MORE ANIMATION TOOLS
    {
      id: 15,
      name: 'Anime.js',
      icon: TbSparkles,
      tagline: 'Lightweight JavaScript animation library',
      category: 'animation',
      description: 'Flexible animation library for CSS, SVG, DOM and JavaScript objects',
      bestFor: 'Simple animations, SVG morphing, timeline sequences',
      vibeUse: 'Animate SVG icons with Anime.js',
      integration: ['cdn', 'npm'],
      pricing: 'free',
      learningCurve: 'beginner',
      tags: ['animation', 'svg', 'lightweight'],
      website: 'https://animejs.com',
      docs: 'https://animejs.com/documentation/'
    },
    {
      id: 16,
      name: 'Lottie',
      icon: RiMovie2Line,
      tagline: 'Render After Effects animations',
      category: 'animation',
      description: 'Library for rendering After Effects animations in real-time',
      bestFor: 'Complex animations, vector graphics, lightweight files',
      vibeUse: 'Add a Lottie animation to your hero section',
      integration: ['cdn', 'npm'],
      pricing: 'free',
      learningCurve: 'beginner',
      tags: ['animation', 'after-effects', 'vector'],
      website: 'https://lottiefiles.com',
      docs: 'https://lottiefiles.com/learn'
    },
    {
      id: 17,
      name: 'Three.js',
      icon: TbBrandThreejs,
      tagline: 'JavaScript 3D library',
      category: 'effects',
      description: 'Cross-browser JavaScript library for creating 3D graphics',
      bestFor: '3D scenes, WebGL, immersive experiences',
      vibeUse: 'Create an interactive 3D product showcase',
      integration: ['cdn', 'npm'],
      pricing: 'free',
      learningCurve: 'advanced',
      tags: ['3d', 'webgl', 'graphics'],
      website: 'https://threejs.org',
      docs: 'https://threejs.org/docs/'
    },
    // UI FRAMEWORKS
    {
      id: 18,
      name: 'Next.js',
      icon: SiNextdotjs,
      tagline: 'The React Framework',
      category: 'ui-components',
      description: 'React framework with server-side rendering and static generation',
      bestFor: 'Full-stack React apps, SEO, serverless functions',
      vibeUse: 'Build a blog with Next.js and MDX',
      integration: ['npm'],
      pricing: 'free',
      learningCurve: 'intermediate',
      tags: ['react', 'ssr', 'framework'],
      website: 'https://nextjs.org',
      docs: 'https://nextjs.org/docs'
    },
    {
      id: 19,
      name: 'Astro',
      icon: SiAstro,
      tagline: 'Build faster websites',
      category: 'ui-components',
      description: 'Modern static site builder with partial hydration',
      bestFor: 'Content sites, blogs, fast load times',
      vibeUse: 'Build a blazing-fast portfolio with Astro',
      integration: ['npm'],
      pricing: 'free',
      learningCurve: 'beginner',
      tags: ['static-site', 'performance', 'framework'],
      website: 'https://astro.build',
      docs: 'https://docs.astro.build/'
    },
    {
      id: 20,
      name: 'Remix',
      icon: SiRemix,
      tagline: 'Full stack web framework',
      category: 'ui-components',
      description: 'Full stack web framework focused on web standards',
      bestFor: 'Data-driven apps, progressive enhancement, SEO',
      vibeUse: 'Build a data-heavy dashboard with Remix',
      integration: ['npm'],
      pricing: 'free',
      learningCurve: 'intermediate',
      tags: ['react', 'fullstack', 'framework'],
      website: 'https://remix.run',
      docs: 'https://remix.run/docs'
    },
    {
      id: 21,
      name: 'Angular',
      icon: SiAngular,
      tagline: 'Platform for building web applications',
      category: 'ui-components',
      description: 'TypeScript-based platform for building scalable web apps',
      bestFor: 'Enterprise apps, large teams, TypeScript',
      vibeUse: 'Build an enterprise dashboard with Angular',
      integration: ['npm'],
      pricing: 'free',
      learningCurve: 'intermediate',
      tags: ['typescript', 'framework', 'enterprise'],
      website: 'https://angular.dev',
      docs: 'https://angular.dev/overview'
    },
    // DEV TOOLS
    {
      id: 22,
      name: 'Vercel',
      icon: SiVercel,
      tagline: 'Build. Deploy. Scale.',
      category: 'dev-tools',
      description: 'Platform for frontend developers providing instant deployments',
      bestFor: 'Next.js hosting, serverless functions, edge network',
      vibeUse: 'Deploy your React app to Vercel in one click',
      integration: ['npm'],
      pricing: 'freemium',
      learningCurve: 'beginner',
      tags: ['hosting', 'deployment', 'serverless'],
      website: 'https://vercel.com',
      docs: 'https://vercel.com/docs'
    },
    {
      id: 23,
      name: 'Netlify',
      icon: SiNetlify,
      tagline: 'Build and deploy the web',
      category: 'dev-tools',
      description: 'All-in-one platform for automating modern web projects',
      bestFor: 'Static sites, JAMstack, continuous deployment',
      vibeUse: 'Deploy your static site with automatic CI/CD',
      integration: ['npm'],
      pricing: 'freemium',
      learningCurve: 'beginner',
      tags: ['hosting', 'deployment', 'jamstack'],
      website: 'https://www.netlify.com',
      docs: 'https://docs.netlify.com'
    },
    {
      id: 24,
      name: 'GitHub',
      icon: SiGithub,
      tagline: 'Where the world builds software',
      category: 'dev-tools',
      description: 'Development platform for version control and collaboration',
      bestFor: 'Version control, collaboration, code review, CI/CD',
      vibeUse: 'Collaborate on code with GitHub pull requests',
      integration: ['vscode'],
      pricing: 'freemium',
      learningCurve: 'beginner',
      tags: ['git', 'collaboration', 'version-control'],
      website: 'https://github.com',
      docs: 'https://docs.github.com'
    },
    {
      id: 25,
      name: 'Webpack',
      icon: SiWebpack,
      tagline: 'Bundle your assets',
      category: 'dev-tools',
      description: 'Module bundler for modern JavaScript applications',
      bestFor: 'Complex builds, code splitting, asset optimization',
      vibeUse: 'Configure Webpack for your React app',
      integration: ['npm'],
      pricing: 'free',
      learningCurve: 'advanced',
      tags: ['bundler', 'build-tool', 'optimization'],
      website: 'https://webpack.js.org',
      docs: 'https://webpack.js.org/concepts/'
    },
    {
      id: 26,
      name: 'esbuild',
      icon: SiEsbuild,
      tagline: 'An extremely fast bundler',
      category: 'dev-tools',
      description: 'Extremely fast JavaScript bundler and minifier',
      bestFor: 'Lightning-fast builds, simple configuration',
      vibeUse: 'Bundle your app in milliseconds with esbuild',
      integration: ['npm'],
      pricing: 'free',
      learningCurve: 'beginner',
      tags: ['bundler', 'speed', 'build-tool'],
      website: 'https://esbuild.github.io',
      docs: 'https://esbuild.github.io/getting-started/'
    },
    {
      id: 27,
      name: 'Prettier',
      icon: SiPrettier,
      tagline: 'Opinionated code formatter',
      category: 'dev-tools',
      description: 'Automatic code formatter for consistent style',
      bestFor: 'Code formatting, team consistency, automation',
      vibeUse: 'Format your entire codebase with Prettier',
      integration: ['npm', 'vscode'],
      pricing: 'free',
      learningCurve: 'beginner',
      tags: ['formatter', 'code-quality', 'automation'],
      website: 'https://prettier.io',
      docs: 'https://prettier.io/docs/'
    },
    {
      id: 28,
      name: 'ESLint',
      icon: SiEslint,
      tagline: 'Find and fix problems in JavaScript',
      category: 'dev-tools',
      description: 'Pluggable linting utility for JavaScript and JSX',
      bestFor: 'Code quality, error prevention, team standards',
      vibeUse: 'Catch bugs early with ESLint rules',
      integration: ['npm', 'vscode'],
      pricing: 'free',
      learningCurve: 'beginner',
      tags: ['linter', 'code-quality', 'javascript'],
      website: 'https://eslint.org',
      docs: 'https://eslint.org/docs/latest/'
    },
    {
      id: 29,
      name: 'Storybook',
      icon: SiStorybook,
      tagline: 'Build UI components in isolation',
      category: 'dev-tools',
      description: 'Tool for building UI components and pages in isolation',
      bestFor: 'Component development, documentation, testing',
      vibeUse: 'Document your React components with Storybook',
      integration: ['npm'],
      pricing: 'free',
      learningCurve: 'intermediate',
      tags: ['ui', 'documentation', 'testing'],
      website: 'https://storybook.js.org',
      docs: 'https://storybook.js.org/docs'
    },
    // TESTING TOOLS
    {
      id: 30,
      name: 'Vitest',
      icon: SiVitest,
      tagline: 'Blazing fast unit test framework',
      category: 'utilities',
      description: 'Vite-native testing framework with Jest compatibility',
      bestFor: 'Unit testing, Vite projects, fast execution',
      vibeUse: 'Write fast unit tests for your components',
      integration: ['npm'],
      pricing: 'free',
      learningCurve: 'beginner',
      tags: ['testing', 'unit-tests', 'vite'],
      website: 'https://vitest.dev',
      docs: 'https://vitest.dev/guide/'
    },
    {
      id: 31,
      name: 'Playwright',
      icon: FaTheaterMasks,
      tagline: 'Fast and reliable end-to-end testing',
      category: 'utilities',
      description: 'Framework for Web Testing and Automation',
      bestFor: 'E2E testing, cross-browser testing, automation',
      vibeUse: 'Test your app across all browsers with Playwright',
      integration: ['npm'],
      pricing: 'free',
      learningCurve: 'intermediate',
      tags: ['testing', 'e2e', 'automation'],
      website: 'https://playwright.dev',
      docs: 'https://playwright.dev/docs/intro'
    },
    // ICONS & ASSETS
    {
      id: 32,
      name: 'Heroicons',
      icon: FaImage,
      tagline: 'Beautiful hand-crafted SVG icons',
      category: 'icons',
      description: 'Beautiful hand-crafted SVG icons by Tailwind Labs',
      bestFor: 'Clean icons, React/Vue components, Tailwind integration',
      vibeUse: 'Add beautiful icons to your Tailwind project',
      integration: ['cdn', 'npm', 'copy-paste'],
      pricing: 'free',
      learningCurve: 'beginner',
      tags: ['icons', 'svg', 'tailwind'],
      website: 'https://heroicons.com',
      docs: 'https://heroicons.com'
    },
    {
      id: 33,
      name: 'Font Awesome',
      icon: FaFont,
      tagline: 'The internet\'s icon library',
      category: 'icons',
      description: 'Iconic font and CSS toolkit with thousands of icons',
      bestFor: 'Icon variety, web fonts, brand icons',
      vibeUse: 'Add Font Awesome icons to your project',
      integration: ['cdn', 'npm', 'copy-paste'],
      pricing: 'freemium',
      learningCurve: 'beginner',
      tags: ['icons', 'fonts', 'brands'],
      website: 'https://fontawesome.com',
      docs: 'https://fontawesome.com/docs'
    },
    // UTILITIES
    {
      id: 34,
      name: 'Lodash',
      icon: FaCode,
      tagline: 'Modern JavaScript utility library',
      category: 'utilities',
      description: 'Utility library delivering modularity, performance & extras',
      bestFor: 'Array/object manipulation, functional programming, utilities',
      vibeUse: 'Simplify data manipulation with Lodash',
      integration: ['cdn', 'npm'],
      pricing: 'free',
      learningCurve: 'beginner',
      tags: ['utilities', 'javascript', 'functional'],
      website: 'https://lodash.com',
      docs: 'https://lodash.com/docs/'
    },
    {
      id: 35,
      name: 'Day.js',
      icon: FaCode,
      tagline: '2kB alternative to Moment.js',
      category: 'utilities',
      description: 'Fast 2kB alternative to Moment.js with the same modern API',
      bestFor: 'Date manipulation, formatting, lightweight',
      vibeUse: 'Format and manipulate dates with Day.js',
      integration: ['cdn', 'npm'],
      pricing: 'free',
      learningCurve: 'beginner',
      tags: ['dates', 'time', 'lightweight'],
      website: 'https://day.js.org',
      docs: 'https://day.js.org/docs/en/installation/installation'
    },
    // MORE ANIMATION TOOLS
    {
      id: 36,
      name: 'AOS',
      icon: MdAnimation,
      tagline: 'Animate On Scroll library',
      category: 'animation',
      description: 'Simple scroll animation library with CSS-based animations',
      bestFor: 'Quick scroll reveals, minimal JavaScript',
      vibeUse: 'Add fade-in-up animations on scroll',
      integration: ['cdn', 'npm'],
      pricing: 'free',
      learningCurve: 'beginner',
      tags: ['scroll', 'css-animations', 'simple'],
      website: 'https://michalsnik.github.io/aos/',
      docs: 'https://github.com/michalsnik/aos'
    },
    {
      id: 37,
      name: 'Locomotive Scroll',
      icon: FaGripLines,
      tagline: 'Smooth scroll with parallax effects',
      category: 'animation',
      description: 'Detection of elements in viewport & smooth scrolling with parallax',
      bestFor: 'Design-forward parallax sections, smooth scrolling',
      vibeUse: 'Parallax hero with sticky sections',
      integration: ['npm'],
      pricing: 'free',
      learningCurve: 'intermediate',
      tags: ['parallax', 'scroll', 'smooth'],
      website: 'https://locomotivemtl.github.io/locomotive-scroll/',
      docs: 'https://github.com/locomotivemtl/locomotive-scroll'
    },
    {
      id: 38,
      name: 'React Spring',
      icon: SiReact,
      tagline: 'Physics-based animation for React',
      category: 'animation',
      description: 'Spring-physics based animation library for React',
      bestFor: 'Natural motion, gestures, smooth transitions',
      vibeUse: 'Animate card entrance with spring physics',
      integration: ['npm'],
      pricing: 'free',
      learningCurve: 'intermediate',
      tags: ['react', 'animation', 'springs'],
      website: 'https://www.react-spring.dev',
      docs: 'https://www.react-spring.dev/docs'
    },
    // MORE STYLING FRAMEWORKS
    {
      id: 39,
      name: 'DaisyUI',
      icon: FaPalette,
      tagline: 'Tailwind CSS component library',
      category: 'styling',
      description: 'Component library for Tailwind CSS with pre-built components',
      bestFor: 'Ready-made Tailwind components, themes, faster development',
      vibeUse: 'Use DaisyUI modal component with custom styling',
      integration: ['npm'],
      pricing: 'free',
      learningCurve: 'beginner',
      tags: ['tailwind', 'components', 'themes'],
      website: 'https://daisyui.com',
      docs: 'https://daisyui.com/docs/'
    },
    {
      id: 40,
      name: 'Chakra UI',
      icon: SiChakraui,
      tagline: 'Simple, modular React component library',
      category: 'ui-components',
      description: 'Accessible React component system with style props',
      bestFor: 'Fast theming, dark mode, accessibility',
      vibeUse: 'Build accessible form with theme tokens',
      integration: ['npm'],
      pricing: 'free',
      learningCurve: 'beginner',
      tags: ['react', 'components', 'accessible'],
      website: 'https://chakra-ui.com',
      docs: 'https://chakra-ui.com/docs'
    },
    {
      id: 41,
      name: 'Material UI',
      icon: SiMui,
      tagline: 'React components that implement Material Design',
      category: 'ui-components',
      description: 'Comprehensive React UI library implementing Material Design',
      bestFor: 'Material Design projects, comprehensive components',
      vibeUse: 'Use Material UI components in React',
      integration: ['npm'],
      pricing: 'freemium',
      learningCurve: 'intermediate',
      tags: ['react', 'material-design', 'components'],
      website: 'https://mui.com',
      docs: 'https://mui.com/getting-started/'
    },
    // MORE ICONS
    {
      id: 42,
      name: 'Phosphor Icons',
      icon: FaShapes,
      tagline: 'Flexible icon family with 6 weights',
      category: 'icons',
      description: 'Flexible icon family for web, iOS, and Android with multiple weights',
      bestFor: 'Weight variants, consistent style, extensive collection',
      vibeUse: 'Use Phosphor icons with different weights',
      integration: ['cdn', 'npm'],
      pricing: 'free',
      learningCurve: 'beginner',
      tags: ['icons', 'svg', 'multi-weight'],
      website: 'https://phosphoricons.com',
      docs: 'https://phosphoricons.com'
    },
    {
      id: 43,
      name: 'Feather Icons',
      icon: FaFont,
      tagline: 'Simply beautiful open source icons',
      category: 'icons',
      description: 'Beautiful minimalist icon set with consistent stroke width',
      bestFor: 'Minimalist design, lightweight, consistent',
      vibeUse: 'Use minimal line icons with Feather',
      integration: ['cdn', 'npm'],
      pricing: 'free',
      learningCurve: 'beginner',
      tags: ['icons', 'svg', 'minimalist'],
      website: 'https://feathericons.com',
      docs: 'https://feathericons.com'
    },
    {
      id: 44,
      name: 'Tabler Icons',
      icon: FaImage,
      tagline: '4000+ pixel-perfect icons',
      category: 'icons',
      description: 'Over 4000 pixel-perfect icons for web applications',
      bestFor: 'Consistent stroke, web apps, React/Vue/Svelte',
      vibeUse: 'Add crisp interface icons with Tabler',
      integration: ['cdn', 'npm'],
      pricing: 'free',
      learningCurve: 'beginner',
      tags: ['icons', 'svg', 'pixel-perfect'],
      website: 'https://tabler.io/icons',
      docs: 'https://tabler.io/icons'
    },
    // MORE UTILITIES
    {
      id: 45,
      name: 'Swiper',
      icon: RiDragMove2Line,
      tagline: 'Modern mobile touch slider',
      category: 'utilities',
      description: 'Modern mobile touch slider with hardware accelerated transitions',
      bestFor: 'Carousels, galleries, touch-enabled sliders',
      vibeUse: 'Create a touch-enabled image carousel',
      integration: ['cdn', 'npm'],
      pricing: 'free',
      learningCurve: 'beginner',
      tags: ['slider', 'carousel', 'touch'],
      website: 'https://swiperjs.com',
      docs: 'https://swiperjs.com/get-started'
    },
    {
      id: 46,
      name: 'AutoAnimate',
      icon: TbSparkles,
      tagline: 'Zero-config drop-in animations',
      category: 'animation',
      description: 'Add smooth animations to your app with a single line of code',
      bestFor: 'Automatic smooth transitions, list animations',
      vibeUse: 'Auto-animate list additions and removals',
      integration: ['cdn', 'npm'],
      pricing: 'free',
      learningCurve: 'beginner',
      tags: ['animation', 'automatic', 'transitions'],
      website: 'https://auto-animate.formkit.com',
      docs: 'https://auto-animate.formkit.com'
    },
    {
      id: 47,
      name: 'Fuse.js',
      icon: FaSearchPlus,
      tagline: 'Lightweight fuzzy-search library',
      category: 'utilities',
      description: 'Powerful, lightweight fuzzy-search in JavaScript',
      bestFor: 'Client-side search, fuzzy matching, filtering',
      vibeUse: 'Add fuzzy search to your app',
      integration: ['cdn', 'npm'],
      pricing: 'free',
      learningCurve: 'beginner',
      tags: ['search', 'fuzzy', 'filter'],
      website: 'https://fusejs.io',
      docs: 'https://fusejs.io/api/options.html'
    },
    // INTERACTION & GESTURES
    {
      id: 48,
      name: 'SortableJS',
      icon: FaMousePointer,
      tagline: 'Reorderable drag-and-drop lists',
      category: 'gestures',
      description: 'JavaScript library for reorderable drag-and-drop lists',
      bestFor: 'Sortable lists, Kanban boards, drag-drop',
      vibeUse: 'Create sortable task list',
      integration: ['cdn', 'npm'],
      pricing: 'free',
      learningCurve: 'beginner',
      tags: ['drag-drop', 'sortable', 'lists'],
      website: 'https://sortablejs.github.io/Sortable/',
      docs: 'https://github.com/SortableJS/Sortable'
    },
    {
      id: 49,
      name: 'Interact.js',
      icon: RiDragMove2Line,
      tagline: 'Drag, resize and multi-touch gestures',
      category: 'gestures',
      description: 'JavaScript drag and drop, resizing and multi-touch gestures',
      bestFor: 'Draggable interfaces, resizable elements',
      vibeUse: 'Create drag-and-drop dashboard',
      integration: ['cdn', 'npm'],
      pricing: 'free',
      learningCurve: 'intermediate',
      tags: ['drag-drop', 'resize', 'gestures'],
      website: 'https://interactjs.io',
      docs: 'https://interactjs.io/docs/'
    },
    // EFFECTS
    {
      id: 50,
      name: 'Particles.js',
      icon: TbSparkles,
      tagline: 'Lightweight particle backgrounds',
      category: 'effects',
      description: 'Lightweight library for creating particle backgrounds',
      bestFor: 'Animated backgrounds, hero sections, visual effects',
      vibeUse: 'Add particle background to hero section',
      integration: ['cdn', 'npm'],
      pricing: 'free',
      learningCurve: 'beginner',
      tags: ['particles', 'background', 'animation'],
      website: 'https://vincentgarreau.com/particles.js/',
      docs: 'https://github.com/VincentGarreau/particles.js'
    },
    {
      id: 51,
      name: 'Typed.js',
      icon: TbTypography,
      tagline: 'JavaScript typing animation',
      category: 'effects',
      description: 'JavaScript typing animation library',
      bestFor: 'Typewriter effects, dynamic text animations',
      vibeUse: 'Add typing animation to hero heading',
      integration: ['cdn', 'npm'],
      pricing: 'free',
      learningCurve: 'beginner',
      tags: ['animation', 'typing', 'text'],
      website: 'https://mattboldt.com/demos/typed-js/',
      docs: 'https://github.com/mattboldt/typed.js'
    },
    // STATE MANAGEMENT
    {
      id: 52,
      name: 'Zustand',
      icon: SiReact,
      tagline: 'Bear necessities for state management',
      category: 'utilities',
      description: 'Small, fast and scalable state management for React',
      bestFor: 'Lightweight state, React, simple API',
      vibeUse: 'Manage global state with Zustand',
      integration: ['npm'],
      pricing: 'free',
      learningCurve: 'beginner',
      tags: ['state', 'react', 'management'],
      website: 'https://zustand-demo.pmnd.rs',
      docs: 'https://github.com/pmndrs/zustand'
    },
    {
      id: 53,
      name: 'Redux Toolkit',
      icon: SiRedux,
      tagline: 'The official Redux toolset',
      category: 'utilities',
      description: 'Official, opinionated, batteries-included toolset for Redux',
      bestFor: 'Complex state, large apps, time-travel debugging',
      vibeUse: 'Manage complex application state',
      integration: ['npm'],
      pricing: 'free',
      learningCurve: 'intermediate',
      tags: ['state', 'redux', 'management'],
      website: 'https://redux-toolkit.js.org',
      docs: 'https://redux-toolkit.js.org/introduction/getting-started'
    },
    // REALTIME
    {
      id: 54,
      name: 'Socket.IO',
      icon: SiSocketdotio,
      tagline: 'Realtime application framework',
      category: 'utilities',
      description: 'Bidirectional and low-latency communication for every platform',
      bestFor: 'Real-time apps, chat, collaborative features',
      vibeUse: 'Add real-time chat to your app',
      integration: ['npm'],
      pricing: 'free',
      learningCurve: 'intermediate',
      tags: ['realtime', 'websocket', 'communication'],
      website: 'https://socket.io',
      docs: 'https://socket.io/docs/v4/'
    },
    // DATA VISUALIZATION
    {
      id: 55,
      name: 'Recharts',
      icon: SiChartdotjs,
      tagline: 'Composable charting library built with React',
      category: 'data-viz',
      description: 'Redefined chart library built with React and D3',
      bestFor: 'React projects, declarative charts, composable',
      vibeUse: 'Build interactive charts in React',
      integration: ['npm'],
      pricing: 'free',
      learningCurve: 'beginner',
      tags: ['react', 'charts', 'visualization'],
      website: 'https://recharts.org',
      docs: 'https://recharts.org/en-US/api'
    },
    {
      id: 56,
      name: 'ApexCharts',
      icon: SiChartdotjs,
      tagline: 'Modern charting library',
      category: 'data-viz',
      description: 'Modern JavaScript charting library with interactive features',
      bestFor: 'Interactive charts, real-time data, dashboards',
      vibeUse: 'Create interactive dashboard charts',
      integration: ['cdn', 'npm'],
      pricing: 'free',
      learningCurve: 'beginner',
      tags: ['charts', 'visualization', 'interactive'],
      website: 'https://apexcharts.com',
      docs: 'https://apexcharts.com/docs/'
    },
    // NEW ANIMATION TOOLS
    {
      id: 57,
      name: 'Motion One',
      icon: MdAnimation,
      tagline: 'Smallest animation library',
      category: 'animation',
      description: 'Web Animations API wrapper, smallest animation library',
      bestFor: 'Performance-critical animations, modern browsers',
      vibeUse: 'Create performant micro-interactions',
      integration: ['cdn', 'npm'],
      pricing: 'free',
      learningCurve: 'beginner',
      tags: ['animation', 'performance', 'web-animations-api'],
      website: 'https://motion.dev',
      docs: 'https://motion.dev/docs'
    },
    {
      id: 58,
      name: 'ScrollReveal',
      icon: FaSearchPlus,
      tagline: 'Easy scroll animations',
      category: 'animation',
      description: 'Easy scroll animations for web and mobile browsers',
      bestFor: 'Reveal animations on scroll, simple configuration',
      vibeUse: 'Reveal elements as user scrolls',
      integration: ['cdn', 'npm'],
      pricing: 'free',
      learningCurve: 'beginner',
      tags: ['scroll', 'animation', 'reveal'],
      website: 'https://scrollrevealjs.org',
      docs: 'https://scrollrevealjs.org/guide/hello-world.html'
    },
    // NEW STYLING TOOLS
    {
      id: 59,
      name: 'Bulma',
      icon: SiBulma,
      tagline: 'Modern Flexbox CSS framework',
      category: 'styling',
      description: 'Modern CSS framework based on Flexbox',
      bestFor: 'Clean syntax, no JavaScript, modular',
      vibeUse: 'Build a hero section with Bulma',
      integration: ['cdn', 'npm'],
      pricing: 'free',
      learningCurve: 'beginner',
      tags: ['css', 'flexbox', 'modular'],
      website: 'https://bulma.io',
      docs: 'https://bulma.io/documentation/'
    },
    {
      id: 60,
      name: 'Pico CSS',
      icon: FaPaintBrush,
      tagline: 'Minimal semantic CSS',
      category: 'styling',
      description: 'Minimal CSS framework for semantic HTML',
      bestFor: 'Classless styling, minimal markup, simple projects',
      vibeUse: 'Style semantic HTML without utility classes',
      integration: ['cdn', 'npm'],
      pricing: 'free',
      learningCurve: 'beginner',
      tags: ['css', 'semantic', 'minimal', 'classless'],
      website: 'https://picocss.com',
      docs: 'https://picocss.com/docs'
    },
    {
      id: 61,
      name: 'UnoCSS',
      icon: SiUnocss,
      tagline: 'Instant atomic CSS engine',
      category: 'styling',
      description: 'Instant on-demand atomic CSS engine',
      bestFor: 'Performance, customization, Vite projects',
      vibeUse: 'Use atomic CSS with custom shortcuts',
      integration: ['npm'],
      pricing: 'free',
      learningCurve: 'intermediate',
      tags: ['css', 'atomic', 'performance', 'vite'],
      website: 'https://unocss.dev',
      docs: 'https://unocss.dev/guide/'
    },
    // NEW ICON TOOLS  
    {
      id: 62,
      name: 'Feather Icons',
      icon: FaFeather,
      tagline: 'Simply beautiful icons',
      category: 'icons',
      description: 'Simply beautiful open source icons',
      bestFor: 'Minimalist design, 1px stroke, lightweight',
      vibeUse: 'Use minimal line icons with Feather',
      integration: ['cdn', 'npm'],
      pricing: 'free',
      learningCurve: 'beginner',
      tags: ['icons', 'svg', 'minimalist'],
      website: 'https://feathericons.com',
      docs: 'https://feathericons.com'
    },
    {
      id: 63,
      name: 'Font Awesome',
      icon: FaFontAwesome,
      tagline: 'Web\'s most popular icons',
      category: 'icons',
      description: 'Web\'s most popular icon set and toolkit (16k+ icons)',
      bestFor: 'Comprehensive collection, icon fonts, duotone',
      vibeUse: 'Add Font Awesome icons to buttons',
      integration: ['cdn', 'npm'],
      pricing: 'freemium',
      learningCurve: 'beginner',
      tags: ['icons', 'font', 'comprehensive'],
      website: 'https://fontawesome.com',
      docs: 'https://fontawesome.com/docs'
    },
    {
      id: 64,
      name: 'Iconify',
      icon: FaFont,
      tagline: 'Universal icon framework',
      category: 'icons',
      description: 'Universal icon framework (150k+ icons from 150+ sets)',
      bestFor: 'Access to all icon sets, unified API, framework support',
      vibeUse: 'Use any icon from any set via Iconify',
      integration: ['cdn', 'npm'],
      pricing: 'free',
      learningCurve: 'beginner',
      tags: ['icons', 'svg', 'universal', 'api'],
      website: 'https://iconify.design',
      docs: 'https://iconify.design/docs/'
    },
    // NEW UTILITIES
    {
      id: 65,
      name: 'Alpine.js',
      icon: SiAlpinedotjs,
      tagline: 'Lightweight reactive framework',
      category: 'utilities',
      description: 'Lightweight JavaScript framework for reactive behavior',
      bestFor: 'Adding interactivity without heavy frameworks, HTMX-style',
      vibeUse: 'Add dropdown functionality with Alpine.js',
      integration: ['cdn', 'npm'],
      pricing: 'free',
      learningCurve: 'beginner',
      tags: ['javascript', 'reactive', 'lightweight'],
      website: 'https://alpinejs.dev',
      docs: 'https://alpinejs.dev/start-here'
    },
    // NEW UI COMPONENT LIBRARIES
    {
      id: 66,
      name: 'shadcn/ui',
      icon: SiReact,
      tagline: 'Radix UI + Tailwind components',
      category: 'ui-components',
      description: 'Re-usable components built with Radix UI and Tailwind',
      bestFor: 'High-quality accessible components, copy-paste code',
      vibeUse: 'Use shadcn dialog component in my app',
      integration: ['copy-paste'],
      pricing: 'free',
      learningCurve: 'intermediate',
      tags: ['react', 'tailwind', 'components', 'accessible'],
      website: 'https://ui.shadcn.com',
      docs: 'https://ui.shadcn.com/docs'
    },
    {
      id: 67,
      name: 'Headless UI',
      icon: SiTailwindcss,
      tagline: 'Unstyled accessible components',
      category: 'ui-components',
      description: 'Unstyled, accessible UI components by Tailwind team',
      bestFor: 'Accessible patterns, bring your own styles',
      vibeUse: 'Create accessible dropdown with Headless UI',
      integration: ['npm'],
      pricing: 'free',
      learningCurve: 'intermediate',
      tags: ['react', 'vue', 'accessible', 'headless'],
      website: 'https://headlessui.com',
      docs: 'https://headlessui.com/react/menu'
    },
    {
      id: 68,
      name: 'Flowbite',
      icon: SiTailwindcss,
      tagline: 'Tailwind CSS components',
      category: 'ui-components',
      description: 'Tailwind CSS component library with interactive elements',
      bestFor: 'Ready-to-use Tailwind components, documentation',
      vibeUse: 'Use Flowbite\'s navbar component',
      integration: ['cdn', 'npm'],
      pricing: 'freemium',
      learningCurve: 'beginner',
      tags: ['tailwind', 'components', 'interactive'],
      website: 'https://flowbite.com',
      docs: 'https://flowbite.com/docs/getting-started/introduction/'
    },
    {
      id: 69,
      name: 'Preline UI',
      icon: SiTailwindcss,
      tagline: 'Open-source Tailwind components',
      category: 'ui-components',
      description: 'Open-source Tailwind CSS components',
      bestFor: 'Modern UI patterns, marketing sites',
      vibeUse: 'Build landing page with Preline components',
      integration: ['cdn', 'npm'],
      pricing: 'free',
      learningCurve: 'beginner',
      tags: ['tailwind', 'components', 'landing-pages'],
      website: 'https://preline.co',
      docs: 'https://preline.co/docs/index.html'
    },
    {
      id: 70,
      name: 'Radix UI',
      icon: SiRadixui,
      tagline: 'Unstyled accessible primitives',
      category: 'ui-components',
      description: 'Unstyled, accessible components for building design systems',
      bestFor: 'Accessibility-first, complete control over styling',
      vibeUse: 'Build custom styled accessible components',
      integration: ['npm'],
      pricing: 'free',
      learningCurve: 'intermediate',
      tags: ['react', 'accessible', 'headless', 'primitives'],
      website: 'https://www.radix-ui.com',
      docs: 'https://www.radix-ui.com/primitives/docs/overview/introduction'
    },
    // NEW DATA VIZ
    {
      id: 71,
      name: 'ECharts',
      icon: SiChartdotjs,
      tagline: 'Apache visualization library',
      category: 'data-viz',
      description: 'Powerful charting and visualization library by Apache',
      bestFor: 'Complex dashboards, large datasets, extensive chart types',
      vibeUse: 'Build enterprise dashboard visualizations',
      integration: ['cdn', 'npm'],
      pricing: 'free',
      learningCurve: 'intermediate',
      tags: ['charts', 'visualization', 'dashboard', 'apache'],
      website: 'https://echarts.apache.org',
      docs: 'https://echarts.apache.org/en/tutorial.html'
    },
    // NEW EFFECTS
    {
      id: 72,
      name: 'Tilt.js',
      icon: TbBoxMultiple,
      tagline: '3D tilt hover effect',
      category: 'effects',
      description: '3D tilt hover effect for elements',
      bestFor: 'Card hover effects, interactive elements',
      vibeUse: 'Add 3D tilt to card on hover',
      integration: ['cdn', 'npm'],
      pricing: 'free',
      learningCurve: 'beginner',
      tags: ['hover', '3d', 'interaction'],
      website: 'https://micku7zu.github.io/vanilla-tilt.js/',
      docs: 'https://micku7zu.github.io/vanilla-tilt.js/'
    },
    {
      id: 73,
      name: 'Rellax.js',
      icon: RiParentLine,
      tagline: 'Lightweight parallax library',
      category: 'effects',
      description: 'Lightweight parallax scrolling library',
      bestFor: 'Parallax effects, depth, scroll-based movement',
      vibeUse: 'Create parallax scrolling sections',
      integration: ['cdn', 'npm'],
      pricing: 'free',
      learningCurve: 'beginner',
      tags: ['parallax', 'scroll', 'animation'],
      website: 'https://dixonandmoe.com/rellax/',
      docs: 'https://github.com/dixonandmoe/rellax'
    },
    {
      id: 74,
      name: 'Splitting.js',
      icon: TbTypography,
      tagline: 'Text splitting for animations',
      category: 'effects',
      description: 'Split text into characters/words for advanced animations',
      bestFor: 'Text animations, character-by-character effects',
      vibeUse: 'Animate text character by character',
      integration: ['cdn', 'npm'],
      pricing: 'free',
      learningCurve: 'intermediate',
      tags: ['text', 'animation', 'splitting'],
      website: 'https://splitting.js.org',
      docs: 'https://splitting.js.org'
    },
    // NEW COLOR TOOLS (new category)
    {
      id: 75,
      name: 'Chroma.js',
      icon: MdColorLens,
      tagline: 'Color conversions and scales',
      category: 'utilities',
      description: 'Small library for color conversions and scales',
      bestFor: 'Color scales, gradients, color manipulation',
      vibeUse: 'Create color scale for data visualization',
      integration: ['cdn', 'npm'],
      pricing: 'free',
      learningCurve: 'beginner',
      tags: ['color', 'scales', 'conversion'],
      website: 'https://gka.github.io/chroma.js/',
      docs: 'https://gka.github.io/chroma.js/'
    },
    // NEW FORM LIBRARIES
    {
      id: 76,
      name: 'Cleave.js',
      icon: FaCode,
      tagline: 'Format input automatically',
      category: 'forms',
      description: 'Format input text content automatically',
      bestFor: 'Credit card inputs, phone numbers, dates',
      vibeUse: 'Auto-format credit card input',
      integration: ['cdn', 'npm'],
      pricing: 'free',
      learningCurve: 'beginner',
      tags: ['forms', 'input', 'formatting'],
      website: 'https://nosir.github.io/cleave.js/',
      docs: 'https://github.com/nosir/cleave.js'
    },
    {
      id: 77,
      name: 'Choices.js',
      icon: FaCode,
      tagline: 'Configurable select boxes',
      category: 'forms',
      description: 'Lightweight, configurable select boxes',
      bestFor: 'Enhanced select dropdowns, searchable selects',
      vibeUse: 'Create searchable multi-select dropdown',
      integration: ['cdn', 'npm'],
      pricing: 'free',
      learningCurve: 'beginner',
      tags: ['forms', 'select', 'dropdown'],
      website: 'https://choices-js.github.io/Choices/',
      docs: 'https://github.com/Choices-js/Choices'
    },
    {
      id: 78,
      name: 'React Hook Form',
      icon: SiReact,
      tagline: 'Performant React forms',
      category: 'forms',
      description: 'Performant, flexible forms with easy validation',
      bestFor: 'React forms, minimal re-renders, validation',
      vibeUse: 'Build validated form in React',
      integration: ['npm'],
      pricing: 'free',
      learningCurve: 'intermediate',
      tags: ['react', 'forms', 'validation'],
      website: 'https://react-hook-form.com',
      docs: 'https://react-hook-form.com/get-started'
    },
    {
      id: 79,
      name: 'Formik',
      icon: SiReact,
      tagline: 'Build React forms easily',
      category: 'forms',
      description: 'Build forms in React without tears',
      bestFor: 'Complex forms, React, validation',
      vibeUse: 'Create complex multi-step form',
      integration: ['npm'],
      pricing: 'free',
      learningCurve: 'intermediate',
      tags: ['react', 'forms', 'validation'],
      website: 'https://formik.org',
      docs: 'https://formik.org/docs/overview'
    },
    // NEW GESTURE TOOLS
    {
      id: 80,
      name: 'Hammer.js',
      icon: MdTouchApp,
      tagline: 'Touch gesture library',
      category: 'gestures',
      description: 'Touch gesture library',
      bestFor: 'Mobile gestures, swipe, pinch, pan',
      vibeUse: 'Add swipe gestures to image gallery',
      integration: ['cdn', 'npm'],
      pricing: 'free',
      learningCurve: 'beginner',
      tags: ['touch', 'gestures', 'mobile'],
      website: 'https://hammerjs.github.io',
      docs: 'https://hammerjs.github.io/getting-started/'
    },
    // NEW MEDIA TOOLS
    {
      id: 81,
      name: 'PhotoSwipe',
      icon: FaRegImages,
      tagline: 'JavaScript image gallery',
      category: 'media',
      description: 'JavaScript image gallery and lightbox',
      bestFor: 'Image galleries, touch-enabled, responsive',
      vibeUse: 'Create touch-friendly image gallery',
      integration: ['npm'],
      pricing: 'free',
      learningCurve: 'beginner',
      tags: ['gallery', 'lightbox', 'images'],
      website: 'https://photoswipe.com',
      docs: 'https://photoswipe.com/getting-started/'
    },
    {
      id: 82,
      name: 'Lazy Sizes',
      icon: FaImage,
      tagline: 'High-performance lazy loader',
      category: 'media',
      description: 'High-performance lazy loader for images',
      bestFor: 'Performance, lazy loading, responsive images',
      vibeUse: 'Lazy load images for performance',
      integration: ['cdn', 'npm'],
      pricing: 'free',
      learningCurve: 'beginner',
      tags: ['images', 'lazy-load', 'performance'],
      website: 'https://github.com/aFarkas/lazysizes',
      docs: 'https://github.com/aFarkas/lazysizes'
    }
  ];

  // Calculate category counts dynamically from tools
  const getCategoryCounts = () => {
    const counts = {};
    tools.forEach(tool => {
      counts[tool.category] = (counts[tool.category] || 0) + 1;
    });
    return counts;
  };

  const categoryCounts = getCategoryCounts();

  // Category data with dynamic counts
  const categories = [
    { id: 'animation', name: 'Animation', count: categoryCounts.animation || 0 },
    { id: 'styling', name: 'Styling', count: categoryCounts.styling || 0 },
    { id: 'icons', name: 'Icons', count: categoryCounts.icons || 0 },
    { id: 'utilities', name: 'Utilities', count: categoryCounts.utilities || 0 },
    { id: 'ui-components', name: 'UI Frameworks', count: categoryCounts['ui-components'] || 0 },
    { id: 'data-viz', name: 'Data Viz', count: categoryCounts['data-viz'] || 0 },
    { id: 'effects', name: 'Effects', count: categoryCounts.effects || 0 },
    { id: 'forms', name: 'Forms', count: categoryCounts.forms || 0 },
    { id: 'gestures', name: 'Gestures', count: categoryCounts.gestures || 0 },
    { id: 'media', name: 'Media', count: categoryCounts.media || 0 },
    { id: 'dev-tools', name: 'Dev Tools', count: categoryCounts['dev-tools'] || 0 }
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
      integration: [],
      framework: [],
      learningCurve: [],
      tags: [],
      trending: false
    });
    setSearchQuery('');
  };

  const hasActiveFilters = Object.values(filters).some(val => 
    Array.isArray(val) ? val.length > 0 : val
  ) || searchQuery.length > 0;

  // Filter and sort tools
  const filteredTools = useMemo(() => {
    let filtered = tools;

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(tool => 
        tool.name.toLowerCase().includes(query) ||
        tool.tagline.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query) ||
        tool.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Category filter
    if (filters.category.length > 0) {
      filtered = filtered.filter(tool => filters.category.includes(tool.category));
    }

    // Integration filter
    if (filters.integration.length > 0) {
      filtered = filtered.filter(tool => 
        filters.integration.some(int => tool.integration.includes(int))
      );
    }

    // Learning curve filter
    if (filters.learningCurve.length > 0) {
      filtered = filtered.filter(tool => filters.learningCurve.includes(tool.learningCurve));
    }

    // Sort tools
    switch (sortBy) {
      case 'popular':
        filtered = [...filtered].sort((a, b) => b.views - a.views);
        break;
      case 'rating':
        filtered = [...filtered].sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'recent':
        // Keep original order for recent
        break;
      default:
        break;
    }

    return filtered;
  }, [tools, filters, searchQuery, sortBy]);

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
            <Link to="/docs" className="text-gray-400 hover:text-white transition-colors">Docs</Link>
            <Link to="/ai-evals" className="text-gray-400 hover:text-white transition-colors">AI Evals</Link>
          </nav>
        </div>
      </header>

      {/* Page Title Section */}
      <section className="bg-black border-b border-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="flex items-start justify-between gap-8 mb-8">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                Tools & Resources
              </h1>
              <p className="text-gray-400 text-lg max-w-3xl">
                Discover curated tools, libraries, and frameworks perfect for vibe coding. 
                From animation libraries to UI components, find everything you need to build with AI assistance.
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
          
          {/* Expandable Search */}
          <div className="max-w-2xl relative">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search tools, libraries, frameworks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-900 border border-gray-800 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-studio-blue transition-all duration-300"
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
              <div className="bg-gray-950 rounded-2xl p-6 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white">Filters</h3>
                  {hasActiveFilters && (
                    <button onClick={clearFilters} className="text-sm text-studio-blue hover:text-studio-pink transition-colors">
                      Clear all
                    </button>
                  )}
                </div>

                {/* Category Filter */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-studio-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                    Category
                  </h4>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {categories.map(cat => (
                      <label key={cat.id} className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer transition-colors">
                        <input
                          type="checkbox"
                          checked={filters.category.includes(cat.id)}
                          onChange={() => handleFilterChange('category', cat.id)}
                          className="w-4 h-4 rounded border-gray-700 bg-gray-900 text-studio-blue focus:ring-studio-blue"
                        />
                        <span className="text-sm">{cat.name} ({cat.count})</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Integration Filter */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-studio-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    Method
                  </h4>
                  <div className="space-y-2">
                    {['cdn', 'npm', 'copy-paste', 'vscode'].map(int => (
                      <label key={int} className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer transition-colors">
                        <input
                          type="checkbox"
                          checked={filters.integration.includes(int)}
                          onChange={() => handleFilterChange('integration', int)}
                          className="w-4 h-4 rounded border-gray-700 bg-gray-900 text-studio-purple focus:ring-studio-purple"
                        />
                        <span className="text-sm capitalize">{int === 'vscode' ? 'VS Code' : int.replace('-', ' / ')}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Learning Curve */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Learning Curve
                  </h4>
                  <div className="space-y-2">
                    {['beginner', 'intermediate', 'advanced'].map(level => (
                      <label key={level} className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer transition-colors">
                        <input
                          type="checkbox"
                          checked={filters.learningCurve.includes(level)}
                          onChange={() => handleFilterChange('learningCurve', level)}
                          className="w-4 h-4 rounded border-gray-700 bg-gray-900 text-blue-400 focus:ring-blue-400"
                        />
                        <span className="text-sm capitalize">{level}</span>
                      </label>
                    ))}
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
                    className="px-4 py-2 bg-gray-950 border border-gray-800 rounded-xl text-white focus:outline-none focus:border-studio-purple transition-colors cursor-pointer"
                  >
                    <option value="popular">Most Popular</option>
                    <option value="recent">Recently Added</option>
                    <option value="name">Name A-Z</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                  <span className="text-gray-500 text-sm">
                    {filteredTools.length} {filteredTools.length === 1 ? 'tool' : 'tools'}
                    {hasActiveFilters && <span className="text-studio-blue ml-1">(filtered)</span>}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'grid'
                        ? 'bg-studio-blue text-white'
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
                        ? 'bg-studio-blue text-white'
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
                <div className="tools-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredTools.length === 0 ? (
                    <div className="col-span-full text-center py-20">
                      <div className="w-20 h-20 rounded-full bg-gray-900 flex items-center justify-center mx-auto mb-4">
                        <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">No tools found</h3>
                      <p className="text-gray-500 mb-6">Try adjusting your filters or search query</p>
                      {hasActiveFilters && (
                        <button 
                          onClick={clearFilters}
                          className="px-6 py-2 bg-studio-coral hover:bg-studio-pink text-white rounded-xl transition-colors"
                        >
                          Clear all filters
                        </button>
                      )}
                    </div>
                  ) : (
                    filteredTools.map((tool, index) => {
                      const IconComponent = tool.icon;
                      const accentColor = index % 3 === 0 ? 'pink' : index % 3 === 1 ? 'blue' : 'purple';
                      return (
                        <Link key={tool.id} to={`/tools/${tool.id}`} className="tool-card group cursor-pointer">
                          <div className={`bg-gray-950 rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-1 h-full flex flex-col`}>
                            <div className="p-6 flex-1 flex flex-col">
                          <div className="flex items-start justify-between mb-4">
                            <div className={`w-14 h-14 rounded-xl bg-studio-${accentColor}/10 flex items-center justify-center`}>
                              {IconComponent && <IconComponent className={`w-8 h-8 text-studio-${accentColor}`} />}
                            </div>
                          </div>                          <h3 className={`text-xl font-bold text-white mb-1 group-hover:text-studio-${accentColor} transition-colors`}>
                            {tool.name}
                          </h3>
                          <p className="text-gray-500 text-sm mb-3">{tool.tagline}</p>
                          
                          <div className="mb-4 flex-1">
                            <span className={`inline-flex items-center gap-1.5 px-2 py-1 bg-gray-900 text-studio-${accentColor} text-xs rounded-full mb-2`}>
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {getCategoryIcon(tool.category)}
                              </svg>
                              {categories.find(c => c.id === tool.category)?.name}
                            </span>
                            <p className="text-gray-400 text-sm line-clamp-2">{tool.description}</p>
                          </div>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {tool.tags.slice(0, 3).map(tag => (
                              <span key={tag} className="px-3 py-1 bg-gray-900 text-gray-400 text-xs rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex gap-2">
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                window.open(tool.website, '_blank');
                              }}
                              className={`flex-1 px-3 py-2 bg-studio-${accentColor} hover:bg-studio-pink text-white rounded-lg transition-colors text-sm font-medium flex items-center justify-center gap-2`}
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                              Visit
                            </button>
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                window.open(tool.docs, '_blank');
                              }}
                              className="px-3 py-2 bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-white rounded-lg transition-colors text-sm"
                              title="Documentation"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </Link>
                      );
                    })
                  )}
                </div>
              )}

              {/* List View */}
              {viewMode === 'list' && (
                <div className="space-y-4">
                  {filteredTools.length === 0 ? (
                    <div className="text-center py-20">
                      <div className="w-20 h-20 rounded-full bg-gray-900 flex items-center justify-center mx-auto mb-4">
                        <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">No tools found</h3>
                      <p className="text-gray-500 mb-6">Try adjusting your filters or search query</p>
                      {hasActiveFilters && (
                        <button 
                          onClick={clearFilters}
                          className="px-6 py-2 bg-studio-coral hover:bg-studio-pink text-white rounded-xl transition-colors"
                        >
                          Clear all filters
                        </button>
                      )}
                    </div>
                  ) : (
                    filteredTools.map(tool => {
                      const IconComponent = tool.icon;
                      return (
                        <Link key={tool.id} to={`/tools/${tool.id}`} className="tool-card bg-gray-950 rounded-xl p-6 cursor-pointer block">
                          <div className="flex gap-6">
                            <div className="w-20 h-20 rounded-xl bg-studio-coral/10 flex items-center justify-center flex-shrink-0">
                              {IconComponent && <IconComponent className="w-12 h-12 text-studio-coral" />}
                            </div>
                            <div className="flex-1">
                              <div className="mb-3">
                                <h3 className="text-2xl font-bold text-white hover:text-studio-coral transition-colors mb-1">
                                  {tool.name}
                                </h3>
                                <p className="text-gray-500">{tool.tagline}</p>
                              </div>
                              <p className="text-gray-300 mb-4">{tool.description}</p>
                              <div className="flex items-center justify-between">
                                <div className="flex flex-wrap gap-2">
                                  {tool.tags.slice(0, 4).map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-gray-900 text-gray-400 text-sm rounded-full">
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                                <div className="flex gap-2">
                                  <button
                                    onClick={(e) => {
                                      e.preventDefault();
                                      e.stopPropagation();
                                      window.open(tool.website, '_blank');
                                    }}
                                    className="px-4 py-2 bg-studio-coral hover:bg-studio-pink text-white rounded-lg transition-colors text-sm font-medium"
                                  >
                                    Visit
                                  </button>
                                  <button
                                    onClick={(e) => {
                                      e.preventDefault();
                                      e.stopPropagation();
                                      window.open(tool.docs, '_blank');
                                    }}
                                    className="px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-colors text-sm"
                                  >
                                    Docs
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      );
                    })
                  )}
                </div>
              )}

              {/* Load More */}
              <div className="mt-12 text-center">
                <button className="px-8 py-3 bg-gray-950 hover:bg-gray-900 text-white rounded-xl transition-colors font-medium">
                  Load More Tools
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Submit Tool Modal */}
      <SubmitToolModal 
        isOpen={isSubmitModalOpen} 
        onClose={() => setIsSubmitModalOpen(false)} 
      />
    </div>
  );
};

export default ToolsResources;
