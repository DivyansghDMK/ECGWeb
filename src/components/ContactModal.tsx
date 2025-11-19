import { X, Send } from 'lucide-react';

interface ContactModalProps {
  onClose: () => void;
}

export function ContactModal({ onClose }: ContactModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in" onClick={(e) => e.stopPropagation()}>
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">Contact Development Team</h3>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input type="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" placeholder="your@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" rows={5} placeholder="Your message..."></textarea>
            </div>
            <button onClick={(e) => {
              const nameInput = (e.currentTarget.parentElement?.querySelector('input[type="text"]') as HTMLInputElement);
              const emailInput = (e.currentTarget.parentElement?.querySelector('input[type="email"]') as HTMLInputElement);
              const messageInput = (e.currentTarget.parentElement?.querySelector('textarea') as HTMLTextAreaElement);
              
              const name = nameInput?.value || '';
              const email = emailInput?.value || '';
              const message = messageInput?.value || '';
              
              const subject = encodeURIComponent('ECG Monitor - Contact from ' + name);
              const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
              window.location.href = `mailto:divyansh.srivastava@deckmount.in?subject=${subject}&body=${body}`;
              
              alert('✅ Opening your email client...\n\nYour message will be sent to:\ndivyansh.srivastava@deckmount.in');
              onClose();
            }} className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all flex items-center justify-center">
              <Send className="h-5 w-5 mr-2" /> Send Message
            </button>
          </div>
          <div className="mt-6 pt-6 border-t space-y-2 text-sm text-gray-600">
            <p><strong>Email:</strong> <a href="mailto:divyansh.srivastava@deckmount.in" className="text-blue-600 hover:underline">divyansh.srivastava@deckmount.in</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}




