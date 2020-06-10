import styled from 'styled-components';

export const StyledPagination = styled.nav`
  position: fixed;
  bottom: 0;

  .pagination-list {
    list-style-type: none;
    margin: 0;
    /* padding: 0 0.5rem;
    background: ${({ theme }) => theme.paginateBg}; */
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    border-radius: 25px;
  }

  .page-link {
    margin: .2rem;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    /* border: 1px solid ${({ theme }) => theme.text}; */
    border: none; 
    padding: 0.5em;
    background: ${({ theme }) => theme.paginateBg};
    color: ${({ theme }) => theme.paginateText};
    text-decoration: none;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 5px 5px 3px 0px rgba(0,0,0,0.75);
    transition: all 0.3s linear;
  }

  .page-link:hover {
    color: ${({ theme }) => theme.paginateLinkHoverText};
    transform: scale(1.1);
  }

  .selected {
    background: ${({ theme }) => theme.paginateSelectedLinkBg};
    color: ${({ theme }) => theme.paginateSelectedLinkText};
    transform: translateY(-5px);
    border-radius: 0px;
  }

  .selected:hover {
    color: ${({ theme }) => theme.paginateSelectedLinkText};
  }
`;
