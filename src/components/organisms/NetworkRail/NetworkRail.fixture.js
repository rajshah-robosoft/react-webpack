import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import NetworkRail from "./NetworkRail";

// css
import "../../../bootstrap.scss";

import NetworkIMG from "../../../assets/images/discovery_circle.png";

const SeriesRailCosmos = () => {
  const networkRailList = [
    {
      networkImage: NetworkIMG,
      networkLink: "/",
    },
    {
      networkImage: NetworkIMG,
      networkLink: "/",
    },
    {
      networkImage: NetworkIMG,
      networkLink: "/",
    },
    {
      networkImage: NetworkIMG,
      networkLink: "/",
    },
    {
      networkImage: NetworkIMG,
      networkLink: "/",
    },
    {
      networkImage: NetworkIMG,
      networkLink: "/",
    },
    {
      networkImage: NetworkIMG,
      networkLink: "/",
    },
    {
      networkImage: NetworkIMG,
      networkLink: "/",
    },
  ];

  return (
    <BrowserRouter>
      <Route path="/" component={() => <div></div>} exact />
      <div style={{ padding: 20 }}>
        <NetworkRail headerText="Networks" railList={networkRailList} />
      </div>
    </BrowserRouter>
  );
};

export default SeriesRailCosmos;
