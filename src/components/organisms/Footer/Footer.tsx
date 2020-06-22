import React from "react";

import Logo from "../../molecules/Logo/Logo";
import Text from "../../atoms/Text/Text";
import CustomNavigationLink, {
  CustomNavigationLinkInterface,
} from "../../molecules/CustomNavigationLink/CustomNavigationLink";
import Image from "../../atoms/Image/Image";

// images
import FBIMG from "../../../assets/svg/facebook.svg";

import "./Footer.scss";

export interface FooterInterface {
  className?: string;
}

const Footer = ({ className }: FooterInterface) => {
  const list: CustomNavigationLinkInterface[] = [
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
          <CustomNavigationLink
            color="lightgray"
            size="base"
            {...item}
            key={index}
          />
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
            textLabel="Copyright © 2020 Discovery Digital Ventures, LLC"
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
