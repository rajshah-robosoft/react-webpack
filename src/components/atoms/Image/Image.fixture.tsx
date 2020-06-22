import React from "react";

import Image from "./Image";

import LogoIMG from "../../../assets/images/logo.png";

import "../../../bootstrap.scss";

const ImageCosmos = () => {
  return (
    <div style={{ padding: 20 }}>
      <Image src={LogoIMG} alt="" />
    </div>
  );
};

export default ImageCosmos;
