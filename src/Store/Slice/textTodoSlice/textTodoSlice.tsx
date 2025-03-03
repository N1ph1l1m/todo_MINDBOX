import { createSlice } from "@reduxjs/toolkit";


const textTodoSlice = createSlice({
  name: "text",
  initialState: {
    text: "" as string,
  },
  reducers: {
    handlerText(state, action) {
      state.text = action.payload;
    },
    clearText(state) {
      state.text = "";
    },
  },
});
export const { handlerText, clearText } = textTodoSlice.actions;
export default textTodoSlice.reducer;
