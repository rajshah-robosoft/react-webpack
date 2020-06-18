import React from "react";

const Show = ({ match }) => {
  return <div>{match?.params?.slug}</div>;
};

export default Show;
