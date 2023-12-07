import { useSelector } from "react-redux";
import { RootState } from "../types";

export const useStoreData = () => {
  const imagePath = useSelector((state: RootState) => state.header.imagePath);
  const thumbWraps = useSelector(
    (state: RootState) => state.thumbControl.thumbWraps
  );
  const dialogInputData = useSelector(
    (state: RootState) => state.thumbInput.dialogInputData
  );
  const thumbWrapsCount = useSelector(
    (state: RootState) => state.thumbInput.thumbWrapsCount
  );

  return {
    imagePath,
    thumbWrapsCount,
    dialogInputData,
    thumbWraps
  };
};
