import React from 'react';
import { StyledCountriesPage } from './styles.js';
import SearchForm from '../SearchForm/SearchForm.js';

function CountriesPage() {
  return (
    <StyledCountriesPage>
      <SearchForm />
      <div>list</div>
    </StyledCountriesPage>
  );
}

export default CountriesPage;
