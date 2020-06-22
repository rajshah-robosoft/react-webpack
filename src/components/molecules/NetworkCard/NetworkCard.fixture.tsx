import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import NetworkCard from "./NetworkCard";

import NetworkIMG from "../../../assets/images/discovery_circle.png";

import "../../../bootstrap.scss";

const NetworkCardCosmos = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={() => <div></div>} exact />
      <div style={{ padding: 20, width: 285 }}>
        <NetworkCard networkImage={NetworkIMG} networkLink="/" />
      </div>
    </BrowserRouter>
  );
};

export default NetworkCardCosmos;
