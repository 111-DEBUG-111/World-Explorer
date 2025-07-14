import React, { createContext, useEffect, useState } from 'react';

export const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
  const [bookmarked, setBookmarked] = useState([]);

  // Load from localStorage on app start
  useEffect(() => {
    const stored = localStorage.getItem('bookmarkedCountries');
    if (stored) setBookmarked(JSON.parse(stored));
  }, []);

  // Save to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('bookmarkedCountries', JSON.stringify(bookmarked));
  }, [bookmarked]);

  const toggleBookmark = (countryName) => {
    if (bookmarked.includes(countryName)) {
      setBookmarked(bookmarked.filter((name) => name !== countryName));
    } else {
      setBookmarked([...bookmarked, countryName]);
    }
  };

  return (
    <BookmarkContext.Provider value={{ bookmarked, toggleBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
};
