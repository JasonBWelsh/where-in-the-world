import React from 'react';
import { StyledCountryPanel } from './styles.js';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { formatPopulation } from '../../utils/utilities';

const CountryPanel = function ({ country }) {
  const { flag, name, population, region, capital } = country;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: 'SET_SELECTED_COUNTRY', payload: country });
    localStorage.setItem('selectedCountry', JSON.stringify(country));
  };
  return (
    <StyledCountryPanel>
      <div className="flag-container">
        <img src={flag} className="country-flag" alt={`Flag of ${name}`} />
      </div>
      <div className="info-container">
        <h3 className="country-panel__header">{name}</h3>
        <span className="country-panel__detail">
          <strong>Population:</strong> {formatPopulation(population)}
        </span>
        <span className="country-panel__detail">
          <strong>Region:</strong> {region}
        </span>
        <span className="country-panel__detail">
          <strong>Capital:</strong> {capital}
        </span>
      </div>
      <Link
        to="/country-details"
        className="country-details__button"
        onClick={handleClick}
      >
        Details
      </Link>
    </StyledCountryPanel>
  );
};

export default CountryPanel;
