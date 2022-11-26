import React from "react";

import "./style.css";

const Header = props => {
  const { className } = props;

  return (
    <div className={`header ${className}`.trim()}>
      {props.children}
    </div>
  );
}

export default Header;