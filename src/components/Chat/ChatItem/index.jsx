import React from "react";

import { Bookmark, ChevronDown } from "react-feather";

import "./style.css";

const ChatItem = props => {
  const { chat } = props;

  return (
    <div className="chat__item">
      <div className="chat__avatar">
        <input className="chat__checkbox" type="checkbox" name="" id="" />
        <div className="chat__avatar-img-wrapper">
          {chat.avatar
            ? <img className="chat__avatar-img" src={chat.avatar} alt="" />
            : <img className="chat__avatar-img" src="https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png" alt="" />}
        </div>
      </div>
      <div className="chat__info">
        <div className="chat__info-name-wrapper">
          <span className="chat__info-name">{chat.name}</span>
          <div className="chat__info-actions">
            <span className="chat__info-hr">12:34</span>
            <button className="chat__info-bttn">
              <ChevronDown size={18} />
            </button>
          </div>
        </div>
        <div className="chat__info-last-message-wrapper">
          <span className="chat__info-last-message">
            {chat.last_message.from_me ? "Você: " + chat.last_message.body : chat.last_message.body}
          </span>
          {chat.pinned
            ? (<div className="chat__info-mark">
                <Bookmark size={18} />
              </div>)
            : null}
        </div>
      </div>
    </div>
  );
}

export default ChatItem;