import React from "react";

import Header from "../../components/organisms/Header/Header";
import EpisodeRail from "../../components/organisms/EpisodeRail/EpisodeRail";
import SeriesRail from "../../components/organisms/SeriesRail/SeriesRail";
import NetworkRail from "../../components/organisms/NetworkRail/NetworkRail";
import PlaylistRail from "../../components/organisms/PlaylistRail/PlaylistRail";

// image
import HeroIMG from "../../assets/images/hero/hero.jpeg";
import TlcIMG from "../../assets/svg/tlc_small.svg";
import EpisodeIMG from "../../assets/images/aitplane_episode.png";
import SeriesIMG from "../../assets/images/series.png";
import NetworkIMG from "../../assets/images/discovery_circle.png";
import PlaylistIMG from "../../assets/images/playlist_tile.png";

const Home = () => {
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
    <>
      <div>
        <Header />
        <img
          width="100%"
          height="900"
          src={HeroIMG}
          alt=""
          style={{ objectFit: "contain", objectPosition: "top" }}
        />

        <EpisodeRail
          headerText="Continue Watching"
          railList={episodesRailList}
        />

        <SeriesRail headerText="My stuff" railList={seriesRailList} />

        <NetworkRail headerText="Networks" railList={networkRailList} />

        <PlaylistRail headerText="Playlist" railList={playlistRailList} />
      </div>
    </>
  );
};

export default Home;
