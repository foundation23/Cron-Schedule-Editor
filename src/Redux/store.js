import { configureStore } from '@reduxjs/toolkit'
import cronReducer from "./Slice/cronSlice";

export default configureStore({
    reducer: {
        cron: cronReducer,
    },
})