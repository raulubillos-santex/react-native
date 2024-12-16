import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { FavoritesReducer } from "./reducer/Favorites";
import { useDispatch } from "react-redux";


const store = configureStore({
    reducer:{
        favorites:FavoritesReducer.reducer
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export default store;