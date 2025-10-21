import { useState } from 'react';

const SubmitToolModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    toolName: '',
    tagline: '',
    description: '',
    category: '',
    website: '',
    docs: '',
    integration: [],
    learningCurve: 'beginner',
    tags: '',
    submitterName: '',
    submitterEmail: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    'animation', 'styling', 'icons', 'utilities', 'ui-components',
    'data-viz', 'effects', 'forms', 'gestures', 'media', 'dev-tools'
  ];

  const integrationMethods = ['cdn', 'npm', 'copy-paste', 'vscode'];

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
    
    if (!formData.toolName.trim()) newErrors.toolName = 'Tool name is required';
    if (!formData.tagline.trim()) newErrors.tagline = 'Tagline is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.website.trim()) newErrors.website = 'Website URL is required';
    if (!formData.website.match(/^https?:\/\/.+/)) newErrors.website = 'Please enter a valid URL';
    if (formData.docs && !formData.docs.match(/^https?:\/\/.+/)) newErrors.docs = 'Please enter a valid docs URL';
    if (formData.integration.length === 0) newErrors.integration = 'Select at least one integration method';
    if (!formData.submitterEmail.trim()) newErrors.submitterEmail = 'Your email is required';
    if (!formData.submitterEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.submitterEmail = 'Please enter a valid email';
    
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
      
      console.log('Submitted tool data:', formData);
      
      // Reset form and close modal
      setFormData({
        toolName: '',
        tagline: '',
        description: '',
        category: '',
        website: '',
        docs: '',
        integration: [],
        learningCurve: 'beginner',
        tags: '',
        submitterName: '',
        submitterEmail: ''
      });
      
      alert('Thank you! Your tool submission has been received and will be reviewed shortly.');
      onClose();
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error submitting your tool. Please try again.');
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
          <h2 className="text-2xl font-bold text-white">Submit a Tool</h2>
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
          {/* Tool Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b border-gray-800 pb-2">
              Tool Information
            </h3>

            {/* Tool Name */}
            <div>
              <label htmlFor="toolName" className="block text-sm font-medium text-gray-300 mb-2">
                Tool Name *
              </label>
              <input
                type="text"
                id="toolName"
                name="toolName"
                value={formData.toolName}
                onChange={handleChange}
                className={`w-full bg-gray-900 border ${errors.toolName ? 'border-red-500' : 'border-gray-800'} rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-studio-coral transition-colors`}
                placeholder="e.g., GSAP, React, Tailwind CSS"
              />
              {errors.toolName && <p className="mt-1 text-sm text-red-500">{errors.toolName}</p>}
            </div>

            {/* Tagline */}
            <div>
              <label htmlFor="tagline" className="block text-sm font-medium text-gray-300 mb-2">
                Tagline *
                <span className="text-gray-500 font-normal ml-2">(Short description)</span>
              </label>
              <input
                type="text"
                id="tagline"
                name="tagline"
                value={formData.tagline}
                onChange={handleChange}
                className={`w-full bg-gray-900 border ${errors.tagline ? 'border-red-500' : 'border-gray-800'} rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-studio-coral transition-colors`}
                placeholder="e.g., Professional-grade JavaScript animation"
                maxLength="80"
              />
              {errors.tagline && <p className="mt-1 text-sm text-red-500">{errors.tagline}</p>}
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
                placeholder="Provide a detailed description of what the tool does and its main features..."
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
                  <option key={cat} value={cat}>
                    {cat.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </option>
                ))}
              </select>
              {errors.category && <p className="mt-1 text-sm text-red-500">{errors.category}</p>}
            </div>

            {/* Website URL */}
            <div>
              <label htmlFor="website" className="block text-sm font-medium text-gray-300 mb-2">
                Website URL *
              </label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className={`w-full bg-gray-900 border ${errors.website ? 'border-red-500' : 'border-gray-800'} rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-studio-coral transition-colors`}
                placeholder="https://example.com"
              />
              {errors.website && <p className="mt-1 text-sm text-red-500">{errors.website}</p>}
            </div>

            {/* Documentation URL */}
            <div>
              <label htmlFor="docs" className="block text-sm font-medium text-gray-300 mb-2">
                Documentation URL
                <span className="text-gray-500 font-normal ml-2">(Optional)</span>
              </label>
              <input
                type="url"
                id="docs"
                name="docs"
                value={formData.docs}
                onChange={handleChange}
                className={`w-full bg-gray-900 border ${errors.docs ? 'border-red-500' : 'border-gray-800'} rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-studio-coral transition-colors`}
                placeholder="https://example.com/docs"
              />
              {errors.docs && <p className="mt-1 text-sm text-red-500">{errors.docs}</p>}
            </div>

            {/* Integration Methods */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Integration Methods *
              </label>
              <div className="grid grid-cols-2 gap-3">
                {integrationMethods.map(method => (
                  <label key={method} className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer transition-colors">
                    <input
                      type="checkbox"
                      name="integration"
                      value={method}
                      checked={formData.integration.includes(method)}
                      onChange={handleChange}
                      className="w-4 h-4 rounded border-gray-700 bg-gray-900 text-studio-coral focus:ring-studio-coral"
                    />
                    <span className="text-sm capitalize">{method === 'vscode' ? 'VS Code' : method.replace('-', ' / ')}</span>
                  </label>
                ))}
              </div>
              {errors.integration && <p className="mt-1 text-sm text-red-500">{errors.integration}</p>}
            </div>

            {/* Learning Curve */}
            <div>
              <label htmlFor="learningCurve" className="block text-sm font-medium text-gray-300 mb-2">
                Learning Curve *
              </label>
              <select
                id="learningCurve"
                name="learningCurve"
                value={formData.learningCurve}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-studio-coral transition-colors"
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
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
                placeholder="e.g., animation, scroll-effects, timeline"
              />
            </div>
          </div>

          {/* Submitter Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b border-gray-800 pb-2">
              Your Information
            </h3>

            {/* Submitter Name */}
            <div>
              <label htmlFor="submitterName" className="block text-sm font-medium text-gray-300 mb-2">
                Your Name
                <span className="text-gray-500 font-normal ml-2">(Optional)</span>
              </label>
              <input
                type="text"
                id="submitterName"
                name="submitterName"
                value={formData.submitterName}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-studio-coral transition-colors"
                placeholder="Your name"
              />
            </div>

            {/* Submitter Email */}
            <div>
              <label htmlFor="submitterEmail" className="block text-sm font-medium text-gray-300 mb-2">
                Your Email *
              </label>
              <input
                type="email"
                id="submitterEmail"
                name="submitterEmail"
                value={formData.submitterEmail}
                onChange={handleChange}
                className={`w-full bg-gray-900 border ${errors.submitterEmail ? 'border-red-500' : 'border-gray-800'} rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-studio-coral transition-colors`}
                placeholder="your.email@example.com"
              />
              {errors.submitterEmail && <p className="mt-1 text-sm text-red-500">{errors.submitterEmail}</p>}
              <p className="mt-2 text-sm text-gray-500">
                We'll contact you if we need more information about the tool.
              </p>
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
                  Submit Tool
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitToolModal;
