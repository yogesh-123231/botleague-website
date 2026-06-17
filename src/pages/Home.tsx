import React from 'react';
import Hero from '../components/sections/Hero';
import Competitions from '../components/sections/Competitions';
import UserJourney from '../components/sections/UserJourney';
import WhatIsBotLeague from '../components/sections/WhatIsBotLeague';
import Categories from '../components/sections/Categories';
import Disciplines from '../components/sections/Disciplines';
import WhyRegister from '../components/sections/WhyRegister';
import JoinEcosystem from '../components/sections/JoinEcosystem';
import Sponsors from '../components/sections/Sponsors';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Competitions />
      <UserJourney />
      <WhatIsBotLeague />
      <Categories />
      <Disciplines />
      <WhyRegister />
      <JoinEcosystem />
      <Sponsors />
    </div>
  );
};
export default Home;
