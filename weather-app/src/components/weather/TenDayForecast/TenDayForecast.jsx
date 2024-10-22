import React from 'react';

const TenDayForecast = ({ data }) => {
  return (
    <div className="bg-[#D0BCFF] p-4 rounded-2xl text-black my-4">
      <h3 className="text-lg font-semibold mb-4">10-Day Forecast</h3>
      <div className="space-y-4">
        {data.forecast.forecastday.map((day, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="w-24">
              <p>{new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}</p>
            </div>
            <div className="flex items-center">
              <img src={day.day.condition.icon} alt={day.day.condition.text} className="w-8 h-8" />
              <p className="ml-2 text-sm">{day.day.condition.text}</p>
            </div>
            <div className="flex gap-2">
              <span className="font-bold">{Math.round(day.day.maxtemp_c)}°</span>
              <span className="opacity-60">{Math.round(day.day.mintemp_c)}°</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TenDayForecast;