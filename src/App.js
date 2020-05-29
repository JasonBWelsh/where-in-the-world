import React, { useState, useEffect, useReducer, useContext } from 'react';
import { countriesReducer } from './reducers/countriesReducer.js';
import axios from 'axios';
// theme
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme/theme.js';
import { GlobalStyles } from './theme/global.js';
// context
import CountriesContext from './context/CountriesContext.js';
// AppBar
import AppBar from './components/AppBar/AppBar.js';
// Countries Page
import CountriesPage from './components/CountriesPage/CountriesPage.js';

function App() {
  const URL = 'https://restcountries.eu/rest/v2/all';

  const [countries, dispatchCountries] = useReducer(countriesReducer, {
    data: [],
    isLoading: false,
    isError: false,
  });

  const [theme, setTheme] = useState('light');
  const [searchTerm, setSearchTerm] = useState('');
  const [regionFilterValue, setRegionFilterValue] = useState('');

  // Pagination related state (minus countries data)
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setCountriesPerPage] = useState(15);

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

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    console.log('DRD `handleFilterChange` log `event`:::', event.target.value);
    setRegionFilterValue(event.target.value);
  };

  // Pagination logic
  //
  // get current countries
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries.data.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  return (
    <CountriesContext.Provider
      value={currentCountries.filter(
        (country) =>
          country.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          country.region.toLowerCase().includes(regionFilterValue)
      )}
    >
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <div className="App">
          <AppBar theme={theme} handleToggleTheme={handleToggleTheme} />
          <CountriesPage
            isLoading={countries.isLoading}
            isError={countries.isError}
            searchTerm={searchTerm}
            regionFilterValue={regionFilterValue}
            handleSearchChange={handleSearchChange}
            handleFilterChange={handleFilterChange}
          />
        </div>
      </ThemeProvider>
    </CountriesContext.Provider>
  );
}

export default App;
