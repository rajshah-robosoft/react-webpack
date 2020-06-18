import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'

import EpisodeCard from './EpisodeCard';

import TlcIMG from '../../../assets/svg/tlc_small.svg'
import EpisodeIMG from '../../../assets/images/aitplane_episode.png'

import '../../../bootstrap.scss'

const EpisodeCardCosmos = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={() => <div></div>} exact />
      <div style={{ padding: 20, width: 285 }}>
        <EpisodeCard 
          channel={TlcIMG}
          text="Series Title"
          episodeImage={EpisodeIMG}
          episodeText="S1 E1 - Episode Title"
          episodeLink="/"
        />
      </div>
    </BrowserRouter>
  )
}

export default EpisodeCardCosmos
