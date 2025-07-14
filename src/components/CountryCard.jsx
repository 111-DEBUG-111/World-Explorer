import React from 'react';
import { Link } from 'react-router-dom';

const CountryCard = ({ country }) => {
  return (
    <Link to={`/country/${country.name.common}`}>
      <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
        <img src={country.flags.png} alt={country.name.common} className="w-full h-40 object-cover rounded" />
        <h2 className="text-lg font-semibold mt-2">{country.name.common}</h2>
        <p>Capital: {country.capital}</p>
        <p>Region: {country.region}</p>
        <p>Population: {country.population.toLocaleString()}</p>
      </div>
    </Link>
  );
};

export default CountryCard;
