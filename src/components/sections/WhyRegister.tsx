import React from 'react';
import { Shield, User, Star, Award, Scale, Briefcase, Users } from 'lucide-react';
import { MOCK_BENEFITS } from '../../utils/mockData';

const MOCK_LEADERBOARD = [
  { rank: '01', name: 'Player Name', score: '508754' },
  { rank: '02', name: 'Player Name', score: '22000' },
  { rank: '03', name: 'Player Name', score: '20030' },
  { rank: '04', name: 'Player Name', score: '19500' },
  { rank: '05', name: 'Player Name', score: '15060' },
  { rank: '06', name: 'Player Name', score: '13865' },
  { rank: '07', name: 'Player Name', score: '10954' },
  { rank: '08', name: 'Player Name', score: '9057' },
];

export default function WhyRegister() {
  const getBenefitIcon = (id: number) => {
    switch (id) {
      case 1:
        return <Award className="text-brand-red w-6 h-6 mr-3 mt-1 flex-shrink-0" />;
      case 2:
        return <Scale className="text-brand-red w-6 h-6 mr-3 mt-1 flex-shrink-0" />;
      case 3:
        return <Briefcase className="text-brand-red w-6 h-6 mr-3 mt-1 flex-shrink-0" />;
      case 4:
        return <Users className="text-brand-red w-6 h-6 mr-3 mt-1 flex-shrink-0" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-16 md:py-20 bg-brand-grey font-body">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-display">WHY REGISTER?</h2>
          <p className="text-brand-red text-lg md:text-xl font-semibold mt-1">THE LEAGUE ADVANTAGE</p>
        </div>

        {/* Two Column Layout - No Containers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Benefits - Just Text */}
          <div className="space-y-8">
            {MOCK_BENEFITS.map((benefit) => (
              <div key={benefit.id} className="flex items-start">
                {getBenefitIcon(benefit.id)}
                <div>
                  <h4 className="text-white font-bold text-lg uppercase tracking-wide font-display">{benefit.title}</h4>
                  <p className="text-gray-400 text-sm mt-1 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Leaderboard - Visual Component */}
          <div className="bg-[#111111]/80 rounded-2xl p-6 border border-white/5 space-y-4 max-w-md mx-auto w-full">
            <div className="text-center">
              <h3 className="text-white font-black text-xl tracking-wider uppercase font-display mb-4">
                LEADERBOARD
              </h3>
            </div>

            {/* Rank 01 - Highlighted Center Box */}
            <div className="bg-gradient-to-b from-yellow-500/10 to-yellow-600/5 border border-yellow-500/20 rounded-xl p-4 flex flex-col items-center text-center space-y-2 relative">
              <div className="absolute top-2 right-2 text-yellow-500">
                <Shield className="w-5 h-5 fill-yellow-500/20" />
              </div>
              <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500">
                <User className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] text-yellow-500 uppercase tracking-widest font-black block">
                  #01 - {MOCK_LEADERBOARD[0].name}
                </span>
                <span className="text-2xl font-black text-white tracking-wider font-display">
                  {MOCK_LEADERBOARD[0].score}
                </span>
              </div>
            </div>

            {/* Ranks 02 - 08 - Clean List */}
            <div className="space-y-2 max-h-[280px] overflow-y-auto pr-1">
              {MOCK_LEADERBOARD.slice(1).map((item, idx) => {
                // Determine icon colors for variety
                const iconColor = idx === 0 ? 'text-blue-400 bg-blue-500/10 border-blue-500/20' : 
                                  idx === 1 ? 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20' : 
                                  'text-pink-400 bg-pink-500/10 border-pink-500/20';
                
                return (
                  <div 
                    key={item.rank} 
                    className="flex items-center justify-between p-2 rounded-lg border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-gray-500 font-bold text-xs w-6 text-center">{item.rank}</span>
                      <div className={`w-7 h-7 rounded-full border flex items-center justify-center ${iconColor}`}>
                        <User className="w-4 h-4" />
                      </div>
                      <span className="text-gray-300 text-sm font-medium">{item.name}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <span className="text-white text-sm font-bold font-display">{item.score}</span>
                      <Shield className={`w-4 h-4 ${iconColor.split(' ')[0]}`} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}