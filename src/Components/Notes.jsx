import { React, useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";

const Notes = ({ groups, initials, notesData, setNotesData, color }) => {
  // Add color prop here
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const currentTime = new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    const newNote = {
      content: note,
      dateTime: `${currentDate} ${currentTime}`,
    };
    setNotesData([...notesData, newNote]);
    setNote("");
  };

  return (
    <div className="notesSection">
      <div className="noteTopsBar">
        <span className="initials" style={{ backgroundColor: color }}>
          {initials}
        </span>
        <h1 style={{ textTransform: "capitalize", fontSize: "1.2rem" }}>
          {groups}
        </h1>
      </div>

      {/* NOTES DATA SECTION START */}
      <div className="notesData">
        {notesData.map((note, index) => (
          <div key={index} className="note">
            <p>{note.content}</p>
            <p
              className="noteDateTime"
              style={{ fontWeight: "600", color: "#353535" }}
            >
              {note.dateTime}
            </p>
          </div>
        ))}{" "}
        {/* Display all notes */}
      </div>
      {/* NOTES DATA SECTION END */}

      <form className="inputSection" onSubmit={handleSubmit}>
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Enter your text here..........."
        />
        <button type="submit" className="sentButton">
          <FaArrowCircleRight />
        </button>
      </form>
    </div>
  );
};

export default Notes;
