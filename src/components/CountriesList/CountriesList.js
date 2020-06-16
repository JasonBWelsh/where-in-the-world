import React from 'react';
import { StyledCountriesList } from './styles.js';
import { useSelector } from 'react-redux';
import CountryPanel from '../CountryPanel/CountryPanel.js';
import Pagination from '../Pagination/Pagination.js';
import { sortBy } from 'lodash';

const CountriesList = function () {
  const countries = useSelector((state) => state.countries);
  const currentPage = useSelector((state) => state.currentPage);
  const countriesPerPage = useSelector((state) => state.countriesPerPage);
  const searchTerm = useSelector((state) => state.searchTerm);
  const regionFilterValue = useSelector((state) => state.regionFilterValue);
  const sortValue = useSelector((state) => state.sortValue);

  function getSortedCountries(countries, sortValue) {
    switch (sortValue) {
      case 'population_highest': {
        return sortBy(countries, (o) => o.population).reverse();
      }
      case 'population_lowest': {
        return sortBy(countries, (o) => o.population);
      }
      default:
        return countries;
    }
  }

  const sortedCountries = getSortedCountries(countries, sortValue);

  // Pagination logic
  //
  // get current countries
  const handleGetCurrentCountries = (
    sortedCountries,
    currentPage,
    countriesPerPage
  ) => {
    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const currentCountries = sortedCountries
      .filter(
        (country) =>
          country.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          country.region.toLowerCase().includes(regionFilterValue)
      )
      .slice(indexOfFirstCountry, indexOfLastCountry);

    return currentCountries;
  };

  const currentCountries = handleGetCurrentCountries(
    sortedCountries,
    currentPage,
    countriesPerPage
  );

  return (
    <>
      <StyledCountriesList>
        {currentCountries.map((country) => (
          <CountryPanel key={parseInt(country.numericCode)} country={country} />
        ))}
      </StyledCountriesList>
      <Pagination />
    </>
  );
};

export default CountriesList;
