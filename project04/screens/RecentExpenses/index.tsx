import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { ExpensesReducer } from '../../store/reducers/Expenses';
import { useAppDispatch,RootState } from '../../store';
import { useSelector } from 'react-redux';
import ExpenseSummary from '../../components/ExpenseSummary';
import { RecentExpensesProps } from '../../components/Navigator';

export default function RecentExpenses({navigation}:RecentExpensesProps) {
  const dispatch = useAppDispatch();

  const {getExpensesForAnAmountOfDays} = ExpensesReducer.actions;

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      dispatch(getExpensesForAnAmountOfDays({amountOfDays:7}));
    });
    return unsubscribe;
  },[navigation])

  return <View>
    <ExpenseSummary/>
  </View>
}