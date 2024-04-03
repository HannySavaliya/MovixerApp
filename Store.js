import { configureStore } from "@reduxjs/toolkit";
import movixerReducer from "./movixerSlice"

const Store = configureStore({
    reducer: {
        movie: movixerReducer
    }
})

export default Store
