import { useSelector } from "react-redux";
import { RootState } from "../types";

export const useStoreData = () => {
  const imagePath = useSelector((state: RootState) => state.imagePath);

  return {
    imagePath
  };
};
