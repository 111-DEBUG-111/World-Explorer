import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
        const data = await res.json();
        setCountry(data[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching country details:", error);
        setLoading(false);
      }
    };

    fetchCountry();
  }, [name]);

  if (loading) return <p className="p-4 text-center">Loading country details...</p>;
  if (!country) return <p className="p-4 text-center text-red-500">Country not found</p>;

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{country.name.common}</h1>
      <img src={country.flags.png} alt={country.name.common} className="w-full h-60 object-contain mb-4" />
      
      <p><strong>Official Name:</strong> {country.name.official}</p>
      <p><strong>Capital:</strong> {country.capital?.[0]}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Languages:</strong> {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</p>
      <p><strong>Currencies:</strong> {country.currencies ? Object.values(country.currencies).map(c => c.name).join(', ') : 'N/A'}</p>
      <p><strong>Timezones:</strong> {country.timezones.join(', ')}</p>
      <p><strong>Google Maps:</strong> <a className="text-blue-600 underline" href={country.maps.googleMaps} target="_blank" rel="noreferrer">View on Map</a></p>
    </div>
  );
};

export default CountryDetail;
