import { View, Text, StyleSheet, } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../types/ParamList';
import GridView from '../../components/GridView';
import { CATEGORIES } from '../../data/DummyData';
import {NavigationProp} from "@react-navigation/core";

export default function Categories() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const goToPage = (id:string,title:string) => {
    navigation.navigate("Meal", {categoryId:id,title,favorites:false});
  }

  return (
      <View style={styles.fullView}>
        <GridView goToPage={goToPage} numberOfColumns={2} list={CATEGORIES}/>
      </View>
  )
}


const styles = StyleSheet.create({
  fullView: {
    flex:1,
  }
})