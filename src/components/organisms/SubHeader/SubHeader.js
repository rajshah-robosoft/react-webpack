import React from "react";

import HeaderLink from "../../molecules/HeaderLink/HeaderLink";

// css
import "./SubHeader.scss";

const SubHeader = () => {
  const list = [
    {
      link: "/",
      text: "Custom",
    },
    {
      link: "/my-stuff",
      text: "Custom",
    },
    {
      link: "/shows",
      text: "Custom",
    },
    {
      link: "/search",
      text: "Custom",
    },
  ];

  return (
    <header className="sub-header">
      {list.map((item, index) => (
        <HeaderLink size="xl" {...item} key={index} />
      ))}
    </header>
  );
};

export default SubHeader;
