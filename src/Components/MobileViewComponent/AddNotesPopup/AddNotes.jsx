import React, { useState } from 'react'
import "./AddNotes.css";



function MobilePopup({ onClose, groupNamesParent, setGroupNamesParent}) {
  const [groupName, setGroupName] = useState("");
  const [bgColor, setBgColor] = useState("");




  const handleGroupName = (e) => {
    setGroupName(e.target.value);
  };



  const handleBGColor = (e) => {
    const div = e.target;
    setBgColor(getComputedStyle(div).backgroundColor);
  };



  const saveName = () => {
    const newGroup = { name: groupName, color: bgColor };
    setGroupNamesParent([...groupNamesParent, newGroup]);
    localStorage.setItem(
      "groupNames",
      JSON.stringify([...groupNamesParent, newGroup])
    );


    onClose();


  };




  return (
    <div className="mobilepopup">

      <div className="mobilepopup-title">Create New Notes Group</div>
      <div className="mobilepopup-input">

        <span>Group Name</span>

        <input
          value={groupName}
          onChange={handleGroupName}
          type="text"
          placeholder="Enter Group Name..."
        />

      </div>

      <div className="mobilepopupcolor-input">

        <span>Group Color</span>

        <div className="mobilepopup-inputcolor">

          <div
            className={`mobilepopupinputcolor-1 ${
              bgColor === "rgb(179, 139, 250)" ? `highlightColor` : null
            }`}
            onClick={handleBGColor}
>

          </div>

          <div
            className={`mobilepopupinputcolor-2 ${
              bgColor === "rgb(255, 121, 242)" ? `highlightColor` : null
            }`}

            onClick={handleBGColor}>

          </div>

          <div
            className={`mobilepopupinputcolor-3 ${
              bgColor === "rgb(67, 230, 252)" ? `highlightColor` : null
            }`}
            onClick={handleBGColor}>

          </div>

          <div
            className={`mobilepopupinputcolor-4 ${
              bgColor === "rgb(241, 149, 118)" ? `highlightColor` : null
            }`}

            onClick={handleBGColor}
          >

          </div>

          <div
            className={`mobilepopupinputcolor-5 ${
              bgColor === "rgb(0, 71, 255)" ? `highlightColor` : null
            }`}

            onClick={handleBGColor}
          >

          </div>

          <div
            className={`mobilepopupinputcolor-6 ${
              bgColor === "rgb(102, 145, 255)" ? `highlightColor` : null
            }`}

            onClick={handleBGColor}
          >

          </div>

        </div>
      </div>

      <div className="mobilepopup-close">

        <button onClick={saveName} disabled={groupName.length === 0}>
          Create
        </button>

      </div>
    </div>
  )
}

export default MobilePopup


















































