import { useEffect, useState } from "react";
import io from "socket.io-client";

const OnlineUsers = () => {
  const [onlineVisitors, setOnlineVisitors] = useState(0);

  useEffect(() => {
    const socket = io("https://glyphs.css.gg"); // replace with your server URL
    socket.on("connect", () => {
      // console.log("Connected to server");
    });

    socket.emit("getOnlineVisitors");

    socket.on("onlineVisitors", (visitors) => {
      setOnlineVisitors(visitors);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h2>Online Visitors</h2>
      <p>{onlineVisitors} visitors online</p>
    </div>
  );
};

export default OnlineUsers;
