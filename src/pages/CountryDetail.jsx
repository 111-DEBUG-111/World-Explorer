import React from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
  const { name } = useParams();

  return (
    <div className="p-4 text-xl">
      Details about: <strong>{name}</strong>
    </div>
  );
};

export default CountryDetail;
