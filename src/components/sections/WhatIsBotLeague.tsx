import React from 'react';
import { MOCK_LEAGUE_FEATURES } from '../../utils/mockData';

export const WhatIsBotLeague: React.FC = () => {
  // We rearrange features to match the vertical column layout in screenshot:
  // Col 1 (Left): Feature 1 (STRUCTURED EVENTS), Feature 3 (NATIONAL RANKING)
  // Col 2 (Right): Feature 2 (DIGITAL IDENTITY), Feature 4 (CAREER PATHWAY)
  const leftColFeatures = [
    { feature: MOCK_LEAGUE_FEATURES[0], displayId: 1 },
    { feature: MOCK_LEAGUE_FEATURES[2], displayId: 2 }
  ];
  const rightColFeatures = [
    { feature: MOCK_LEAGUE_FEATURES[1], displayId: 3 },
    { feature: MOCK_LEAGUE_FEATURES[3], displayId: 4 }
  ];

  return (
    <section id="what-is-botleague" className="py-16 md:py-20 bg-brand-grey font-body">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 md:mb-16 uppercase tracking-wider font-display">
          WHAT IS BOTLEAGUE?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Features Column 1 & 2 */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Col 1 */}
            <div className="space-y-8 md:space-y-12">
              {leftColFeatures.map(({ feature, displayId }) => (
                <div key={feature.id} className="text-left space-y-1.5">
                  <div className="text-lg md:text-xl font-bold text-brand-red">
                    {displayId}.
                  </div>
                  <h3 className="text-white font-black text-lg md:text-xl uppercase tracking-wide font-display">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Col 2 */}
            <div className="space-y-8 md:space-y-12">
              {rightColFeatures.map(({ feature, displayId }) => (
                <div key={feature.id} className="text-left space-y-1.5">
                  <div className="text-lg md:text-xl font-bold text-brand-red">
                    {displayId}.
                  </div>
                  <h3 className="text-white font-black text-lg md:text-xl uppercase tracking-wide font-display">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Schematic Graphic Image */}
          <div className="flex items-center justify-center p-4">
            <img src="/src/assets/schematic.png" alt="What is BotLeague Schematic" className="w-full max-w-[320px] h-auto mx-auto lg:ml-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsBotLeague;
