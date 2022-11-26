import React from "react";

import TopNav from "../../TopNav";
import Header from "../../Header";
import AppContainer from "../../AppContainer";

const AppTemplate = props => {

  return (
    <AppContainer>
      <Header>
        <TopNav />
      </Header>
      {props.children}
    </AppContainer>
  );
}

export default AppTemplate;