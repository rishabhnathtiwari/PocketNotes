import React, { useState } from "react";
import './AddNotes.css';


const AddNotes = ({ groupNamesParent, setGroupNamesParent, onClose }) => {
  
  const [groupName, setGroupName] = useState("");
  const [BGColor, setBGColor] = useState("");

  const handleGroupName = (e) => {
    setGroupName(e.target.value);
  };

  const handleColorTheme = (e) => {
    const div = e.target;
    setBGColor(getComputedStyle(div).backgroundColor);
  };

  const saveName = () => {
    const newGroup = { name: groupName, color: BGColor };
    setGroupNamesParent([...groupNamesParent, newGroup]);
    localStorage.setItem(
      "groupNames",
      JSON.stringify([...groupNamesParent, newGroup])
    );
    onClose();
  };


  return (

    <div  className='webpopup'>
        <div className='popup-title'>Create New Notes Group</div>
    
        <div className="popup-input">
        <span>Group Name</span>
        <input
          value={groupName}
          onChange={handleGroupName}
          type="text"
          placeholder="Enter Your Group Name..."
        />


      </div>
    
    <div className='popupcolors-input'>
        <span>Choose Color</span>
    
    <div className='popupcolor-inputcolor'>
        
       <div
            className={`popupinputcolor-1 ${
              BGColor === "rgb(179, 139, 250)" ? `highlight` : null
            }`}
            onClick={handleColorTheme}
          >
          </div>


          <div
            className={`popupinputcolor-2 ${
              BGColor === "rgb(255, 121, 242)" ? `highlight` : null
            }`}
            onClick={handleColorTheme}
          ></div>
         
         <div
            className={`popupinputcolor-3 ${
              BGColor === "rgb(67, 230, 252)" ? `highlight` : null
            }`}
            onClick={handleColorTheme}
          ></div>


         <div
            className={`popupinputcolor-4 ${
              BGColor === "rgb(241, 149, 118)" ? `highlight` : null
            }`}
            onClick={handleColorTheme}
          ></div>

        
          <div
            className={`popupinputcolor-5 ${
              BGColor === "rgb(0, 71, 255)" ? `highlight` : null
            }`}
            onClick={handleColorTheme}
          ></div>

        <div
            className={`popupinputcolor-6 ${
              BGColor === "rgb(102, 145, 255)" ? `highlight` : null
            }`}

            onClick={handleColorTheme}

          >
        </div>

    </div>


    
    </div>


      <div className="popup-close">
        <button onClick={saveName} disabled={groupName.length === 0}>
          Create
        </button>
      </div>
      
    </div>
  )
}

export default AddNotes
