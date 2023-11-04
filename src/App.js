import { useEffect, useState } from "react";
import "./App.css";
import WebView from "./ViewDevice/WebView/WebView.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "./Context/pocketcontext";
import usePocketContext from "./Hooks/pocketcontext";
import MobileView from "./ViewDevice/MobileView/MobileView.jsx";
import NotesPageMobile from "./Components/MobileViewComponent/NotesPageMobile/NotesMobilePage.jsx";


function App() {


  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const { selected, setSelected } = usePocketContext();


  useEffect(() => {
    setSelected(localStorage.getItem("selected") || "");
    // eslint-disable-next-line
  }, [selected]);

  const checkScreenSize = () => {
    setScreenSize(window.innerWidth);
  };

  window.addEventListener("resize", checkScreenSize);


  
  return (

    <Provider>
      <div className="main-container">

        {screenSize > 500 ? (
          <WebView />
        ) : (
          <Router>
            <Routes>

              <Route path="/" element={<MobileView />} />
              <Route path="/notespagemobile" element={<NotesPageMobile />} />

            </Routes>
          </Router>
        )}
      </div>
    </Provider>
  );
}

export default App;



















































