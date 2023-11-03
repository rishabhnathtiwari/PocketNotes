import React from 'react';
import "./Homepage.css";
import HomeImg from "../../../imagesassets/home.png"
import LockIcon from "../../../imagesassets/lock.png"


function WebHome() {
  return (
    <div className='homeweb'>

      <img src={HomeImg} alt="Home" />

      <h1><b>Pocket Notes</b></h1>

      <p>Send and receive messages without keeping your phone online.<br/>Use Pocket Notes on up to 4 linked Devices and 1 mobile phone.</p>

      <div className="encrypt-text">

        <img src={LockIcon} alt="LockIcon" />

        <span>end-to-end encrypted</span>
        
      </div>
    </div>
  )
}

export default WebHome;