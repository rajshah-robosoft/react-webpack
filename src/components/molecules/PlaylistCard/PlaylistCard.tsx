import * as React from "react";
import { Link } from "react-router-dom";

import Image from "../../atoms/Image/Image";

export interface PlaylistCardInterface {
  playlistLink: string;
  playlistImage: string;
}

const PlaylistCard = ({
  playlistLink,
  playlistImage,
}: PlaylistCardInterface) => {
  return (
    <Link to={playlistLink}>
      <Image width="100%" src={playlistImage} alt="" />
    </Link>
  );
};

export default PlaylistCard;
