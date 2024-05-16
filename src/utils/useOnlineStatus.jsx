import React, { useState, useEffect } from "react";

const useOnlineStatus = () => {
  //check if online
  const [online, setOnline] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnline(false);
    });
    window.addEventListener("online", () => {
      setOnline(true);
    });
  }, []);
  //boolean value
  return online;
};

export default useOnlineStatus;
