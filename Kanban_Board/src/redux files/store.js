import {configureStore} from "@reduxjs/toolkit";
import addTaskSlice from "./Slices/addTaskSlice.js";

export const store = configureStore({
    reducer: { 
        TaskList: addTaskSlice,
    }
});