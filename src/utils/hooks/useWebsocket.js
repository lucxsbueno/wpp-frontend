import React from "react";

import socket from "../ws/websocket.config";

export const useWebsocket = (id, sessions, ref) => {
  const [qr, setQr] = React.useState("");
  const [log, setLog] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isConnected, setIsConnected] = React.useState(socket.connected);

  React.useEffect(() => {
    setQr("");
    setLog("");
    setMessage("");

    sessions?.data.forEach(session => {
      if (session.id !== id) {
        socket.emit("close-client", session.id);
      }
    });

    socket.on("loading", data => {
      if (data.start) {
        ref.current.continuousStart();
      } else {
        ref.current.complete();
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
      socket.off("loading");
      socket.off("message");
      socket.off("new_message");
      socket.off("generate-session");
      socket.off("close-client");
      socket.off("chats");
      socket.off("qr");
    };
  }, [id, sessions?.data, ref]);

  return { qr, log, message, isConnected };
}