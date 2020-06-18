import React from "react";

import NavigationLink from "../../molecules/NavigationLink/NavigationLink";

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
        <NavigationLink size="xl" {...item} key={index} />
      ))}
    </header>
  );
};

export default SubHeader;
