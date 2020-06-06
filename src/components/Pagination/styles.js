import styled from 'styled-components';

export const StyledPagination = styled.nav`
  position: fixed;
  bottom: 0;

  .pagination-list {
    list-style-type: none;
    margin: 0;
    padding: 0 0.5rem;
    background: ${({ theme }) => theme.paginateBg};
    display: flex;
    flex-wrap: wrap;
    border-radius: 25px;
  }

  .page-link {
    height: 50px;
    width: 50px;
    border-radius: 10px;
    padding: 0.5em;
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s linear;
  }

  .page-link:hover {
    color: ${({ theme }) => theme.paginateLinkHoverText};
  }

  .selected {
    background: ${({ theme }) => theme.paginateSelectedLinkBg};
    color: ${({ theme }) => theme.paginateSelectedLinkText};
  }

  .selected:hover {
    color: ${({ theme }) => theme.paginateSelectedLinkText};
  }
`;
