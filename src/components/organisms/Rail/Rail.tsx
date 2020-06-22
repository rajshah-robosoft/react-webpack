import * as React from "react";

import Text from "../../atoms/Text/Text";

import PlaylistCard, {
  PlaylistCardInterface,
} from "../../molecules/PlaylistCard/PlaylistCard";
import NetworkCard, {
  NetworkCardInterface,
} from "../../molecules/NetworkCard/NetworkCard";
import EpisodeCard, {
  EpisodeCardInterface,
} from "../../molecules/EpisodeCard/EpisodeCard";
import SeriesCard, {
  SeriesCardInterface,
} from "../../molecules/SeriesCard/SeriesCard";

import "./Rail.scss";

export interface RailInterface {
  headerText: string;
  type: string;
  railList: Array<
    | EpisodeCardInterface
    | SeriesCardInterface
    | PlaylistCardInterface
    | NetworkCardInterface
  >;
}

const Rail = ({ headerText, railList, type }: RailInterface) => {
  let renderRails =
    railList && Array.isArray(railList)
      ? railList.map((item, index) => {
          switch (type) {
            case "playlist":
              let playListItem = item as PlaylistCardInterface;
              return <PlaylistCard {...playListItem} key={index} />;

            case "network":
              let networkListItem = item as NetworkCardInterface;
              return <NetworkCard {...networkListItem} key={index} />;

            case "episode":
              let episodeListItem = item as EpisodeCardInterface;
              return <EpisodeCard {...episodeListItem} key={index} />;

            case "series":
              let seriesListItem = item as SeriesCardInterface;
              return <SeriesCard {...seriesListItem} key={index} />;

            default:
              break;
          }
        })
      : null;

  return (
    <div className={`${type}-rails`}>
      <div className={`${type}-rails__header`}>
        <Text textLabel={headerText} fontSize="lg" color="gray" />
      </div>
      <div className={`${type}-rails__body`}>{renderRails}</div>
    </div>
  );
};

export default Rail;
