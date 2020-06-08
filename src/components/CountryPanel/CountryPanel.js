import React from 'react';
import { StyledCountryPanel } from './styles.js';
import { Link } from 'react-router-dom';

const CountryPanel = function ({ country }) {
  const { flag, name, population, region, capital } = country;
  return (
    <StyledCountryPanel>
      <div className="flag-container">
        <img src={flag} className="country-flag" alt={`Flag of ${name}`} />
      </div>
      <div className="info-container">
        <h3 className="country-panel__header">{name}</h3>
        <span className="country-panel__detail">
          <strong>Population:</strong> {population}
        </span>
        <span className="country-panel__detail">
          <strong>Region:</strong> {region}
        </span>
        <span className="country-panel__detail">
          <strong>Capital:</strong> {capital}
        </span>
      </div>
      <Link
        to={{
          pathname: '/country-details',
          data: country,
        }}
        className="country-details__button"
      >
        Details
      </Link>
    </StyledCountryPanel>
  );
};

export default CountryPanel;
