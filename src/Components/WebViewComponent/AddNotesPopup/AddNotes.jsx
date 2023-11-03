import React, { useState } from "react";
import "./AddNotes.css";

function AddNotesPopup({ groupNamesParent, setGroupNamesParent, onClose }) {

  // state variables for group name and background color
  const [groupName, setGroupName] = useState("");
  const [bgColor, setBgColor] = useState("");

  // Event handler to update 'groupName' state when input value changes
  const handleGroupName = (e) => {
    setGroupName(e.target.value);
  };

  // Event handler to get the background color of the selected color div
  const handleTheme = (e) => {
    const div = e.target;
    setBgColor(getComputedStyle(div).backgroundColor);
  };

// Event handler to save the new group name and color
  const saveName = () => {
    const newGroup = { name: groupName, color: bgColor };
    setGroupNamesParent([...groupNamesParent, newGroup]);
    localStorage.setItem(
      "groupNames",
      JSON.stringify([...groupNamesParent, newGroup])
    );

    // For the popup to close
    onClose();
  };

  return (



    <div className="webpopup">
      <div className="popup-title">Create New Notes Group</div>

      <div className="popup-input">

        <span>Group Name</span>

        <input
          value={groupName}
          onChange={handleGroupName}
          type="text"
          placeholder="Enter Your Group Name..."
        />

      </div>
      <div className="popupcolors-input">

        <span>Group Color</span>

        <div className="popupcolor-inputcolor">
          <div
            className={`popupinputcolor-1 ${
              bgColor === "rgb(179, 139, 250)" ? `highlight` : null
            }`}
            onClick={handleTheme}
          ></div>
          <div
            className={`popupinputcolor-2 ${
              bgColor === "rgb(255, 121, 242)" ? `highlight` : null
            }`}
            onClick={handleTheme}
          ></div>
          <div
            className={`ppopupinputcolor-3 ${
              bgColor === "rgb(67, 230, 252)" ? `highlight` : null
            }`}
            onClick={handleTheme}
          ></div>
          <div
            className={`popupinputcolor-4 ${
              bgColor === "rgb(241, 149, 118)" ? `highlight` : null
            }`}
            onClick={handleTheme}
          ></div>
          <div
            className={`popupinputcolor-5 ${
              bgColor === "rgb(0, 71, 255)" ? `highlight` : null
            }`}
            onClick={handleTheme}
          ></div>
          <div
            className={`popupinputcolor-6 ${
              bgColor === "rgb(102, 145, 255)" ? `highlight` : null
            }`}
            onClick={handleTheme}
          ></div>
        </div>
      </div>
      <div className="popup-close">
        <button onClick={saveName} disabled={groupName.length === 0}>
          Create
        </button>
      </div>
    </div>
  );
}

export default AddNotesPopup;





















































