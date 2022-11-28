import io from "socket.io-client";

const socket = io.connect(process.env.REACT_APP_WS_URL);

export default socket;