import React from 'react';

import { NavLink } from 'react-router-dom';

const HeaderLink = ({ link, SVG, text }) => {
  return (
    <NavLink to={link}>
      <SVG height={20} width={20} style={{ fill: "#fff" }} />
      <span>{text}</span>
    </NavLink>
  )
}

export default HeaderLink
