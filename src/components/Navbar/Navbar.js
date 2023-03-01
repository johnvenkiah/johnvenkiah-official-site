import React from 'react';
import { bool } from 'prop-types';
import { Nav, NavLink, NavMenu } from './Navbar.styled';
import { MainLogo } from '../Burger/Burger.styled';

const Navbar = ({ open, setOpen }) => {
  const menuItems = {
    '/': 'Home',
    '/music': 'Music',
    '/videos': 'Videos',
    '/live': 'Live',
    '/about': 'About',
    '/contact': 'Contact/Press',
  };

  const menuMarkup = Object.keys(menuItems).map((nr) => (
    <li key={nr.toString()} onClick={() => setOpen(!open)}>
      <NavLink to={nr}>{menuItems[nr]}</NavLink>
    </li>
  ));
  return (
    <>
      <Nav>
        <MainLogo to="/">
          <h1>John Venkiah</h1>
        </MainLogo>
        <NavMenu open={open}>
          <ul>{menuMarkup}</ul>
          {/* <NavLink to="/" onClick={() => setOpen(!open)}>
            Home
          </NavLink>
          <NavLink to="/music">Music</NavLink>
          <NavLink to="/videos">Videos</NavLink>
          <NavLink to="/live">Live</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink> */}
        </NavMenu>
      </Nav>
    </>
  );
};

Navbar.propTypes = {
  open: bool.isRequired,
};

export default Navbar;
