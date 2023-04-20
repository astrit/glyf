import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const ActiveVisitors = () => {
  const [activeVisitors, setActiveVisitors] = useState(0);

  useEffect(() => {
    const socket = io("https://glyphs.css.gg");

    socket.on("connect", () => {
      console.log("Socket connected");
    });

    socket.on("activeVisitors", (count) => {
      console.log(`Received activeVisitors event: ${count}`);
      setActiveVisitors(count);
    });

    socket.on("disconnect", () => {
      console.log("Socket disconnected");
      setActiveVisitors(0);
    });

    socket.on("connect_error", (error) => {
      console.error("Socket connection error:", error);
    });

    socket.on("connect_timeout", (timeout) => {
      console.error("Socket connection timeout:", timeout);
    });

    return () => {
      console.log("Disconnecting socket");
      socket.disconnect();
    };
  }, []);

  return <div>Active Visitors: {activeVisitors}</div>;
};

export default ActiveVisitors;
