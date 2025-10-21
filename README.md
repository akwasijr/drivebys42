# DRIVE Landing Page

A modern, animated landing page for Studio42's DRIVE initiative - introducing designers and engineers to Vibe Coding.

## 🚀 What is DRIVE?

**DRIVE** = Design • Rapid • Iterate • Validate • Execute

A comprehensive framework for accelerating UX development cycles through AI-assisted vibe coding.

## 🎨 Built With

- **React** - UI framework
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first styling
- **DaisyUI** - Component library
- **GSAP** - Professional-grade animations
- **React Router** - Client-side routing

## 🎯 Features

### Landing Page Sections

1. **Hero** - Bold typography with animated DRIVE acronym breakdown
2. **What is Vibe Coding** - Split-screen explanation with parallax effects
3. **Why It Matters** - Problem/solution comparison with animated statistics
4. **DRIVE Process** - Interactive expandable cards for each phase
5. **Who It's For** - Persona-based cards for Designers & Engineers
6. **Get Started** - Call-to-action with multiple entry points
7. **Footer** - Links, resources, and Studio42 branding

### Design System

**Brand Colors:**
- Coral: `#F2A573`
- Pink: `#F45A9B`
- Purple: `#7E80EE`

**Typography:**
- Display: Plus Jakarta Sans
- Body: Inter

**Animations:**
- GSAP ScrollTrigger for scroll-based animations
- Stagger effects for list items
- Parallax backgrounds
- Hover effects and micro-interactions

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Development Server

The app runs on **http://localhost:5174** (or next available port)

## 📁 Project Structure

```
drive-landing/
├── public/
│   └── logo-s42.svg          # Studio42 logo
├── src/
│   ├── components/
│   │   ├── landing/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── WhatIsVibeCoding.jsx
│   │   │   ├── WhyItMatters.jsx
│   │   │   ├── DriveProcess.jsx
│   │   │   ├── WhoItsFor.jsx
│   │   │   ├── GetStarted.jsx
│   │   │   └── Footer.jsx
│   │   └── common/
│   ├── pages/
│   │   └── Landing.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🎭 Available Routes

- `/` - Landing page
- `/docs` - Documentation (coming soon)
- `/docs/designer` - Designer documentation (coming soon)
- `/labs` - Community labs (coming soon)

## 🔜 Next Steps

1. **Documentation Site** - Build Vibe-style docs with sidebar navigation
2. **Labs Feature** - Community project gallery with filtering
3. **Content** - Populate with actual guides, tutorials, and case studies
4. **Engineer Docs** - Complete the engineering side documentation

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to update brand colors:

```js
colors: {
  studio: {
    coral: '#F2A573',
    pink: '#F45A9B',
    purple: '#7E80EE',
  }
}
```

### Animations

GSAP animations are configured in each component. Adjust timing, easing, and effects in the `useEffect` hooks.

## 📝 License

© 2025 Studio42. All rights reserved.

---

Built with ❤️ by Studio42

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
