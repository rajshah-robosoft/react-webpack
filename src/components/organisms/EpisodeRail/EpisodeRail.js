import React from "react";

import EpisodeCard from "../../molecules/EpisodeCard/EpisodeCard";

import "./EpisodeRail.scss";
import Text from "../../atoms/Text/Text";

const EpisodeRail = ({ headerText, railList }) => {
  let renderEpisodes =
    railList && Array.isArray(railList)
      ? railList.map((item, index) => <EpisodeCard {...item} key={index} />)
      : null;

  return (
    <div className="episode-rails">
      <div className="episode-rails__header">
        <Text label={headerText} fontSize="lg" color="gray" />
      </div>
      <div className="episode-rails__body">{renderEpisodes}</div>
    </div>
  );
};

export default EpisodeRail;
