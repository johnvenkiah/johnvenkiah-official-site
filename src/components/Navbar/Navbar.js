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
    '/developer': 'Developer',
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
        <MainLogo
          to="/"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }
        >
          <h1>John Venkiah</h1>
        </MainLogo>
        <NavMenu open={window.innerWidth <= 768 && open}>
          <ul>{menuMarkup}</ul>
        </NavMenu>
      </Nav>
    </>
  );
};

Navbar.propTypes = {
  open: bool.isRequired,
};

export default Navbar;
