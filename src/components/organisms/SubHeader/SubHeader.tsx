import React from "react";

import CustomNavigationLink, {
  CustomNavigationLinkInterface,
} from "../../molecules/CustomNavigationLink/CustomNavigationLink";

// css
import "./SubHeader.scss";

const SubHeader = () => {
  const list: CustomNavigationLinkInterface[] = [
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
        <CustomNavigationLink size="xl" {...item} key={index} />
      ))}
    </header>
  );
};

export default SubHeader;
