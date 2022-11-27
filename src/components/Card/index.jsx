import React from "react";

import "./style.css";

const Card = props => {
  const { children, className } = props;

  return (
    <div className={`card ${className}`.trim()}>
      {children}
    </div>
  );
}

export default Card;