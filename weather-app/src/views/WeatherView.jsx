import React from 'react';
import CurrentWeather from '../components/weather/CurrentWeader/CurrentWeather';
import WeatherDetails from '../components/weather/WeatherDetails/WeatherDetails';
import HourlyForecast from '../components/weather/HourlyForecast/HourlyForecast';
import DayForecast from '../components/weather/DayForecast/DayForecast';
import ChanceOfRain from '../components/weather/ChanceOfRain/ChanceOfRain';
import SunriseSunset from '../components/weather/SunriseSunset/SunriseSunset';
import TenDayForecast from '../components/weather/TenDayForecast/TenDayForecast';

const WeatherView = ({ data, viewMode, onViewChange }) => {
  
  return (
    <div>
      <CurrentWeather data={data} />
      <div className="flex justify-around space-x-2 my-4">
        <button 
          onClick={() => onViewChange('today')}
          className={`px-4 py-2 rounded-full ${viewMode === 'today' ? 'bg-[#D0BCFF]' : 'bg-[#FFFFFF]'} text-black`}
        >
          Today
        </button>
        <button 
          onClick={() => onViewChange('tomorrow')}
          className={`px-4 py-2 rounded-full ${viewMode === 'tomorrow' ? 'bg-[#D0BCFF]' : 'bg-[#FFFFFF]'} text-black`}
        >
          Tomorrow
        </button>
        <button 
          onClick={() => onViewChange('10days')}
          className={`px-4 py-2 rounded-full ${viewMode === '10days' ? 'bg-[#D0BCFF]' : 'bg-[#FFFFFF]'} text-black`}
        >
          10 days
        </button>
      </div>
      {viewMode !== '10days' && (
        <>
          <WeatherDetails data={data} viewMode={viewMode} />
          <HourlyForecast data={data} viewMode={viewMode} />
          <DayForecast data={data} viewMode={viewMode} />
          <ChanceOfRain data={data} viewMode={viewMode} />
          <SunriseSunset data={data} viewMode={viewMode} />
        </>
      )}
      {viewMode === '10days' && (
        <TenDayForecast data={data} />
      )}
    </div>
  );
};

export default WeatherView;