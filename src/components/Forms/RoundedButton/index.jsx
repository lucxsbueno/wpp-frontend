import React from "react";

import "./style.css";

const RoundedButton = props => {
  const { type, icon, onClick, className } = props;

  return (
    <button className={`rounded__bttn ${className}`.trim()} type={type} onClick={onClick}>
      {icon}
    </button>
  );
}

RoundedButton.defaultProps = {};

export default RoundedButton;