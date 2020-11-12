import React from 'react';
import { Link } from 'react-router-dom';
import Burger from './Burger';
import { StyledNav, StyledNavLogo } from './Navbar.styled';

export default function Navbar() {
  return (
    <StyledNav>
      <StyledNavLogo>
        <Link to="/">
          <h1>EXOTRAVEL</h1>
        </Link>
      </StyledNavLogo>
      <Burger />

    </StyledNav>
  );
}
