import React from "react";

import "./Rail.scss";
import Text from "../../atoms/Text/Text";

import PlaylistCard from "../../molecules/PlaylistCard/PlaylistCard";
import NetworkCard from "../../molecules/NetworkCard/NetworkCard";
import EpisodeRail from "../../molecules/EpisodeCard";
import SeriesCard from "../../molecules/SeriesCard/SeriesCard";

const Rail = ({ headerText, railList, type }) => {
  let renderRails =
    railList && Array.isArray(railList)
      ? railList.forEach((item, index) => {
          switch (type) {
            case "playlist":
              return <PlaylistCard {...item} key={index} />;

            case "network":
              return <NetworkCard {...item} key={index} />;

            case "episode":
              return <EpisodeRail {...item} key={index} />;

            case "series":
              return <SeriesCard {...item} key={index} />;

            default:
              break;
          }
        })
      : null;

  return (
    <div className={`${type}-rails`}>
      <div className={`${type}-rails__header`}>
        <Text label={headerText} fontSize="lg" color="gray" />
      </div>
      <div className={`${type}-rails__body`}>{renderRails}</div>
    </div>
  );
};

export default Rail;
