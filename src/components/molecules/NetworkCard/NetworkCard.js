import React from "react";
import { Link } from "react-router-dom";

import Image from "../../atoms/Image/Image";

const NetworkCard = ({ networkImage, networkLink }) => {
  return (
    <Link to={networkLink}>
      <Image width="100%" src={networkImage} alt="" />
    </Link>
  );
};

export default NetworkCard;
