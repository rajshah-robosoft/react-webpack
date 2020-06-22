import * as React from "react";

import Text from "../../atoms/Text/Text";
import CustomButton from "../../atoms/CustomButton/CustomButton";
import Image from "../../atoms/Image/Image";

import PlayIMG from "../../../assets/images/play_icon.png";

import "./Hero.scss";

interface HeroInterface {
  image: string;
  bgImg: string;
  className?: string;
  primaryText: string;
  secendoryText: string;
}

const Hero = ({
  image,
  bgImg,
  className,
  primaryText,
  secendoryText,
}: HeroInterface) => {
  return (
    <div
      className={`hero-wrapper ${className}`}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {image && <Image width="100%" src={image} alt="" />}
      <Text textLabel={primaryText} fontSize="xl" />
      <Text textLabel={secendoryText} fontSize="lg" color="gray" />
      <CustomButton className="blue-hover">
        <Image width="36" alt="" src={PlayIMG} />
        <Text fontSize="lg" textLabel="Watch Series" />
      </CustomButton>
    </div>
  );
};

export default Hero;
