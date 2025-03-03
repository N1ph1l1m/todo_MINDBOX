import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./Slice/listSlice/listSlice";
import textTodoSlice from "./Slice/textTodoSlice/textTodoSlice";
import toggleSlice from "./Slice/toggleMenu/toggleMenuSlice";
export default configureStore({
  reducer: {
    list: listSlice,
    text: textTodoSlice,
    toggleMenu: toggleSlice,
  },
});
