import React from 'react';
import { MOCK_SPONSORS } from '../../utils/mockData';

export const Sponsors: React.FC = () => {
  return (
    <section id="sponsors" className="py-12 md:py-16 bg-brand-dark font-body">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center text-white mb-8 md:mb-12 tracking-widest font-display">
          SPONSORS
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-x-16 md:gap-y-10">
          {MOCK_SPONSORS.map((sponsor) => (
            <div
              key={sponsor.id}
              className="flex items-center gap-3 md:gap-4 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center flex-shrink-0">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-white/60 font-bold tracking-wider text-sm md:text-base uppercase">
                {sponsor.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
