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

          <div className="data-container">
            <h2 className="country-heading">{selectedCountry.name}</h2>
            <div className="list-column__container">
              <article className="info-block info-block-one">
                <ul className="country-details-list">
                  <li>
                    <strong>Native name: </strong>
                    {selectedCountry.nativeName}
                  </li>
                  <li>
                    <strong>Population: </strong>
                    {selectedCountry.population}
                  </li>
                  <li>
                    <strong>Region: </strong>
                    {selectedCountry.region}
                  </li>
                  <li>
                    <strong>Sub Region: </strong>
                    {selectedCountry.subregion}
                  </li>
                  <li>
                    <strong>Capital: </strong>
                    {selectedCountry.capital}
                  </li>
                </ul>
              </article>
              <article className="info-block info-block-two">
                <ul className="country-details-list">
                  <li>
                    <strong>Top Level Domain: </strong>
                    {selectedCountry.topLevelDomain[0]}
                  </li>
                  {selectedCountry.currencies.map((currency) => (
                    <li key={currency.code}>
                      <strong>Currencies: </strong>
                      {`${currency.name} ${currency.symbol}, `}
                    </li>
                  ))}
                  <li>
                    <strong>Languages: </strong>
                    {selectedCountry.languages.map((language) => (
                      <span
                        key={language.iso639_1}
                      >{`${language.name}, `}</span>
                    ))}
                  </li>
                </ul>
              </article>
            </div>
            <article className="info-block border-countries-block">
              <h3 className="border-contries__heading">Border Countries:</h3>
              <ul className="country-details-list border-countries-list">
                {selectedCountry.borders.map((border) => (
                  <li key={border}>{border}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>
      </StyledCountryDetails>
    );
  }
}

export default CountryDetails;
