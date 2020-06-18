import React from 'react';

import CardListTitle from '../../atoms/CardListTitle/CardListTitle';
import EpisodeCard from '../../molecules/EpisodeCard/EpisodeCard';

import './EpisodeRail.scss';

const EpisodeRail = ({ headerText, railList }) => {
  let renderEpisodes = railList && Array.isArray(railList) ? 
    railList.map((item, index) => <EpisodeCard {...item} key={index} />)
  : null

  return (
    <div className="episode-rails">
      <div className="episode-rails__header">
        <CardListTitle text={headerText} />
      </div>
      <div className="episode-rails__body">
        {renderEpisodes}
      </div>
    </div>
  )
}

export default EpisodeRail;
