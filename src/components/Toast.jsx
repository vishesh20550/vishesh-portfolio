import React, { useState, useEffect } from "react";
import "../styles/toast.css"; // Add styles for toast here

const Toast = ({ message, show, duration }) => {
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    let timer;
    if (show) {
      setVisible(true);
      timer = setTimeout(() => {
        setVisible(false);
      }, duration);
    }
    return () => clearTimeout(timer);
  }, [show, duration]);

  return visible && <div className="toast">{message}</div>;
};

export default Toast;
