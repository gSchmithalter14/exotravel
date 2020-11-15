import React from 'react';
import { Link } from 'react-router-dom';
import { MainTitle, Spann } from '../typography/Typography';
import Burger from './Burger';
import { StyledNav, StyledNavLogo } from './Navbar.styled';

export default function Navbar() {
  return (
    <StyledNav>
      <StyledNavLogo>
        <Link to="/">
          <MainTitle>
            <span>EXO</span>
            TRAVEL
          </MainTitle>
        </Link>
      </StyledNavLogo>
      <Burger />

    </StyledNav>
  );
}
