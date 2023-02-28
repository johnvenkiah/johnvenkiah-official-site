import React from 'react';
import { bool } from 'prop-types';
import { Nav, NavLink, NavMenu } from './Navbar.styled';
import { MainLogo } from '../Burger/Burger.styled';

const Navbar = ({ open }) => {
  return (
    <>
      <Nav>
        <MainLogo to="/">
          <h1>John Venkiah</h1>
        </MainLogo>
        <NavMenu open={open}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/music">Music</NavLink>
          <NavLink to="/videos">Videos</NavLink>
          <NavLink to="/live">Live</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

Navbar.propTypes = {
  open: bool.isRequired,
};

export default Navbar;
