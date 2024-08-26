import { createSlice } from "@reduxjs/toolkit";
const initialState={
    currentUser:null,
    Authneticated:false
}
export const userSlice=createSlice({
    name:"User",
    initialState,
    reducers:{
        Currentuser:(state,action)=>{
            state.currentUser=action.payload;
        },
        Authenticate:(state,action)=>{
            state.Authneticated=action.payload;
        }
    }
})
export  const {Currentuser,Authenticate}=userSlice.actions
export  default userSlice.reducer