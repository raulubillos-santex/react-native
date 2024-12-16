import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Category from '../../models/Category'
import GridItem from '../GridItem'

interface IProps {
    list: Category[],
    numberOfColumns: number,
    goToPage: (id:string,title:string) => void
}

export default function  ({list, numberOfColumns,goToPage}:IProps) {

  return (
    <FlatList
        data={list}
        style={styles.view}
        numColumns={numberOfColumns}
        renderItem={({item}) => {
            return <GridItem goToMeals={goToPage} color={item.color} id={item.id} title={item.title}/>
        }}
    />
  )
}

const styles = StyleSheet.create({
    view:{
        flex:1,
    }
})