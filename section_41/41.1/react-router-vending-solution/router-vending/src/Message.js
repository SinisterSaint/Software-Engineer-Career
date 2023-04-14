import React from "react";
import "./Message.css";

function Message({children}) {
  return (
    <div className="Message">
      {children}
    </div>
  )
}

export default Message;
