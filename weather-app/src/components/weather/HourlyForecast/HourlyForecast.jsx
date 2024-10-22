import React from 'react';

const HourlyForecast = ({ data, viewMode }) => {
  const hourlyData = viewMode === 'today' 
    ? data.forecast.forecastday[0].hour.slice(new Date().getHours())
    : data.forecast.forecastday[1].hour;

  return (
    <div className="bg-[#D0BCFF] p-4 rounded-2xl text-black m-4 p-6">
      <h3 className="text-lg font-semibold mb-2">Hourly Forecast</h3>
      <div className="flex overflow-x-auto">
        {hourlyData.map((hour, index) => (
          <div key={index} className="flex-shrink-0 text-center mr-4">
            <p>{new Date(hour.time).getHours()}:00</p>
            <img src={hour.condition.icon} alt={hour.condition.text} className="w-10 h-10 mx-auto" />
            <p className="font-bold">{Math.round(hour.temp_c)}°</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;