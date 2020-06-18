import React from "react";

import NetworkCard from "../../molecules/NetworkCard/NetworkCard";

import "./NetworkRail.scss";
import Text from "../../atoms/Text/Text";

const NetworkRail = ({ headerText, railList }) => {
  let renderEpisodes =
    railList && Array.isArray(railList)
      ? railList.map((item, index) => <NetworkCard {...item} key={index} />)
      : null;

  return (
    <div className="network-rails">
      <div className="network-rails__header">
        <Text label={headerText} fontSize="lg" color="gray" />
      </div>
      <div className="network-rails__body">{renderEpisodes}</div>
    </div>
  );
};

export default NetworkRail;
