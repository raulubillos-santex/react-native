import { configureStore } from "@reduxjs/toolkit";
import { ExpensesReducer } from "./reducers/Expenses";
import { useDispatch } from "react-redux";

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:false
    }),
    reducer:{
        expenses: ExpensesReducer.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export default store;