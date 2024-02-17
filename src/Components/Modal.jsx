

import React, { useState } from "react";

const Modal = ({ className, setGroups }) => {
  const [groupName, setGroupName] = useState("");

  const handleModal = () => {
    if (!groupName.trim()) {
      return; // Exit the function if groupName is empty or contains only whitespace
    }

    setGroups((prevGroups) => [...prevGroups, groupName]);

    setGroupName("");
  };

  return (
    <div className={`modalOutline ${className}`}>
      <h3>Create New group</h3>
      <div className="flexbetween">
        <h3>Group Name</h3>
        <input
          type="text"
          placeholder="Enter Group name..."
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />
      </div>
      <div className="flexbetween">
        <h3>Choose colour</h3>
        <div className="btnGroup">
          <button style={{backgroundColor:"#B38BFA"}}></button>
          <button style={{backgroundColor:"#FF79F2"}}></button>
          <button style={{backgroundColor:"#43E6FC"}}></button>
          <button style={{backgroundColor:"#F19576"}}></button>
          <button style={{backgroundColor:"#0047FF"}}></button>
          <button style={{backgroundColor:"#6691FF"}}></button>
        </div>
      </div>
      <button onClick={handleModal}>Create</button>
    </div>
  );
};

export default Modal;
