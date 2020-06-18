import React from 'react';
import { Link } from 'react-router-dom';

import CardTitle from '../../atoms/CardTitle/CardTitle';
import EpisodeTitle from '../../atoms/EpisodeTitle/EpisodeTitle';

import './EpisodeCard.scss';

const EpisodeCard = ({ text, channel, episodeText, episodeImage, episodeLink }) => {
  return (
    <Link to={episodeLink}>
      <div className="episode-card">
        <img width="100%" src={episodeImage} alt="" className="episode-card__image" />
        <div className="episode-card__body">
          <CardTitle
            text={text}
            channel={channel}
          />
          <EpisodeTitle
            text={episodeText}
          />
        </div>
      </div>
    </Link>
  )
}

export default EpisodeCard;
