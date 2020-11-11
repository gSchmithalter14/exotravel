import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 55px;
  padding: 0 20px;
  width: 100%;
`;

export const StyledNavLogo = styled.div`
  font-size: 1.2rem;
  padding: 15px 0;

  & > a {
    text-decoration: none;
  }
`;
