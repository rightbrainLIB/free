import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import talk from "./talk";

const store = configureStore({
  reducer: {
    talk,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }), //A non-serializable value was detected in an action, in the path: `type` 오류로 추가
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;