import React from 'react';
import { StyledCountryDetails } from './styles.js';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

function CountryDetails() {
  const location = useLocation();
  console.log('DRD `CountryDetails` log `location`:::', location);
  const { data } = location;
  console.log('DRD `CountryDetails` log `data`:::', data);
  return (
    <StyledCountryDetails>
      <h2>CountryDetails</h2>
      <Link to="/">Back</Link>
    </StyledCountryDetails>
  );
}

export default CountryDetails;
