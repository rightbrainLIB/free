import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./reducer/HeaderReducer";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch {
    // 예외 처리
  }
};
const persistedState = loadState();

const store = configureStore({
  reducer: headerReducer,
  preloadedState: persistedState
});

store.subscribe(() => {
  saveState(store.getState());
});
//const store = createStore(headerReducer);

export default store;
