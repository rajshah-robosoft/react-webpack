import React from "react";

import "./Text.scss";

const Text = ({ label, className, fontSize, color, weight }) => {
  let textSize = `text-wrapper--text-${fontSize ? fontSize : "base"}`;
  let textColor = `text-wrapper--text-${color ? color : "white"}`;
  let textWeight = `text-wrapper--text-${weight ? weight : "normal"}`;

  return (
    <p
      className={`text-wrapper ${textSize} ${textColor} ${textWeight} ${className}`}
    >
      {label}
    </p>
  );
};

export default Text;
