import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Rail from "./Rail";

import TlcIMG from "../../../assets/svg/tlc_small.svg";
import EpisodeIMG from "../../../assets/images/aitplane_episode.png";

// css
import "../../../bootstrap.scss";

const RailCosmos = () => {
  const episodesRailList = [
    {
      channel: TlcIMG,
      text: "Series Title",
      episodeImage: EpisodeIMG,
      episodeText: "S1 E1 - Episode Title",
      episodeLink: "/",
    },
    {
      channel: TlcIMG,
      text: "Series Title",
      episodeImage: EpisodeIMG,
      episodeText: "S1 E2 - Episode Title",
      episodeLink: "/",
    },
    {
      channel: TlcIMG,
      text: "Series Title",
      episodeImage: EpisodeIMG,
      episodeText: "S1 E3 - Episode Title",
      episodeLink: "/",
    },
    {
      channel: TlcIMG,
      text: "Series Title",
      episodeImage: EpisodeIMG,
      episodeText: "S1 E4 - Episode Title",
      episodeLink: "/",
    },
    {
      channel: TlcIMG,
      text: "Series Title",
      episodeImage: EpisodeIMG,
      episodeText: "S1 E5 - Episode Title",
      episodeLink: "/",
    },
  ];

  return (
    <BrowserRouter>
      <Route path="/" component={() => <div></div>} exact />
      <div style={{ padding: 20 }}>
        <Rail
          type="episode"
          headerText="Continue Watching"
          railList={episodesRailList}
        />
      </div>
    </BrowserRouter>
  );
};

export default RailCosmos;
