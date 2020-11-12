import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 55px;
  margin: 10px 10%;
  
  @media screen and (max-width: 600px) {
      margin: 0px;
  }
`;

export const StyledNavLogo = styled.div`
  font-size: 1.2rem;
  padding: 15px 0;

  & > a {
    text-decoration: none;
  }
`;
