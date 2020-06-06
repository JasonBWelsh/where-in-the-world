import React from 'react';
import { StyledPagination } from './styles.js';
import { useSelector } from 'react-redux';

function Pagination() {
  const countriesPerPage = useSelector((state) => state.countriesPerPage);
  const totalCountries = useSelector((state) => state.countries.length);
  const pageNumbers = [];

  // calculate pageNumbers
  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i += 1) {
    pageNumbers.push(i);
  }
  return (
    <StyledPagination>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </StyledPagination>
  );
}

export default Pagination;
