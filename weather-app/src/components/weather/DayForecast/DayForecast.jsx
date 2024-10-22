import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';


const DayForecast = ({ data, viewMode }) => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Satur'];
  const hourlyData = data?.forecast?.forecastday.map(forecastDay => {
    const date = new Date(forecastDay.date);
    const dayName = daysOfWeek[date.getDay()]; // Obtiene el nombre del día de la semana

    // Mapea cada hora dentro de cada día de la semana
    return forecastDay.hour.map(hour => ({
      day: dayName, // Nombre del día
      time: new Date(hour.time).getHours(),
      temp: hour.temp_c,
    }));
  }).flat();

  const dayData = viewMode === 'today' 
    ? data.forecast.forecastday[0] 
    : data.forecast.forecastday[1];

  return (
    <div className="bg-[#D0BCFF] rounded-2xl text-black m-3 p-2">
      <div className="bg-white p-6 rounded-2xl mt-1 mb-2">
      <h2 className="text-lg font-semibold mb-4">Weekly Forecast</h2>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={hourlyData}>
          <XAxis dataKey="day" /> 
          <YAxis />
          <Tooltip />
          <Line 
            type="monotone" 
            dataKey="temp" 
            stroke="#6B4EFF" 
            strokeWidth={2} 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
      <h3 className="text-lg font-semibold mb-2">Day Overview</h3>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm opacity-80">High Temperature</p>
          <p className="text-xl font-bold">{Math.round(dayData.day.maxtemp_c)}°</p>
        </div>
        <div>
          <p className="text-sm opacity-80">Low Temperature</p>
          <p className="text-xl font-bold">{Math.round(dayData.day.mintemp_c)}°</p>
        </div>
        <div>
          <p className="text-sm opacity-80">Humidity</p>
          <p className="text-xl font-bold">{dayData.day.avghumidity}%</p>
        </div>
      </div>
    </div>
  );
};


export default DayForecast;