import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./Slice/listSlice/listSlice";
import textTodoSlice from "./Slice/textTodoSlice/textTodoSlice";
export default configureStore({
  reducer: {
    list: listSlice,
    text: textTodoSlice,
  },
});
