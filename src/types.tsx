export interface RootState {
  imagePath: string;
}

export const SET_IMAGE_PATH = "SET_IMAGE_PATH";
export const CLEAR_IMAGE_PATH = "CLEAR_IMAGE_PATH";

export interface SetImagePathAction {
  type: typeof SET_IMAGE_PATH;
  payload: string;
}

export interface ClearImagePathAction {
  type: typeof CLEAR_IMAGE_PATH;
}
