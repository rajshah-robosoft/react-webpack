import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import HeaderLinkList from './HeaderLinkList';

// css
import '../../../bootstrap.scss';

// images
import HomeIMG from "../../../assets/svg/home.svg"
import MyStuffIMG from "../../../assets/svg/my-stuff.svg"
import SearchIMG from "../../../assets/svg/search.svg"
import BrowseIMG from "../../../assets/svg/browse.svg"

const HeaderLinkListCosmos = () => {
  const list = [
    {
      link: '/',
      text: 'Home',
      svg: HomeIMG
    },
    {
      link: '/my-stuff',
      text: 'My Stuff',
      svg: MyStuffIMG
    },
    {
      link: '/shows',
      text: 'Shows',
      svg: SearchIMG
    },
    {
      link: '/search',
      text: 'Search',
      svg: BrowseIMG
    },
  ]

  const list2 = [
    {
      link: '/sign-in',
      text: 'Already have account?'
    },
    {
      link: '/sign-up',
      text: 'Sign up',
      isBordered: true
    }
  ]

  return (
    <BrowserRouter>
      <Route path="/" component={() => <div></div>} exact />
      <div style={{ padding: 20 }}>
        <HeaderLinkList list={list} />
      </div>
      <div style={{ padding: 20 }}>
        <HeaderLinkList list={list2} />
      </div>
    </BrowserRouter>
  )
}

export default HeaderLinkListCosmos
