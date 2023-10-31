import './App.css';
import { useEffect } from "react";
import { Provider } from './Context/pocketcontext';
import WebView from './ViewDevice/WebView/WebView';
import usePocketContext from './Hooks/pocketcontext';


function App() {
  
  const { selected, setSelected } = usePocketContext();

  useEffect(() => {
    setSelected(localStorage.getItem("selected") || "");
    
  }, [selected]);

  return (

    <Provider>

   <div className='main-container'>
      
      <WebView/>
   
    </div>

    </Provider>
  );
}

export default App;
