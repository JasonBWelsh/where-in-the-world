import styled from 'styled-components';

export const StyledCountryPanel = styled.div`
  margin: 0.5rem 0;
  border: 1px solid ${({ theme }) => theme.input};
  border-radius: 5px;
  width: 275px;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.elements};

  .flag-container {
    /* width: 100%; */

    .country-flag {
      width: 100%;
      max-height: 182px;
    }
  }

  .info-container {
    padding: 10px;
    display: flex;
    flex-direction: column;

    .country-panel__detail {
      margin-bottom: 10px;
      font-size: 14px;
    }
  }

  .country-details__button {
    padding: 0.5rem;
  }
`;
