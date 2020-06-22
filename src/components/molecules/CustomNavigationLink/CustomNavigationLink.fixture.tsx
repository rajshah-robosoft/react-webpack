import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import CustomNavigationLink from "./CustomNavigationLink";

import HomeSVG from "../../../assets/svg/home.svg";

import "../../../bootstrap.scss";

const CustomNavigationLinkCosmos = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={() => <div></div>} exact />
      <div style={{ padding: 20 }}>
        <CustomNavigationLink link="/" text="Home" svg={HomeSVG} />
      </div>
      <div style={{ padding: 20 }}>
        <CustomNavigationLink link="/random" text="Random" svg={HomeSVG} />
      </div>
      <div style={{ padding: 20 }}>
        <CustomNavigationLink link="/sign-in" text="Already a member?" />
      </div>
      <div style={{ padding: 20 }}>
        <CustomNavigationLink link="/sign-up" text="Sign up" isBordered />
      </div>
    </BrowserRouter>
  );
};

export default CustomNavigationLinkCosmos;
