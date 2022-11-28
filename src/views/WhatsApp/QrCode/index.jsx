import React from "react";

import "./style.css";

import cuid from "cuid";
import { useParams } from "react-router-dom";
import socket from "../../../utils/ws/websocket.config";
import { useSessions } from "../queries";

const QrCode = props => {
  let { id } = useParams();

  const [log, setLog] = React.useState("");
  const [isConnected, setIsConnected] = React.useState(socket.connected);

  const { data: sessions } = useSessions();

  React.useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(true);
    });

    sessions?.data.forEach(session => socket.emit("unsubscribe-session", session.id));

    socket.emit("join-session", id);

    socket.emit("send_message", { id: id, message: cuid() });

    socket.on("message", data => {
      setLog(data.message);
      console.log(data.session);
      socket.emit("message", { id: id, message: "Novo socket conectado!" });
    });

    return () => {
      socket.off("connect");
      socket.off("join-session");
      socket.off("message");
    };
  }, [id]);

  return (
    <div className="w-100 h-100 d-flex flex-column justify-content-center align-center">
      <div className="d-flex flex-column justify-content-center align-center">
        <h3 className="text-color text-center mb-10">WhatsApp</h3>
        {isConnected && <p className="text-color text-center mb-20">WebSocket conectado</p>}
        <p className="text-color text-center">{log}</p>
      </div>
    </div>
  );
}

export default QrCode;