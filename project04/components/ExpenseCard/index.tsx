import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Expenses } from '../../store/reducers/Expenses'
import { Colors } from '../../Constants'


interface IProps {
  expense:Expenses
}

export default function ExpenseCard({expense}:IProps) {
  return (
    <View style={styles.card}>
      <View>
        <Text style={[styles.text,styles.title]}>{expense.description}</Text>
        <Text style={styles.text}>{expense.date.toISOString().split('T')[0]}</Text>
      </View>
      <Text style={styles.amountCard}>{expense.amount}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card:{
    flexDirection:'row',
    justifyContent:"space-between",
    alignItems:"center",
    paddingVertical:10,
    paddingHorizontal:10,
    marginVertical:10,
    backgroundColor:Colors.colors.primary400,
    borderRadius:10
  },
  text:{
    color:"white"
  },
  title:{
    fontWeight:"bold",
    marginBottom:4
  },
  amountCard: {
    color: Colors.colors.primary400,
    fontWeight:"bold",
    backgroundColor: Colors.colors.primary100,
    paddingVertical: 15,
    paddingHorizontal:20,
    borderRadius:5
  }
})