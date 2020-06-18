import React from 'react';

import './EpisodeTitle.scss';

const EpisodeTitle = ({ text }) => {
  return (
    <h4 className="episode-title">{text}</h4>
  )
}

export default EpisodeTitle
