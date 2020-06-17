import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'

import HeaderLink from './HeaderLink';

import HomeSVG from '../../../assets/svg/home.svg';

const HeaderLinkCosmos = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={() => <div></div>} exact />
      <div style={{ backgroundColor: "#000" }}>
        <HeaderLink
          link="/"
          text="Home"
          SVG={HomeSVG}
        />
      </div>
    </BrowserRouter>
  )
}

export default HeaderLinkCosmos
