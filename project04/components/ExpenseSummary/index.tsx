import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { Expenses } from '../../store/reducers/Expenses'
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Colors } from '../../Constants';
import ExpenseCard from '../ExpenseCard';

interface IProps {
    period? : number
}

const sumExpenses = (expenses: Expenses[]) => expenses?.reduce((val,currVal) => val + currVal.amount,0);

export default function ExpenseSummary({period}:IProps) {

  const expenses = useSelector((state:RootState) => state.expenses);

  return (
    <View style={styles.body}>
        <View style={styles.title}>
            <Text style={styles.titleText}>{period?`Last ${period} days`:'Total'}</Text>
            <Text style={[styles.titleText,styles.titleTextBold]}>{`${sumExpenses(expenses)}`}</Text>
        </View>

        <FlatList
            data={expenses}
            keyExtractor={(item, index) => item.id}
            renderItem={
                ({item}) => {
                    return <ExpenseCard expense={item}></ExpenseCard>
                }
            }
        />
    </View>
  )
}

const styles = StyleSheet.create({
    title:{
        flexDirection: "row",
        justifyContent: 'space-between',
        backgroundColor: Colors.colors.primary100,
        padding:10,
        borderRadius:10
    },
    titleText:{
        color: Colors.colors.primary400
    },
    titleTextBold:{
        fontWeight:"bold"
    },
    body:{
        paddingHorizontal:25,
        paddingVertical:20
    }
})