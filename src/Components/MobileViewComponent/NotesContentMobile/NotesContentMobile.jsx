import React from "react";
import "./NotesContentMobile.css";

function NotesContentMobile({ note }) {
  return (
    <div className="mobilenotescontent">

      <div className="mobilenotescontent-datetimedetails">
        <div className="mobilenotes-contentdate">{note.date}</div>
        <div className="mobilenotes-contenttime">{note.time}</div>
        
      </div>

      <div className="mobilenotes-contentdetails">

        <p>{note.content}</p>
      </div>
    </div>
  );
}

export default NotesContentMobile;
