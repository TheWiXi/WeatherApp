import React from 'react';

const TenDayForecast = ({ data }) => {
  return (
    // <div className="bg-[#D0BCFF] p-4 rounded-2xl text-black m-4">
      <div className="p-4 space-y-4">
        {data.forecast.forecastday.map((day, index) => (
          <div key={index} className="bg-[#EBDEFF] w-full h-[65px] p-1 rounded-lg flex justify-around items-center flex items-center justify-between">
            <div className="w-24">
              <p>{new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}</p>
              <p className="text-sm">{day.day.condition.text}</p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-bold">{Math.round(day.day.maxtemp_c)}°</span>
              <span className="opacity-60">{Math.round(day.day.mintemp_c)}°</span>
            </div>
            <div className="flex items-center">
              <img src={day.day.condition.icon} alt={day.day.condition.text} className="w-8 h-8" />
            </div>
          </div>
        ))}
      </div>
    // </div> 
  );
};

export default TenDayForecast;