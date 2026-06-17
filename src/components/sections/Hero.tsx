import React from 'react';
import { Link } from 'react-router-dom';
import { MOCK_COMPETITIONS } from '../../utils/mockData';
import Button from '../common/Button';

export const Hero: React.FC = () => {
  // Find the active live competition to bind live info
  const liveEvent = MOCK_COMPETITIONS.find((event) => event.status === 'live');

  return (
    <section className="relative min-h-[75vh] md:min-h-[85vh] flex items-center bg-[#0A0A1A] overflow-hidden">
      
      {/* Background Image on the right half */}
      <div 
        className="absolute top-0 right-0 w-full md:w-[60%] h-full bg-cover bg-center bg-no-repeat opacity-40 md:opacity-100"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      >
        {/* Gradients blending background into the dark container */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A1A] via-[#0A0A1A]/85 to-transparent md:block hidden" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A1A]/30 via-[#0A0A1A]/90 to-[#0A0A1A] md:hidden block" />
      </div>

      {/* Floating Live Badge Pill */}
      {liveEvent && (
        <div className="absolute top-6 left-3/4 transform -translate-x-1/2 z-20 w-full max-w-max px-4">
          <div className="inline-flex items-center gap-3 bg-black/85 border border-white/10 px-4 py-2 rounded-full shadow-2xl backdrop-blur-md">
            <span className="flex items-center text-red-500 font-bold uppercase tracking-widest text-[10px] md:text-[11px] gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              LIVE
            </span>
            <span className="text-gray-600 text-sm font-medium">:</span>
            <span className="text-gray-200 text-xs md:text-sm font-medium tracking-wide">
              Episode 14 • {liveEvent.title}
            </span>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-orange text-white text-[9px] md:text-[10px] tracking-widest font-black px-3.5 py-1.5 rounded-full hover:bg-orange-500 hover:scale-105 active:scale-95 transition-all duration-300 uppercase shadow-md shadow-brand-orange/20"
            >
              WATCH LIVE
            </a>
          </div>
        </div>
      )}

      {/* Content Block */}
      {/* Content Block */}
{/* Content Block */}
<div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full py-16 md:py-24 flex flex-col justify-center">
  <div className="max-w-5xl space-y-6 md:space-y-8">
    
    {/* Main Title Heading */}
    <div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase tracking-wider text-white leading-[1.3] font-display">
        INDIA'S ULTIMATE
        <br />
        ROBOTICS ARENA
      </h1>
    </div>

    {/* Subtitle / Description */}
    <p className="text-base md:text-lg lg:text-xl font-medium leading-relaxed max-w-xl tracking-wide font-body text-gray-200">
      Build.Compete.Rank.The National
      <br />
      Ecosystem for Robotics Arena
    </p>

    {/* CTAs */}
    <div className="flex flex-col sm:flex-row gap-4 pt-2">
      <Link to="/register" className="w-full sm:w-auto">
        <Button 
          variant="primary" 
          size="lg" 
          className="w-full justify-center bg-[#FF4C4C] hover:bg-red-600 text-white font-bold tracking-wider shadow-lg shadow-[#FF4C4C]/25 font-body px-8 py-3"
        >
          CREATE ACCOUNT
        </Button>
      </Link>
      <a href="#competitions" className="w-full sm:w-auto">
        <Button 
          variant="secondary" 
          size="lg" 
          className="w-full justify-center bg-transparent border border-white/20 hover:border-white/40 text-white font-bold tracking-wider font-body px-8 py-3"
        >
          EXPLORE EVENTS
        </Button>
      </a>
    </div>

  </div>
</div>
    </section>
  );
};

export default Hero;
