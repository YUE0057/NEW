'use client';

import Image from 'next/image';
import React from 'react';

export default function BuildingEnvironment(): React.ReactElement {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Building Environment Overview</h1>
      <div className="grid grid-cols-1 gap-8">
        <div className="relative w-full h-[500px]">
          <Image
            src="/images/building-environment/exterior-front.jpg"
            alt="Building Exterior Front View"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative w-full h-[500px]">
          <Image
            src="/images/building-environment/entrance.jpg"
            alt="Building Entrance"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative w-full h-[500px]">
          <Image
            src="/images/building-environment/exterior-pool.jpg"
            alt="Building Exterior with Pool"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative w-full h-[500px]">
          <Image
            src="/images/building-environment/interior-living.jpg"
            alt="Interior Living Room"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
} 