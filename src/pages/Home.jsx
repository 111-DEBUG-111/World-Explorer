import React, { useEffect, useState } from 'react';
import CountryCard from '../components/CountryCard';
import SearchBar from '../components/SearchBar';
import FilterDropdown from '../components/FilterDropdown';
import Spinner from '../components/Spinner';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(
          'https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population'
        );
        const data = await res.json();
        setCountries(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching countries:', error);
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.common
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesRegion =
      selectedRegion === 'All' || country.region === selectedRegion;

    return matchesSearch && matchesRegion;
  });

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">🌍 World Explorer</h1>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
        <div>
          <FilterDropdown
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
          />
        </div>
      </div>

      {loading ? (
        <p className="text-center"><Spinner></Spinner></p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCountries.map((country) => (
            <CountryCard key={country.name.common} country={country} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
