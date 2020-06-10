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
    margin: 0 0 0.3rem 0.3rem;
    padding: 0.5rem;
    background: ${({ theme }) => theme.elements};
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    border: 1px solid ${({ theme }) => theme.text};
    width: 80px;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-3px);
    }
  }
`;
