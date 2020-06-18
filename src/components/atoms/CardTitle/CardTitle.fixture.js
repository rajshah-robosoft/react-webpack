import React from 'react';

import CardTitle from './CardTitle';

import TlcIMG from '../../../assets/svg/tlc_small.svg'

// css
import '../../../bootstrap.scss';

const CardTitleCosmos = () => {
  return (
    <div style={{ padding: 20 }}>
      <CardTitle text="Raj" channel={TlcIMG} />
    </div>
  )
}

export default CardTitleCosmos
