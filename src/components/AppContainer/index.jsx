import React from "react";

import "./style.css";

const AppContainer = props => {

  return (
    <div className="app">
      {props.children}
    </div>
  );
}

export default AppContainer;