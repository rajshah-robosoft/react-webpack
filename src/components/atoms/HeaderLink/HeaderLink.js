import React from 'react';

import { NavLink } from 'react-router-dom';

import './HeaderLink.scss';

const HeaderLink = ({ link, svg, text, isBordered }) => {
  return (
    <NavLink
     to={link} 
     className={`header-link ${isBordered ? "header-link--outlined" : ""}`} activeClassName="header-link--active"
    >
      {svg && <div className="header-link__image-container">
        <img width="20" height="20" src={svg} alt="" />
      </div>}
      <span className="header-link__text">{text}</span>
    </NavLink>
  )
}

export default HeaderLink
