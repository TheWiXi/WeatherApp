import React from 'react';
import { Cloud, CloudRain } from 'lucide-react';

const ChanceOfRain = ({ data, viewMode }) => {
  const dayData = viewMode === 'today' 
    ? data.forecast.forecastday[0] 
    : data.forecast.forecastday[1];

  return (
    <div className="bg-[#D0BCFF] p-4 rounded-2xl text-black my-4">
      <h3 className="text-lg font-semibold mb-2">Precipitation</h3>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <CloudRain size={20} />
          <div>
            <p className="text-sm opacity-80">Chance of Rain</p>
            <p className="text-xl font-bold">{dayData.day.daily_chance_of_rain}%</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Cloud size={20} />
          <div>
            <p className="text-sm opacity-80">Total Precipitation</p>
            <p className="text-xl font-bold">{dayData.day.totalprecip_mm} mm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChanceOfRain;