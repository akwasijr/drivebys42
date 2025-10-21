# Vibe Coding Tools Database - Quick Reference Guide

## 📋 Data Structure Template

Use this template when adding or enhancing tools in `/src/data/vibeToolsDatabase.js`:

```javascript
{
  // ============================================================================
  // BASIC INFORMATION (Required)
  // ============================================================================
  
  id: 'tool-slug' | 1-82, // String for special tools (react), number for others
  name: 'Tool Name', // Official tool name
  icon: SiIconName, // React icon component from react-icons
  tagline: 'Brief one-line description', // 50-80 characters
  category: 'category-id', // See categories list below
  categoryLabel: 'Human Readable Category', // e.g., "UI Frameworks"
  
  // ============================================================================
  // DESCRIPTION (Required)
  // ============================================================================
  
  description: 'Detailed description explaining what the tool is, who created it, and what makes it unique. 2-3 sentences, 200-300 characters.',
  
  // ============================================================================
  // METADATA (Required)
  // ============================================================================
  
  bestFor: 'Primary use cases, comma-separated, 100-150 characters',
  vibeUse: 'One-sentence vibe coding prompt example',
  integration: ['cdn', 'npm', 'cli'], // How to install/use
  pricing: 'free' | 'freemium' | 'paid',
  learningCurve: 'beginner' | 'intermediate' | 'advanced',
  tags: ['tag1', 'tag2', 'tag3', 'tag4'], // 4-8 relevant tags
  
  // ============================================================================
  // OPTIONAL STATS
  // ============================================================================
  
  rating: 4.8, // 0.0 - 5.0
  likes: 2100, // Number of likes
  views: 89000, // Number of views
  
  // ============================================================================
  // LINKS (Required)
  // ============================================================================
  
  website: 'https://toolname.com', // Official website
  docs: 'https://toolname.com/docs', // Documentation URL
  cdnLink: 'https://cdn.example.com/tool.js', // Optional: CDN link if applicable
  
  // ============================================================================
  // FEATURES LIST (Required - 6-10 items)
  // ============================================================================
  
  features: [
    'Feature or capability 1',
    'Feature or capability 2',
    'Feature or capability 3',
    'Feature or capability 4',
    'Feature or capability 5',
    'Feature or capability 6',
    'Feature or capability 7',
    'Feature or capability 8'
  ],
  
  // ============================================================================
  // LIMITATIONS (Required - 4-6 items)
  // ============================================================================
  
  limitations: [
    'Limitation or consideration 1',
    'Limitation or consideration 2',
    'Limitation or consideration 3',
    'Limitation or consideration 4',
    'Limitation or consideration 5'
  ],
  
  // ============================================================================
  // STARTER PROMPTS (Required - Exactly 5)
  // ============================================================================
  // Ready-to-use AI prompts for common tasks
  
  starterPrompts: [
    {
      title: 'Prompt Title (3-5 words)', // e.g., "Interactive Dashboard Component"
      prompt: 'Detailed AI prompt explaining what to build. Include specifics like components, features, styling, data handling, and expected behavior. 150-250 words. Be specific about requirements.',
      example: 'Brief description of the expected outcome or what the prompt generates. 50-100 characters.'
    },
    {
      title: 'Second Prompt Title',
      prompt: 'Another detailed prompt for a different use case...',
      example: 'Expected outcome description...'
    },
    {
      title: 'Third Prompt Title',
      prompt: 'Third prompt covering another common scenario...',
      example: 'Expected outcome...'
    },
    {
      title: 'Fourth Prompt Title',
      prompt: 'Fourth prompt for advanced use case...',
      example: 'Expected outcome...'
    },
    {
      title: 'Fifth Prompt Title',
      prompt: 'Fifth prompt completing the set...',
      example: 'Expected outcome...'
    }
  ],
  
  // ============================================================================
  // DETAILED USE CASES (Required - Exactly 3)
  // ============================================================================
  // Real-world scenarios with step-by-step implementation
  
  detailedUseCases: [
    {
      scenario: 'Use Case Title (5-8 words)', // e.g., "Building a SaaS Dashboard"
      description: 'Brief overview of what this use case accomplishes and why it matters. 100-150 characters.',
      steps: [
        'Step 1: Action to take',
        'Step 2: Next action',
        'Step 3: Another step',
        'Step 4: Continue...',
        'Step 5: More steps...',
        'Step 6: Even more...',
        'Step 7: Almost done...',
        'Step 8: Final step'
      ], // 6-10 steps
      prompt: 'Complete AI prompt for this entire use case. Include all requirements, features, styling, interactions, and specifications. Be extremely detailed. 200-350 words.',
      outcome: 'Brief description of the final result and its value. 50-100 characters.'
    },
    {
      scenario: 'Second Use Case Title',
      description: 'Overview of second scenario...',
      steps: [
        'Step 1 for second use case...',
        // ... 6-10 steps
      ],
      prompt: 'Complete prompt for second scenario...',
      outcome: 'Expected result...'
    },
    {
      scenario: 'Third Use Case Title',
      description: 'Overview of third scenario...',
      steps: [
        'Step 1 for third use case...',
        // ... 6-10 steps
      ],
      prompt: 'Complete prompt for third scenario...',
      outcome: 'Expected result...'
    }
  ],
  
  // ============================================================================
  // BEST PRACTICES (Required - 10-14 items)
  // ============================================================================
  // Professional tips and guidelines
  
  bestPractices: [
    'Best practice tip 1 - be specific and actionable',
    'Best practice tip 2 - explain why, not just what',
    'Best practice tip 3 - include examples when helpful',
    'Best practice tip 4 - focus on performance',
    'Best practice tip 5 - address maintainability',
    'Best practice tip 6 - discuss scalability',
    'Best practice tip 7 - cover security if relevant',
    'Best practice tip 8 - mention accessibility',
    'Best practice tip 9 - talk about testing',
    'Best practice tip 10 - discuss optimization',
    'Best practice tip 11 - additional advanced tips',
    'Best practice tip 12 - more wisdom'
  ],
  
  // ============================================================================
  // PROJECT EXAMPLES (Required - Exactly 4)
  // ============================================================================
  // Complete project ideas with complexity ratings
  
  projectExamples: [
    {
      type: 'Project Type Name', // e.g., "Task Management App"
      description: 'Brief description of the project and its key features. 100-150 characters.',
      starterPrompt: 'Complete project prompt with all requirements, features, pages, components, styling, interactions, data handling, and any special requirements. Be extremely detailed. 250-400 words.',
      timeEstimate: '30-40 minutes', // Realistic build time
      complexity: 'Beginner' // 'Beginner' | 'Intermediate' | 'Advanced'
    },
    {
      type: 'Second Project Type',
      description: 'Description of second project...',
      starterPrompt: 'Complete prompt for second project...',
      timeEstimate: '40-50 minutes',
      complexity: 'Intermediate'
    },
    {
      type: 'Third Project Type',
      description: 'Description of third project...',
      starterPrompt: 'Complete prompt for third project...',
      timeEstimate: '35-45 minutes',
      complexity: 'Intermediate'
    },
    {
      type: 'Fourth Project Type',
      description: 'Description of fourth project...',
      starterPrompt: 'Complete prompt for fourth project...',
      timeEstimate: '25-35 minutes',
      complexity: 'Beginner'
    }
  ]
}
```

