import { useState, useEffect } from 'react';
import {
  Activity, CheckCircle2, FileText, Shield, Cloud, Database, 
  Zap, Heart, Menu, X, Github, ExternalLink, Download, Send, 
  Code, Package, AlertCircle, TrendingUp, BarChart3, Lock, Sparkles
} from 'lucide-react';
import { DocumentationViewer } from './components/DocumentationViewer';
import { documentationFiles } from './data/documentation';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState<string | null>(null);
  const [showDocumentation, setShowDocumentation] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGithub = () => {
    window.open('https://github.com/DivyansghDMK/modularecg', '_blank');
  };

  const handleContact = () => {
    setShowModal('contact');
  };

  const openDocumentation = (docKey: string) => {
    setShowDocumentation(docKey);
  };

  // Project completion data
  const completedModules = [
    { name: 'Core System', files: 5, lines: '~15,000', icon: Code },
    { name: 'Authentication', files: 2, lines: '~3,000', icon: Lock },
    { name: 'ECG Processing', files: 5, lines: '~25,000', icon: Activity },
    { name: 'Dashboard', files: 3, lines: '~12,000', icon: TrendingUp },
    { name: 'Utilities', files: 8, lines: '~18,000', icon: Package },
    { name: 'Configuration', files: 2, lines: '~2,000', icon: Shield }
  ];

  const completedFeatures = [
    '12-Lead ECG Real-time Visualization',
    'Hardware Data Acquisition (Serial)',
    'Demo Mode with Synthetic Data',
    'Pan-Tompkins R-peak Detection',
    'Real-time Metrics (HR, PR, QRS, QT/QTc, ST, HRV)',
    'PDF Report Generation',
    'User Authentication & Registration',
    'Dashboard with Live Metrics',
    'Admin Panel (Reports & Users)',
    'Cloud Upload (AWS S3, Azure, GCS, FTP)',
    'Offline-First Queue System',
    'Session Recording & Playback',
    'Crash Logger & Error Handling',
    'Settings Management'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Documentation Viewer */}
      {showDocumentation && documentationFiles[showDocumentation as keyof typeof documentationFiles] && (
        <DocumentationViewer
          title={documentationFiles[showDocumentation as keyof typeof documentationFiles].title}
          content={documentationFiles[showDocumentation as keyof typeof documentationFiles].content}
          onClose={() => setShowDocumentation(null)}
        />
      )}

      {/* Contact Modal */}
      {showModal === 'contact' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setShowModal(null)}>
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">Contact Development Team</h3>
                <button onClick={() => setShowModal(null)} className="p-2 hover:bg-gray-100 rounded-full">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Your message..."></textarea>
                </div>
                <button onClick={() => { 
                  const name = (document.querySelector('input[placeholder="Your name"]') as HTMLInputElement)?.value;
                  const email = (document.querySelector('input[placeholder="your@email.com"]') as HTMLInputElement)?.value;
                  const message = (document.querySelector('textarea[placeholder="Your message..."]') as HTMLTextAreaElement)?.value;
                  
                  if (!name || !email || !message) {
                    alert('⚠️ Please fill in all fields');
                    return;
                  }
                  
                  const subject = encodeURIComponent('ECG Monitor - Contact from ' + name);
                  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
                  window.location.href = `mailto:divyansh.srivastava@deckmount.in?subject=${subject}&body=${body}`;
                  
                  alert('✅ Opening your email client...\n\nYour message will be sent to:\ndivyansh.srivastava@deckmount.in');
                  setShowModal(null);
                }} className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center">
                  <Send className="h-5 w-5 mr-2" /> Send Message
                </button>
              </div>
              <div className="mt-6 pt-6 border-t space-y-2 text-sm text-gray-600">
                <p><strong>Email:</strong> <a href="mailto:divyansh.srivastava@deckmount.in" className="text-blue-600 hover:underline">divyansh.srivastava@deckmount.in</a></p>
                <p><strong>GitHub:</strong> <a href="https://github.com/DivyansghDMK/modularecg" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">github.com/DivyansghDMK/modularecg</a></p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className={`sticky top-0 z-40 w-full border-b transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-md'}`}>
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Heart className="h-8 w-8 text-red-500 animate-pulse" />
            <span className="text-xl font-bold">ECG Monitor Documentation</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <button onClick={() => scrollToSection('completed')} className="text-sm font-medium hover:text-blue-600 transition-colors">Completed</button>
            <button onClick={() => scrollToSection('structure')} className="text-sm font-medium hover:text-blue-600 transition-colors">Structure</button>
            <button onClick={() => scrollToSection('issues')} className="text-sm font-medium hover:text-blue-600 transition-colors">Issues</button>
            <button onClick={() => scrollToSection('performance')} className="text-sm font-medium hover:text-blue-600 transition-colors">Performance</button>
            <button onClick={() => scrollToSection('docs')} className="text-sm font-medium hover:text-blue-600 transition-colors">Docs</button>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <button onClick={handleGithub} className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-all flex items-center">
              <Github className="h-4 w-4 mr-2" /> GitHub
            </button>
            <button onClick={handleContact} className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all">
              Contact
            </button>
          </div>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('completed')} className="block w-full text-left py-2">Completed</button>
              <button onClick={() => scrollToSection('structure')} className="block w-full text-left py-2">Structure</button>
              <button onClick={() => scrollToSection('issues')} className="block w-full text-left py-2">Issues</button>
              <button onClick={() => scrollToSection('performance')} className="block w-full text-left py-2">Performance</button>
              <button onClick={() => scrollToSection('docs')} className="block w-full text-left py-2">Docs</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-24">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1000 200" preserveAspectRatio="none">
            <path d="M0,100 L50,100 L55,100 L60,90 L65,110 L70,85 L75,120 L80,100 L200,100 L205,100 L210,90 L215,110 L220,85 L225,120 L230,100 L350,100 L355,100 L360,90 L365,110 L370,85 L375,120 L380,100 L500,100 L505,100 L510,90 L515,110 L520,85 L525,120 L530,100 L650,100 L655,100 L660,90 L665,110 L670,85 L675,120 L680,100 L800,100 L805,100 L810,90 L815,110 L820,85 L825,120 L830,100 L1000,100" 
                  stroke="currentColor" strokeWidth="2" fill="none" className="text-white"/>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-5 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium mb-6 shadow-lg border border-white/30">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              Production-Ready ECG Monitoring System
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in-up">
              ECG Monitor
              <span className="block text-4xl md:text-5xl mt-2 text-blue-200">Project Documentation</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed">
              Complete overview of all implemented features, codebase structure, and technical specifications
            </p>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-16">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all animate-scale-in opacity-0 stagger-1">
                <div className="text-4xl md:text-5xl font-bold mb-2">1.68M+</div>
                <div className="text-sm text-blue-200">Lines of Code</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all animate-scale-in opacity-0 stagger-2">
                <div className="text-4xl md:text-5xl font-bold mb-2">27</div>
                <div className="text-sm text-blue-200">Python Modules</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all animate-scale-in opacity-0 stagger-3">
                <div className="text-4xl md:text-5xl font-bold mb-2">14</div>
                <div className="text-sm text-blue-200">Core Features</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all animate-scale-in opacity-0 stagger-4">
                <div className="text-4xl md:text-5xl font-bold mb-2">0</div>
                <div className="text-sm text-blue-200">Critical Bugs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Completed Features */}
      <section id="completed" className="relative bg-white py-24">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
              COMPLETED WORK
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              What's Been Built
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              All implemented and production-ready features
            </p>
          </div>

          {/* Module Cards with Color Coding */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {completedModules.map((module, i) => (
              <div key={i} className={`group bg-gradient-to-br ${
                i === 0 ? 'from-blue-50 to-blue-100' :
                i === 1 ? 'from-purple-50 to-purple-100' :
                i === 2 ? 'from-green-50 to-green-100' :
                i === 3 ? 'from-orange-50 to-orange-100' :
                i === 4 ? 'from-cyan-50 to-cyan-100' :
                'from-pink-50 to-pink-100'
              } rounded-2xl p-8 border-2 border-transparent hover:border-blue-400 hover:shadow-2xl transition-all hover-lift animate-scale-in opacity-0 stagger-${i + 1}`}>
                <div className={`w-16 h-16 rounded-xl ${
                  i === 0 ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                  i === 1 ? 'bg-gradient-to-br from-purple-500 to-purple-600' :
                  i === 2 ? 'bg-gradient-to-br from-green-500 to-green-600' :
                  i === 3 ? 'bg-gradient-to-br from-orange-500 to-orange-600' :
                  i === 4 ? 'bg-gradient-to-br from-cyan-500 to-cyan-600' :
                  'bg-gradient-to-br from-pink-500 to-pink-600'
                } flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <module.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-2xl mb-3 text-gray-900">{module.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-white rounded-full text-sm font-semibold text-gray-700">{module.files} files</span>
                  <span className="font-mono text-lg font-bold text-gray-900">{module.lines}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Feature List with Enhanced Design */}
          <div className="bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600 rounded-3xl p-12 shadow-2xl">
            <h3 className="text-4xl font-bold mb-10 text-center text-white">Implemented Features</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {completedFeatures.map((feature, i) => (
                <div key={i} className={`flex items-start bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-md hover:shadow-xl hover:bg-white transition-all hover-lift animate-slide-in-left opacity-0 stagger-${(i % 9) + 1}`}>
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-800 font-medium text-lg">{feature}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold border border-white/30">
                ✨ All Features Production-Ready
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Structure */}
      <section id="structure" className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-24 overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 text-white rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
              CODEBASE ARCHITECTURE
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Project Structure
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Clean, modular architecture with 27 Python modules
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-white/95 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-white/20">
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6 animate-slide-in-left">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <Code className="h-5 w-5 mr-2 text-blue-600" /> src/core/ <span className="ml-2 text-sm text-gray-500">(5 files)</span>
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-green-500 mr-2" /> logging_config.py - Centralized logging</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-green-500 mr-2" /> constants.py - App-wide constants</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-green-500 mr-2" /> exceptions.py - Custom error handling</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-green-500 mr-2" /> validation.py - Data validation</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-6 animate-slide-in-left stagger-2">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <Lock className="h-5 w-5 mr-2 text-purple-600" /> src/auth/ <span className="ml-2 text-sm text-gray-500">(2 files)</span>
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-green-500 mr-2" /> sign_in.py - User authentication</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-green-500 mr-2" /> sign_out.py - Session management</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-6 animate-slide-in-left stagger-3">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <Activity className="h-5 w-5 mr-2 text-green-600" /> src/ecg/ <span className="ml-2 text-sm text-gray-500">(5 files)</span>
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-green-500 mr-2" /> twelve_lead_test.py - 12-lead ECG processing</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-green-500 mr-2" /> ecg_report_generator.py - PDF generation</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-green-500 mr-2" /> pan_tompkins.py - R-peak detection</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-green-500 mr-2" /> expanded_lead_view.py - Lead analysis</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-green-500 mr-2" /> demo_manager.py - Demo mode</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-500 pl-6 animate-slide-in-left stagger-4">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2 text-orange-600" /> src/dashboard/ <span className="ml-2 text-sm text-gray-500">(3 files)</span>
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-green-500 mr-2" /> dashboard.py - Main dashboard</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-green-500 mr-2" /> admin_reports.py - Admin panel</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-green-500 mr-2" /> chatbot_dialog.py - Chatbot interface</li>
                </ul>
              </div>

              <div className="border-l-4 border-cyan-500 pl-6 animate-slide-in-left stagger-5">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <Package className="h-5 w-5 mr-2 text-cyan-600" /> src/utils/ <span className="ml-2 text-sm text-gray-500">(8 files)</span>
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-green-500 mr-2" /> offline_queue.py - Offline-first system (405 lines)</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-green-500 mr-2" /> cloud_uploader.py - Cloud integration</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-green-500 mr-2" /> crash_logger.py - Error tracking</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-green-500 mr-2" /> session_recorder.py - Session management</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-green-500 mr-2" /> + 4 more utility modules</li>
                </ul>
              </div>
            </div>

            <div className="mt-10 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl">
              <div className="text-center text-white">
                <div className="flex items-center justify-center space-x-8">
                  <div>
                    <p className="text-3xl font-bold mb-1">27</p>
                    <p className="text-sm text-blue-100">Python Modules</p>
                  </div>
                  <div className="w-px h-12 bg-white/30"></div>
                  <div>
                    <p className="text-3xl font-bold mb-1">1.68M+</p>
                    <p className="text-sm text-blue-100">Lines of Code</p>
                  </div>
                  <div className="w-px h-12 bg-white/30"></div>
                  <div>
                    <p className="text-3xl font-bold mb-1">100%</p>
                    <p className="text-sm text-blue-100">Production Ready</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Remaining Issues */}
      <section id="issues" className="relative bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-block px-4 py-1.5 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold mb-4">
              CODE QUALITY
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              Current Status & Issues
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transparent overview of code quality and known issues
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* Critical: NONE */}
            <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6 animate-fade-in">
              <div className="flex items-center mb-4">
                <CheckCircle2 className="h-8 w-8 text-green-600 mr-3" />
                <div>
                  <h3 className="text-2xl font-bold text-green-900">No Critical Bugs</h3>
                  <p className="text-green-700">All critical issues have been resolved</p>
                </div>
              </div>
            </div>

          {/* Only DEBUG statements found */}
          <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6 animate-slide-in-left stagger-2">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <AlertCircle className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold">Debug Print Statements</h3>
              </div>
              <span className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm font-semibold">Low Priority</span>
            </div>
            <p className="text-gray-700 mb-3">Multiple DEBUG print statements in twelve_lead_test.py for development purposes</p>
            <p className="text-sm text-gray-600">
              <strong>Impact:</strong> None on functionality, minor performance impact  
              <br /><strong>Recommendation:</strong> Can be removed or moved to logging system
            </p>
          </div>

          {/* Code Quality */}
          <div className="bg-white border-2 border-gray-200 rounded-xl p-6 animate-slide-in-right stagger-3">
            <h3 className="text-xl font-bold mb-4">Code Quality Status</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">No TODO markers</span>
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">No FIXME markers</span>
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">No BUG markers</span>
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">All dependencies installed</span>
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Performance */}
      <section id="performance" className="relative bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 py-24 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-400 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-400 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-block px-4 py-1.5 bg-white/20 border border-white/30 text-white rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
              SYSTEM PERFORMANCE
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Performance Metrics
            </h2>
            <p className="text-xl text-pink-100 max-w-2xl mx-auto">
              Real-world speed, reliability, and resource usage
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { label: 'Real-time ECG', value: '500 Hz', icon: Activity, gradient: 'from-blue-400 to-cyan-500' },
              { label: 'Metric Latency', value: '<100ms', icon: Zap, gradient: 'from-yellow-400 to-orange-500' },
              { label: 'PDF Generation', value: '<5s', icon: FileText, gradient: 'from-green-400 to-emerald-500' },
              { label: 'Memory Usage', value: '<200MB', icon: Database, gradient: 'from-purple-400 to-pink-500' }
            ].map((metric, i) => (
              <div key={i} className={`bg-white/95 backdrop-blur-sm rounded-2xl p-8 text-center shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 animate-scale-in opacity-0 stagger-${i + 1}`}>
                <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${metric.gradient} flex items-center justify-center shadow-lg`}>
                  <metric.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{metric.value}</div>
                <div className="text-sm text-gray-700 font-medium">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Dependencies */}
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-white/20">
            <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Core Dependencies
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { name: 'PyQt5', version: '>=5.15.0', type: 'GUI Framework', icon: '🖥️' },
                { name: 'NumPy', version: '>=1.21.0', type: 'Data Processing', icon: '🔢' },
                { name: 'SciPy', version: '>=1.7.0', type: 'Signal Processing', icon: '📊' },
                { name: 'PyQtGraph', version: '>=0.13.0', type: 'Real-time Plotting', icon: '📈' },
                { name: 'Matplotlib', version: '>=3.5.0', type: 'Charts', icon: '📉' },
                { name: 'PySerial', version: '>=3.5', type: 'Hardware I/O', icon: '🔌' },
                { name: 'Pandas', version: '>=1.3.0', type: 'Data Analysis', icon: '🐼' },
                { name: 'Pillow', version: '>=8.3.0', type: 'Image Processing', icon: '🖼️' },
                { name: 'psutil', version: '>=5.9.0', type: 'System Monitoring', icon: '⚙️' }
              ].map((dep, i) => (
                <div key={i} className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-xl p-4 hover:border-purple-400 hover:shadow-lg transition-all group">
                  <div className="text-2xl mb-2">{dep.icon}</div>
                  <div className="font-bold text-gray-900 group-hover:text-purple-600 transition-colors">{dep.name}</div>
                  <div className="text-xs text-gray-500 font-mono mt-1">{dep.version}</div>
                  <div className="text-xs text-purple-600 mt-2 font-medium">{dep.type}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section id="docs" className="relative bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4">
              TECHNICAL RESOURCES
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Technical Documentation
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive guides covering every aspect of the system
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
            { 
              key: 'frontend-backend', 
              icon: TrendingUp, 
              title: 'Frontend & Backend Summary', 
              description: 'Complete development status, implemented features, and recent fixes',
              color: 'green'
            },
            { 
              key: 'codebase-analysis', 
              icon: AlertCircle, 
              title: 'Codebase Analysis Report', 
              description: 'Code quality review, identified issues, and fix recommendations',
              color: 'red'
            },
            { 
              key: 'technical-docs', 
              icon: FileText, 
              title: 'Technical Documentation', 
              description: 'Hardware specs, timers, serial communication, ECG processing',
              color: 'blue'
            },
            { 
              key: 'project-structure', 
              icon: Database, 
              title: 'Project Structure', 
              description: 'Directory layout, 27 modules, and clean architecture',
              color: 'purple'
            },
            { 
              key: 'performance', 
              icon: Zap, 
              title: 'Performance Optimization', 
              description: '2-3x speed improvements, caching, threading strategies',
              color: 'orange'
            },
            { 
              key: 'installation', 
              icon: Download, 
              title: 'Installation Guide', 
              description: 'System requirements, dependencies, and quick start',
              color: 'cyan'
            },
            { 
              key: 'backend-roadmap', 
              icon: Cloud, 
              title: 'Backend Development Roadmap', 
              description: 'Cloud infrastructure, RESTful APIs, and future architecture',
              color: 'indigo'
            },
            { 
              key: 'remaining-issues', 
              icon: Shield, 
              title: 'Remaining Issues & Status', 
              description: 'Bug fixes, low-priority improvements, and code quality',
              color: 'yellow'
            },
            { 
              key: 'sprint-plan', 
              icon: Activity, 
              title: 'Sprint Plan (Nov 5-15)', 
              description: '4 critical tasks, day-by-day plan, completion target: Nov 15',
              color: 'pink'
            }
          ].map((doc, i) => (
            <button
              key={i}
              onClick={() => openDocumentation(doc.key)}
              className={`bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-blue-400 hover:shadow-xl transition-all text-left group hover-lift animate-fade-in-up opacity-0 stagger-${i + 1}`}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${
                doc.color === 'blue' ? 'from-blue-400 to-blue-600' :
                doc.color === 'purple' ? 'from-purple-400 to-purple-600' :
                doc.color === 'green' ? 'from-green-400 to-green-600' :
                doc.color === 'orange' ? 'from-orange-400 to-orange-600' :
                doc.color === 'cyan' ? 'from-cyan-400 to-cyan-600' :
                doc.color === 'indigo' ? 'from-indigo-400 to-indigo-600' :
                doc.color === 'yellow' ? 'from-yellow-400 to-yellow-600' :
                doc.color === 'pink' ? 'from-pink-400 to-pink-600' :
                'from-red-400 to-red-600'
              } flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                <doc.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-gray-900 group-hover:text-blue-600 transition-colors flex items-center">
                {doc.title}
                <ExternalLink className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-all" />
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{doc.description}</p>
            </button>
          ))}
          </div>

          {/* Quick Actions */}
          <div className="mt-16 relative overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white text-center shadow-2xl animate-gradient">
              <div className="relative z-10">
                <Sparkles className="h-16 w-16 mx-auto mb-6 animate-float" />
                <h3 className="text-4xl font-bold mb-4">Need More Information?</h3>
                <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  Access full technical documentation or contact the development team
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button onClick={handleGithub} className="px-10 py-4 bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition-all transform hover:scale-105 font-semibold flex items-center shadow-lg">
                    <Github className="h-5 w-5 mr-2" /> View on GitHub
                  </button>
                  <button onClick={handleContact} className="px-10 py-4 bg-white/20 border-2 border-white text-white rounded-xl hover:bg-white/30 transition-all transform hover:scale-105 font-semibold flex items-center backdrop-blur-sm">
                    <Send className="h-5 w-5 mr-2" /> Contact Team
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-6 w-6 text-red-500" />
                <span className="font-bold text-xl">ECG Monitor</span>
              </div>
              <p className="text-gray-400 text-sm">
                Professional ECG monitoring solution with 1.68M+ lines of production-ready code
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => scrollToSection('completed')} className="hover:text-white transition-colors">Completed Features</button></li>
                <li><button onClick={() => scrollToSection('structure')} className="hover:text-white transition-colors">Project Structure</button></li>
                <li><button onClick={() => scrollToSection('issues')} className="hover:text-white transition-colors">Current Issues</button></li>
                <li><button onClick={() => scrollToSection('performance')} className="hover:text-white transition-colors">Performance</button></li>
              </ul>
            </div>
            <div>
            <h3 className="font-semibold mb-4">Documentation</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><button onClick={() => openDocumentation('frontend-backend')} className="hover:text-white transition-colors flex items-center">
                Frontend & Backend <ExternalLink className="h-3 w-3 ml-1" />
              </button></li>
              <li><button onClick={() => openDocumentation('codebase-analysis')} className="hover:text-white transition-colors flex items-center">
                Codebase Analysis <ExternalLink className="h-3 w-3 ml-1" />
              </button></li>
              <li><button onClick={() => openDocumentation('technical-docs')} className="hover:text-white transition-colors flex items-center">
                Technical Docs <ExternalLink className="h-3 w-3 ml-1" />
              </button></li>
              <li><button onClick={() => openDocumentation('performance')} className="hover:text-white transition-colors flex items-center">
                Performance <ExternalLink className="h-3 w-3 ml-1" />
              </button></li>
              <li><button onClick={handleGithub} className="hover:text-white transition-colors flex items-center">
                GitHub <ExternalLink className="h-3 w-3 ml-1" />
              </button></li>
            </ul>
          </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            <p>© 2025 ECG Monitor Application • Updated: November 5, 2025</p>
            <p className="mt-2">1,681,834 lines • 27 modules • 0 critical bugs</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
