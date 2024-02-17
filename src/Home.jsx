// import { React, useState, useEffect } from "react";
// import home from "../src/assets/body.png";
// import Modal from "./Components/Modal";
// import Notes from "./Components/Notes";

// const Home = () => {
//   const [groups, setGroups] = useState(
//     () => JSON.parse(localStorage.getItem("groups")) || []
//   );
//   const [open, setOpen] = useState(false);
//   const [selectedGroup, setSelectedGroup] = useState(null);
//   const [initials, setInitials] = useState("");

//   const openModal = () => {
//     setOpen(!open);
//   };

//   useEffect(() => {
//     localStorage.setItem("groups", JSON.stringify(groups));
//   }, [groups]);

//   return (
//     <div className={`Section flexbetween`}>
//       {open && <Modal className="modalPosition" setGroups={setGroups} />}

//       {/* SIDEBAR START */}
//       <div className="tabSection">
//         <div className="heading title">Pocket Notes</div>

//         {/* TAB CARDS START*/}
//         <div className="dataCards">
//           {groups.map((group) => {
//             const initials = group
//               .split(" ")
//               .map((word) => word[0])
//               .join("");
//             return (
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                 }}
//                 onClick={() => {
//                   setSelectedGroup(group);
//                   setInitials(nitials); // Set initials when a group is clicked
//                 }}
//               >
//                 <button className="initials">{initials}</button>
//                 <div key={group} className="dataCard">
//                   {group}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//         {/* TAB CARDS END*/}



//         <button className="plusBtn" onClick={openModal}>
//           +
//         </button>
//       </div>
//       {/* SIDEBAR END */}

//       <div className="tabDataOutline">
//         {selectedGroup ? (
//           <Notes
//             setGroups={setGroups}
//             groups={selectedGroup}
//             initials={initials}
//           />
//         ) : (
//           <div className="tabDataSection">
//             <img src={home} alt="" />
//             <div className="mainHeading">Pocket Notes</div>
//             <p style={{ fontSize: "20px", textAlign: "center" }}>
//               Send and receive messages without keeping your phone online.
//               <br />
//               Use Pocket Notes on up to 4 linked devices and 1 mobile phone
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;


import { React, useState, useEffect } from "react";
import home from "../src/assets/body.png";
import Modal from "./Components/Modal";
import Notes from "./Components/Notes";

const Home = () => {
  const [groups, setGroups] = useState(
    () => JSON.parse(localStorage.getItem("groups")) || []
  );
  const [open, setOpen] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [initials, setInitials] = useState("");
  const [notesData, setNotesData] = useState(
    () => JSON.parse(localStorage.getItem("notesData")) || {}
  );

  const openModal = () => {
    setOpen(!open);
  };

  useEffect(() => {
    localStorage.setItem("groups", JSON.stringify(groups));
    localStorage.setItem("notesData", JSON.stringify(notesData));
  }, [groups, notesData]);

  return (
    <div className={`Section flexbetween`}>
      {open && <Modal className="modalPosition" setGroups={setGroups} />}

      {/* SIDEBAR START */}
      <div className="tabSection">
        <div className="heading title">Pocket Notes</div>

        {/* TAB CARDS START*/}
        <div className="dataCards">
          {groups.map((group) => {
            const initials = group
              .split(" ")
              .map((word) => word[0])
              .join("");
            return (
              <div className="dataTabWrap"
                onClick={() => {
                  setSelectedGroup(group);
                  setInitials(initials); // Set initials when a group is clicked
                }}
              >
                <div className="initials">{initials}</div>
                <div key={group} className="dataCard">
                  {group}
                </div>
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