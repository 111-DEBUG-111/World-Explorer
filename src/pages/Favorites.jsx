import React, { useContext, useEffect, useState } from 'react';
import { BookmarkContext } from '../context/BookmarkContext';
import CountryCard from '../components/CountryCard';

const Favorites = () => {
  const { bookmarked } = useContext(BookmarkContext);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchBookmarked = async () => {
      try {
        const res = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population');
        const data = await res.json();
        const filtered = data.filter((country) =>
          bookmarked.includes(country.name.common)
        );
        setCountries(filtered);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBookmarked();
  }, [bookmarked]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">⭐ Your Favorite Countries</h1>
      {countries.length === 0 ? (
        <p>No bookmarked countries yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {countries.map((country) => (
            <CountryCard key={country.name.common} country={country} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
