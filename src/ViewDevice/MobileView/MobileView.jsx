import React, { useState, useEffect } from "react";
import "./MobileView.css";
import MobilePopup from "../../Components/MobileViewComponent/AddNotesPopup/AddNotes";
import MobileNotes from "../../Components/MobileViewComponent/NotesMobile/NotesM";
import MobileHome from "../../Components/MobileViewComponent/HomeMobileView/HomeMobile";


function MobileView() {

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



  const handleClicks = () => {
    setviewPopup(true);
  };

  const handleClose = () => {
    setviewPopup(false);
  };
  return (

    <div className="mobilesidebar">

      <div className="mobilesidebar-title">Pocket Notes</div>
      <div className="mobilesidebar-addnotesbtn">
        <button onClick={handleClicks}>
          <span id="add">+</span>
          <span>Create Notes Group</span>
        </button>
      </div>

      <div className="mobilesidebar-notestitle">
        {titles.length > 0 ? (
          titles.map((title, index) => (
            <MobileNotes
              title={title}
              key={index}
            />
          ))
        ) : (
          <MobileHome />
        )}
      </div>

      {viewPopup && (

        <div className="mobilepopup-overlay">

          <MobilePopup
            onClose={handleClose}
            groupNamesParent={groupNamesParent}
            setGroupNamesParent={setGroupNamesParent}/>


        </div>
        
      )}
    </div>
  );
}

export default MobileView;
