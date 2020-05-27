import styled from 'styled-components';

export const StyledSearchForm = styled.form`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  .input-container {
    margin-bottom: 10px;
    padding: 0 0.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: ${({ theme }) => theme.elements};
    box-shadow: 0px 0px 2px 0px ${({ theme }) => theme.input};
    border-radius: 5px;

    @media (min-width: 768px) {
      margin-bottom: 0;
    }
  }

  .search-icon__container {
    height: 100%;
    width: 37px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .search-icon path,
  .search-icon line {
    stroke: ${({ theme }) => theme.input} !important;
  }

  .search-input {
    flex: 1;
    height: 100%;
    border: none;
    padding: 0.5rem;
    background: ${({ theme }) => theme.elements};

    ::placeholder {
      color: ${({ theme }) => theme.input};
    }

    @media (min-width: 768px) {
      min-width: 300px;
    }
  }

  .filter-region__select {
    border: none;
    border-radius: 5px;
    box-shadow: 0px 0px 2px 0px ${({ theme }) => theme.input};
    width: 200px;
    padding: 0.5rem;
    background: ${({ theme }) => theme.elements};
    color: ${({ theme }) => theme.input};
  }
`;
