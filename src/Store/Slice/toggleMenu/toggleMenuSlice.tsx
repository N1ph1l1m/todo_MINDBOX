import { createSlice } from "@reduxjs/toolkit";


const toggleMenuSlice = createSlice({
    name:"menu",
    initialState:{
        menu:"all" as string,
    },
    reducers:{
        toggleAll(state){
            state.menu = "all";
        },
        toggleActive(state){
            state.menu = "active";
        },
        toggleCompleted(state){
            state.menu = "completed";
        },
        toggleTrash(state){
            state.menu = "trash";
        },
    }
})
export const {toggleAll,toggleActive,toggleCompleted , toggleTrash } = toggleMenuSlice.actions;
export default toggleMenuSlice.reducer;
