import * as React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import PlaylistCard from "./PlaylistCard";

import PlaylistIMG from "../../../assets/images/playlist_tile.png";

import "../../../bootstrap.scss";

const PlaylistCardCosmos = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={() => <div></div>} exact />
      <div style={{ padding: 20, width: 285 }}>
        <PlaylistCard playlistImage={PlaylistIMG} playlistLink="/" />
      </div>
    </BrowserRouter>
  );
};

export default PlaylistCardCosmos;
