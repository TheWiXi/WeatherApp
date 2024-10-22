import React, { useState } from 'react';
import { Search } from 'lucide-react';

const Header = ({ city, onCityChange }) => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCityChange(searchTerm);
    setIsSearching(false);
  };

  return (
    <header className="fixed  top-0 z-10 flex justify-between items-center mb-4 p-6">
      {isSearching ? (
        <form onSubmit={handleSubmit} className="flex-grow">
          <input 
            type="text" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 rounded-full bg-white/20 text-white"
            placeholder="Enter city name"
          />
        </form>
      ) : (
        <h1 className="text-2xl font-bold text-white pr-20">{city}</h1>
      )}
      <button onClick={() => setIsSearching(!isSearching)} className="ml-2">
        <Search className="text-white" />
      </button>
    </header>
  );
};

export default Header;