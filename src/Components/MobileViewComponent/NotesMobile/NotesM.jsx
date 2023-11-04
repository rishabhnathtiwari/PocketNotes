import React from "react";
import "./NotesM.css";
import { useNavigate } from "react-router-dom";
import usePocketContext from "../../../Hooks/pocketcontext";

function MobileNotes({ title }) {



  const navigate = useNavigate();
  const { setSelected } = usePocketContext();
  

  // checks to ensure that title and title[0] are defined
  if (title && title[0] && title[0].name) {
    const initials = title[0].name
      .split(" ")
      .map((n) => n[0].toUpperCase())
      .join("");


    const newTitle = title[0].name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");


    const handleNameClick = () => {
      localStorage.setItem("selected", title[0].name);
      setSelected(title[0].name);
      navigate("/notespagemobile");
    };



    return (
      <div onClick={handleNameClick} className="mobile-notes">

        <div
          className="mobilenotes-icon"
          style={{ backgroundColor: title[0].color }}
        >
          {initials}
        </div>


        <div className="mobilenotes-title">{newTitle}</div>
        
      </div>
    );
  } else {

    return null; 
  }
}

export default MobileNotes;





































































