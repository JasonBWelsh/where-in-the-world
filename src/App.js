import React, { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// redux
import { useSelector, useDispatch } from 'react-redux';
// theme
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme/theme.js';
import { GlobalStyles } from './theme/global.js';
// AppBar
import AppBar from './components/AppBar/AppBar.js';
// Countries Page
import CountriesPage from './components/CountriesPage/CountriesPage.js';
// CountryDetails Page
import CountryDetails from './components/CountryDetails/CountryDetails.js';

function App() {
  const URL = 'https://restcountries.eu/rest/v2/all';

  const dispatch = useDispatch();

  const theme = useSelector((state) => state.theme);

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

  return (
    <Router>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <div className="App">
          <AppBar theme={theme} handleToggleTheme={handleToggleTheme} />
          <Switch>
            <Route exact path={['/', '/!']}>
              <CountriesPage
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
    </Router>
  );
}

export default App;
