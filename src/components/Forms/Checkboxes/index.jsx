import React from "react";

import "./style.css";

const Checkbox = props => {
  const { title } = props;

  return (
    <label className="checkbox">
      <input type="checkbox"></input>
      <span className="indicator"></span>
      {title}
    </label>
  );
}

export default Checkbox;