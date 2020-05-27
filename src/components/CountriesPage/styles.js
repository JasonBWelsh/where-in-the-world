import styled from 'styled-components';

export const StyledCountriesPage = styled.main`
  padding-top: 52px; /*  for absolute poitioned app bar height */
  padding-left: 1rem;
  padding-right: 1rem;
  background: ${({ theme }) => theme.background};
  min-height: 100vh;
`;
