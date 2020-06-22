import * as React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import SeriesCard from "./SeriesCard";

import TlcIMG from "../../../assets/svg/tlc_small.svg";
import SeriesIMG from "../../../assets/images/series.png";

import "../../../bootstrap.scss";

const SeriesCardCosmos = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={() => <div></div>} exact />
      <div style={{ padding: 20, width: 285 }}>
        <SeriesCard
          channel={TlcIMG}
          text="Series Title"
          seriesImage={SeriesIMG}
          seriesLink="/"
        />
      </div>
    </BrowserRouter>
  );
};

export default SeriesCardCosmos;
