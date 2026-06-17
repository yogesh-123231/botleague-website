import React, { useState } from 'react';
import { MOCK_COMPETITIONS } from '../../utils/mockData';
import Button from '../common/Button';

export const Competitions: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'live' | 'upcoming' | 'past'>('live');

  // Filter the data from mockData.ts
  const liveEvents = MOCK_COMPETITIONS.filter((event) => event.status === 'live');
  const upcomingEvents = MOCK_COMPETITIONS.filter((event) => event.status === 'upcoming');
  const pastEvents = MOCK_COMPETITIONS.filter((event) => event.status === 'past');

  return (
    <section id="competitions" className="py-16 md:py-24 bg-brand-grey font-body">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Title Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-12 text-center font-display">
          COMPETITIONS & EVENTS
        </h2>

        {/* 3-Column Simultaneous Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Column 1: LIVE NOW */}
          <div className="space-y-6">
            <button
              onClick={() => setActiveTab('live')}
              className={`w-full text-left pb-3 border-b-2 transition-all duration-300 ${
                activeTab === 'live' ? 'border-brand-red text-brand-red font-black' : 'border-white/10 text-white font-bold'
              }`}
            >
              <h3 className="text-lg tracking-widest uppercase font-display">LIVE NOW</h3>
            </button>
            
            <div className="space-y-6">
              {liveEvents.map((event) => (
                <div 
                  key={event.id} 
                  className="p-4 flex flex-col justify-between relative overflow-hidden"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xl font-bold text-white uppercase tracking-wide font-display">
                        {event.title}
                      </h4>
                      <span className="bg-red-600 text-white text-[10px] font-extrabold tracking-widest px-2 py-0.5 rounded">
                        LIVE
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">
                      Lorem Ipsum
                    </p>
                  </div>
                  
                  {/* Tournament Bracket Visual */}
                  <div className="mt-6 bg-black/30 border border-white/5 rounded-xl p-4 flex items-center justify-between gap-3 h-44">
                    {/* 4 Left boxes */}
                    <div className="flex flex-col justify-between h-full w-[35%]">
                      <div className="h-5 w-full bg-white/5 rounded border border-white/10" />
                      <div className="h-5 w-full bg-white/5 rounded border border-white/10" />
                      <div className="h-5 w-full bg-white/5 rounded border border-white/10" />
                      <div className="h-5 w-full bg-white/5 rounded border border-white/10" />
                    </div>

                    {/* Bracket lines */}
                    <div className="w-[30%] h-full relative">
                      <svg className="absolute inset-0 w-full h-full text-red-500/80" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="2">
                        {/* Top bracket */}
                        <path d="M 0 12.5 H 40 V 25 H 70 V 50 H 100" />
                        <path d="M 0 37.5 H 40 V 25" />
                        {/* Bottom bracket */}
                        <path d="M 0 62.5 H 40 V 75 H 70 V 50" />
                        <path d="M 0 87.5 H 40 V 75" />
                      </svg>
                    </div>

                    {/* 1 Right box (Finalist) */}
                    <div className="flex flex-col justify-center h-full w-[35%]">
                      <div className="h-5 w-full bg-white/5 rounded border border-white/10" />
                    </div>
                  </div>
                  
                  {/* Ongoing Badge at bottom-right */}
                  <div className="self-end mt-4">
                    <span className="bg-brand-red text-white text-[10px] font-black tracking-widest px-3 py-1.5 rounded uppercase shadow-md shadow-brand-red/25">
                      Ongoing
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: UPCOMING */}
          <div className="space-y-6">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`w-full text-left pb-3 border-b-2 transition-all duration-300 ${
                activeTab === 'upcoming' ? 'border-brand-red text-brand-red font-black' : 'border-white/10 text-white font-bold'
              }`}
            >
              <h3 className="text-lg tracking-widest uppercase font-display">UPCOMING</h3>
            </button>

            <div className="space-y-6">
              {upcomingEvents.map((event) => (
                <div 
                  key={event.id} 
                  className="p-4 flex flex-col justify-between space-y-6"
                >
                  <h4 className="text-xl font-bold text-white uppercase tracking-wide font-display">
                    {event.title}
                  </h4>

                  {/* Info Row matching screenshot */}
                  <div className="grid grid-cols-3 gap-2 text-left">
                    <div>
                      <span className="block text-[10px] text-gray-500 uppercase tracking-widest font-semibold mb-1">Date</span>
                      <span className="text-white text-xs sm:text-sm font-bold">{event.date || '11/11/25'}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-gray-500 uppercase tracking-widest font-semibold mb-1">Location</span>
                      <span className="text-white text-xs sm:text-sm font-bold uppercase">{event.location === 'BKC, Mumbai' ? 'BKC' : event.location === 'IIT Delhi, Delhi' ? 'BKC' : event.location}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-gray-500 uppercase tracking-widest font-semibold mb-1">Category</span>
                      <span className="text-white text-xs sm:text-sm font-bold uppercase">{event.category === 'Robo Race' ? 'Lorem' : event.category === 'Robo War' ? 'Lorem' : event.category || 'Lorem'}</span>
                    </div>
                  </div>

                  {/* Register Button */}
                  <Button 
                    variant="primary" 
                    size="md" 
                    className="w-full justify-center bg-brand-red text-white font-extrabold hover:bg-red-600 tracking-wider rounded-lg"
                  >
                    REGISTER
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: PAST RESULTS */}
          <div className="space-y-6">
            <button
              onClick={() => setActiveTab('past')}
              className={`w-full text-left pb-3 border-b-2 transition-all duration-300 ${
                activeTab === 'past' ? 'border-brand-red text-brand-red font-black' : 'border-white/10 text-white font-bold'
              }`}
            >
              <h3 className="text-lg tracking-widest uppercase font-display">PAST RESULTS</h3>
            </button>

            <div className="p-4 space-y-4 opacity-65 hover:opacity-85 transition-opacity duration-300">
              {pastEvents.map((event, index) => (
                <div key={event.id} className={`space-y-1 ${index > 0 ? 'pt-4 border-t border-white/5' : ''}`}>
                  <h4 className="text-lg font-bold text-gray-200 uppercase tracking-wide font-display">
                    {event.title.includes('Qualifier') ? 'Bengaluru Regionals' : event.title}
                  </h4>
                  <p className="text-xs text-gray-400">
                    Lorem Ipsum
                  </p>
                </div>
              ))}
              {/* Add a 3rd past event item to match the 3-item list in screenshot */}
              <div className="space-y-1 pt-4 border-t border-white/5">
                <h4 className="text-lg font-bold text-gray-200 uppercase tracking-wide font-display">
                  Bengaluru Regionals
                </h4>
                <p className="text-xs text-gray-400">
                  Lorem Ipsum
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Competitions;
