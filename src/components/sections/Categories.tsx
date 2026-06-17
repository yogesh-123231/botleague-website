import React from 'react';
import { MOCK_CATEGORIES } from '../../utils/mockData';

export const Categories: React.FC = () => {
  // Helper to render custom SVG icons matching the design screenshot
  const getCategoryIcon = (id: number) => {
    switch (id) {
      case 1:
        return (
          <svg className="w-16 h-16 text-[#FFCC00] mb-6" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <circle cx="50" cy="50" r="40" strokeWidth="8" />
            <path d="M32 65 V44 C32 38 38 34 44 34 C50 34 54 38 54 44 V65 M54 44 C54 38 58 34 64 34 C70 34 74 38 74 44 V65" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 2:
        return (
          <svg className="w-16 h-16 text-[#FFCC00] mb-6" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M50 20 C35 20 30 32 30 45 C30 55 38 62 40 68 V75 H60 V68 C62 62 70 55 70 45 C70 32 65 20 50 20 Z" />
            <path d="M45 75 H55 M42 81 H58 M47 87 H53" />
            <path d="M50 8 V14 M23 35 L28 38 M14 50 H20 M23 65 L28 62 M77 35 L72 38 M86 50 H80 M77 65 L72 62" strokeWidth="5" />
          </svg>
        );
      case 3:
        return (
          <svg className="w-16 h-16 text-[#FFCC00] mb-6" viewBox="0 0 100 100" fill="currentColor">
            <path d="M20 78 C20 66 30 62 50 62 C70 62 80 66 80 78 V80 H20 V78 Z" />
            <circle cx="50" cy="46" r="13" />
            <path d="M34 38 C34 26 41 23 50 23 C59 23 66 26 66 38 Z" />
            <path d="M30 37 H70 V40 H30 Z" />
            <rect x="47" y="19" width="6" height="5" rx="1" />
            
            <circle cx="78" cy="30" r="6" fill="none" stroke="currentColor" strokeWidth="3" />
            <path d="M78 22 V24 M78 36 V38 M70 30 H72 M84 30 H86 M72 24 L74 26 M82 34 L84 36 M72 36 L74 34 M82 26 L84 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            
            <circle cx="88" cy="42" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M88 36 V38 M88 46 V48 M82 42 H84 M92 42 H94" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        );
      case 4:
        return (
          <svg className="w-16 h-16 text-[#FFCC00] mb-6" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M32 78 C32 68 36 63 36 58 C30 53 26 46 26 38 C26 23 38 16 53 16 C68 16 76 26 76 41 C76 48 72 56 68 59 L68 68 C68 73 64 78 58 78 Z" />
            <path d="M46 33 H54 C58 33 60 35 60 38 C60 41 58 43 54 43 H46 Z M46 43 H56 C60 43 62 45 62 48 C62 51 60 53 56 53 H46 Z" fill="none" strokeWidth="4" />
            <path d="M46 28 V58 M50 28 V33 M50 53 V58 M54 28 V33 M54 53 V58" strokeWidth="4" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="categories" className="py-16 md:py-20 bg-brand-grey font-body">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 md:mb-16 text-center font-display">
          CATEGORIES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MOCK_CATEGORIES.map((category) => {
            return (
              <div
                key={category.id}
                className="p-4 text-left flex flex-col justify-between"
              >
                {getCategoryIcon(category.id)}
                
                <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-wide leading-tight mt-4 font-display">
                  {category.name}
                </h3>
                
                <p className="text-gray-400 text-xs mt-1">
                  {category.description}
                </p>
                
                <p className="text-gray-300 text-sm mt-3 leading-relaxed min-h-[44px]">
                  {category.subtitle}
                </p>
                
                <a
                  href="#register"
                  className="text-brand-red font-extrabold text-xs tracking-wider mt-6 inline-flex items-center hover:underline uppercase"
                >
                  LEARN MORE &gt;
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;

