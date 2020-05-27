import React from 'react';
import { StyledCountriesPage } from './styles.js';
import SearchForm from '../SearchForm/SearchForm.js';
import CountriesList from '../CountriesList/CountriesList.js';

function CountriesPage() {
  return (
    <StyledCountriesPage>
      <SearchForm />
      <CountriesList />
    </StyledCountriesPage>
  );
}

export default CountriesPage;
