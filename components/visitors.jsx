import React, { useState, useEffect } from "react";
import io from "socket.io-client";
// import { Server } from 'Socket.IO'

const ActiveVisitors = () => {
  const [activeVisitors, setActiveVisitors] = useState(0);

  useEffect(() => {
    const socket = io("https://glyphs.css.gg");
    socket.on("activeVisitors", (count) => {
      setActiveVisitors(count);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  return <>{activeVisitors}</>;
};

export default ActiveVisitors;
