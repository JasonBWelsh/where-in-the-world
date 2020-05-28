import React from 'react';
import { StyledCountriesPage } from './styles.js';
import SearchForm from '../SearchForm/SearchForm.js';
import CountriesList from '../CountriesList/CountriesList.js';
import LoadingPage from '../LoadingPage/LoadingPage.js';
import ErrorPage from '../ErrorPage/ErrorPage.js';

function CountriesPage({
  isLoading,
  isError,
  searchTerm,
  handleSearchChange,
  handleFilterChange,
  regionFilterValue,
}) {
  return (
    <StyledCountriesPage>
      <SearchForm
        searchTerm={searchTerm}
        regionFilterValue={regionFilterValue}
        handleSearchChange={handleSearchChange}
        handleFilterChange={handleFilterChange}
      />
      {isError && <ErrorPage />}
      {isLoading ? <LoadingPage /> : <CountriesList />}
    </StyledCountriesPage>
  );
}

export default CountriesPage;
