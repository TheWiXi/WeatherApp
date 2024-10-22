import React from 'react';
import { Wind, Droplets, Gauge, Sun } from 'lucide-react';


const date = new Date();

  const months = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  const month = months[date.getMonth()]; // Mes
  const day = date.getDate(); // Día del mes
  const hours = date.getHours(); // Hora
  const minutes = date.getMinutes().toString().padStart(2, "0");

const CurrentWeather = ({ data }) => {
  const current = data.current;
  const location = data.location;
  if (!data) return null;

  return (
    
    <div className="relative overflow-hidden rounded-b-3xl w-full max-h-[45vh] absolute z-[1] top-0 text-white p-6 pt-28 bg-cover bg-center h-screen" style={{ backgroundImage: "url('/headerimg.png')" }}>
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-6xl font-bold">{Math.round(current.temp_c)}°</h2>
          <p className="text-xl mt-2">Feels like {Math.round(current.feelslike_c)}°</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={current.condition.icon} alt={current.condition.text} className="w-20 h-20" />
          <p className="mt-2 text-xl">{current.condition.text}</p>
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <h3>{month} {day}, {hours}:{minutes}</h3>
        <div className="flex flex-col mt-4">
          <p className="text-sm">
            Day {Math.round(data.forecast.forecastday[0].day.maxtemp_c)}° 
          </p>
          <p className="text-sm">
            Night {Math.round(data.forecast.forecastday[0].day.mintemp_c)}°
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent"></div>
    </div>
  );
};

export default CurrentWeather;