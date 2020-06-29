import React from 'react';
import { StyledSearchForm } from './styles.js';
import { ReactComponent as SearchIcon } from '../../icons/search-outline.svg';
import { useSelector, useDispatch } from 'react-redux';

function SearchForm({ handleSearchChange, handleFilterChange }) {
  const dispatch = useDispatch();

  const searchTerm = useSelector((state) => state.searchTerm);
  const regionFilterValue = useSelector((state) => state.regionFilterValue);
  const sortValue = useSelector((state) => state.sortValue);

  const handleSortCountriesChange = (event) => {
    dispatch({ type: 'SET_SORT_VALUE', payload: event.target.value });
  };

  return (
    <StyledSearchForm>
      <div className="input-container">
        <div className="search-icon__container">
          <SearchIcon className="search-icon" height="20px" width="20px" />
        </div>
        <input
          type="text"
          className="search-input"
          placeholder="Search for a country..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <select
        className="sort-countries__select"
        value={sortValue}
        onChange={handleSortCountriesChange}
      >
        <option disabled value="">
          Sort by...
        </option>
        <option value="population_highest">Highest Population</option>
        <option value="population_lowest">Lowest Population</option>
        <option value="most_languages">Most Languages</option>
        <option value="least_languages">Least Languages</option>
        <option value="most_border_countries">Most Border Countries</option>
        <option value="least_border_countries">Least Border Countries</option>
        <option value="most_currencies">Most Currencies</option>
        <option value="least_currencies">Least Currencies</option>
        <option value="no_sort">No Sort</option>
      </select>

      <select
        className="filter-region__select"
        value={regionFilterValue}
        onChange={handleFilterChange}
      >
        <option disabled value="">
          Filter by Region
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
        <option value={''}>No Filter</option>
      </select>
    </StyledSearchForm>
  );
}

export default SearchForm;
