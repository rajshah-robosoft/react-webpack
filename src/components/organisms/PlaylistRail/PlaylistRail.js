import React from "react";

import PlaylistCard from "../../molecules/PlaylistCard/PlaylistCard";

import "./PlaylistRail.scss";
import Text from "../../atoms/Text/Text";

const PlaylistRail = ({ headerText, railList }) => {
  let renderEpisodes =
    railList && Array.isArray(railList)
      ? railList.map((item, index) => <PlaylistCard {...item} key={index} />)
      : null;

  return (
    <div className="playlist-rails">
      <div className="playlist-rails__header">
        <Text label={headerText} fontSize="lg" color="gray" />
      </div>
      <div className="playlist-rails__body">{renderEpisodes}</div>
    </div>
  );
};

export default PlaylistRail;
