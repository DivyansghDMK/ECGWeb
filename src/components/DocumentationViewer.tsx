import { X, Download } from 'lucide-react';

interface DocViewerProps {
  title: string;
  content: string;
  onClose: () => void;
}

export function DocumentationViewer({ title, content, onClose }: DocViewerProps) {
  const handleDownload = () => {
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title.replace(/\s+/g, '_')}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Enhanced markdown to HTML converter with better UI/UX
  const renderMarkdown = (md: string) => {
    let html = md;
    
    // Headers with enhanced styling
    html = html.replace(/^#### (.*$)/gim, '<h4 class="text-lg font-bold mt-5 mb-2 text-gray-800 flex items-center"><span class="w-1 h-5 bg-blue-500 mr-3 rounded"></span>$1</h4>');
    html = html.replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold mt-8 mb-4 text-gray-900 flex items-center"><span class="w-1.5 h-6 bg-purple-500 mr-3 rounded"></span>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-10 mb-5 text-gray-900 pb-3 border-b-2 border-gradient-to-r from-blue-500 to-purple-500" style="border-image: linear-gradient(to right, #3b82f6, #a855f7) 1;">$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1 class="text-4xl font-bold mt-2 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">$1</h1>');
    
    // Status badges and indicators
    html = html.replace(/✅ ([^<\n]+)/g, '<span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 border border-green-200"><svg class="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>$1</span>');
    html = html.replace(/⬜ ([^<\n]+)/g, '<span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-600 border border-gray-200"><svg class="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" stroke-width="2"></rect></svg>$1</span>');
    html = html.replace(/🔄 ([^<\n]+)/g, '<span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 border border-blue-200"><svg class="w-4 h-4 mr-1.5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>$1</span>');
    html = html.replace(/🚨 ([^<\n]+)/g, '<span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 border border-red-200"><svg class="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>$1</span>');
    html = html.replace(/⚠️ ([^<\n]+)/g, '<span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 border border-yellow-200"><svg class="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>$1</span>');
    html = html.replace(/📋 ([^<\n]+)/g, '<span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 border border-purple-200"><svg class="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>$1</span>');
    
    // Bold and Italic
    html = html.replace(/\*\*\*(.*?)\*\*\*/g, '<strong class="font-bold text-gray-900"><em class="italic">$1</em></strong>');
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-gray-900">$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em class="italic text-gray-700">$1</em>');
    
    // Code blocks with syntax highlighting appearance
    html = html.replace(/```([\s\S]*?)```/g, '<pre class="bg-gradient-to-br from-gray-900 to-gray-800 text-green-400 p-5 rounded-xl overflow-x-auto my-5 border border-gray-700 shadow-lg font-mono text-sm"><code>$1</code></pre>');
    html = html.replace(/`([^`]+)`/g, '<code class="bg-gradient-to-r from-red-50 to-pink-50 text-red-700 px-2.5 py-1 rounded-md text-sm font-mono border border-red-200">$1</code>');
    
    // Enhanced lists with icons
    html = html.replace(/^\- (.*$)/gim, '<li class="ml-6 mb-3 text-gray-700 flex items-start"><svg class="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg><span>$1</span></li>');
    html = html.replace(/^\* (.*$)/gim, '<li class="ml-6 mb-3 text-gray-700 flex items-start"><svg class="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="3"></circle></svg><span>$1</span></li>');
    html = html.replace(/^\d+\. (.*$)/gim, '<li class="ml-6 mb-3 text-gray-700 flex items-start"><span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white text-xs font-bold mr-2 flex-shrink-0">•</span><span>$1</span></li>');
    
    // Tables - basic support
    html = html.replace(/\|(.+)\|/g, function(match) {
      const cells = match.split('|').filter(cell => cell.trim());
      const cellsHtml = cells.map(cell => `<td class="px-4 py-3 border border-gray-200">${cell.trim()}</td>`).join('');
      return `<tr class="hover:bg-blue-50 transition-colors">${cellsHtml}</tr>`;
    });
    
    // Links with icon
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-2 hover:decoration-blue-600 transition-all inline-flex items-center">$1<svg class="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></a>');
    
    // Horizontal rules with gradient
    html = html.replace(/^---$/gim, '<hr class="my-10 border-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />');
    
    // Info boxes for special sections
    html = html.replace(/\*\*Status:\*\* (.+)/gi, '<div class="inline-flex items-center px-4 py-2 rounded-lg bg-blue-50 border border-blue-200 text-blue-800 font-medium my-3"><svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>Status: $1</div>');
    html = html.replace(/\*\*Date:\*\* (.+)/gi, '<div class="inline-flex items-center px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-gray-700 font-medium my-3 ml-3"><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>Date: $1</div>');
    
    // Line breaks
    html = html.replace(/\n/g, '<br />');
    
    return html;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto animate-fade-in" onClick={onClose}>
      <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[92vh] overflow-hidden shadow-2xl my-8 animate-scale-in border border-gray-200" onClick={(e) => e.stopPropagation()}>
        {/* Enhanced Header */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white p-8 sticky top-0 z-10 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs uppercase tracking-wide text-blue-100 font-semibold">Technical Documentation</span>
              </div>
              <h2 className="text-3xl font-bold leading-tight">{title}</h2>
            </div>
            <div className="flex items-center space-x-2">
              <button 
                onClick={handleDownload}
                className="p-3 hover:bg-white/20 rounded-xl transition-all hover:scale-110 active:scale-95 backdrop-blur-sm border border-white/20"
                title="Download as Markdown"
              >
                <Download className="h-5 w-5" />
              </button>
              <button 
                onClick={onClose}
                className="p-3 hover:bg-white/20 rounded-xl transition-all hover:scale-110 active:scale-95 backdrop-blur-sm border border-white/20"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Content Area */}
        <div className="p-10 overflow-y-auto max-h-[calc(92vh-120px)] bg-gradient-to-b from-white to-gray-50 custom-scrollbar">
          <div 
            className="prose prose-lg prose-blue max-w-none documentation-content leading-relaxed"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
          />
        </div>

        {/* Footer gradient */}
        <div className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500"></div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #a855f7);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #9333ea);
        }
        .animate-fade-in {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-scale-in {
          animation: scaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { 
            opacity: 0;
            transform: scale(0.9);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}

