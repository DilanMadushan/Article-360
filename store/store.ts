import { configureStore } from "@reduxjs/toolkit";
import ArticleReducer from "../slice/ArticleSlice";
import ReadSlice from "../slice/ReadSlice";


export const store = configureStore({
    reducer: {
        article:ArticleReducer,
        read:ReadSlice
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch