// import {React, useState} from "react";
// import { FaArrowCircleRight } from "react-icons/fa";

// const Notes = ({ groups, setGroups, initials }) => {
//   const [note, setNote] = useState(''); // State variable for the current note
//   const [notes, setNotes] = useState([]); // State variable for all notes

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent the default form submission
//     setNotes([...notes, note]); // Add the current note to the notes array
//     setNote(''); // Clear the current note
//   };

//   return (
//     <div className="notesSection">
//       <div className="noteTopsBar">
//        <span className="initials">{initials}</span> <h1>{groups}</h1>
//       </div>


//       {/* NOTES DATA SECTION START */}
//       <div className="notesData">
//         {notes.map((note, index) => <p key={index}>{note}</p>)} {/* Display all notes */}
//       </div>

//           {/* NOTES DATA SECTION END */}
//       <form className="inputSection" onSubmit={handleSubmit}>
//         <input type="text" value={note} onChange={e => setNote(e.target.value)} />
//         <button type="submit" className="sentButton"><FaArrowCircleRight /></button>
//       </form>
//     </div>
//   );
// };

// export default Notes;




import { React, useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";

const Notes = ({ groups, initials, notesData, setNotesData }) => {
  const [note, setNote] = useState(""); // State variable for the current note

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    const currentDate = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    }); // Get the current date formatted as "11 March 2023"
    const currentTime = new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit"
    }); // Get the current time formatted as "hh:mm"
    const newNote = {
      content: note,
      dateTime: `${currentDate} ${currentTime}`
    }; // Combine note, date, and time
    setNotesData([...notesData, newNote]); // Add the current note to the notes array for the selected group
    setNote(""); // Clear the current note
  };

  return (
    <div className="notesSection">
      <div className="noteTopsBar">
        <span className="initials">{initials}</span> <h1 style={{textTransform:"capitalize", fontSize:"1.2rem"}}>{groups}</h1>
      </div>

      {/* NOTES DATA SECTION START */}
      <div className="notesData">
        {notesData.map((note, index) => (
          <div key={index} className="note">
            <p>{note.content}</p>
            <p className="noteDateTime" style={{fontWeight:"600",color:"#353535"}}>{note.dateTime}</p>
          </div>
        ))} {/* Display all notes */}
      </div>
      {/* NOTES DATA SECTION END */}
      
      <form className="inputSection" onSubmit={handleSubmit}>
        <input type="text" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Enter your text here..........."/>
        <button type="submit" className="sentButton">
          <FaArrowCircleRight />
        </button>
      </form>
    </div>
  );
};

export default Notes;
