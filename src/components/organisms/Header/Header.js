import React from "react";

import Logo from "../../molecules/Logo/Logo";
import HeaderLink from "../../molecules/HeaderLink/HeaderLink";

// images
import HomeIMG from "../../../assets/svg/home.svg";
import MyStuffIMG from "../../../assets/svg/my-stuff.svg";
import SearchIMG from "../../../assets/svg/search.svg";
import BrowseIMG from "../../../assets/svg/browse.svg";

// css
import "./Header.scss";

const Header = () => {
  const list = [
    {
      link: "/",
      text: "Home",
      svg: HomeIMG,
    },
    {
      link: "/my-stuff",
      text: "My Stuff",
      svg: MyStuffIMG,
    },
    {
      link: "/shows",
      text: "Shows",
      svg: SearchIMG,
    },
    {
      link: "/search",
      text: "Search",
      svg: BrowseIMG,
    },
  ];

  const list2 = [
    {
      link: "/sign-in",
      text: "Already have account?",
    },
    {
      link: "/sign-up",
      text: "Sign up",
      isBordered: true,
    },
  ];

  return (
    <header className="header">
      <div className="header__logo">
        <Logo />
      </div>
      <div className="header__center-links">
        {list.map((item, index) => (
          <HeaderLink {...item} key={index} />
        ))}
      </div>
      <div className="header__right-links">
        {list2.map((item, index) => (
          <HeaderLink {...item} key={index} />
        ))}
      </div>
    </header>
  );
};

export default Header;
