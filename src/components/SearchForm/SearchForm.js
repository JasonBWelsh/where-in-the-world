import React from 'react';
import { StyledSearchForm } from './styles.js';
import { ReactComponent as SearchIcon } from '../../icons/search-outline.svg';

function SearchForm({
  searchTerm,
  regionFilterValue,
  handleSearchChange,
  handleFilterChange,
}) {
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
