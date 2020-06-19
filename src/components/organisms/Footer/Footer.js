import React from "react";

import Logo from "../../molecules/Logo/Logo";
import Text from "../../atoms/Text/Text";
import NavigationLink from "../../molecules/NavigationLink/NavigationLink";
import Image from "../../atoms/Image/Image";

// images
import FBIMG from "../../../assets/svg/facebook.svg";

import "./Footer.scss";

const Footer = ({ className }) => {
  const list = [
    {
      link: "/",
      text: "About",
    },
    {
      link: "/",
      text: "Gifting",
    },
    {
      link: "/",
      text: "Help/FAQ",
    },
    {
      link: "/",
      text: "About",
    },
    {
      link: "/",
      text: "Privacy Policy",
    },
    {
      link: "/",
      text: "Term of Use",
    },
    {
      link: "/",
      text: "Subscriptions",
    },
    {
      link: "/",
      text: "TV Ratings",
    },
    {
      link: "/",
      text: "Online Closed Captioning",
    },
    {
      link: "/",
      text: "Contact Us",
    },
  ];

  return (
    <footer className={`footer ${className}`}>
      <div className="footer__head">
        {list.map((item, index) => (
          <NavigationLink color="lightgray" size="base" {...item} key={index} />
        ))}
      </div>
      <div className="footer__bottom">
        <div>
          <Image
            width="30"
            className="footer_social-media-btn--rouned"
            src={FBIMG}
            alt=""
          />
          <Image
            width="30"
            className="footer_social-media-btn--rouned"
            src={FBIMG}
            alt=""
          />
          <Image
            width="30"
            className="footer_social-media-btn--rouned"
            src={FBIMG}
            alt=""
          />
          <Image
            width="30"
            className="footer_social-media-btn--rouned"
            src={FBIMG}
            alt=""
          />
        </div>
        <div>
          <Text
            label="Copyright © 2020 Discovery Digital Ventures, LLC"
            fontSize="xs"
            color="lightgray"
          />
        </div>
        <Logo />
      </div>
    </footer>
  );
};

export default Footer;
