import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SubmitProject = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState(null);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  
  const [formData, setFormData] = useState({
    // Step 1: Basics
    projectName: '',
    authorName: '',
    tagline: '',
    
    // Step 2: Details
    description: '',
    driveStory: '',
    
    // Step 3: Visual Assets
    heroImage: null,
    additionalImages: [],
    videoType: 'link',
    videoFile: null,
    videoLink: '',
    
    // Step 4: Links
    liveLink: '',
    linkTested: false,
    codeRepo: '',
    relatedLinks: [
      { url: '', description: '' },
      { url: '', description: '' },
      { url: '', description: '' }
    ],
    
    // Step 5: Classification
    category: '',
    tags: [],
    complexity: 'intermediate',
    timeToComplete: '',
    tools: [],
    customTool: '',
    
    // Step 6: Learning
    keyLearnings: '',
    challenges: '',
    effectivePrompts: '',
    
    // Step 7: Review
    considerForFeatured: false,
    agreedToGuidelines: false,
    originalWork: false,
    appropriateContent: false,
    functionalLinks: false
  });

  const [errors, setErrors] = useState({});

  // Auto-save every 30 seconds
  useEffect(() => {
    if (hasUnsavedChanges) {
      const autoSaveTimer = setTimeout(() => {
        saveDraft();
      }, 30000);
      return () => clearTimeout(autoSaveTimer);
    }
  }, [formData, hasUnsavedChanges]);

  // Warn before leaving with unsaved changes
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (hasUnsavedChanges) {
        e.preventDefault();
        e.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [hasUnsavedChanges]);

  const saveDraft = () => {
    setIsSaving(true);
    // Save to localStorage or API
    localStorage.setItem('projectDraft', JSON.stringify(formData));
    setTimeout(() => {
      setIsSaving(false);
      setLastSaved(new Date());
      setHasUnsavedChanges(false);
    }, 500);
  };

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setHasUnsavedChanges(true);
  };

  const validateStep = (step) => {
    const newErrors = {};
    
    switch (step) {
      case 1:
        if (!formData.projectName || formData.projectName.length < 10) {
          newErrors.projectName = 'Project name must be at least 10 characters';
        }
        if (!formData.authorName) {
          newErrors.authorName = 'Your name is required';
        }
        if (!formData.tagline || formData.tagline.length > 100) {
          newErrors.tagline = 'Tagline is required (max 100 characters)';
        }
        break;
      case 2:
        if (!formData.description || formData.description.length < 100) {
          newErrors.description = 'Description must be at least 100 words';
        }
        break;
      case 3:
        if (!formData.heroImage) {
          newErrors.heroImage = 'Hero image is required';
        }
        break;
      case 5:
        if (!formData.category) {
          newErrors.category = 'Please select a category';
        }
        if (formData.tags.length < 3) {
          newErrors.tags = 'Please select at least 3 tags';
        }
        if (!formData.timeToComplete) {
          newErrors.timeToComplete = 'Please select time to complete';
        }
        break;
      case 7:
        if (!formData.agreedToGuidelines || !formData.originalWork || 
            !formData.appropriateContent || !formData.functionalLinks) {
          newErrors.guidelines = 'Please agree to all guidelines';
        }
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 7));
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    window.scrollTo(0, 0);
  };

  const handleSubmit = () => {
    if (validateStep(7)) {
      // Submit to API
      console.log('Submitting:', formData);
      navigate('/submit-success');
    }
  };

  const testLink = async (url) => {
    // Test if link is accessible
    try {
      updateFormData('linkTested', 'testing');
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      updateFormData('linkTested', true);
    } catch (error) {
      updateFormData('linkTested', 'error');
    }
  };

  const handleImageUpload = (e, type = 'hero') => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, [type]: 'File size must be less than 5MB' }));
        return;
      }
      
      const reader = new FileReader();
      reader.onloadend = () => {
        if (type === 'hero') {
          updateFormData('heroImage', {
            file,
            preview: reader.result,
            name: file.name,
            size: (file.size / (1024 * 1024)).toFixed(2)
          });
        } else {
          updateFormData('additionalImages', [
            ...formData.additionalImages,
            { file, preview: reader.result, name: file.name }
          ]);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (index) => {
    updateFormData('additionalImages', 
      formData.additionalImages.filter((_, i) => i !== index)
    );
  };

  const toggleTag = (tag) => {
    if (formData.tags.includes(tag)) {
      updateFormData('tags', formData.tags.filter(t => t !== tag));
    } else if (formData.tags.length < 5) {
      updateFormData('tags', [...formData.tags, tag]);
    }
  };

  const toggleTool = (tool) => {
    if (formData.tools.includes(tool)) {
      updateFormData('tools', formData.tools.filter(t => t !== tool));
    } else {
      updateFormData('tools', [...formData.tools, tool]);
    }
  };

  const stepTitles = [
    '', // 0 - placeholder
    'Project Basics',
    'Project Details',
    'Visual Assets',
    'Links & Resources',
    'Classification',
    'Learning & Insights',
    'Review & Submit'
  ];

  const ProgressBar = () => (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-400">Progress</span>
        <span className="text-sm text-gray-400">Step {currentStep} of 7</span>
      </div>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5, 6, 7].map(step => (
          <div
            key={step}
            className={`h-2 flex-1 rounded-full transition-colors ${
              step <= currentStep ? 'bg-studio-coral' : 'bg-gray-800'
            }`}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-gray-950 border-b border-gray-800 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/labs" className="text-2xl font-display font-bold text-white hover:text-studio-coral transition-colors">
              DRIVE
            </Link>
            <div className="flex items-center gap-4">
              {isSaving && (
                <span className="text-sm text-gray-500 flex items-center gap-2">
                  <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Saving...
                </span>
              )}
              {lastSaved && !isSaving && (
                <span className="text-sm text-gray-500">
                  Last saved at {lastSaved.toLocaleTimeString()}
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-display font-bold text-white mb-4">
              Submit Your Project to DRIVE Labs
            </h1>
            <p className="text-xl text-gray-400">
              Share your work and inspire the community
            </p>
          </div>

          <ProgressBar />

          {/* Form Container */}
          <div className="bg-gray-950 border border-gray-800 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-8">
              {stepTitles[currentStep]}
            </h2>

            {/* Step 1: Project Basics */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Project Name <span className="text-studio-coral">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.projectName}
                    onChange={(e) => updateFormData('projectName', e.target.value)}
                    maxLength={60}
                    className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-studio-coral transition-colors"
                    placeholder="My Amazing DRIVE Project"
                  />
                  <div className="flex justify-between mt-2">
                    <span className="text-sm text-gray-500">
                      Max 60 characters • Tip: Make it descriptive
                    </span>
                    <span className="text-sm text-gray-500">
                      {formData.projectName.length}/60
                    </span>
                  </div>
                  {errors.projectName && (
                    <p className="text-red-400 text-sm mt-2 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      {errors.projectName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Your Name <span className="text-studio-coral">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.authorName}
                    onChange={(e) => updateFormData('authorName', e.target.value)}
                    className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-studio-coral transition-colors"
                    placeholder="How you want to be credited"
                  />
                  {errors.authorName && (
                    <p className="text-red-400 text-sm mt-2">{errors.authorName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Project Tagline <span className="text-studio-coral">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.tagline}
                    onChange={(e) => updateFormData('tagline', e.target.value)}
                    maxLength={100}
                    className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-studio-coral transition-colors"
                    placeholder="One sentence description"
                  />
                  <div className="flex justify-between mt-2">
                    <span className="text-sm text-gray-500">
                      Max 100 characters • One sentence description
                    </span>
                    <span className="text-sm text-gray-500">
                      {formData.tagline.length}/100
                    </span>
                  </div>
                  {errors.tagline && (
                    <p className="text-red-400 text-sm mt-2">{errors.tagline}</p>
                  )}
                </div>
              </div>
            )}

            {/* Step 2: Project Details */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Full Description <span className="text-studio-coral">*</span>
                    <span className="text-gray-500 font-normal ml-2">(Markdown supported)</span>
                  </label>
                  <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
                    <div className="flex border-b border-gray-800">
                      <button className="px-4 py-2 text-white bg-gray-800">Edit</button>
                      <button className="px-4 py-2 text-gray-400 hover:text-white transition-colors">Preview</button>
                    </div>
                    <textarea
                      value={formData.description}
                      onChange={(e) => updateFormData('description', e.target.value)}
                      rows={12}
                      className="w-full bg-transparent px-4 py-3 text-white focus:outline-none resize-none"
                      placeholder="## What I Built&#10;&#10;Describe your project here...&#10;&#10;## Key Features&#10;&#10;- Feature 1&#10;- Feature 2"
                    />
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-sm text-gray-500">
                      100-500 words
                    </span>
                    <span className="text-sm text-gray-500">
                      {formData.description.split(' ').filter(w => w).length}/500 words
                    </span>
                  </div>
                  {errors.description && (
                    <p className="text-red-400 text-sm mt-2">{errors.description}</p>
                  )}
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Your DRIVE Story <span className="text-gray-500 font-normal">(Optional)</span>
                  </label>
                  <textarea
                    value={formData.driveStory}
                    onChange={(e) => updateFormData('driveStory', e.target.value)}
                    rows={8}
                    className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-studio-coral transition-colors resize-none"
                    placeholder="Tell us about your DRIVE process:&#10;• How long did each phase take?&#10;• How many iterations?&#10;• What validation did you do?&#10;• Key decisions made?"
                  />
                  <span className="text-sm text-gray-500">
                    Max 200 words • Makes your submission more valuable
                  </span>
                </div>
              </div>
            )}

            {/* Step 3: Visual Assets */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Primary Screenshot <span className="text-studio-coral">*</span>
                    <span className="text-gray-500 font-normal ml-2">(This will be your hero image)</span>
                  </label>
                  
                  {!formData.heroImage ? (
                    <div className="border-2 border-dashed border-gray-700 rounded-xl p-12 text-center hover:border-studio-coral transition-colors">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, 'hero')}
                        className="hidden"
                        id="hero-upload"
                      />
                      <label htmlFor="hero-upload" className="cursor-pointer">
                        <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p className="text-white mb-2">Drag & Drop Image Here</p>
                        <p className="text-gray-500 mb-4">or</p>
                        <span className="px-6 py-3 bg-studio-coral hover:bg-studio-pink text-white rounded-xl transition-colors inline-block font-medium">
                          Browse Files
                        </span>
                        <p className="text-sm text-gray-500 mt-4">
                          Recommended: 1200x675px (16:9) • Max 5MB • JPG, PNG, or GIF
                        </p>
                      </label>
                    </div>
                  ) : (
                    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                      <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden mb-4">
                        <img src={formData.heroImage.preview} alt="Hero" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-green-400">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Screenshot uploaded: {formData.heroImage.name} ({formData.heroImage.size} MB)</span>
                        </div>
                        <div className="flex gap-2">
                          <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors text-sm">
                            Preview
                          </button>
                          <button
                            onClick={() => updateFormData('heroImage', null)}
                            className="px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg transition-colors text-sm"
                          >
                            Remove
                          </button>
                          <label htmlFor="hero-replace" className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors text-sm cursor-pointer">
                            Replace
                          </label>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleImageUpload(e, 'hero')}
                            className="hidden"
                            id="hero-replace"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  {errors.heroImage && (
                    <p className="text-red-400 text-sm mt-2">{errors.heroImage}</p>
                  )}
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Additional Images <span className="text-gray-500 font-normal">(Optional - up to 4)</span>
                  </label>
                  <p className="text-sm text-gray-400 mb-4">
                    Show different screens, states, or responsive views
                  </p>
                  <div className="grid grid-cols-4 gap-4">
                    {[...Array(4)].map((_, index) => (
                      <div key={index}>
                        {formData.additionalImages[index] ? (
                          <div className="relative aspect-square bg-gray-900 rounded-lg overflow-hidden group">
                            <img
                              src={formData.additionalImages[index].preview}
                              alt={`Additional ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                            <button
                              onClick={() => removeImage(index)}
                              className="absolute top-2 right-2 p-1 bg-red-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            </button>
                          </div>
                        ) : (
                          <label
                            htmlFor={`additional-${index}`}
                            className="aspect-square border-2 border-dashed border-gray-700 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-studio-coral transition-colors"
                          >
                            <svg className="w-8 h-8 text-gray-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            <span className="text-sm text-gray-500">Add Image</span>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => handleImageUpload(e, 'additional')}
                              className="hidden"
                              id={`additional-${index}`}
                            />
                          </label>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-4">
                    Video or GIF Demo <span className="text-gray-500 font-normal">(Optional)</span>
                  </label>
                  <div className="space-y-4">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="videoType"
                        value="upload"
                        checked={formData.videoType === 'upload'}
                        onChange={(e) => updateFormData('videoType', e.target.value)}
                        className="w-4 h-4 text-studio-coral"
                      />
                      <span className="text-white">Upload file (Max 20MB)</span>
                    </label>
                    {formData.videoType === 'upload' && (
                      <input
                        type="file"
                        accept="video/*,image/gif"
                        className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-studio-coral transition-colors"
                      />
                    )}

                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="videoType"
                        value="link"
                        checked={formData.videoType === 'link'}
                        onChange={(e) => updateFormData('videoType', e.target.value)}
                        className="w-4 h-4 text-studio-coral"
                      />
                      <span className="text-white">Link to video</span>
                    </label>
                    {formData.videoType === 'link' && (
                      <div>
                        <input
                          type="url"
                          value={formData.videoLink}
                          onChange={(e) => updateFormData('videoLink', e.target.value)}
                          placeholder="https://"
                          className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-studio-coral transition-colors"
                        />
                        <p className="text-sm text-gray-500 mt-2">
                          Supports: YouTube, Vimeo, Loom
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mt-4">
                    <p className="text-blue-400 text-sm flex items-start gap-2">
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      <span>
                        <strong>Tip:</strong> A 10-30 second demo significantly increases engagement with your project!
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Links & Resources */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Live Preview Link <span className="text-gray-500 font-normal">(Highly Recommended)</span>
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="url"
                      value={formData.liveLink}
                      onChange={(e) => updateFormData('liveLink', e.target.value)}
                      placeholder="https://"
                      className="flex-1 bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-studio-coral transition-colors"
                    />
                    <button
                      onClick={() => testLink(formData.liveLink)}
                      disabled={!formData.liveLink || formData.linkTested === 'testing'}
                      className="px-6 py-3 bg-gray-800 hover:bg-gray-700 disabled:bg-gray-900 disabled:text-gray-600 text-white rounded-xl transition-colors font-medium whitespace-nowrap"
                    >
                      {formData.linkTested === 'testing' ? (
                        <span className="flex items-center gap-2">
                          <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                          Testing...
                        </span>
                      ) : (
                        'Test Link'
                      )}
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Deploy to: Vercel, Netlify, CodePen, etc.
                  </p>
                  
                  {formData.linkTested === true && (
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mt-3">
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <p className="text-green-400 font-semibold">Link is accessible</p>
                          <p className="text-gray-400 text-sm">Response time: 234ms</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {formData.linkTested === 'error' && (
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mt-3">
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <p className="text-red-400 font-semibold">Link could not be accessed</p>
                          <p className="text-gray-400 text-sm">Please check the URL and try again</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <label className="flex items-center gap-2 mt-3">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-700 bg-gray-900 text-studio-coral" />
                    <span className="text-gray-400">My project is publicly accessible</span>
                  </label>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Code Repository <span className="text-gray-500 font-normal">(Optional but encouraged)</span>
                  </label>
                  <input
                    type="url"
                    value={formData.codeRepo}
                    onChange={(e) => updateFormData('codeRepo', e.target.value)}
                    placeholder="https://"
                    className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-studio-coral transition-colors"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    GitHub, GitLab, CodePen, etc.
                  </p>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-4">
                    Related Links <span className="text-gray-500 font-normal">(Optional - up to 3)</span>
                  </label>
                  <div className="space-y-4">
                    {formData.relatedLinks.map((link, index) => (
                      <div key={index} className="space-y-2">
                        <p className="text-gray-400 text-sm">Link {index + 1}</p>
                        <input
                          type="url"
                          value={link.url}
                          onChange={(e) => {
                            const newLinks = [...formData.relatedLinks];
                            newLinks[index].url = e.target.value;
                            updateFormData('relatedLinks', newLinks);
                          }}
                          placeholder="https://"
                          className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-studio-coral transition-colors"
                        />
                        <input
                          type="text"
                          value={link.description}
                          onChange={(e) => {
                            const newLinks = [...formData.relatedLinks];
                            newLinks[index].description = e.target.value;
                            updateFormData('relatedLinks', newLinks);
                          }}
                          placeholder="Description (e.g., Figma design file)"
                          className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-studio-coral transition-colors"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <p className="text-blue-400 text-sm flex items-start gap-2">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <span>
                      <strong>Tip:</strong> Projects with live demos get 3x more views!
                    </span>
                  </p>
                </div>
              </div>
            )}

            {/* Continue with Steps 5, 6, 7 in next part... */}
            
            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-8 border-t border-gray-800">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className="px-6 py-3 bg-gray-900 hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl transition-colors font-medium flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back
              </button>
              
              <div className="flex gap-3">
                <button
                  onClick={saveDraft}
                  className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-xl transition-colors font-medium"
                >
                  Save Draft
                </button>
                
                {currentStep < 7 ? (
                  <button
                    onClick={nextStep}
                    className="px-6 py-3 bg-studio-coral hover:bg-studio-pink text-white rounded-xl transition-colors font-medium flex items-center gap-2"
                  >
                    Next Step
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="px-8 py-3 bg-gradient-to-r from-studio-coral to-studio-pink hover:from-studio-pink hover:to-studio-purple text-white rounded-xl transition-all font-semibold flex items-center gap-2"
                  >
                    Submit for Review
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitProject;
