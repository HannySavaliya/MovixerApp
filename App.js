import React, { useState } from 'react';
import { PlaceProvider } from './Context/PlaceContext'; 
import Navigation from './navigation/Navigation';
import Store from './Store';
import { Provider } from 'react-redux';
import { ThemeContext } from './Context/ThemeContext';

export default function App() {
  const [theme, setTheme] = useState({mode: "dark"})

  const updateTheme = (newTheme) => {
    let mode;
    if(!newTheme){
      mode = theme.mode === "dark" ? "light" : 'dark'
      newTheme = {mode}
    }
    setTheme(newTheme)
  }

  return (
    <Provider store={Store}>
      <ThemeContext.Provider value={{theme, updateTheme}}>
        <PlaceProvider> 
          <Navigation />
        </PlaceProvider>
      </ThemeContext.Provider>
    </Provider>
  );
}

