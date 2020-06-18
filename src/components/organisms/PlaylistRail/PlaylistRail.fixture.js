import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import PlaylistRail from "./PlaylistRail";

// css
import "../../../bootstrap.scss";

import PlaylistIMG from "../../../assets/images/playlist_tile.png";

const SeriesRailCosmos = () => {
  const playlistRailList = [
    {
      playlistImage: PlaylistIMG,
      playlistLink: "/",
    },
    {
      playlistImage: PlaylistIMG,
      playlistLink: "/",
    },
    {
      playlistImage: PlaylistIMG,
      playlistLink: "/",
    },
    {
      playlistImage: PlaylistIMG,
      playlistLink: "/",
    },
    {
      playlistImage: PlaylistIMG,
      playlistLink: "/",
    },
    {
      playlistImage: PlaylistIMG,
      playlistLink: "/",
    },
  ];

  return (
    <BrowserRouter>
      <Route path="/" component={() => <div></div>} exact />
      <div style={{ padding: 20 }}>
        <PlaylistRail headerText="Playlist" railList={playlistRailList} />
      </div>
    </BrowserRouter>
  );
};

export default SeriesRailCosmos;
