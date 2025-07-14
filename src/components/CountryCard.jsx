import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BookmarkContext } from '../context/BookmarkContext';

const CountryCard = ({ country }) => {
  const { bookmarked, toggleBookmark } = useContext(BookmarkContext);
  const isBookmarked = bookmarked.includes(country.name.common);

  return (
    <div className="border rounded-xl p-4 shadow relative hover:shadow-lg transition">
      <button
        onClick={() => toggleBookmark(country.name.common)}
        className="absolute top-2 right-2 text-xl"
        title={isBookmarked ? 'Remove Bookmark' : 'Add to Bookmark'}
      >
        {isBookmarked ? '⭐' : '☆'}
      </button>

      <Link to={`/country/${country.name.common}`}>
        <img src={country.flags.png} alt={country.name.common} className="w-full h-40 object-cover rounded" />
        <h2 className="text-lg font-semibold mt-2">{country.name.common}</h2>
        <p>Capital: {country.capital?.[0]}</p>
        <p>Region: {country.region}</p>
        <p>Population: {country.population.toLocaleString()}</p>
      </Link>
    </div>
  );
};

export default CountryCard;
