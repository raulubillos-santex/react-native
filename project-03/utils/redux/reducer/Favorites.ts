import { createReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Favorite{
    key?:any,
    data?:any
}

const initialState: Favorite[] = [];

export const FavoritesReducer = createSlice({
    initialState: initialState,
    name: "favorite",
    reducers: {
        add(state,action:PayloadAction<Favorite>){
            const newState = [...state];
            console.log('add'+JSON.stringify(state));
            newState.push(action.payload);
            return newState;
        },
        remove(state,action:PayloadAction<Favorite>){
            const newState = [...state];
            
            console.log('remove'+JSON.stringify(state));
            return newState.filter(value => value.key !== action.payload.key);
        }
    }
});
const add = FavoritesReducer.actions.add;
const remove = FavoritesReducer.actions.remove;
export {add,remove}