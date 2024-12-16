import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useAppDispatch } from '../../store';
import { ExpensesReducer } from '../../store/reducers/Expenses';
import ExpenseSummary from '../../components/ExpenseSummary';
import { AllExpensesProps } from '../../components/Navigator';

export default function AllExpenses({navigation}:AllExpensesProps) {
  const dispatch = useAppDispatch();

  const {getExpensesForAnAmountOfDays} = ExpensesReducer.actions;

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      dispatch(getExpensesForAnAmountOfDays({}));
    });
    return unsubscribe;
  },[navigation])

  return <View>
    <ExpenseSummary/>
  </View>
}