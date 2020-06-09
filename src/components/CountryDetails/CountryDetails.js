import React, { useState, useEffect } from 'react';
import { StyledCountryDetails } from './styles.js';
import { Link } from 'react-router-dom';
import ErrorPage from '../ErrorPage/ErrorPage.js';
import { ReactComponent as BackArrow } from '../../icons/arrow-back-outline.svg';

function CountryDetails() {
  const [selectedCountry, setSelectedCountry] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const item = localStorage.getItem('selectedCountry');
    setSelectedCountry(JSON.parse(item));
    setIsLoading(false);
  }, []);

  if (isLoading || !selectedCountry) {
    return <ErrorPage />;
  }

  if (selectedCountry) {
    return (
      <StyledCountryDetails>
        <nav className="country-details__nav">
          <Link to="/" className="nav-link">
            <BackArrow className="back-arrow" />
            Back
          </Link>
        </nav>

        <section className="country-info__container">
          <div className="flag-container">
            <img
              src={selectedCountry.flag}
              className="flag"
              alt={`flag of ${selectedCountry.name}`}
            />
          </div>
          <div className="data-container">data container</div>
        </section>
      </StyledCountryDetails>
    );
  }
}

export default CountryDetails;
