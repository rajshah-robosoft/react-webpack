import React from 'react'

import Header from '../../components/organisms/Header/Header';
import EpisodeRail from '../../components/organisms/EpisodeRail/EpisodeRail';

// image
import HeroIMG from '../../assets/images/hero/hero.jpeg';
import TlcIMG from '../../assets/svg/tlc_small.svg'
import EpisodeIMG from '../../assets/images/aitplane_episode.png'

const Home = () => {
  const railList = [
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
    }
  ]

  return (
    <>
      <div>
        <Header />
        <img width="100%" height="900" src={HeroIMG} alt="" style={{ objectFit: "contain", objectPosition: "top" }} />

        <EpisodeRail
          headerText="Continue Watching"
          railList={railList}
        />
      </div>
    </>
  )
}

export default Home;
