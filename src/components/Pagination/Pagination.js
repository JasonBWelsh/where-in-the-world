import React from 'react';
import { StyledPagination } from './styles.js';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function Pagination() {
  const dispatch = useDispatch();
  const countriesPerPage = useSelector((state) => state.countriesPerPage);
  const totalCountries = useSelector((state) => state.countries.length);
  const currentPage = useSelector((state) => state.currentPage);
  const pageNumbers = [];

  // calculate pageNumbers
  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i += 1) {
    pageNumbers.push(i);
  }
  return (
    <StyledPagination>
      <ul className="pagination-list">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <Link
              to="!"
              className={`page-link ${number === currentPage && 'selected'}`}
              onClick={() =>
                dispatch({ type: 'SET_CURRENT_PAGE', payload: number })
              }
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </StyledPagination>
  );
}

export default Pagination;
