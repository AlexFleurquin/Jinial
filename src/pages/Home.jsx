import React from 'react';

import HeaderHome from '../partials/home/HeaderHome';
import HeroHome from '../partials/home/HeroHome';
import PressLogosHome from '../partials/home/PressLogosHome';
import FeaturesHome from '../partials/home/FeaturesHome';
import Features02Home from '../partials/home/Features02Home';
import PricingHome from '../partials/home/PricingHome';
import TestimonialsHome from '../partials/home/TestimonialsHome';
import ResourcesHome from '../partials/home/ResourcesHome';
import CtaHome from '../partials/home/CtaHome';
import FooterHome from '../partials/home/FooterHome';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-light dark:bg-gray-900">

      {/*  Site header */}
      <HeaderHome />

      {/*  Page content */}
      <main className="grow">

        {/*  Page sections */}
        <HeroHome />
        <PressLogosHome />
        <FeaturesHome />
        <Features02Home />
        <PricingHome />
        <TestimonialsHome />
        <ResourcesHome />
        <CtaHome />

      </main>

      {/*  Site footer */}
      <FooterHome />

    </div>
  );
}

export default Home;
