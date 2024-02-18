import React, { useState } from "react";

const Modal = ({ className, setGroups, closeModal }) => {
  const [groupName, setGroupName] = useState("");
  const [selectedColor, setSelectedColor] = useState(""); 

  const handleModal = () => {
    if (!groupName.trim() || !selectedColor) {
      return; // Exit the function if groupName is empty, contains only whitespace, or no color is selected
    }

    setGroups((prevGroups) => [...prevGroups, { name: groupName, color: selectedColor }]); 
    setGroupName("");
    setSelectedColor("");
    closeModal(); 
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
          <button style={{ backgroundColor: "#B38BFA" }} onClick={() => setSelectedColor("#B38BFA")}></button>
          <button style={{ backgroundColor: "#FF79F2" }} onClick={() => setSelectedColor("#FF79F2")}></button>
          <button style={{ backgroundColor: "#43E6FC" }} onClick={() => setSelectedColor("#43E6FC")}></button>
          <button style={{ backgroundColor: "#F19576" }} onClick={() => setSelectedColor("#F19576")}></button>
          <button style={{ backgroundColor: "#0047FF" }} onClick={() => setSelectedColor("#0047FF")}></button>
          <button style={{ backgroundColor: "#6691FF" }} onClick={() => setSelectedColor("#6691FF")}></button>
        </div>
      </div>
      <button onClick={handleModal}>Create</button>
    </div>
  );
};

export default Modal;
