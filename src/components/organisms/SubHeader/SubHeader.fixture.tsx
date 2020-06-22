import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import SubHeader from "./SubHeader";

// css
import "../../../bootstrap.scss";

const SubHeaderCosmos = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={() => <div></div>} exact />
      <div style={{ padding: 20 }}>
        <SubHeader />
      </div>
    </BrowserRouter>
  );
};

export default SubHeaderCosmos;
