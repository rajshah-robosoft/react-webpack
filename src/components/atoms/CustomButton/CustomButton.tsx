import * as React from "react";

import "./CustomButton.scss";

export interface CustomButtonInterface {
  children: React.ReactNode;
  className?: string;
}

const CustomButton = ({
  children,
  className,
  ...rest
}: CustomButtonInterface) => {
  return (
    <button {...rest} className={`btn-component ${className}`}>
      {children}
    </button>
  );
};

export default CustomButton;
