import React from 'react';
import { Link } from 'react-router-dom';
import { MainTitle } from '../typography/Typography';
import Burger from './Burger';
import { StyledNav, StyledNavLogo } from './Navbar.styled';

export default function Navbar() {
  return (
    <StyledNav>
      <StyledNavLogo>
        <Link to="/">
          <MainTitle>EXOTRAVEL</MainTitle>
        </Link>
      </StyledNavLogo>
      <Burger />

    </StyledNav>
  );
}
