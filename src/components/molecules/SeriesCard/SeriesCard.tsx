import React from "react";

import { Link } from "react-router-dom";

import Image from "../../atoms/Image/Image";

import "./SeriesCard.scss";
import Text from "../../atoms/Text/Text";

export interface SeriesCardInterface {
  seriesLink: string;
  text: string;
  channel: string;
  seriesImage: string;
}

const SeriesCard = ({
  seriesLink,
  text,
  channel,
  seriesImage,
}: SeriesCardInterface) => {
  return (
    <Link to={seriesLink} className="series-card">
      <Image
        width="100%"
        src={seriesImage}
        alt=""
        className="series-card__image"
      />
      <div className="series-card__body-title">
        <Text textLabel={text} weight="bold" fontSize="sm" />
        <Image height="18" src={channel} alt="" />
      </div>
    </Link>
  );
};

export default SeriesCard;
