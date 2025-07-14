import React from 'react';

const Spinner = () => {
  return (
    <div className="text-center my-10">
      <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
      <p className="mt-2 text-gray-600">Loading...</p>
    </div>
  );
};

export default Spinner;
