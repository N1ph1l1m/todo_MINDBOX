import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "list",
  initialState: {
    list: [],
  },
  reducers: {
    createTask(state, action) {
      const { id, name } = action.payload;
      state.list.push({
        id,
        name,
        completed: false,
      });
    },
    toggleTodo(state, action) {
      state.list = state.list.map((list) =>
        list.id === action.payload
          ? { ...list, completed: !list.completed }
          : list
      );
    },
    clearCompleted(state) {
      state.list = state.list.filter((items) => !items.completed);
    },
  },
});
export const { createTask, toggleTodo, clearCompleted } = listSlice.actions;

export default listSlice.reducer;
