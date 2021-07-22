import { createSlice } from "@reduxjs/toolkit";
const filterSlice = createSlice({
    name:"filter",
    initialState:"all",
    reducers:{
        toggleFilter:(state,action)=>{
            return action.payload
        }
    }


})

export const { toggleFilter } =
  filterSlice.actions;
export default filterSlice.reducer;