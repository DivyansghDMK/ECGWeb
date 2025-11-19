import { Activity, Package, Sparkles, FileText, HeartPulse, Cpu } from 'lucide-react';

interface SprintTimelineProps {
  openDocumentation: (key: string) => void;
}

export function SprintTimeline({ openDocumentation }: SprintTimelineProps) {
  return (
    <section id="timeline" className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
            DEVELOPMENT ROADMAP
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Sprint Timeline
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Structured sprint-based development with clear milestones and deliverables
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Sprint 1 - In Progress (CURRENT) */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-orange-400 hover:shadow-2xl transition-all ring-4 ring-orange-100">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center animate-pulse">
                  <Activity className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Sprint 1</h3>
                  <p className="text-sm text-gray-500">Nov 5-15, 2025</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold animate-pulse">In Progress</span>
            </div>
            
            <div className="mb-6">
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full transition-all duration-500" style={{ width: '15%' }}></div>
              </div>
              <p className="text-right text-sm text-gray-600 mt-2">15% Complete • 🔥 Active Today!</p>
            </div>

            <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-xs font-semibold text-yellow-800 mb-1">⚡ PENDING TASKS (Updated Nov 5)</p>
              <p className="text-xs text-yellow-700">Target completion: Saturday, Nov 15</p>
            </div>

            <ul className="space-y-3">
              {[
                { title: 'Urgent HRV Monitoring', desc: 'Escalation rules and UI alerts for rapid HRV drops' },
                { title: 'ECG Metric Calculations', desc: 'P/QRS/T, RV5/SV1, RV5+SV1, QTCF formulas' },
                { title: 'Wave Controls', desc: 'Wave Speed & Wave Gain functions' },
                { title: 'Patient Details', desc: 'Fix data mapping & save logic' },
                { title: 'Overlay Working Mode', desc: 'Fix graph freeze issue' }
              ].map((task, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <div className="h-5 w-5 border-2 border-orange-400 rounded flex items-center justify-center flex-shrink-0 mt-0.5 animate-pulse">
                    <div className="h-2 w-2 bg-orange-400 rounded"></div>
                  </div>
                  <div>
                    <span className="text-gray-700 font-medium block">{task.title}</span>
                    <span className="text-xs text-gray-500">{task.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <button 
                onClick={() => openDocumentation('sprint-plan')}
                className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <FileText className="h-5 w-5" />
                <span>View Full Sprint Plan</span>
              </button>
            </div>
          </div>

          {/* Sprint 2 - Planned */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <Package className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Sprint 2</h3>
                  <p className="text-sm text-gray-500">Nov 16-30, 2025</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold">Planned</span>
            </div>
            
            <div className="mb-4 p-3 bg-indigo-50 border border-indigo-200 rounded-lg">
              <p className="text-xs font-semibold text-indigo-800 mb-1">🔮 UPCOMING FOCUS</p>
              <p className="text-xs text-indigo-700">
                Guest mode funnels, email/OTP guardrails, and ML model training for baseline arrhythmia detection.
              </p>
            </div>

            <div className="mb-6">
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-gray-300 to-gray-400 rounded-full" style={{ width: '0%' }}></div>
              </div>
              <p className="text-right text-sm text-gray-600 mt-2">0% Complete</p>
            </div>

            <ul className="space-y-3">
              {[
                'Guest Mode implementation',
                'Email/OTP authentication',
                'Admin panel enhancements',
                'Email report delivery',
                'ML model training for arrhythmia baseline detection'
              ].map((task, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <div className="h-5 w-5 border-2 border-gray-300 rounded flex-shrink-0 mt-0.5"></div>
                  <span className="text-gray-600">{task}</span>
                </li>
              ))}
            </ul>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <button
              onClick={() => openDocumentation('sprint-plan')}
              className="w-full py-3 bg-gradient-to-r from-gray-500 to-gray-700 text-white rounded-xl font-semibold hover:from-gray-600 hover:to-gray-800 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <FileText className="h-5 w-5" />
              <span>View Full Sprint Plan</span>
            </button>
          </div>
          </div>

          {/* Sprint 3 - Planned */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-300 to-purple-400 flex items-center justify-center">
                  <Sparkles className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Sprint 3</h3>
                  <p className="text-sm text-gray-500">Dec 1-15, 2025</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold">Planned</span>
            </div>
            
            <div className="mb-4 p-3 bg-purple-50 border border-purple-200 rounded-lg">
              <p className="text-xs font-semibold text-purple-800 mb-1">🛡️ PLATFORM SCOPE</p>
              <p className="text-xs text-purple-700">
                Compliance-ready security, ML-powered advanced ECG analytics, and enterprise data exchange tooling.
              </p>
            </div>

            <div className="mb-6">
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-300 to-purple-400 rounded-full" style={{ width: '0%' }}></div>
              </div>
              <p className="text-right text-sm text-gray-600 mt-2">0% Complete</p>
            </div>

            <ul className="space-y-3">
              {['Role-based permissions', 'Security improvements', 'Advanced ECG analysis (ML)', 'Data export/import features'].map((task, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <div className="h-5 w-5 border-2 border-gray-300 rounded flex-shrink-0 mt-0.5"></div>
                  <span className="text-gray-600">{task}</span>
                </li>
              ))}
            </ul>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <button
              onClick={() => openDocumentation('sprint-plan')}
              className="w-full py-3 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-purple-800 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <FileText className="h-5 w-5" />
              <span>View Full Sprint Plan</span>
            </button>
          </div>
          </div>
        </div>

        {/* Feature Focus */}
        <div className="mt-16 max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="relative overflow-hidden rounded-2xl border border-orange-200 bg-white shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                <HeartPulse className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-orange-600 uppercase tracking-wide">New Feature</p>
                <h3 className="text-2xl font-bold text-gray-900">Urgent HRV Response</h3>
              </div>
            </div>
            <p className="text-gray-600">
              Real-time HRV anomaly detection with escalation badges, clinical copy, and sprint-level ownership so stakeholders
              can see how we are prioritizing critical patient stability.
            </p>
            <div className="mt-4 inline-flex items-center space-x-2 rounded-full bg-orange-50 px-4 py-1 text-sm font-semibold text-orange-700">
              <span>Tracked in Sprint 1</span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-indigo-200 bg-white shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center">
                <Cpu className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">New Feature</p>
                <h3 className="text-2xl font-bold text-gray-900">ML Model Training</h3>
              </div>
            </div>
            <p className="text-gray-600">
              Baseline training workflows for the arrhythmia detection model, including data curation cards, model health
              status, and a visual timeline placement for Sprint 2 so leadership knows when insight automation lands.
            </p>
            <div className="mt-4 inline-flex items-center space-x-2 rounded-full bg-indigo-50 px-4 py-1 text-sm font-semibold text-indigo-700">
              <span>Planned for Sprint 2</span>
            </div>
          </div>
        </div>

        {/* Sprint Stats */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-1">52</div>
                <div className="text-sm text-gray-600">Features Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-1">4</div>
                <div className="text-sm text-gray-600">Tasks In Progress</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-600 mb-1">15</div>
                <div className="text-sm text-gray-600">Tasks Planned</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-1">Nov 15</div>
                <div className="text-sm text-gray-600">Next Milestone</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




