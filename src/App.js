import React, { useState, useEffect, useReducer, useContext } from 'react';
import { countriesReducer } from './reducers/countriesReducer.js';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme/theme.js';
import { GlobalStyles } from './theme/global.js';

function App() {
  const URL = 'https://restcountries.eu/rest/v2/all';

  const [countries, dispatchCountries] = useReducer(countriesReducer, {
    data: [],
    isLoading: false,
    isError: false,
  });

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

  return (
    <ThemeProvider theme={lightTheme}>
      <>
        <GlobalStyles />
        <div className="App">
          jshfjkhfkjhk
          <span>dgdgd</span>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
