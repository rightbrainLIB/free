import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentTalk: '',
  chatBox: [],
  priceValue: null,
}

const talk = createSlice({
  name: "talk",
  initialState,
  reducers: {
    setCurrentTalk: (state, { payload }) => {
      state.currentTalk = payload;
    },
    setChatBox: (state, { payload }) => {
      state.chatBox = state.chatBox.concat(payload);
    },
    setPriceValue: (state, { payload }) => {
      state.priceValue = payload;
    },
  },
});

export const { setCurrentTalk, setChatBox, setPriceValue }  = talk.actions;

export default talk.reducer;