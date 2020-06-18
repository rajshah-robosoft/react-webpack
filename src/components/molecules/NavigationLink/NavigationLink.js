import React from "react";

import { NavLink } from "react-router-dom";

import Image from "../../atoms/Image/Image";
import Text from "../../atoms/Text/Text";

import "./NavigationLink.scss";

const NavigationLink = ({ link, svg, text, isBordered, size }) => {
  return (
    <NavLink
      to={link}
      className={`header-link ${isBordered ? "header-link--outlined" : ""}`}
      activeClassName="header-link--active"
    >
      {svg && (
        <div className="header-link__image-container">
          <Image width="30" height="30" src={svg} alt="" />
        </div>
      )}
      <Text label={text} fontSize={size ? size : "sm"} />
    </NavLink>
  );
};

export default NavigationLink;
