import React, { useState, useEffect, useReducer, useContext } from 'react';
import { countriesReducer } from './reducers/countriesReducer.js';
import axios from 'axios';
// theme
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme/theme.js';
import { GlobalStyles } from './theme/global.js';
// AppBar
import AppBar from './components/AppBar/AppBar.js';

function App() {
  const URL = 'https://restcountries.eu/rest/v2/all';

  const [countries, dispatchCountries] = useReducer(countriesReducer, {
    data: [],
    isLoading: false,
    isError: false,
  });

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const fetchCountries = async () => {
      dispatchCountries({ type: 'FETCH_COUNTRIES_INIT' });
      try {
        const response = await axios.get(URL);
        console.log(response.data);
        dispatchCountries({
          type: 'FETCH_COUNTRIES_SUCCESS',
          payload: response.data,
        });
      } catch (error) {
        console.log('Something dun goofed:', error);
        dispatchCountries({ type: 'FETCH_COUNTRIES_ERROR' });
      }
    };
    fetchCountries();
  }, []);

  const handleToggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div className="App">
          <AppBar theme={theme} handleToggleTheme={handleToggleTheme} />
          jshfjkhfkjhk
          <span>dgdgd</span>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
