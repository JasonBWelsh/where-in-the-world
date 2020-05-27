import React from 'react';
import { StyledSearchForm } from './styles.js';
import { ReactComponent as SearchIcon } from '../../icons/search-outline.svg';

const SearchForm = function () {
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
          value={''}
        />
      </div>

      <select className="filter-region__select" />
    </StyledSearchForm>
  );
};

export default SearchForm;
