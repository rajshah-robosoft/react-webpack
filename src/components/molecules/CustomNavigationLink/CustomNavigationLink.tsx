import React from "react";

import { NavLink } from "react-router-dom";

import Image from "../../atoms/Image/Image";
import Text, {
  textWeightType,
  textSizeType,
  textColorType,
} from "../../atoms/Text/Text";

import "./CustomNavigationLink.scss";

export interface CustomNavigationLinkInterface {
  link: string;
  svg?: string;
  text: string;
  isBordered?: boolean;
  size?: textSizeType;
  color?: textColorType;
  weight?: textWeightType;
}

const CustomNavigationLink = ({
  link,
  svg,
  text,
  isBordered,
  size,
  color,
}: CustomNavigationLinkInterface) => {
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
      <Text
        textLabel={text}
        fontSize={size ? size : "sm"}
        color={color ? color : "white"}
      />
    </NavLink>
  );
};

export default CustomNavigationLink;
