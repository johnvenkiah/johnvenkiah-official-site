import React, { useEffect } from 'react';
import { bool } from 'prop-types';
import { LogoP, Nav, NavLink, NavMenu } from './Navbar.styled';
import { MainLogo } from '../Navbar/Navbar.styled';
import { useLocation } from 'react-router-dom';

const Navbar = ({ open, setOpen, logoPIsVisible, setLogoPIsVisible }) => {
  const menuItems = {
    '/': 'Home',
    '/music': 'Music',
    '/videos': 'Videos',
    '/live': 'Live',
    '/developer': 'Developer',
    '/about': 'About',
    '/contact': 'Contact/Press',
  };

  const location = useLocation();

  useEffect(() => {
    for (let path in menuItems) {
      if (path === location.pathname) {
        document.title = `John Venkiah - Musician | ${menuItems[path]}`;
      }
    }
  });

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  });

  const scrollHandler = () => {
    let height = 130;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    winScroll > height
      ? logoPIsVisible && // to limit setting state only the first time
        setLogoPIsVisible(false)
      : setLogoPIsVisible(true);
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
          style={
            logoPIsVisible
              ? { transform: 'scale(1)', left: '1rem' }
              : { transform: 'scale(0.9)', left: '.5rem' }
          }
        >
          <h1>John Venkiah</h1>
        </MainLogo>
        <LogoP style={logoPIsVisible ? { opacity: 1 } : { opacity: 0 }}>
          Pianist, Singer, Songwriter and Developer
        </LogoP>
        <NavMenu open={window.innerWidth <= 855 && open}>
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
