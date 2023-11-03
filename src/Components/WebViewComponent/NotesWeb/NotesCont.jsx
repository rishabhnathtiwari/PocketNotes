import React, { useEffect, useState } from "react";
import "./NotesCont.css";
import Enter from "../../../imagesassets/enter.png";
import WebNotesContent from "../NotesContentWeb/NotesContent";
import usePocketContext from "../../../Hooks/pocketcontext";


function NotesWeb() {
  
  const [text, setText] = useState("");
  const [ThemeColor, setThemeColor] = useState("#fff");
  const [initials, setInitials] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");
  const { notes, setNotes, selected } = usePocketContext();



  useEffect(() => {
    setNotes(JSON.parse(localStorage.getItem(selected)) || []);
    const groupNames = JSON.parse(localStorage.getItem("groupNames"));
    const selectedGroup = groupNames.find((group) => group.name === selected);
    if (selectedGroup) {
      setThemeColor(selectedGroup.color);
      setInitials(
        selectedGroup.name
          .split(" ")
          .map((word) => word.charAt(0))
          .join("")
          .toUpperCase()
      );


      setSelectedTitle(
        selectedGroup.name
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
      );
    }

  }, [selected, setNotes]);


  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleNotesSave();
    }
  };

  const handleNotesSave = () => {
    if (!text.trim()) {
      return;
    }
    const notes = JSON.parse(localStorage.getItem(selected)) || [];
    const newNoteObj = {
      id: Date.now(),
      title: selected,
      content: text.trim(),
      date: new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
      }),
      time: new Date().toLocaleTimeString(),
    };
    notes.push(newNoteObj);
    localStorage.setItem(selected, JSON.stringify(notes));
    setText("");
    setNotes(notes);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="webnotes">
      <div className="webnotes-title">
        <div
          className="webnotes-titlecolor"
          style={{ backgroundColor: ThemeColor }}
        >
          {initials}
        </div>

        <div className="webnotes-titlestext">{selectedTitle}</div>
      </div>
      <div className="webnotes-content">
        {notes && notes.length > 0
          ? notes.map((note, index) => (

              <WebNotesContent key={index} note={note} />
            ))
          : null}
      </div>
      <div className="webnotes-input">
        
        <textarea
          value={text}
          placeholder="Enter your notes here"
          onChange={handleChange}
          onKeyDown={handleKeyDown}

        ></textarea>

        <img src={Enter} alt="enter" onClick={handleNotesSave} />
      </div>
    </div>
  );
}

export default NotesWeb;

































































