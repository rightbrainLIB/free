import {configureStore} from "@reduxjs/toolkit";
import talk from "./talk";

const store = configureStore({
  reducer: {
    talk,
  }
})

export default store;