import React from "react";
import { Link } from "react-router-dom";

import Image from "../../atoms/Image/Image";

export interface NetworkCardInterface {
  networkImage: string;
  networkLink: string;
}

const NetworkCard = ({ networkImage, networkLink }: NetworkCardInterface) => {
  return (
    <Link to={networkLink}>
      <Image width="100%" src={networkImage} alt="" />
    </Link>
  );
};

export default NetworkCard;
