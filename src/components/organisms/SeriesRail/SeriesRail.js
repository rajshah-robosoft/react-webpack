import React from "react";

import SeriesCard from "../../molecules/SeriesCard/SeriesCard";

import "./SeriesRail.scss";
import Text from "../../atoms/Text/Text";

const SeriesRail = ({ headerText, railList }) => {
  let renderEpisodes =
    railList && Array.isArray(railList)
      ? railList.map((item, index) => <SeriesCard {...item} key={index} />)
      : null;

  return (
    <div className="series-rails">
      <div className="series-rails__header">
        <Text label={headerText} fontSize="lg" color="gray" />
      </div>
      <div className="series-rails__body">{renderEpisodes}</div>
    </div>
  );
};

export default SeriesRail;
