import React from 'react';
import { MOCK_DISCIPLINES } from '../../utils/mockData';

// Cyber circuit schematic card for the empty grid space
const CircuitCard: React.FC = () => (
  <div className="hidden lg:flex items-center justify-center p-6 col-span-2 h-full min-h-[160px] opacity-40 hover:opacity-60 transition-opacity duration-300">
    <svg className="w-full h-full text-blue-500/30" viewBox="0 0 200 80" fill="none" stroke="currentColor" strokeWidth="1">
      {/* Circuit track designs */}
      <path d="M 10 40 H 60 L 75 55 H 125 L 140 40 H 190" />
      <path d="M 60 40 L 70 30 H 120 L 130 40" />
      <path d="M 75 55 L 85 65 H 115 L 125 55" strokeDasharray="3 2" />
      <circle cx="60" cy="40" r="2.5" fill="currentColor" />
      <circle cx="75" cy="55" r="2.5" fill="currentColor" />
      <circle cx="120" cy="30" r="2.5" fill="currentColor" />
      <circle cx="125" cy="55" r="2.5" fill="currentColor" />
      <circle cx="140" cy="40" r="2.5" fill="currentColor" />
    </svg>
  </div>
);

export const Disciplines: React.FC = () => {
  // Helper to map discipline IDs to the generated image paths
  const getDisciplineImage = (id: number) => {
    switch (id) {
      case 1:
        return '/images/robo-race.png';
      case 2:
        return '/images/line-follower.png';
      case 3:
        return '/images/rc-racing.png';
      case 4:
        return '/images/fpv-drone.png';
      case 5:
        return '/images/robo-hockey.png';
      case 6:
        return '/images/robo-war.png';
      default:
        return '';
    }
  };

  return (
    <section id="disciplines" className="py-16 md:py-20 bg-brand-dark font-body">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Header Block matching the screenshot style */}
        <div className="mb-10 md:mb-14 text-center">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-brand-red block mb-1">
            SPORTS
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase tracking-wider font-display">
            COMPETITION DISCIPLINES
          </h2>
        </div>

        {/* 4-column desktop, 2-column mobile grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {MOCK_DISCIPLINES.map((discipline) => (
            <div
              key={discipline.id}
              className="overflow-hidden flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-black/40 rounded-xl">
                <img
                  src={getDisciplineImage(discipline.id)}
                  alt={discipline.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Title Section */}
              <div className="p-3 md:p-4 text-center flex-grow flex items-center justify-center font-display">
                <span className="text-white font-semibold text-xs sm:text-sm tracking-wide">
                  {discipline.name}
                </span>
              </div>
            </div>
          ))}

          {/* Double-width circuit graphic filling the empty space on desktop */}
          <CircuitCard />
        </div>
      </div>
    </section>
  );
};

export default Disciplines;
