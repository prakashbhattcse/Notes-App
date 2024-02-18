import React, { useState, useEffect } from "react";
import home from "../src/assets/body.png";
import Modal from "./Components/Modal";
import Notes from "./Components/Notes";

const Home = () => {
  const [groups, setGroups] = useState(
    () => JSON.parse(localStorage.getItem("groups")) || []
  );
  const [open, setOpen] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(true);
  const [initials, setInitials] = useState("");
  const [notesData, setNotesData] = useState(
    () => JSON.parse(localStorage.getItem("notesData")) || {}
  );
  const [selectedColor, setSelectedColor] = useState(""); // State to store selected color from modal

  const openModal = () => {
    setOpen(!open);
  };

  const closeModal = () => {
    setOpen(false);
  };

  useEffect(() => {
    localStorage.setItem("groups", JSON.stringify(groups));
    localStorage.setItem("notesData", JSON.stringify(notesData));
  }, [groups, notesData]);

  return (
    <div className={`Section flexbetween ${isMobileNavVisible ? 'mobile-nav-visible' : ''}`}>


      {/* SIDEBAR START */}
      <div className="tabSection">
      {open && (
        <Modal
          className="modalPosition"
          setGroups={setGroups}
          closeModal={closeModal}
          setSelectedColor={setSelectedColor}
        />
      )}
        <div className="heading title">Pocket Notes</div>

        {/* TAB CARDS START*/}
        <div className="dataCards">
          {groups.map((group, index) => {
            const initials = group.name
              .split(" ")
              .map((word) => word[0])
              .join("");
            return (
              <div
                key={index}
                className="dataTabWrap"
                onClick={() => {
                  setSelectedGroup(group.name);
                  setInitials(initials);
                  setSelectedColor(group.color);
                  setIsMobileNavVisible(false);
                }}
              >
                <div
                  className="initials"
                  style={{ backgroundColor: group.color }}
                >
                  {initials}
                </div>
                <div className="dataCard">{group.name}</div>
              </div>
            );
          })}
        </div>
        {/* TAB CARDS END*/}

        <button className="plusBtn" onClick={openModal}>
          +
        </button>
      </div>
      {/* SIDEBAR END */}

      <div className="tabDataOutline">
        {selectedGroup ? (
          <Notes
            setGroups={setGroups}
            groups={selectedGroup}
            initials={initials}
            color={selectedColor} 
            notesData={notesData[selectedGroup] || []}
            setNotesData={(newNotes) =>
              setNotesData((prevNotesData) => ({
                ...prevNotesData,
                [selectedGroup]: newNotes,
              }))
            }
          />
        ) : (
          <div className="tabDataSection">
            <img src={home} alt="" />
            <div className="mainHeading">Pocket Notes</div>
            <p style={{ fontSize: "20px", textAlign: "center" }}>
              Send and receive messages without keeping your phone online.
              <br />
              Use Pocket Notes on up to 4 linked devices and 1 mobile phone
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
