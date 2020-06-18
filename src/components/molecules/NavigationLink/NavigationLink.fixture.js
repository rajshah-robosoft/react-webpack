import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import NavigationLink from "./NavigationLink";

import HomeSVG from "../../../assets/svg/home.svg";

import "../../../bootstrap.scss";

const NavigationLinkCosmos = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={() => <div></div>} exact />
      <div style={{ padding: 20 }}>
        <NavigationLink link="/" text="Home" svg={HomeSVG} />
      </div>
      <div style={{ padding: 20 }}>
        <NavigationLink link="/random" text="Random" svg={HomeSVG} />
      </div>
      <div style={{ padding: 20 }}>
        <NavigationLink link="/sign-in" text="Already a member?" />
      </div>
      <div style={{ padding: 20 }}>
        <NavigationLink link="/sign-up" text="Sign up" isBordered />
      </div>
    </BrowserRouter>
  );
};

export default NavigationLinkCosmos;
