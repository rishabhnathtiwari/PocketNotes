import React, { useEffect, useState } from "react";
import './SideBar.css';
import NotesTitle from '../NotesTitle/NotesTitle';
import AddNotes from '../AddNotesPopup/AddNotes';


function Sidebar() {

 
  const [titles, setTitles] = useState([]);

  const [viewPopup, setviewPopup] = useState(false);
  
  const [groupNamesParent, setGroupNamesParent] = useState(
    localStorage.getItem("groupNames") || []
  );

  useEffect(() => {
    const data = localStorage.getItem("groupNames");
    if (data) {
      setGroupNamesParent(JSON.parse(data));
    } else {
      setGroupNamesParent([]);
    }
  }, []);


  useEffect(() => {
    if (groupNamesParent.length > 0) {
      const obj = JSON.parse(localStorage.getItem("groupNames"));
      const result = Object.keys(obj).map((key) => [obj[key]]);
      setTitles(result);
    }
  }, [groupNamesParent]);



  const handleClick = () => {
    setviewPopup(true);
  };

  const handleClose = () => {
    setviewPopup(false);
  };

  
  return (
            
            
    <div className="sidebarweb">
    <div className="sidebarwebheading">Pocket Notes</div>

    <div className="addnotesbtn">
      <button onClick={handleClick}>

        <span id="plus-sign"> <b>+</b></span>

        <span>Create Notes Group</span>
      </button>
    </div>

    

    <div className="sidebarnotestitle">
      {titles.length > 0 ? (
        titles.map((title, index) => <NotesTitle key={index} title={title} />)
        
      ) : (
        <div className="ifsidebar-notes-titleisempty">
          <p>No Notes Group Created</p>
        </div>
      )}
    </div>


    {viewPopup && (
      <div className="webpopupoverlay">
        <AddNotes
          groupNamesParent={groupNamesParent}
          setGroupNamesParent={setGroupNamesParent}
          onClose={handleClose}
        />
      </div>
    )}
  </div>
);
}

export default Sidebar;


