import styled from 'styled-components';

export const StyledPagination = styled.nav`
  position: fixed;
  bottom: 0;

  .pagination-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    border: 1px dotted tomato;
  }

  .page-link {
    margin: 0.2rem;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    padding: 0.5em;
    background: ${({ theme }) => theme.input};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
