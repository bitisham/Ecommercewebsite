import { createSlice } from "@reduxjs/toolkit";
import {  fetchSearchProducts } from "../../services/AllProduct";
const initialState={
    data:[],
    loading: false,
    error:null,
    };
    
const Searchdynamicproduct=createSlice({
    name: "searchdynamicproduct",
    initialState,
    reducers:{},
   extraReducers: (builder)=>{
    builder
       .addCase(fetchSearchProducts.pending, (state)=>{
            state.loading=true;
        })
       .addCase(fetchSearchProducts.fulfilled, (state,action)=>{
            state.loading=false;
            state.data=action.payload;
        })
       .addCase(fetchSearchProducts.rejected, (state,action)=>{
            state.loading=false;
            state.error=action.error.message;
        })
   }
});
export default Searchdynamicproduct.reducer;