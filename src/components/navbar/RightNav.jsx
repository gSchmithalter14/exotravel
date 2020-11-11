/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function RightNav({ open, handleOpen }) {
  return (
    <StyledNavItems open={open}>
      <li><StyledLink onClick={handleOpen} to="/">Explore</StyledLink></li>
      <li><StyledLink onClick={handleOpen} to="/favorites">Favorites</StyledLink></li>
    </StyledNavItems>
  );
}

export const StyledNavItems = styled.ul`
  display: flex;
  flex-flow: nowrap;
  list-style: none;
  
  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    background-color: blue;
    flex-flow: column nowrap;
    position: fixed;
    display: ${(props) => (props.open ? 'flex' : 'none')};
    transform: ${(props) => (props.open ? 'trnaslateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 180px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 1.2rem;
  text-decoration: none;
  transition: color 200ms;

  &:hover {
    color: #e16365;
  }

  @media (max-width: 767px) {
      color: #fff;
  }
`;
