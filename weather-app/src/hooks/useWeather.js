/**
 * @hook
 * @description Custom hook para manejar la lógica del clima
 */
import { useQuery } from '@tanstack/react-query';

export const useWeather = (city) => {
  return useQuery({
    queryKey: ['weather', city],
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_WEATHER_API_URL}/forecast.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${city}&days=10&aqi=no`
      );
      if (!response.ok) {
        throw new Error('Weather data could not be fetched');
      }
      return response.json();
    },
  });
};