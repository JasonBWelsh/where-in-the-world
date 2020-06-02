import React, { useContext } from 'react';
import { StyledCountriesList } from './styles.js';
import CountryPanel from '../CountryPanel/CountryPanel.js';
import CountriesContext from '../../context/CountriesContext.js';

const CountriesList = function () {
  const countries = useContext(CountriesContext);

  return (
    <StyledCountriesList>
      {countries.map((country) => (
        <CountryPanel key={parseInt(country.numericCode)} country={country} />
      ))}
    </StyledCountriesList>
  );
};

export default CountriesList;