---

## 📂 Categories Reference

```javascript
// Available categories (use for 'category' field):
'animation'       // Animation libraries (GSAP, Framer Motion)
'styling'         // CSS frameworks (Tailwind, Bootstrap)
'ui-components'   // UI frameworks (React, Vue, Svelte)
'data-viz'        // Data visualization (Chart.js, D3.js)
'dev-tools'       // Development tools (Vite, Webpack, ESLint)
'utilities'       // Utility libraries (Lodash, Date-fns)
'icons'           // Icon libraries (Font Awesome, Lucide)
'forms'           // Form libraries (React Hook Form, Formik)
'gestures'        // Gesture libraries (Hammer.js)
'media'           // Media libraries (Plyr, Video.js)
'effects'         // Visual effects (Particles.js, Three.js)
```

---

## 🎨 Icon Imports Reference

```javascript
// Already imported in vibeToolsDatabase.js:
import { 
  SiGreensock,      // GSAP
  SiTailwindcss,    // Tailwind CSS
  SiReact,          // React
  SiVuedotjs,       // Vue.js
  SiSvelte,         // Svelte
  SiD3Dotjs,        // D3.js
  SiChartdotjs,     // Chart.js
  SiFramer,         // Framer Motion
  SiVite,           // Vite
  SiGithub,         // GitHub
  SiVercel,         // Vercel
  SiNetlify,        // Netlify
  SiTypescript,     // TypeScript
  SiFigma,          // Figma
  SiBootstrap,      // Bootstrap
  SiSass,           // Sass
  SiWebpack,        // Webpack
  SiEsbuild,        // esbuild
  SiPrettier,       // Prettier
  SiEslint,         // ESLint
  SiVitest,         // Vitest
  SiStorybook,      // Storybook
  SiAstro,          // Astro
  SiNextdotjs,      // Next.js
  SiRemix,          // Remix
  SiAngular,        // Angular
  SiChakraui,       // Chakra UI
  SiMui,            // Material-UI
  SiRedux,          // Redux
  SiSocketdotio,    // Socket.io
  SiBulma,          // Bulma
  SiRadixui,        // Radix UI
  SiAlpinedotjs,    // Alpine.js
  SiUnocss          // UnoCSS
} from 'react-icons/si';

// Font Awesome icons:
import { 
  FaCode,           // Generic code icon
  FaPaintBrush,     // Styling/design
  FaFont,           // Typography
  FaImage,          // Images
  FaRocket,         // Performance
  FaTheaterMasks,   // Animation
  FaSearchPlus,     // Zoom/magnify
  FaMousePointer,   // Interactions
  FaPalette,        // Colors
  FaShapes,         // Shapes
  FaGripLines,      // Layouts
  FaFeather,        // Lightweight
  FaFontAwesome,    // Icons
  FaRegLightbulb,   // Ideas
  FaRegImages       // Gallery
} from 'react-icons/fa';

// VS Code icon:
import { VscCode } from 'react-icons/vsc';

// Tabler icons:
import { 
  TbBrandThreejs,   // Three.js
  TbSparkles,       // Effects
  TbTypography,     // Text
  TbBoxMultiple,    // Components
  TbCircleDot,      // Dots
  TbGripVertical    // Drag handle
} from 'react-icons/tb';

// Remix icons:
import { 
  RiMovie2Line,     // Video
  RiDragMove2Line,  // Drag
  RiParentLine      // Parent/child
} from 'react-icons/ri';

// Material Design icons:
import { 
  MdAnimation,      // Animation
  MdColorLens,      // Colors
  MdGradient,       // Gradients
  MdTouchApp        // Touch/gestures
} from 'react-icons/md';

// Bootstrap icons:
import { BiSolidColorFill } from 'react-icons/bi';

// Ionicons:
import { IoColorPaletteOutline } from 'react-icons/io5';
```

