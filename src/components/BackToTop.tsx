import React from 'react';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { ArrowUp } from 'lucide-react';

const BackToTop: React.FC = () => {
  const { scrollPosition } = useScrollPosition();
  const isVisible = scrollPosition > 500;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl shadow-emerald-500/20 transition-all duration-500 group ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
    </button>
  );
};

export default BackToTop;
