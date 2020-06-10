import styled from 'styled-components';

export const StyledCountryDetails = styled.main`
  padding: 52px 1rem 0;
  display: flex;
  flex-direction: column;

  .country-details__nav {
    padding: 3rem 0;
    @media (min-width: 768px) {
      padding: 5rem 0;
    }

    .nav-link {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100px;
      padding: 0.5rem 1rem;
      text-decoration: none;
      background: ${({ theme }) => theme.elements};
      color: ${({ theme }) => theme.text};
      border: 1px solid ${({ theme }) => theme.text};
    }

    .back-arrow {
      height: 20px;
      width: 20px;

      * {
        stroke: ${({ theme }) => theme.text} !important;
      }
    }
  }

  .country-info__container {
    border: 1px dashed grey;
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  /* Data container */
  .data-container {
  }

  .flag {
    width: 100%;
  }
`;
