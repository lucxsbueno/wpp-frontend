import React from "react";

import "./style.css";

import Header from "../../Header";
import RoundedButton from "../../Forms/RoundedButton";
import { MoreVertical } from "react-feather";

const ChatHeader = props => {

  return (
    <Header className="bg-grey-01 box-shadow d-flex flex-row justify-content-space-between">
      <span className="text-color">Conversas</span>
      <RoundedButton icon={<MoreVertical size={22} />} />
    </Header>
  );
}

export default ChatHeader;

/*
import React from "react";

import "./style.css";

const ChatHeader = props => {

  return (

  );
}

export default ChatHeader;
*/