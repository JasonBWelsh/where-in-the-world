import styled from 'styled-components';

export const StyledCountryPanel = styled.div`
  margin: 0.5rem 0;
  /* border-bottom: 1px solid ${({ theme }) => theme.input}; */
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  padding: 0.5rem;
  border-radius: 5px;
  width: 275px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.elements};

  .flag-container {
    /* width: 100%; */
    border: 1px solid ${({ theme }) => theme.flagBorder};
    height: 75px;

    .country-flag {
      max-width: 100%;
      max-height: 100%;
      /* max-height: 182px; */
    }
  }

  .info-container {
    padding: 10px;
    display: flex;
    flex-direction: column;
    text-align: center;

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
    border: 1px solid ${({ theme }) => theme.input};
    width: 80px;
    transition: all 0.3s ease;

    &:hover {
      background: ${({ theme }) => theme.input};
      color: ${({ theme }) => theme.elements};
    }
  }
`;
