import React from 'react';
import { MOCK_ECOSYSTEM } from '../../utils/mockData';

export const JoinEcosystem: React.FC = () => {
  return (
    <section id="join-ecosystem" className="py-16 md:py-20 bg-brand-dark font-body">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10 md:mb-14 font-display">
          JOIN THE ECOSYSTEM
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MOCK_ECOSYSTEM.map((card) => (
            <div
              key={card.id}
              className="p-6 md:p-8 text-center flex flex-col justify-between border-t border-white/5"
            >
              <div>
                <h3 className="text-white font-bold text-lg md:text-xl mb-4 uppercase tracking-wide font-display">
                  {card.title}
                </h3>
                
                <div className="space-y-3 mb-6">
                  {card.fields.map((field, index) => (
                    <input
                      key={index}
                      type="text"
                      placeholder={field}
                      className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-brand-red/50 transition-colors cursor-not-allowed"
                      disabled
                    />
                  ))}
                </div>
              </div>

              <button className="w-full py-2.5 px-4 bg-gradient-to-r from-brand-red to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] mt-4 font-display uppercase tracking-wider text-xs">
                {card.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinEcosystem;
