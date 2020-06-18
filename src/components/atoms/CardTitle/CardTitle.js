import React from 'react';

import './CardTitle.scss';

const CardTitle = ({ text, channel }) => {
  return (
    <div className="card-title">
      <h4 className="card-title__text">{text}</h4>
      <img src={channel} alt="" height="18" />
    </div>
  )
}

export default CardTitle
