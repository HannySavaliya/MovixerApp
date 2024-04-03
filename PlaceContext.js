import React, { createContext, useState } from 'react';

export const PlaceContext = createContext();

export const PlaceProvider = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <PlaceContext.Provider value={{ selectedCity, setSelectedCity }}>
      {children}
    </PlaceContext.Provider>
  );
};
