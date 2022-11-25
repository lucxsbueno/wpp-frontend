import React from "react";

import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

const App = () => {
  const [qr, setQr] = React.useState("");
  const [logs, setLogs] = React.useState([]);
  const [newMessages, setNewMessages] = React.useState([]);
  const [isConnected, setIsConnected] = React.useState(socket.connected);
  
  React.useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    socket.on("chats", chats => {
      console.log(chats);
    });

    socket.on("contacts", contacts => {
      console.log(contacts);
    });

    socket.on("message", message => {
      setLogs(prev => [...prev, message]);
    });

    socket.on("messages", messages => {
      console.log(messages);
    });

    socket.on("new_message", message => {
      setNewMessages(prev => [...prev, message]);
    });

    socket.on("qr", url => {
      setQr(url);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("message");
      socket.off("new_message");
      socket.off("chats");
      socket.off("contacts");
    };
  }, []);

  return (
    <div>
      <h3>WhatsApp</h3>
      {isConnected && <h5>WebSocket conectado</h5>}
      {qr && <img src={qr} alt="A simple WhatsApp Web Qr Code." />}
      <ul>
        {logs?.map((log, i) => {
          return (
            <li key={i}>{log}</li>
          );
        })}
      </ul>
      <hr />
      <ul>
        {newMessages?.map((message, i) => {
          return (
            <li key={i}>{message}</li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
