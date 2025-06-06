import { useContext } from "react";
import AdvisorsContext from "../_context/AdvisorsContext";

export default function useAdvisorsContext() {
  const data = useContext(AdvisorsContext);

  const error = () => {
    throw new Error("useDataContext should be used with the correct context");
  };

  return data === undefined ? error() : data;
}
