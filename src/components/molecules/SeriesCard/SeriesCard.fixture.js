import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'

import SeriesCard from './SeriesCard';

import TlcIMG from '../../../assets/svg/tlc_small.svg'
import EpisodeIMG from '../../../assets/images/aitplane_episode.png'

import '../../../bootstrap.scss'

const SeriesCardCosmos = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={() => <div></div>} exact />
      <div style={{ padding: 20, width: 285 }}>
        <SeriesCard 
          channel={TlcIMG}
          text="Series Title"
          episodeImage={EpisodeIMG}
          episodeLink="/"
        />
      </div>
    </BrowserRouter>
  )
}

export default SeriesCardCosmos
