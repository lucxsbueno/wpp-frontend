import React from "react";

import { NavLink } from "react-router-dom";
import { Bookmark, ChevronDown } from "react-feather";

import moment from "moment";
import "moment/locale/pt-br";
import "./style.css";

const ChatItem = props => {
  const { chat } = props;

  const formattedTimestamp = moment(new Date(chat.last_message.timestamp * 1000)).format("LT");

  return (
    <NavLink to={chat.id} className="chat__item">
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
            <span className="chat__info-hr">{formattedTimestamp}</span>
            <button className="chat__info-bttn">
              <ChevronDown size={18} />
            </button>
          </div>
        </div>
        <div className="chat__info-last-message-wrapper">
          <span className="chat__info-last-message">
            {chat.last_message.from_me ? "Você: " + chat.last_message.body : chat.last_message.body}
          </span>

          <div className="d-flex ml-10">
            {chat.unread_count > 0 && (
              <div className="chat__unread-count">{chat.unread_count}</div>
            )}

            {chat.pinned ?
              (<div className="chat__info-mark ml-10">
                <Bookmark size={18} />
              </div>) : null}
          </div>
        </div>
      </div>
    </NavLink>
  );
}

export default ChatItem;