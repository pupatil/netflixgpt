import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name:"cnofig",
    initialState:{
        Lang:"en"
    },
    reducers:{
        changeLanguage : (state, action)=>{
            state.Lang = action.payload
        }
    }
})

export const {changeLanguage} = configSlice.actions
export default configSlice.reducer