**Need more icons?**
1. Visit [react-icons.github.io/react-icons](https://react-icons.github.io/react-icons/)
2. Search for your icon
3. Copy the import statement
4. Add to vibeToolsDatabase.js imports

---

## ✍️ Writing Guidelines

### Starter Prompts
- **Be Specific:** Include component names, features, styling details
- **Context:** Explain the use case and why it's useful
- **Complete:** User should be able to copy-paste to AI tool
- **Actionable:** Clear what the AI should build
- **Example:** "Create a React dashboard with sidebar navigation, stat cards showing user count and revenue, line chart for monthly trends, and recent activity feed. Use Tailwind CSS for styling and Chart.js for the chart."

### Detailed Use Cases
- **Real-World:** Based on actual project needs
- **Step-by-Step:** Break down implementation process
- **Complete Prompt:** Include all requirements for the full scenario
- **Outcome:** Explain the value delivered
- **Example Scenario:** "Building a SaaS Admin Dashboard" with 8 steps from setup to deployment

### Best Practices
- **Actionable:** Tell users what to do, not just what not to do
- **Explain Why:** Help users understand the reasoning
- **Prioritize:** Most important practices first
- **Specific:** Avoid generic advice like "write good code"
- **Example:** "Use GSAP timeline for coordinating multiple animations" rather than "Use timelines"

### Project Examples
- **Realistic:** Projects users actually want to build
- **Detailed Prompts:** Include all pages, components, features
- **Time Estimates:** Based on AI-assisted development
- **Complexity Levels:**
  - **Beginner:** Simple structure, few interactions, basic styling
  - **Intermediate:** Multiple pages, state management, API integration
  - **Advanced:** Complex interactions, real-time features, optimizations

---

## 📝 Content Checklist

Before submitting a new tool enhancement, verify:

- [ ] All required fields are filled
- [ ] Description is 200-300 characters
- [ ] Exactly 5 starter prompts included
- [ ] Each starter prompt has title, prompt, and example
- [ ] Prompts are 150-250 words each
- [ ] Exactly 3 detailed use cases included
- [ ] Each use case has 6-10 steps
- [ ] Use case prompts are 200-350 words
- [ ] 10-14 best practices listed
- [ ] Exactly 4 project examples included
- [ ] Each project has complete prompt (250-400 words)
- [ ] Time estimates are realistic
- [ ] Complexity levels are accurate
- [ ] All links are valid and working
- [ ] Icon is properly imported
- [ ] Grammar and spelling are correct
- [ ] Formatting is consistent with existing entries

---

## 🚀 Quick Add Process

1. **Research** (10 min)
   - Visit official website and docs
   - Review popular tutorials and use cases
   - Check GitHub discussions and issues
   - Note common pain points and best practices

2. **Structure** (5 min)
   - Copy template above
   - Fill in basic information and metadata
   - List features and limitations

3. **Write Prompts** (10 min)
   - 5 starter prompts covering common scenarios
   - Focus on what users frequently build
   - Make prompts copy-paste ready

4. **Create Use Cases** (10 min)
   - 3 real-world scenarios with steps
   - Include complete implementation prompts
   - Explain outcomes and value

5. **List Best Practices** (5 min)
   - 10-14 actionable tips
   - Based on official docs and community wisdom
   - Cover performance, maintainability, accessibility

6. **Design Projects** (10 min)
   - 4 complete project ideas
   - Mix of beginner, intermediate, advanced
   - Detailed prompts users can use immediately

**Total Time:** ~50 minutes per tool

---

## 📊 Quality Standards

### Excellent Enhancement Example
```javascript
starterPrompts: [
  {
    title: 'Interactive Product Catalog',
    prompt: 'Create a product catalog with React including: grid layout (3 columns desktop, 1 mobile), product cards with image, name, price, and "Add to Cart" button, search bar with live filtering, category filter sidebar, sort options (price, name, popularity), shopping cart modal showing selected items with quantity controls, and total price calculation. Use React hooks for state management and local storage for cart persistence. Style with Tailwind CSS.',
    example: 'Complete e-commerce catalog with cart functionality and filtering'
  }
]
```

### Needs Improvement Example
```javascript
starterPrompts: [
  {
    title: 'Product Page',
    prompt: 'Build a product page',
    example: 'A product page'
  }
]
```

---

## 🎯 Content Goals

**For Each Tool:**
- ✅ Users can copy prompts and get working code immediately
- ✅ Use cases cover 80% of common implementations
- ✅ Best practices prevent common mistakes
- ✅ Project examples inspire real-world applications
- ✅ Content is accurate, tested, and valuable
- ✅ Complexity levels match actual difficulty
- ✅ Time estimates are realistic for AI-assisted development

---

## 📚 Resources

**Research:**
- Official documentation
- GitHub repository (issues, discussions)
- Stack Overflow questions
- Dev.to and Medium articles
- YouTube tutorials
- Twitter discussions

**Validation:**
- Test prompts with Claude/ChatGPT
- Verify code actually works
- Check links are not broken
- Confirm version compatibility
- Review for accuracy

---

## 🔄 Maintenance

### Updating Existing Tools
1. Open `/src/data/vibeToolsDatabase.js`
2. Find tool by ID using `Cmd+F` (Mac) or `Ctrl+F` (Windows)
3. Update relevant fields
4. Test changes at `http://localhost:5176/tools/{tool-id}`
5. Commit with descriptive message

### Adding New Fields
If you need to add a new field to all tools:
1. Add field to one tool first
2. Update `VibeToolDetail.jsx` to display it
3. Add to all tools in database
4. Update this template
5. Document in VIBE_TOOLS_DETAIL_PAGES_COMPLETE.md

---

## 💡 Tips for Great Content

1. **Think Like a User:** What would you want to know?
2. **Be Practical:** Focus on real use cases, not theory
3. **Test Everything:** Copy your prompts to AI and verify they work
4. **Stay Current:** Update when tools release new features
5. **Be Honest:** Include real limitations, not just hype
6. **Inspire:** Show exciting possibilities, not just basics
7. **Simplify:** Complex topics explained simply
8. **Complete:** Don't leave gaps - be thorough

---

## 🎨 Style Guide

### Tone
- Professional but friendly
- Helpful and educational
- Enthusiastic but not hyperbolic
- Confident and authoritative

### Voice
- Direct and action-oriented
- Clear and concise
- Technical but accessible
- Encouraging and supportive

### Formatting
- Use proper capitalization for tool names
- Include code examples in backticks
- Break long prompts into paragraphs
- Use bullet points for lists
- Bold for emphasis, italics for terms

---

**Quick Reference Version:** 1.0  
**Last Updated:** Today  
**Status:** Production Ready  

🎨 **Happy Content Creating!** ✨

