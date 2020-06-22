import * as React from "react";

import Header from "../../components/organisms/Header/Header";
import Rail from "../../components/organisms/Rail/Rail";
import Hero from "../../components/organisms/Hero/Hero";
import SubHeader from "../../components/organisms/SubHeader/SubHeader";
import Footer from "../../components/organisms/Footer/Footer";

// image
import HeroIMG from "../../assets/images/hero/hero.jpeg";
import TlcIMG from "../../assets/svg/tlc_small.svg";
import EpisodeIMG from "../../assets/images/aitplane_episode.png";
import SeriesIMG from "../../assets/images/series.png";
import NetworkIMG from "../../assets/images/discovery_circle.png";
import PlaylistIMG from "../../assets/images/playlist_tile.png";
import HeroTitleImage from "../../assets/images/guys-grocery-games.png";

// Interface
import { EpisodeCardInterface } from "../../components/molecules/EpisodeCard/EpisodeCard";
import { SeriesCardInterface } from "../../components/molecules/SeriesCard/SeriesCard";
import { PlaylistCardInterface } from "../../components/molecules/PlaylistCard/PlaylistCard";
import { NetworkCardInterface } from "../../components/molecules/NetworkCard/NetworkCard";

const Home = () => {
  console.log(HeroIMG);
  const episodesRailList: EpisodeCardInterface[] = [
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

  const seriesRailList: SeriesCardInterface[] = [
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

  const networkRailList: NetworkCardInterface[] = [
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

  const playlistRailList: PlaylistCardInterface[] = [
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
          className=""
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
