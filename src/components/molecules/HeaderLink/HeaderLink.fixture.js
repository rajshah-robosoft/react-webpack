import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import HeaderLink from "./HeaderLink";

import HomeSVG from "../../../assets/svg/home.svg";

import "../../../bootstrap.scss";

const HeaderLinkCosmos = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={() => <div></div>} exact />
      <div style={{ padding: 20 }}>
        <HeaderLink link="/" text="Home" svg={HomeSVG} />
      </div>
      <div style={{ padding: 20 }}>
        <HeaderLink link="/random" text="Random" svg={HomeSVG} />
      </div>
      <div style={{ padding: 20 }}>
        <HeaderLink link="/sign-in" text="Already a member?" />
      </div>
      <div style={{ padding: 20 }}>
        <HeaderLink link="/sign-up" text="Sign up" isBordered />
      </div>
    </BrowserRouter>
  );
};

export default HeaderLinkCosmos;
