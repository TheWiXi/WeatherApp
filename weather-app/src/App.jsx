import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './components/header/Header';
import WeatherView from './views/WeatherView';
import { useWeather } from './hooks/useWeather';

const queryClient = new QueryClient();

function App() {
  const [city, setCity] = useState('Floridablanca, Colombia');
  const { data, isLoading, error } = useWeather(city);
  const [viewMode, setViewMode] = useState('today');

  const handleCityChange = (newCity) => {
    setCity(newCity);
  };

  const handleViewChange = (mode) => {
    setViewMode(mode);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="min-h-screen bg-purple-100">
      <div className="max-w-md mx-auto p-0">
        <Header city={city} onCityChange={handleCityChange} />
        <WeatherView 
          data={data} 
          viewMode={viewMode} 
          onViewChange={handleViewChange} 
        />
      </div>
    </div>
  );
}

export default function WrappedApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}