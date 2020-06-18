import React, { useState, useEffect } from 'react';
import { StyledCountryDetails } from './styles.js';
import { Link } from 'react-router-dom';
import ErrorPage from '../ErrorPage/ErrorPage.js';
import { ReactComponent as BackArrow } from '../../icons/arrow-back-outline.svg';
import { useSelector } from 'react-redux';
import { formatPopulation } from '../../utils/utilities';

function CountryDetails() {
  const [selectedCountry, setSelectedCountry] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const countries = useSelector((state) => state.countries);

  useEffect(() => {
    setIsLoading(true);
    const item = localStorage.getItem('selectedCountry');
    setSelectedCountry(JSON.parse(item));
    setIsLoading(false);
  }, []);

  const getFullBorderCountryName = (borderCountry) => {
    const countryMatch = countries.filter(
      (country) => country.alpha3Code === borderCountry
    )[0];

    if (countryMatch && countryMatch.hasOwnProperty('name')) {
      const fullName = countryMatch.name;
      return fullName;
    }
  };

  const handleBorderCouontriesClick = (name) => {
    const targetCountry = countries.filter(
      (country) => country.name === name
    )[0];

    setSelectedCountry(targetCountry);
  };

  if (isLoading || !selectedCountry) {
    return <ErrorPage />;
  }

  if (selectedCountry) {
    return (
      <StyledCountryDetails>
        <nav className="country-details__nav">
          <Link to="/" className="nav-link">
            <BackArrow className="back-arrow" />
            Home
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
                    {formatPopulation(selectedCountry.population)}
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
                  <li>
                    <strong>Currencies: </strong>
                    {selectedCountry.currencies.map((currency) => (
                      <span
                        key={currency.code}
                      >{`${currency.name} ${currency.symbol},`}</span>
                    ))}
                  </li>
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
              <h3 className="border-countries__heading">Border Countries:</h3>
              <ul className="country-details-list border-countries-list">
                {selectedCountry.borders.map((border) => {
                  const fullBorderCountryName = getFullBorderCountryName(
                    border
                  );
                  return (
                    <li key={border}>
                      <button
                        className="border-country__button"
                        onClick={() =>
                          handleBorderCouontriesClick(fullBorderCountryName)
                        }
                      >
                        {fullBorderCountryName}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </article>
          </div>
        </section>
      </StyledCountryDetails>
    );
  }
}

export default CountryDetails;
