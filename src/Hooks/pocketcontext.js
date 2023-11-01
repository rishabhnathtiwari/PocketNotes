import { useContext } from "react";
import PocketContext from "../Context/pocketcontext.jsx";

const usePocketContext = () => {
  return useContext(PocketContext);
}

export default usePocketContext;
