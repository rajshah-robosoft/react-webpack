import React from "react";

import Header from "../../components/organisms/Header/Header";
import Rail from "../../components/organisms/Rail/Rail";
import Hero from "../../components/organisms/Hero/Hero";
import SubHeader from "../../components/organisms/SubHeader/SubHeader";

// image
import HeroIMG from "../../assets/images/hero/hero.jpeg";
import TlcIMG from "../../assets/svg/tlc_small.svg";
import EpisodeIMG from "../../assets/images/aitplane_episode.png";
import SeriesIMG from "../../assets/images/series.png";
import NetworkIMG from "../../assets/images/discovery_circle.png";
import PlaylistIMG from "../../assets/images/playlist_tile.png";
import HeroTitleImage from "../../assets/images/guys-grocery-games.png";
import Footer from "../../components/organisms/Footer/Footer";

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
      <Header />
      <SubHeader />
      <main>
        <Hero
          bgImg={HeroIMG}
          image={HeroTitleImage}
          primaryText="Messaging to get the user to watch that can span 2 lines instead of a series description!"
          secendoryText="For lovers of Adventure and Nature."
        />
        <section className="mt-2">
          <Rail
            type="episode"
            headerText="Continue Watching"
            railList={episodesRailList}
          />
        </section>
        <section className="mt-2">
          <Rail type="series" headerText="My stuff" railList={seriesRailList} />
        </section>
        <section className="mt-2">
          <Rail
            type="network"
            headerText="Networks"
            railList={networkRailList}
          />
        </section>
        <section className="mt-2">
          <Rail
            type="playlist"
            headerText="Playlist"
            railList={playlistRailList}
          />
        </section>
      </main>
      <Footer className="mt-2" />
    </>
  );
};

export default Home;
