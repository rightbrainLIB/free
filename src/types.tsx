export interface RootState {
  header: {
    imagePath: string;
  };
  thumbControl: {
    thumbWraps: ThumbWrapType[];
  };
  thumbInput: {
    thumbWrapsCount: number;
    dialogInputData: Record<string, string>;
  };
}

export const SET_IMAGE_PATH = "SET_IMAGE_PATH";
export const CLEAR_IMAGE_PATH = "CLEAR_IMAGE_PATH";
export const SET_THUMB_WRAPS_COUNT = "SET_THUMB_WRAPS_COUNT";
export const SET_DIALOG_INPUT_DATA = "SET_DIALOG_INPUT_DATA";
export const SET_THUMB_WRAPS = "SET_THUMB_WRAPS";

export interface SetImagePathAction {
  type: typeof SET_IMAGE_PATH;
  payload: string;
}

export interface ClearImagePathAction {
  type: typeof CLEAR_IMAGE_PATH;
}
export interface SetThumbWrapsCountAction {
  type: typeof SET_THUMB_WRAPS_COUNT;
  payload: number;
}

export interface SetDialogInputDataAction {
  type: typeof SET_DIALOG_INPUT_DATA;
  payload: dialogInputData;
}

export interface SetThumbWrapsAction {
  type: typeof SET_THUMB_WRAPS;
  payload: ThumbWrapType;
}
export type dialogInputData = Record<string, string>;
export type ThumbWrapType = ThumbWrapType[];
