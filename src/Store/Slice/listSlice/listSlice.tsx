import { createSlice } from "@reduxjs/toolkit";

interface IList{
  id:number,
  name:string,
  completed:boolean,
  isDelete:boolean,
}
const listSlice = createSlice({
  name: "list",
  initialState: {
    list: [] as IList[],
  },
  reducers: {
    createTask(state, action) {
      const { id, name } = action.payload;
      state.list.push({ id, name,completed: false,isDelete:false});
    },
    toggleTodo(state, action) {
      state.list = state.list.map((list) =>
        list.id === action.payload
          ? { ...list, completed: !list.completed }
          : list
      );
    },
    clearCompleted(state) {
      state.list = state.list.filter((items) =>  !items.completed);
    },
    deleteTodo(state,action){
      state.list = state.list.map((list) =>
        list.id === action.payload
          ? { ...list, isDelete:true }
          : list)
    }
  },
});
export const { createTask, toggleTodo, clearCompleted , deleteTodo} = listSlice.actions;

export default listSlice.reducer;
