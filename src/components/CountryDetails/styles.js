import styled from 'styled-components';

export const StyledCountryDetails = styled.main`
  padding: 52px 1rem 3rem;
  display: flex;
  flex-direction: column;

  .country-details__nav {
    padding: 3rem 0;
    @media (min-width: 768px) {
      padding: 3rem 0;
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
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  /* Flag container */
  .flag-container {
    @media (min-width: 768px) {
      flex-basis: 43%;
    }

    .flag {
      width: 100%;
    }
  }

  /* Data container */
  .data-container {
    @media (min-width: 768px) {
      flex-basis: 50%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }

    .list-column__container {
      @media (min-width: 768px) {
        display: flex;
        /* justify-content: space-between; */
      }
    }

    .info-block {
      margin-bottom: 2rem;
      flex: 1;
    }

    .info-block-one {
      @media (min-width: 768px) {
        margin-right: 3rem;
      }
    }

    .country-details-list {
      margin: 0;
      padding: 0;
      list-style-type: none;

      li {
        margin-bottom: 0.5rem;
      }
    }

    /* Border countries block */

    .border-countries-block {
      display: flex;
      flex-direction: column;

      @media (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
      }
    }

    .border-countries__heading {
      font-size: 1rem;

      @media (min-width: 768px) {
        margin-right: 2rem;
      }
    }

    .border-countries-list {
      display: flex;
      flex-wrap: wrap;

      .border-country__button {
        margin: 0.5rem;
        border: 1px solid ${({ theme }) => theme.text};
        padding: 0.5rem 1rem;
        background: ${({ theme }) => theme.elements};
        color: ${({ theme }) => theme.text};
        cursor: pointer;
      }
    }
  }
`;
