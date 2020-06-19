import React from "react";

import "./Button.scss";

const Button = ({ children, className, ...rest }) => {
  return (
    <button {...rest} className={`btn-component ${className}`}>
      {children}
    </button>
  );
};

export default Button;
