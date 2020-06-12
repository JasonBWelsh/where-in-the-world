import React, { useContext } from 'react';
import { StyledCountriesList } from './styles.js';
import { useSelector } from 'react-redux';
import CountryPanel from '../CountryPanel/CountryPanel.js';
import Pagination from '../Pagination/Pagination.js';

const CountriesList = function () {
  const countries = useSelector((state) => state.countries);
  const currentPage = useSelector((state) => state.currentPage);
  const countriesPerPage = useSelector((state) => state.countriesPerPage);
  const searchTerm = useSelector((state) => state.searchTerm);
  const regionFilterValue = useSelector((state) => state.regionFilterValue);

  // Pagination logic
  //
  // get current countries
  const handleGetCurrentCountries = (
    countries,
    currentPage,
    countriesPerPage
  ) => {
    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const currentCountries = countries.slice(
      indexOfFirstCountry,
      indexOfLastCountry
    );

    return currentCountries;
  };

  const currentCountries = handleGetCurrentCountries(
    countries,
    currentPage,
    countriesPerPage
  ).filter(
    (country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      country.region.toLowerCase().includes(regionFilterValue)
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
