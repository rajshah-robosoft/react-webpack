import React from 'react'

import { Link } from 'react-router-dom';

import CardTitle from '../../atoms/CardTitle/CardTitle';

import './SeriesCard.scss';

const SeriesCard = ({ showLink, text, channel }) => {
  return (
    <Link to={showLink} className="series-card">
      <img width="100%" src={episodeImage} alt="" className="series-card__image" />
      <CardTitle
        text={text}
        channel={channel}
      />
      
    </Link>
  )
}

export default SeriesCard
