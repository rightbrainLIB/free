import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSheet: '', // 오픈되어야 할 바텀시트
  chatCount: 0,
  chatBox: [], // 채팅내역
  priceValue: null, // 가격
}

const talk = createSlice({
  name: "talk",
  initialState,
  reducers: {
    setCurrentSheet: (state, { payload }) => {
      state.currentSheet = payload;
    },
    setChatBox: (state, { payload }) => {
      state.chatCount = state.chatCount + 1
      state.chatBox = state.chatBox.concat(payload);
    },
    setSpliceChatBox: (state, { payload }) => { // 이전 채팅버튼 클릭시 이후 채팅목록 제거
      console.log(payload)
      console.log(state.chatBox.length - 1)
      if(payload !== -1 && payload !== state.chatBox.length - 1 ) {// 일치하지않는 값, 마지막 채팅이면 X
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

export const { setCurrentSheet, setChatBox, setSpliceChatBox, setPriceValue, setResetChatBox }  = talk.actions;

export default talk.reducer;