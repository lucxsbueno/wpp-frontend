import React from "react";

import "./style.css";

import { useSessions } from "../queries";
import { useParams } from "react-router-dom";
import socket from "../../../utils/ws/websocket.config";

const QrCode = props => {
  let { id } = useParams();
  const [qr, setQr] = React.useState("");
  const [log, setLog] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isConnected, setIsConnected] = React.useState(socket.connected);

  const { data: sessions } = useSessions();

  React.useEffect(() => {
    setQr("");
    setLog("");
    setMessage("");

    sessions?.data.forEach(session => {
      if (session.id !== id) {
        socket.emit("close-client", session.id);
      }
    });

    socket.on("connect", () => {
      setIsConnected(true);
    });

    socket.emit("generate-session", { id: id });

    socket.on("message", message => {
      setLog(message);
    });

    socket.on("new_message", message => {
      setMessage(message);
    });

    socket.on("qr", url => {
      setQr(url);
    });

    socket.on("chats", chats => {
      console.log(chats);
    });

    return () => {
      socket.off("connect");
      socket.off("message");
      socket.off("new_message");
      socket.off("generate-session");
      socket.off("close-client");
      socket.off("chats");
      socket.off("qr");
    };
  }, [id, sessions?.data]);

  return (
    <div className="w-100 h-100 d-flex flex-column justify-content-center align-center">
      <div className="d-flex flex-column justify-content-center align-center">
        <h3 className="text-color text-center mb-10">WhatsApp</h3>
        {isConnected && <p className="text-color text-center mb-20">WebSocket conectado</p>}
        {qr && <img src={qr} alt="Qr-code gerado para conectar-se ao WhatsApp" className="mb-20" />}
        <p className="text-color text-center mb-20">{log}</p>
        <p className="text-color text-center">{message}</p>
      </div>
    </div>
  );
}

export default QrCode;