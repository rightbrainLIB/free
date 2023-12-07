export const setThumbWrapsCount = (count: number) => ({
  type: "SET_THUMB_WRAPS_COUNT",
  payload: count
});

export const setDialogInput = (
  inputIdentifier: string,
  inputValue: string
) => ({
  type: "SET_DIALOG_INPUT",
  payload: { inputIdentifier, inputValue }
});

export const clearDialogInput = () => ({
  type: "CLEAR_DIALOG_INPUT"
});

export const removeDialogInput = (inputIdentifier: string) => ({
  type: "REMOVE_DIALOG_INPUT",
  payload: inputIdentifier
});

interface DialogInputData {
  [key: string]: string; // 인덱스 시그니처 추가
}

// reducer.js
const initialState: StateType = {
  thumbWrapsCount: 2,
  dialogInputData: {}
};

interface StateType {
  thumbWrapsCount: number;
  dialogInputData: DialogInputData;
}

const thumbInputReducer = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case "SET_THUMB_WRAPS_COUNT":
      return {
        ...state,
        thumbWrapsCount: action.payload
      };
    case "SET_DIALOG_INPUT":
      const { inputIdentifier, inputValue } = action.payload;
      return {
        ...state,
        dialogInputData: {
          ...state.dialogInputData,
          inputIdentifier,
          [inputIdentifier]: inputValue
        }
      };
    case "CLEAR_DIALOG_INPUT":
      return {
        ...state,
        dialogInputData: {}
      };
    case "REMOVE_DIALOG_INPUT":
      const updatedDialogInputData = { ...state.dialogInputData };
      delete updatedDialogInputData[action.payload];
      return {
        ...state,
        dialogInputData: updatedDialogInputData
      };
    default:
      return state;
  }
};

export default thumbInputReducer;
