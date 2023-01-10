import { configureStore } from "@reduxjs/toolkit";
import registrationSlice from "./redux/registrationSlice";
export const store = configureStore({
    reducer:{
        register:registrationSlice
    }
})