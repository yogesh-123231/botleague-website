import React from 'react';
import { Wrench, Castle, Award, Users } from 'lucide-react';
import { MOCK_JOURNEY } from '../../utils/mockData';

export const UserJourney: React.FC = () => {
  // Map step IDs to custom Lucide icons matching the screenshot
  const getStepIcon = (id: number) => {
    switch (id) {
      case 1:
        return <Wrench size={32} className="text-white" />;
      case 2:
        return <Castle size={32} className="text-white" />;
      case 3:
        return <Award size={32} className="text-white" />;
      case 4:
        return <Users size={32} className="text-white" />;
      default:
        return null;
    }
  };

  return (
    <section id="journey" className="py-16 md:py-24 bg-brand-dark font-body">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Header Block */}
        <div className="text-center space-y-2 mb-16">
          <span className="text-sm font-extrabold uppercase tracking-widest text-brand-red block">
            USER JOURNEY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none font-display">
            YOUR PATH TO THE LEAGUE
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-semibold pt-1">
            Learn how to join India's official robotics league
          </p>
        </div>

        {/* Steps Timeline Grid Container */}
        <div className="relative">
          
          {/* Horizontal Connector Line (Visible on Desktop) */}
          <div className="absolute top-[56px] left-[12.5%] right-[12.5%] h-0.5 bg-blue-600/60 shadow-[0_0_8px_rgba(37,99,235,0.5)] -z-10 hidden lg:block" />

          {/* Grid of Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {MOCK_JOURNEY.map((step) => (
              <div 
                key={step.id} 
                className="flex flex-col items-center text-center group"
              >
                
                {/* Timeline Circle with Dynamic Icon */}
                <div className="relative">
                  <div className="w-28 h-28 bg-[#0D0D1F] border-4 border-blue-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all duration-300 group-hover:scale-105 group-hover:border-brand-red group-hover:shadow-[0_0_25px_rgba(255,76,76,0.4)]">
                    {getStepIcon(step.id)}
                  </div>
                </div>

                {/* Vertical Indicator Line */}
                <div className="h-8 w-px bg-gray-800 transition-colors duration-300 group-hover:bg-brand-red" />

                {/* Step Text Information */}
                <div className="space-y-1">
                  <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-brand-red">
                    {step.step}
                  </span>
                  <h4 className="text-white font-extrabold text-sm sm:text-base uppercase tracking-wider max-w-[200px] leading-snug font-display">
                    {step.title}
                  </h4>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default UserJourney;
