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

  // Simple markdown to HTML converter
  const renderMarkdown = (md: string) => {
    let html = md;
    
    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold mt-6 mb-3 text-gray-900">$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-8 mb-4 text-gray-900 border-b-2 border-blue-500 pb-2">$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-4 mb-6 text-blue-600">$1</h1>');
    
    // Bold and Italic
    html = html.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>');
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    // Code blocks
    html = html.replace(/```([\s\S]*?)```/g, '<pre class="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto my-4"><code>$1</code></pre>');
    html = html.replace(/`([^`]+)`/g, '<code class="bg-gray-100 text-red-600 px-2 py-1 rounded text-sm">$1</code>');
    
    // Lists
    html = html.replace(/^\- (.*$)/gim, '<li class="ml-6 mb-2 text-gray-700">• $1</li>');
    html = html.replace(/^\* (.*$)/gim, '<li class="ml-6 mb-2 text-gray-700">• $1</li>');
    html = html.replace(/^\d+\. (.*$)/gim, '<li class="ml-6 mb-2 text-gray-700">$1</li>');
    
    // Checkboxes
    html = html.replace(/- \[x\] /gi, '<span class="text-green-500">✅ </span>');
    html = html.replace(/- \[ \] /gi, '<span class="text-gray-400">⬜ </span>');
    html = html.replace(/✅/g, '<span class="text-green-500">✅</span>');
    html = html.replace(/⬜/g, '<span class="text-gray-400">⬜</span>');
    html = html.replace(/🔄/g, '<span class="text-blue-500">🔄</span>');
    html = html.replace(/📋/g, '<span class="text-purple-500">📋</span>');
    
    // Links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">$1</a>');
    
    // Horizontal rules
    html = html.replace(/^---$/gim, '<hr class="my-8 border-gray-300" />');
    
    // Line breaks
    html = html.replace(/\n/g, '<br />');
    
    return html;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 overflow-y-auto" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl my-8" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">{title}</h2>
              <p className="text-sm text-blue-100 mt-1">Technical Documentation</p>
            </div>
            <div className="flex items-center space-x-2">
              <button 
                onClick={handleDownload}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                title="Download as Markdown"
              >
                <Download className="h-5 w-5" />
              </button>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto max-h-[calc(90vh-100px)]">
          <div 
            className="prose prose-blue max-w-none documentation-content"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
          />
        </div>
      </div>
    </div>
  );
}

