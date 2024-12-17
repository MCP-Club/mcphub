import { FC } from 'react';
import { SectionHeader } from './SectionHeader';
import { FeatureCard } from './FeatureCard';
import { features } from './featureData';

export const WhatIsWave: FC = () => {
  return (
    <div className="relative bg-gradient-to-b from-indigo-50 to-white py-24 sm:py-32 overflow-hidden">
      
      <div className="relative mx-auto max-w-6xl px-12">
        <SectionHeader />
        
        <div className="space-y-24">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              index={index}
              isReversed={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};