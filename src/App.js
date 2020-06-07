import React, { useState, useEffect, useReducer, useContext } from 'react';
import { countriesReducer } from './reducers/countriesReducer.js';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// redux
import { useSelector, useDispatch } from 'react-redux';
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
// CountryDetails Page
import CountryDetails from './components/CountryDetails/CountryDetails.js';

function App() {
  const URL = 'https://restcountries.eu/rest/v2/all';

  const dispatch = useDispatch();

  const countries = useSelector((state) => state.countries);
  const theme = useSelector((state) => state.theme);
  const searchTerm = useSelector((state) => state.searchTerm);
  const regionFilterValue = useSelector((state) => state.regionFilterValue);
  // Pagination related state (minus countries data)
  const currentPage = useSelector((state) => state.currentPage);
  const countriesPerPage = useSelector((state) => state.countriesPerPage);

  useEffect(() => {
    const fetchCountries = async () => {
      dispatch({ type: 'FETCH_COUNTRIES_INIT' });
      try {
        const response = await axios.get(URL);
        console.log(response.data);
        dispatch({
          type: 'FETCH_COUNTRIES_SUCCESS',
          payload: response.data,
        });
      } catch (error) {
        console.log('Something dun goofed:', error);
        dispatch({ type: 'FETCH_COUNTRIES_ERROR' });
      }
    };
    fetchCountries();
  }, [dispatch]);

  const handleToggleTheme = () => {
    theme === 'light'
      ? dispatch({ type: 'SET_THEME_DARK' })
      : dispatch({ type: 'SET_THEME_LIGHT' });
  };

  const handleSearchChange = (event) => {
    dispatch({ type: 'SET_SEARCH_TERM', payload: event.target.value });
  };

  const handleFilterChange = (event) => {
    dispatch({ type: 'SET_REGION_FILTER_VALUE', payload: event.target.value });
  };

  // Pagination logic
  //
  // get current countries
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  return (
    <Router>
      <CountriesContext.Provider /* TODO: Find solution to pass this from store and not use Context */
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
            <Switch>
              <Route exact path={['/', '/!#']}>
                <CountriesPage
                  isLoading={countries.isLoading}
                  isError={countries.isError}
                  searchTerm={searchTerm}
                  regionFilterValue={regionFilterValue}
                  handleSearchChange={handleSearchChange}
                  handleFilterChange={handleFilterChange}
                />
              </Route>
              <Route path="/country-details">
                <CountryDetails />
              </Route>
            </Switch>
          </div>
        </ThemeProvider>
      </CountriesContext.Provider>
    </Router>
  );
}

export default App;
