import React from 'react';
import { StyledCountriesPage } from './styles.js';
import SearchForm from '../SearchForm/SearchForm.js';
import CountriesList from '../CountriesList/CountriesList.js';
import LoadingPage from '../LoadingPage/LoadingPage.js';

function CountriesPage({ isLoading, isError }) {
  return (
    <StyledCountriesPage>
      <SearchForm />
      {isLoading ? <LoadingPage /> : <CountriesList />}
    </StyledCountriesPage>
  );
}

export default CountriesPage;
