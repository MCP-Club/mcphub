'use client';

import * as React from 'react';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Testimonials } from '@/components/Testimonials';
import { Footer } from '@/components/Footer';
import { HomeNavbar } from '@/components/NavBar/Home';
import { WhatIsWave } from '@/components/WhatIsWave';

export default function Home() {
  return (
    <div className="bg-white">
      <HomeNavbar />
      <Hero />
      <WhatIsWave />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}