import styled from 'styled-components';

export const StyledSearchForm = styled.form`
  border: 1px dashed tomato;
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
  }

  .search-icon__container {
    height: 100%;
    width: 37px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .search-input {
    flex: 1;
    height: 100%;
    border: none;
    padding: 0.5rem;

    @media (min-width: 768px) {
      min-width: 300px;
    }
  }
`;
