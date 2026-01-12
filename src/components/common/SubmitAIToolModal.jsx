import { useState } from 'react';
import { FiX, FiAlertTriangle } from 'react-icons/fi';

const SubmitAIToolModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    toolName: '',
    tagline: '',
    description: '',
    category: '',
    website: '',
    pricing: 'freemium',
    features: '',
    useCases: '',
    limitations: '',
    complianceNote: '',
    platforms: '',
    integrations: '',
    tags: '',
    submitterName: '',
    submitterEmail: '',
    submitterReason: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    { id: 'image-generation', label: 'Image Generation' },
    { id: 'video-generation', label: 'Video Generation' },
    { id: 'video-editing', label: 'Video Editing' },
    { id: 'development', label: 'Development & Coding' },
    { id: 'automation', label: 'Automation & Workflow' },
    { id: 'workflow', label: 'Workflow Orchestration' },
    { id: 'productivity', label: 'Productivity & Writing' },
    { id: 'audio', label: 'Audio & Voice' },
    { id: 'design', label: 'Design & Creative' },
    { id: 'data', label: 'Data & Analytics' },
    { id: '3d', label: '3D & Spatial' },
    { id: 'research', label: 'Research & Knowledge' },
    { id: 'specialized', label: 'Specialized Tools' },
    { id: 'infrastructure', label: 'Infrastructure & Platforms' },
    { id: 'conversational', label: 'Conversational AI' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
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
    if (formData.description.length < 50) newErrors.description = 'Description must be at least 50 characters';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.website.trim()) newErrors.website = 'Website URL is required';
    if (!formData.website.match(/^https?:\/\/.+/)) newErrors.website = 'Please enter a valid URL';
    if (!formData.submitterEmail.trim()) newErrors.submitterEmail = 'Your email is required';
    if (!formData.submitterEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.submitterEmail = 'Please enter a valid email';
    if (!formData.submitterReason.trim()) newErrors.submitterReason = 'Please tell us why this tool should be added';
    
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
      
      console.log('Submitted AI tool data:', formData);
      
      // Reset form and close modal
      setFormData({
        toolName: '',
        tagline: '',
        description: '',
        category: '',
        website: '',
        pricing: 'freemium',
        features: '',
        useCases: '',
        limitations: '',
        complianceNote: '',
        platforms: '',
        integrations: '',
        tags: '',
        submitterName: '',
        submitterEmail: '',
        submitterReason: ''
      });
      
      alert('Thank you! Your AI tool submission has been received and will be reviewed shortly.');
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-gray-950 rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 bg-gray-950">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Submit AI Tool
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              Suggest a new AI tool to add to the directory
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
          >
            <FiX size={24} />
          </button>
        </div>

        {/* Disclaimer */}
        <div className="px-6 pt-6">
          <div className="bg-yellow-500/10 rounded-lg p-4 flex gap-3">
            <FiAlertTriangle className="text-yellow-500 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-gray-300">
              <p className="font-semibold text-yellow-500 mb-1">Review Process</p>
              <p>All submissions are reviewed for relevance, quality, and compliance considerations before being added to the directory.</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto max-h-[calc(90vh-180px)]">
          <div className="space-y-6">
            {/* Tool Information */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF6B6B]"></span>
                Tool Information
              </h3>
              
              <div className="space-y-4">
                {/* Tool Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Tool Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="toolName"
                    value={formData.toolName}
                    onChange={handleChange}
                    placeholder="e.g., Midjourney"
                    className={`w-full px-4 py-3 bg-gray-900 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${
                      errors.toolName ? 'border-red-500 focus:ring-red-500' : 'border-gray-800 focus:ring-[#FF6B6B]'
                    }`}
                  />
                  {errors.toolName && (
                    <p className="mt-1 text-sm text-red-500">{errors.toolName}</p>
                  )}
                </div>

                {/* Tagline */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Tagline <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="tagline"
                    value={formData.tagline}
                    onChange={handleChange}
                    placeholder="e.g., AI-powered image generation"
                    className={`w-full px-4 py-3 bg-gray-900 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${
                      errors.tagline ? 'border-red-500 focus:ring-red-500' : 'border-gray-800 focus:ring-[#FF6B6B]'
                    }`}
                  />
                  {errors.tagline && (
                    <p className="mt-1 text-sm text-red-500">{errors.tagline}</p>
                  )}
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Provide a detailed description of what the tool does and its key capabilities..."
                    rows="4"
                    className={`w-full px-4 py-3 bg-gray-900 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all resize-none ${
                      errors.description ? 'border-red-500 focus:ring-red-500' : 'border-gray-800 focus:ring-[#FF6B6B]'
                    }`}
                  />
                  <div className="flex justify-between items-center mt-1">
                    {errors.description ? (
                      <p className="text-sm text-red-500">{errors.description}</p>
                    ) : (
                      <p className="text-sm text-gray-500">{formData.description.length} / 50 characters minimum</p>
                    )}
                  </div>
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-900 border rounded-lg text-white focus:outline-none focus:ring-2 transition-all cursor-pointer ${
                      errors.category ? 'border-red-500 focus:ring-red-500' : 'border-gray-800 focus:ring-[#FF6B6B]'
                    }`}
                  >
                    <option value="">Select a category</option>
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.label}</option>
                    ))}
                  </select>
                  {errors.category && (
                    <p className="mt-1 text-sm text-red-500">{errors.category}</p>
                  )}
                </div>

                {/* Website */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Website URL <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://example.com"
                    className={`w-full px-4 py-3 bg-gray-900 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${
                      errors.website ? 'border-red-500 focus:ring-red-500' : 'border-gray-800 focus:ring-[#FF6B6B]'
                    }`}
                  />
                  {errors.website && (
                    <p className="mt-1 text-sm text-red-500">{errors.website}</p>
                  )}
                </div>

                {/* Pricing */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Pricing Model
                  </label>
                  <select
                    name="pricing"
                    value={formData.pricing}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] transition-all cursor-pointer"
                  >
                    <option value="freemium">Freemium (Free + Paid)</option>
                    <option value="paid">Paid Only</option>
                    <option value="open-source">Open Source / Free</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Additional Details (Optional) */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#4ECDC4]"></span>
                Additional Details (Optional)
              </h3>
              
              <div className="space-y-4">
                {/* Features */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Key Features
                  </label>
                  <textarea
                    name="features"
                    value={formData.features}
                    onChange={handleChange}
                    placeholder="List the main features, one per line..."
                    rows="3"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] transition-all resize-none"
                  />
                </div>

                {/* Use Cases */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Use Cases
                  </label>
                  <textarea
                    name="useCases"
                    value={formData.useCases}
                    onChange={handleChange}
                    placeholder="What are the typical use cases for this tool?"
                    rows="3"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] transition-all resize-none"
                  />
                </div>

                {/* Platforms */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Platforms
                  </label>
                  <input
                    type="text"
                    name="platforms"
                    value={formData.platforms}
                    onChange={handleChange}
                    placeholder="e.g., Web, iOS, Android, Windows, Mac"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] transition-all"
                  />
                </div>

                {/* Tags */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Tags
                  </label>
                  <input
                    type="text"
                    name="tags"
                    value={formData.tags}
                    onChange={handleChange}
                    placeholder="e.g., ai, image, generation, creative (comma-separated)"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Your Information */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#45B7D1]"></span>
                Your Information
              </h3>
              
              <div className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name (Optional)
                  </label>
                  <input
                    type="text"
                    name="submitterName"
                    value={formData.submitterName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#45B7D1] transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="submitterEmail"
                    value={formData.submitterEmail}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`w-full px-4 py-3 bg-gray-900 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${
                      errors.submitterEmail ? 'border-red-500 focus:ring-red-500' : 'border-gray-800 focus:ring-[#45B7D1]'
                    }`}
                  />
                  {errors.submitterEmail && (
                    <p className="mt-1 text-sm text-red-500">{errors.submitterEmail}</p>
                  )}
                </div>

                {/* Reason */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Why should we add this tool? <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="submitterReason"
                    value={formData.submitterReason}
                    onChange={handleChange}
                    placeholder="Tell us why this tool would be valuable for the DRIVE community..."
                    rows="3"
                    className={`w-full px-4 py-3 bg-gray-900 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all resize-none ${
                      errors.submitterReason ? 'border-red-500 focus:ring-red-500' : 'border-gray-800 focus:ring-[#45B7D1]'
                    }`}
                  />
                  {errors.submitterReason && (
                    <p className="mt-1 text-sm text-red-500">{errors.submitterReason}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex gap-4 mt-8 pt-6">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-6 py-3 bg-studio-pink hover:bg-studio-pink/80 text-white rounded-lg transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Tool'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitAIToolModal;
