import React from 'react';
import { Wind, Droplets, Gauge, Sun } from 'lucide-react';

const WeatherDetails = ({ data, viewMode }) => {
  const dayData = viewMode === 'today' ? data.forecast.forecastday[0] : data.forecast.forecastday[1];

  return (
    <div className="grid grid-cols-2 gap-4 my-4 p-4">
      <div className="bg-[#D0BCFF] p-4 rounded-2xl text-black">
        <div className="flex items-center gap-2">
          <Wind size={18} />
          <span>Wind speed</span>
        </div>
        <div className="mt-2 text-2xl font-semibold">{dayData.day.maxwind_kph} km/h</div>
      </div>
      <div className="bg-[#D0BCFF] p-4 rounded-2xl text-black">
        <div className="flex items-center gap-2">
          <Droplets size={18} />
          <span>Rain chance</span>
        </div>
        <div className="mt-2 text-2xl font-semibold">{dayData.day.daily_chance_of_rain}%</div>
      </div>
      <div className="bg-[#D0BCFF] p-4 rounded-2xl text-black">
        <div className="flex items-center gap-2">
          <Gauge size={18} />
          <span>Pressure</span>
        </div>
        <div className="mt-2 text-2xl font-semibold">{data.current.pressure_mb} hPa</div>
      </div>
      <div className="bg-[#D0BCFF] p-4 rounded-2xl text-black">
        <div className="flex items-center gap-2">
          <Sun size={18} />
          <span>UV Index</span>
        </div>
        <div className="mt-2 text-2xl font-semibold">{dayData.day.uv}</div>
      </div>
    </div>
  );
};

export default WeatherDetails;