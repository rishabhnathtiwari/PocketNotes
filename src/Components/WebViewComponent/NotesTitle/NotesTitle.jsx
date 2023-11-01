import React from 'react';
import './NotesTitle.css';
import usePocketContext from '../../../Hooks/pocketcontext';
const NotesTitle = ({title}) => {


    const { selected, setSelected } = usePocketContext();
    const nameInitals = title[0].name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase();
  
    const newTitle = title[0].name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  
    const handleNameClick = () => {
      setSelected(title[0].name);
    };
  


  return (
    <>
    <div onClick={handleNameClick}
     className={`groupnamelogo ${
        selected === title[0].name ? "highlightedName" : null
      }`}>

<div className="namelogo" style={{ backgroundColor: title[0].color }}>
        {nameInitals}
      </div>
        
      <div className="groupname">{newTitle}</div>

      </div>
      
    </>
  )
}

export default NotesTitle
