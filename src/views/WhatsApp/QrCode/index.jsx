import React, { useRef } from "react";

import "./style.css";

import { useSessions } from "../queries";
import { Outlet, useParams } from "react-router-dom";
import { useWebsocket } from "../../../utils/hooks/useWebsocket";

import LoadingBar from "react-top-loading-bar";
import ChatItem from "../../../components/Chat/ChatItem";
import ChatHeader from "../../../components/Chat/ChatHeader";
import ChatSearch from "../../../components/Chat/ChatSearch";

const QrCode = props => {
  const ref = useRef(null);
  let { id } = useParams();
  const { data: sessions } = useSessions();
  const { qr, log, message, chats, isLoading, isConnected } = useWebsocket(id, sessions, ref);

  return (
    <div className="w-100 h-100 d-flex flex-row">
      <LoadingBar height="3px" color="#009B72" ref={ref} />
      
      {qr !== "" && (
        <div className="w-100 h-100 d-flex flex-column justify-content-center align-center">
          <div className="d-flex flex-column justify-content-center align-center">
            <h3 className="text-color text-center mb-10">WhatsApp</h3>
            {isConnected && <p className="text-color text-center mb-20">WebSocket conectado</p>}
            {qr && <img src={qr} alt="Qr-code gerado para conectar-se ao WhatsApp" className="mb-20" />}
            <p className="text-color text-center mb-20">{log}</p>
            <p className="text-color text-center">{message}</p>
          </div>
        </div>
      )}

      {isLoading && qr === "" && (
        <div className="w-100 h-100 d-flex flex-row align-center justify-content-center">
          <p className="text-color text-center mb-20">{log}</p>
        </div>
      )}

      {!isLoading && qr === "" && (
        <div className="w-100 h-100 d-flex flex-row">
          <div className="chat">
            <ChatHeader />
            <ChatSearch />
            <div className="chat__body">
              {chats?.map(chat => <ChatItem key={chat.id} chat={chat} />)}
            </div>
          </div>

          <Outlet />
        </div>
      )}
    </div>
  );
}

export default QrCode;