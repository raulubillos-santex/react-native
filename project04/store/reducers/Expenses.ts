import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act } from "react";

export interface Expenses{
    id: string,
    description: string,
    amount: number,
    date: Date
}

export interface Filters {
    amountOfDays?: number,
    dayStart?: Date,
    dayEnd?: Date
}

const today = new Date();
today.setTime(today.getTime() - (6 * 24 * 60 * 60 * 1000));

const moreBefore = new Date();
moreBefore.setTime(moreBefore.getTime() - (365 * 24 * 60 * 60 * 1000));

const DUMMY_EXPENSES:Expenses[] = [
    {
        id:'e1',
        description:'prostitutas',
        amount:500,
        date: today
    },
    {
        id:'e2',
        description:'forros',
        amount:40,
        date: today
    },
    {
        id:'e3',
        description:'drogas',
        amount:150.20,
        date: today
    },
    {
        id:'e4',
        description:'mas prostitutas',
        amount:400,
        date: moreBefore
    }
]

const initialState:Expenses[] = [];

export const ExpensesReducer = createSlice({
    initialState:initialState,
    name:"Expenses",
    reducers:{
        getExpensesForAnAmountOfDays(state:Expenses[],action:PayloadAction<Filters>){
            const today = new Date();
            const dateFrom = new Date();
            dateFrom.setTime(dateFrom.getTime() - (action.payload.amountOfDays! * 24 * 60 * 60 * 1000));
            const expenses = action.payload.amountOfDays ? DUMMY_EXPENSES.filter(val => val.date >= dateFrom && val.date <= today): DUMMY_EXPENSES
            return expenses
        },
        getExpensesForCertainDates(state:Expenses[],action:PayloadAction<Filters>){
            const expenses = action.payload.dayStart && action.payload.dayEnd ? DUMMY_EXPENSES.filter(val => val.date >= action.payload.dayStart! && val.date <= action.payload.dayEnd!): DUMMY_EXPENSES
            return expenses
        },
        addExpenses(state:Expenses[],action:PayloadAction<Expenses>){},
        updateExpenses(state:Expenses[],action:PayloadAction<Expenses>){},
        deleteExpenses(state:Expenses[],action:PayloadAction<Expenses>){}
    }
});
