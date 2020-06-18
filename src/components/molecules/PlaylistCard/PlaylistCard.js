import React from "react";
import { Link } from "react-router-dom";

import Image from "../../atoms/Image/Image";

const PlaylistCard = ({ playlistLink, playlistImage }) => {
  return (
    <Link to={playlistLink}>
      <Image width="100%" src={playlistImage} alt="" />
    </Link>
  );
};

export default PlaylistCard;
