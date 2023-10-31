import { useContext } from "react";
import PocketContext from "../Context/pocketcontext";

const usePocketContext = () => {
  return useContext(PocketContext);
}

export default usePocketContext;
