import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Footer from "./Footer";

// css
import "../../../bootstrap.scss";

const FooterCosmos = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={() => <div></div>} exact />
      <div style={{ padding: 20 }}>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default FooterCosmos;
