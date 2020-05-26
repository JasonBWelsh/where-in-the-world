import React, { useState, useEffect, useReducer, useContext } from 'react';
import { countriesReducer } from './reducers/countriesReducer.js';
import './App.css';
import axios from 'axios';

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
    <div className="App">
      jshfjkhfkjhk
      <span>dgdgd</span>
    </div>
  );
}

export default App;
