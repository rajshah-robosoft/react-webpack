import React from "react";

import Text from "../../atoms/Text/Text";
import Button from "../../atoms/Button/Button";
import Image from "../../atoms/Image/Image";

import "./Hero.scss";

const Hero = ({ image, bgImg, className, primaryText, secendoryText }) => {
  return (
    <div
      className={`hero-wrapper ${className}`}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {image && <Image width="100%" src={image} alt="" />}
      <Text label={primaryText} fontSize="xl" />
      <Text label={secendoryText} fontSize="lg" color="gray" />
      <Button>Watch Series</Button>
    </div>
  );
};

export default Hero;
