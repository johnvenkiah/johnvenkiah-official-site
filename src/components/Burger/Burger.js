// Burger.js
import React from 'react';
import { bool, func } from 'prop-types';
import { StyledBurger } from './Burger.styled';

const Burger = ({ open, setOpen }) => {
  open && window.innerWidth <= 768
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'auto');
  if (window.innerWidth > 768) {
    return null;
  }
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;
