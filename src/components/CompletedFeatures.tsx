import { Code, Lock, Activity, TrendingUp, Package, Shield, CheckCircle2 } from 'lucide-react';

export function CompletedFeatures() {
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
    <section id="completed" className="relative py-24" style={{background: '#F2F2F2'}}>
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
            } rounded-2xl p-8 border-2 border-transparent hover:border-blue-400 hover:shadow-2xl transition-all hover-lift`}>
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
                <span className="text-sm text-gray-600">{module.files} files</span>
                <span className="text-sm font-medium text-gray-700">{module.lines}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Feature List with Enhanced Design */}
        <div className="bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600 rounded-3xl p-12 shadow-2xl">
          <h3 className="text-4xl font-bold mb-10 text-center text-white">Implemented Features</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {completedFeatures.map((feature, i) => (
              <div key={i} className="flex items-start bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-md hover:shadow-xl hover:bg-white transition-all hover-lift">
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
  );
}

