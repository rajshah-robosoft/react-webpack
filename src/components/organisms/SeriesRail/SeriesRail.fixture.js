import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import SeriesRail from "./SeriesRail";

// css
import "../../../bootstrap.scss";

import TlcIMG from "../../../assets/svg/tlc_small.svg";
import SeriesIMG from "../../../assets/images/series.png";

const SeriesRailCosmos = () => {
  const seriesRailList = [
    {
      channel: TlcIMG,
      text: "Series Title",
      seriesImage: SeriesIMG,
      seriesLink: "/",
    },
    {
      channel: TlcIMG,
      text: "Series Title",
      seriesImage: SeriesIMG,
      seriesLink: "/",
    },
    {
      channel: TlcIMG,
      text: "Series Title",
      seriesImage: SeriesIMG,
      seriesLink: "/",
    },
    {
      channel: TlcIMG,
      text: "Series Title",
      seriesImage: SeriesIMG,
      seriesLink: "/",
    },
    {
      channel: TlcIMG,
      text: "Series Title",
      seriesImage: SeriesIMG,
      seriesLink: "/",
    },
    {
      channel: TlcIMG,
      text: "Series Title",
      seriesImage: SeriesIMG,
      seriesLink: "/",
    },
    {
      channel: TlcIMG,
      text: "Series Title",
      seriesImage: SeriesIMG,
      seriesLink: "/",
    },
    {
      channel: TlcIMG,
      text: "Series Title",
      seriesImage: SeriesIMG,
      seriesLink: "/",
    },
  ];

  return (
    <BrowserRouter>
      <Route path="/" component={() => <div></div>} exact />
      <div style={{ padding: 20 }}>
        <SeriesRail headerText="My stuff" railList={seriesRailList} />
      </div>
    </BrowserRouter>
  );
};

export default SeriesRailCosmos;
