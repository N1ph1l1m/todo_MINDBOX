import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./Slice/listSlice/listSlice";
import textTodoSlice from "./Slice/textTodoSlice/textTodoSlice";
import toggleSlice from "./Slice/toggleMenu/toggleMenuSlice";

const  store  = configureStore({
  reducer: {
    list: listSlice,
    text: textTodoSlice,
    toggleMenu: toggleSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;