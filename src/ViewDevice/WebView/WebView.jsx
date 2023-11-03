import React from "react";
import "./WebView.css";
import SidebarWeb from "../../Components/WebViewComponent/SideBarWeb/SideBar";
import WebHome from "../../Components/WebViewComponent/HomePageWeb/Homepage";
import WebNotes from "../../Components/WebViewComponent/NotesWeb/NotesCont";
import usePocketContext from "../../Hooks/pocketcontext";


function WebView() {
  const { selected } = usePocketContext();

  return (
    <div className="WebView">
      <SidebarWeb />

      {selected.length > 0 ? <WebNotes /> : <WebHome />}
      
    </div>
  );
}

export default WebView;










