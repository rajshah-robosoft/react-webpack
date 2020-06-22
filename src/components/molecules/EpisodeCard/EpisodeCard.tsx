import * as React from "react";
import { Link } from "react-router-dom";

import Text from "../../atoms/Text/Text";
import Image from "../../atoms/Image/Image";

import "./EpisodeCard.scss";

export interface EpisodeCardInterface {
  text: string;
  channel: string;
  episodeText: string;
  episodeImage: string;
  episodeLink: string;
}

const EpisodeCard = ({
  text,
  channel,
  episodeText,
  episodeImage,
  episodeLink,
}: EpisodeCardInterface) => {
  return (
    <Link to={episodeLink}>
      <div className="episode-card">
        <Image
          width="100%"
          src={episodeImage}
          alt=""
          className="episode-card__image"
        />
        <div className="episode-card__body">
          <div className="episode-card__body-title">
            <Text textLabel={text} weight="bold" fontSize="sm" />
            <Image src={channel} alt="" height="18" />
          </div>
          <Text textLabel={episodeText} color="lightgray" fontSize="sm" />
        </div>
      </div>
    </Link>
  );
};

export default EpisodeCard;
