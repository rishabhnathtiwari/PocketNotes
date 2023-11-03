import React from "react";
import "./NotesTitle.css";
import usePocketContext from "../../../Hooks/pocketcontext";



function NotesTitle({ title }) {
  
  const { selected, setSelected } = usePocketContext();

  let nameInitals = '';
  let newTitle = '';

  if (title && title.length > 0 && title[0].name) {
    nameInitals = title[0].name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase();

    newTitle = title[0].name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  const handleNameClick = () => {
    if (title && title.length > 0 && title[0].name) {
      setSelected(title[0].name);
    }
  };




  return (
    <div
      onClick={handleNameClick}

      className={`groupnamelogo ${
        selected === title[0].name ? "highlightedName" : null
      }`}
    >

      <div className="namelogo" style={{ backgroundColor: title[0].color }}>
        {nameInitals}

      </div>

      <div className="groupname">{newTitle}</div>
      
    </div>
  );
}

export default NotesTitle;
























































