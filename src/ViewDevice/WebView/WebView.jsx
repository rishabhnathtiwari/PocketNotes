import React from 'react';
import WebSideBar from '../../Components/WebViewComponent/SideBarWeb/SideBar';
import WebHomePage from '../../Components/WebViewComponent/HomePageWeb/Homepage';
import WebNotes from '../../Components/WebViewComponent/NotesContentWeb/NotesContent';
import usePocketContext from '../../Hooks/pocketcontext';
import './WebView.css';


const WebView = () => {

  const { selected } = usePocketContext();

  return (
    <div className='WebView'>
    <WebSideBar/>
    {selected.length > 0 ? <WebNotes /> : <WebHomePage />}
      
    </div>
  );
}

export default WebView;












