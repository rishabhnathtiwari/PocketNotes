import React from "react";
import "./HomeMobile.css";
import BgImg from "../../../imagesassets/notes.jpg";

function MobileHome() {
  return (
    <div
      className="homemobile"
      
      style={{
        backgroundImage: `url(${BgImg})`,
      }}
    >
      Create Your First Note...
    </div>
  );
}

export default MobileHome;
