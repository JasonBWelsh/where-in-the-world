import styled from 'styled-components';

export const StyledAppBar = styled.header`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  background: ${({ theme }) => theme.elements};

  .header-container {
    flex: 1;
    max-width: 1300px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .main-header {
    margin: 0;
    font-size: 1rem;
  }

  .theme-toggle__button {
    padding: 0.5rem 1 rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.text};
    background: transparent;
    border: none;
    cursor: pointer;
  }

  .theme-toggle__icon {
    margin-right: 10px;
  }

  /* .theme-toggle__icon path, */
  .theme-toggle__icon line,
  .theme-toggle__icon circle {
    fill: ${({ theme }) => theme.text} !important;
    stroke: ${({ theme }) => theme.text} !important;
  }
`;
