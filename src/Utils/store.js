import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice"
import gptSearchReducer from "./gptSearchSlice"
import configReducer from "./configSlice"
const appStore= configureStore({
    reducer: {
        user: userReducer,
        movies:movieReducer,
        gptSearch:gptSearchReducer,
        configLang:configReducer
    }
})

export default appStore;