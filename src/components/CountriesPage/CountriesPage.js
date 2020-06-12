import React from 'react';
import { StyledCountriesPage } from './styles.js';
import { useSelector } from 'react-redux';
import SearchForm from '../SearchForm/SearchForm.js';
import CountriesList from '../CountriesList/CountriesList.js';
import LoadingPage from '../LoadingPage/LoadingPage.js';
import ErrorPage from '../ErrorPage/ErrorPage.js';

function CountriesPage({
  searchTerm,
  handleSearchChange,
  handleFilterChange,
  regionFilterValue,
}) {
  const isLoading = useSelector((state) => state.isLoading);
  const isError = useSelector((state) => state.isError);

  return (
    <StyledCountriesPage>
      <SearchForm
        handleSearchChange={handleSearchChange}
        handleFilterChange={handleFilterChange}
      />
      {isError && <ErrorPage />}
      {isLoading ? <LoadingPage /> : <CountriesList />}
    </StyledCountriesPage>
  );
}

export default CountriesPage;
