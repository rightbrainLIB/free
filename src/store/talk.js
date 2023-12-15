import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentTalk: '',
  chatCount: {
    "KBChat1" : 0,
    "KBChat2" : 0,
    "KBChat3" : 0,
    "KBChat4" : 0,
    "KBChat5" : 0,
    "KBChat6" : 0,
    "KBChat7" : 0,
    "KBChat8" : 0,
    "KBChat9" : 0,
  },
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
      state.chatCount[payload.name] = state.chatCount[payload.name] + 1
      state.chatBox = state.chatBox.concat(payload);
    },
    setSpliceChatBox: (state, { payload }) => {
      if(payload !== -1 && payload !== state.chatBox.length - 1 ) {
        state.chatBox.splice(payload + 1)      
      }
    },
    setResetChatBox: (state) => {
      state.chatBox = [];
    },
    setPriceValue: (state, { payload }) => {
      state.priceValue = payload;
    },
  },
});

export const { setCurrentTalk, setChatBox, setSpliceChatBox, setPriceValue, setResetChatBox }  = talk.actions;

export default talk.reducer;