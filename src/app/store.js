import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import libraryReducer from "../features/library/librarySlice";

export default configureStore({
    reducer: {
        counter : counterReducer,
        library : libraryReducer
    }
})