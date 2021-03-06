import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 55px;
  margin: 10px 0px;
  
  @media screen and (max-width: 600px) {
      margin-bottom: 20px;
  }
`;

export const StyledNavLogo = styled.div`
  font-size: 1.2rem;
  padding: 15px 0;

  & > a {
    text-decoration: none;
  }
`;
