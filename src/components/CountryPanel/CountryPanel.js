import React from 'react';
import { StyledCountryPanel } from './styles.js';

const CountryPanel = function ({ country }) {
  const { flag, name, population, region, capital } = country;
  return (
    <StyledCountryPanel>
      <h3 className="country-panel__header">{name}</h3>
      <span className="country-panel__detail">
        <strong>Population:</strong>
        {population}
      </span>
      <span className="country-panel__detail">
        <strong>Region:</strong>
        {region}
      </span>
      <span className="country-panel__detail">
        <strong>Capital:</strong>
        {capital}
      </span>
    </StyledCountryPanel>
  );
};

export default CountryPanel;
