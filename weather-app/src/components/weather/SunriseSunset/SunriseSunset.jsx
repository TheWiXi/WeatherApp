import React from 'react';
import { Sunrise, Sunset } from 'lucide-react';

const SunriseSunset = ({ data, viewMode }) => {
  const dayData = viewMode === 'today' 
    ? data.forecast.forecastday[0] 
    : data.forecast.forecastday[1];

  return (
    <div className="bg-[#D0BCFF] p-4 rounded-2xl text-black my-4">
      <h3 className="text-lg font-semibold mb-2">Sun Schedule</h3>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Sunrise size={20} />
          <div>
            <p className="text-sm opacity-80">Sunrise</p>
            <p className="text-xl font-bold">{dayData.astro.sunrise}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Sunset size={20} />
          <div>
            <p className="text-sm opacity-80">Sunset</p>
            <p className="text-xl font-bold">{dayData.astro.sunset}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SunriseSunset;