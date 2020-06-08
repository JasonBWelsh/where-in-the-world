import React, { useState, useEffect } from 'react';
import { StyledCountryDetails } from './styles.js';
import { Link } from 'react-router-dom';

function CountryDetails() {
  const [selectedCountry, setSelectedCountry] = useState();
  useEffect(() => {
    const item = localStorage.getItem('selectedCountry');
    setSelectedCountry(item);
  }, []);

  if (selectedCountry) {
    const country = JSON.parse(selectedCountry);
    console.log('DRD inside `CountryDetails` log `country`:::', country);
  }

  return (
    <StyledCountryDetails>
      <h2>CountryDetails</h2>
      <Link to="/">Back</Link>
    </StyledCountryDetails>
  );
}

export default CountryDetails;
