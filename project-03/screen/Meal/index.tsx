import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useRoute,RouteProp } from '@react-navigation/native';
import { MealParameter, RootStackParamList } from '../../types/ParamList';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from "@react-navigation/core";
import Card from '../../components/Card';
import { MEALS } from '../../data/DummyData';
import { useSelector } from 'react-redux';
import { RootState } from '../../utils/redux/store';
import { Favorite } from '../../utils/redux/reducer/Favorites';

const findMealsByCategory = (categoryId:string) => {
  return MEALS.filter(value => {
    return value.categoryIds.includes(categoryId);
  })
}

const findMealsOnFavorites = (favoritesList:Favorite[]) => {
  return MEALS.filter(value => {
    return favoritesList.find(fav => fav.key === value.id);
  })
}

export default function Meal() {
  const route = useRoute<RouteProp<RootStackParamList>>();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const favorites = useSelector<RootState,Favorite[]>((state:RootState) => state.favorites);

  const params = route.params as MealParameter;

  useLayoutEffect(() => {

    navigation.setOptions({title:route.params?.title})
  },[navigation,route])


  const meals = params.favorites? findMealsOnFavorites(favorites):findMealsByCategory(params.categoryId as string);
  
  const navigateToRecipe = (id:string, title:string) => {
    navigation.navigate("Recipe", {mealId: id, title});
  }

  return (
    <View>
      <FlatList
        data={meals}
        renderItem={
          ({item}) => {
            return <Card 
              onPress={() => {navigateToRecipe(item.id,item.title)}}
              imageLink={item.imageUrl} 
              title={item.title} 
              text={`${item.duration}m ${item.complexity} ${item.affordability}`}
            />
          }
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({})