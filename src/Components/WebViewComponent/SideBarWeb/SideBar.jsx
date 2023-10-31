import React, { useEffect, useState } from "react";
import './SideBar.css';
import NotesTitle from '../NotesTitle/NotesTitle';
import AddNotes from '../AddNotesPopup/AddNotes';



const SideBar = () => {

    const [title, settitle]=useState([]);
    const[viewpopup,setviewpopup]=useState(false);

    const [groupName, setGroupName] = useState(
        localStorage.getItem("groupNames") || []
      );


      
      useEffect(() => {
        const data = localStorage.getItem("groupNames");
        if (data) {
          setGroupName(JSON.parse(data));
        } else {
          setGroupName([]);
        }
      }, []);

    
      useEffect(() => {
        if (groupName.length > 0) {
          const obj = JSON.parse(localStorage.getItem("groupNames"));
          const result = Object.keys(obj).map((key) => [obj[key]]);
          settitle(result);
        }
      }, [groupName]);
    
    

    const handleClicks = () => {
        setviewpopup(true);
      };


      const handleClose=()=>{
        setviewpopup(false);
      }
    


  return (
    <div className='sidebarweb'>
        <div className='sidebarwebheading'>Pocket Notes</div>
        <div className='addnotesbtn'>
            <button onClick={handleClicks}>
                <span id='plus-sign'>
                    <b>+</b>                   
                </span>
                <span><b>Create Notes Group</b></span>
            </button>
        </div>
        <div className="sidebarnotestitle">

        {title.length > 0 ? (
        title.map((title, index) => <NotesTitle key={index} title={title} />)
        ) :
        (
        <div className="ifsidebar-notes-titleisempty">
            <p>No Notes Group Created</p>
        </div>
        )}
        </div>

      {viewpopup && (
        <div className="webpopupoverlay">
          <AddNotes
            groupName={groupName}
            setGroupName={setGroupName}
            onClose={handleClose}
          />
        </div>
      )}

      
    </div>
  )
}

export default SideBar
