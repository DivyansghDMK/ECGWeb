import { Heart, Menu, X } from 'lucide-react';

interface HeaderProps {
  scrolled: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  scrollToSection: (id: string) => void;
  handleContact: () => void;
}

export function Header({ scrolled, mobileMenuOpen, setMobileMenuOpen, scrollToSection, handleContact }: HeaderProps) {
  return (
    <nav className={`sticky top-0 z-40 w-full border-b transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-md'}`}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Heart className="h-8 w-8 text-red-500 animate-pulse" />
          <span className="text-xl font-bold">ECG Monitor Documentation</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <button onClick={() => scrollToSection('timeline')} className="text-sm font-medium hover:text-orange-600 transition-colors">Timeline</button>
          <button onClick={() => scrollToSection('completed')} className="text-sm font-medium hover:text-orange-600 transition-colors">Completed</button>
          <button onClick={() => scrollToSection('structure')} className="text-sm font-medium hover:text-orange-600 transition-colors">Structure</button>
          <button onClick={() => scrollToSection('issues')} className="text-sm font-medium hover:text-orange-600 transition-colors">Issues</button>
          <button onClick={() => scrollToSection('performance')} className="text-sm font-medium hover:text-orange-600 transition-colors">Performance</button>
          <button onClick={() => scrollToSection('docs')} className="text-sm font-medium hover:text-orange-600 transition-colors">Docs</button>
        </div>
        <div className="hidden md:flex items-center space-x-2">
          <button onClick={handleContact} className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-all">
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
            <button onClick={() => scrollToSection('timeline')} className="block w-full text-left py-2">Timeline</button>
            <button onClick={() => scrollToSection('completed')} className="block w-full text-left py-2">Completed</button>
            <button onClick={() => scrollToSection('structure')} className="block w-full text-left py-2">Structure</button>
            <button onClick={() => scrollToSection('issues')} className="block w-full text-left py-2">Issues</button>
            <button onClick={() => scrollToSection('performance')} className="block w-full text-left py-2">Performance</button>
            <button onClick={() => scrollToSection('docs')} className="block w-full text-left py-2">Docs</button>
          </div>
        </div>
      )}
    </nav>
  );
}




