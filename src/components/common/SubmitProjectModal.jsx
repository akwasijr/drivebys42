import { useState } from 'react';

const SubmitProjectModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    projectTitle: '',
    description: '',
    category: '',
    githubUrl: '',
    liveUrl: '',
    imageUrl: '',
    tools: [],
    complexity: 'intermediate',
    buildTime: '',
    tags: '',
    authorName: '',
    authorEmail: '',
    authorGithub: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    'Landing Page', 'Web Application', 'Components', 
    'Prototype', 'Design System', 'Dashboard', 'Other'
  ];

  const commonTools = [
    'React', 'Vue', 'Svelte', 'Next.js', 'Tailwind CSS', 
    'GSAP', 'Framer Motion', 'Three.js', 'TypeScript'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: checked
          ? [...prev[name], value]
          : prev[name].filter(item => item !== value)
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.projectTitle.trim()) newErrors.projectTitle = 'Project title is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.liveUrl.trim() && !formData.githubUrl.trim()) {
      newErrors.liveUrl = 'Provide at least one URL (Live or GitHub)';
      newErrors.githubUrl = 'Provide at least one URL (Live or GitHub)';
    }
    if (formData.liveUrl && !formData.liveUrl.match(/^https?:\/\/.+/)) {
      newErrors.liveUrl = 'Please enter a valid URL';
    }
    if (formData.githubUrl && !formData.githubUrl.match(/^https?:\/\/.+/)) {
      newErrors.githubUrl = 'Please enter a valid URL';
    }
    if (formData.imageUrl && !formData.imageUrl.match(/^https?:\/\/.+/)) {
      newErrors.imageUrl = 'Please enter a valid image URL';
    }
    if (formData.tools.length === 0) newErrors.tools = 'Select at least one tool used';
    if (!formData.authorEmail.trim()) newErrors.authorEmail = 'Your email is required';
    if (!formData.authorEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.authorEmail = 'Please enter a valid email';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    
    try {
      // Here you would send the data to your backend API
      // For now, we'll just simulate a submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Submitted project data:', formData);
      
      // Reset form and close modal
      setFormData({
        projectTitle: '',
        description: '',
        category: '',
        githubUrl: '',
        liveUrl: '',
        imageUrl: '',
        tools: [],
        complexity: 'intermediate',
        buildTime: '',
        tags: '',
        authorName: '',
        authorEmail: '',
        authorGithub: ''
      });
      
      alert('Thank you! Your project submission has been received and will be reviewed shortly.');
      onClose();
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error submitting your project. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-gray-950 border border-gray-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gray-950 border-b border-gray-800 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Submit a Project</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Project Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b border-gray-800 pb-2">
              Project Information
            </h3>

            {/* Project Title */}
            <div>
              <label htmlFor="projectTitle" className="block text-sm font-medium text-gray-300 mb-2">
                Project Title *
              </label>
              <input
                type="text"
                id="projectTitle"
                name="projectTitle"
                value={formData.projectTitle}
                onChange={handleChange}
                className={`w-full bg-gray-900 border ${errors.projectTitle ? 'border-red-500' : 'border-gray-800'} rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-studio-coral transition-colors`}
                placeholder="e.g., Animated Portfolio Landing Page"
              />
              {errors.projectTitle && <p className="mt-1 text-sm text-red-500">{errors.projectTitle}</p>}
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
                Description *
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                className={`w-full bg-gray-900 border ${errors.description ? 'border-red-500' : 'border-gray-800'} rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-studio-coral transition-colors resize-none`}
                placeholder="Describe your project, what it does, and what makes it special..."
              />
              {errors.description && <p className="mt-1 text-sm text-red-500">{errors.description}</p>}
            </div>

            {/* Category */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-2">
                Category *
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className={`w-full bg-gray-900 border ${errors.category ? 'border-red-500' : 'border-gray-800'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-studio-coral transition-colors`}
              >
                <option value="">Select a category</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              {errors.category && <p className="mt-1 text-sm text-red-500">{errors.category}</p>}
            </div>

            {/* Live URL */}
            <div>
              <label htmlFor="liveUrl" className="block text-sm font-medium text-gray-300 mb-2">
                Live Demo URL
              </label>
              <input
                type="url"
                id="liveUrl"
                name="liveUrl"
                value={formData.liveUrl}
                onChange={handleChange}
                className={`w-full bg-gray-900 border ${errors.liveUrl ? 'border-red-500' : 'border-gray-800'} rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-studio-coral transition-colors`}
                placeholder="https://your-project.com"
              />
              {errors.liveUrl && <p className="mt-1 text-sm text-red-500">{errors.liveUrl}</p>}
            </div>

            {/* GitHub URL */}
            <div>
              <label htmlFor="githubUrl" className="block text-sm font-medium text-gray-300 mb-2">
                GitHub Repository URL
              </label>
              <input
                type="url"
                id="githubUrl"
                name="githubUrl"
                value={formData.githubUrl}
                onChange={handleChange}
                className={`w-full bg-gray-900 border ${errors.githubUrl ? 'border-red-500' : 'border-gray-800'} rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-studio-coral transition-colors`}
                placeholder="https://github.com/username/repo"
              />
              {errors.githubUrl && <p className="mt-1 text-sm text-red-500">{errors.githubUrl}</p>}
            </div>

            {/* Project Image URL */}
            <div>
              <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-300 mb-2">
                Project Screenshot URL
                <span className="text-gray-500 font-normal ml-2">(Optional)</span>
              </label>
              <input
                type="url"
                id="imageUrl"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                className={`w-full bg-gray-900 border ${errors.imageUrl ? 'border-red-500' : 'border-gray-800'} rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-studio-coral transition-colors`}
                placeholder="https://example.com/screenshot.png"
              />
              {errors.imageUrl && <p className="mt-1 text-sm text-red-500">{errors.imageUrl}</p>}
              <p className="mt-2 text-sm text-gray-500">
                Upload your screenshot to a service like Imgur or use a direct image URL
              </p>
            </div>

            {/* Tools Used */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Tools & Technologies Used *
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {commonTools.map(tool => (
                  <label key={tool} className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer transition-colors">
                    <input
                      type="checkbox"
                      name="tools"
                      value={tool}
                      checked={formData.tools.includes(tool)}
                      onChange={handleChange}
                      className="w-4 h-4 rounded border-gray-700 bg-gray-900 text-studio-coral focus:ring-studio-coral"
                    />
                    <span className="text-sm">{tool}</span>
                  </label>
                ))}
              </div>
              {errors.tools && <p className="mt-1 text-sm text-red-500">{errors.tools}</p>}
            </div>

            {/* Complexity */}
            <div>
              <label htmlFor="complexity" className="block text-sm font-medium text-gray-300 mb-2">
                Complexity Level *
              </label>
              <select
                id="complexity"
                name="complexity"
                value={formData.complexity}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-studio-coral transition-colors"
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            {/* Build Time */}
            <div>
              <label htmlFor="buildTime" className="block text-sm font-medium text-gray-300 mb-2">
                Build Time
                <span className="text-gray-500 font-normal ml-2">(Optional)</span>
              </label>
              <input
                type="text"
                id="buildTime"
                name="buildTime"
                value={formData.buildTime}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-studio-coral transition-colors"
                placeholder="e.g., 3 hours, 2 days, 1 week"
              />
            </div>

            {/* Tags */}
            <div>
              <label htmlFor="tags" className="block text-sm font-medium text-gray-300 mb-2">
                Tags
                <span className="text-gray-500 font-normal ml-2">(Comma-separated)</span>
              </label>
              <input
                type="text"
                id="tags"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-studio-coral transition-colors"
                placeholder="e.g., Portfolio, Animation, Responsive"
              />
            </div>
          </div>

          {/* Author Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b border-gray-800 pb-2">
              Your Information
            </h3>

            {/* Author Name */}
            <div>
              <label htmlFor="authorName" className="block text-sm font-medium text-gray-300 mb-2">
                Your Name
                <span className="text-gray-500 font-normal ml-2">(Optional)</span>
              </label>
              <input
                type="text"
                id="authorName"
                name="authorName"
                value={formData.authorName}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-studio-coral transition-colors"
                placeholder="Your name"
              />
            </div>

            {/* Author Email */}
            <div>
              <label htmlFor="authorEmail" className="block text-sm font-medium text-gray-300 mb-2">
                Your Email *
              </label>
              <input
                type="email"
                id="authorEmail"
                name="authorEmail"
                value={formData.authorEmail}
                onChange={handleChange}
                className={`w-full bg-gray-900 border ${errors.authorEmail ? 'border-red-500' : 'border-gray-800'} rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-studio-coral transition-colors`}
                placeholder="your.email@example.com"
              />
              {errors.authorEmail && <p className="mt-1 text-sm text-red-500">{errors.authorEmail}</p>}
            </div>

            {/* Author GitHub */}
            <div>
              <label htmlFor="authorGithub" className="block text-sm font-medium text-gray-300 mb-2">
                Your GitHub Username
                <span className="text-gray-500 font-normal ml-2">(Optional)</span>
              </label>
              <input
                type="text"
                id="authorGithub"
                name="authorGithub"
                value={formData.authorGithub}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-studio-coral transition-colors"
                placeholder="@yourusername"
              />
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-800">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white rounded-xl transition-colors font-medium"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-studio-coral hover:bg-studio-pink text-white rounded-xl transition-colors font-medium flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Submit Project
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitProjectModal;
