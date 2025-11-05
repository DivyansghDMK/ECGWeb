import { CheckCircle2 } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 text-white py-24">
      {/* Stable ECG Waveform Background Pattern */}
      <div className="absolute inset-0 opacity-15">
        <svg className="w-full h-full" viewBox="0 0 1200 200" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="ecg-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <path d="M0,100 L40,100 L42,90 L44,110 L46,85 L48,120 L50,100 L90,100 L92,90 L94,110 L96,85 L98,120 L100,100 L140,100 L142,90 L144,110 L146,85 L148,120 L150,100 L190,100 L192,90 L194,110 L196,85 L198,120 L200,100" 
                    stroke="currentColor" strokeWidth="1.5" fill="none" className="text-white"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ecg-pattern)"/>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="inline-flex items-center px-5 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium mb-6 shadow-lg border border-white/30">
            <CheckCircle2 className="h-4 w-4 mr-2" />
            Production-Ready ECG Monitoring System
          </div>
          
          <h1 className="mb-6">
            <span className="block text-6xl md:text-7xl font-bold">ECG Monitor</span>
            <span className="block text-4xl md:text-5xl mt-2 text-blue-200">Project Documentation</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed">
            Complete overview of all implemented features, codebase structure, and technical specifications
          </p>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-16">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
              <div className="text-4xl md:text-5xl font-bold mb-2">15K+</div>
              <div className="text-sm text-blue-200">Core Code Lines</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
              <div className="text-4xl md:text-5xl font-bold mb-2">27</div>
              <div className="text-sm text-blue-200">Python Modules</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
              <div className="text-4xl md:text-5xl font-bold mb-2">14</div>
              <div className="text-sm text-blue-200">Core Features</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
              <div className="text-4xl md:text-5xl font-bold mb-2">0</div>
              <div className="text-sm text-blue-200">Critical Bugs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

