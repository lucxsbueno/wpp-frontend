import React from "react";

import "./style.css";

import { useParams } from "react-router-dom";

import Header from "../../../../components/Header";

const Chat = props => {
  let { id } = useParams();

  return (
    <div className="chat__messages">
      <Header className="bg-grey-02 box-shadow d-flex flex-row justify-content-space-between">
        <div className="chat__messages-header">
          <div className="avatar">
            <img src="https://revistaoeste.com/wp-content/uploads/2022/04/elon-musk-4.jpg" alt="" className="avatar__img" />
          </div>
          <span className="avatar__name text-color">
            Elon Musk
          </span>
        </div>
      </Header>
      <div className="chat__messages-body">

      </div>
      <div className="chat__messages-footer">

      </div>
    </div>
  );
}

export default Chat;