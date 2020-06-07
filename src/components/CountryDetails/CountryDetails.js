import React from 'react';
import { StyledCountryDetails } from './styles.js';
import { Link } from 'react-router-dom';

function CountryDetails() {
  return (
    <StyledCountryDetails>
      <h2>CountryDetails</h2>
      <Link to="/">Back</Link>
    </StyledCountryDetails>
  );
}

export default CountryDetails;
