import { FlatList, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useRoute,RouteProp } from '@react-navigation/native';
import { RecipesParameter, RootStackParamList } from '../../types/ParamList';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from "@react-navigation/core";
import React, { useEffect } from 'react'
import { MEALS } from '../../data/DummyData';
import Step from '../../components/Step';
import { Colors } from '../../utils/Colors';
import IconButton from '../../components/IconButton';
import { add, Favorite, remove } from '../../utils/redux/reducer/Favorites';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../utils/redux/store';

const findMealsById = (id:string) => {
  return MEALS.findLast(value => {
    return value.id === id;
  })
}

export default function Recipe() {
  const favorites = useSelector<RootState,Favorite[]>((state:RootState) => state.favorites);
  const route = useRoute<RouteProp<RootStackParamList>>();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const params = route.params as RecipesParameter;
  const dispatch = useAppDispatch();
  const meal = findMealsById(params.mealId);

  const onFavorite = () => {
    if(favorites.filter(val => val.key === meal?.id).length>0){
      dispatch(remove({key:meal?.id}));
    }else{
      dispatch(add({key:meal?.id}));
    }
  }
  useEffect(() => {
    navigation.setOptions({headerRight: () => ( 
      <IconButton 
        icon='star' 
        color='grey'
        colorPressed={"white"}
        isActive= {favorites.filter(val => val.key == meal?.id).length > 0}
        onPress={onFavorite}
      />) })

  })


  return (
    <View style={{flex:1, height:"100%"}}>
        <ScrollView style={{flex:1,}} >
          <ImageBackground borderTopLeftRadius={10} borderTopRightRadius={10} style={styles.imageContainer} source={{uri:meal?.imageUrl}}/>
          <View style={styles.detailContainer}>
              <View style={styles.titleSection}>
                <Text style={styles.title}>{meal?.title}</Text>
                <Text style={styles.subtitle}>{`${meal?.duration}m ${meal?.complexity} ${meal?.affordability}`}</Text>
              </View>
              <View style={styles.detailSection}>
                <View style={{justifyContent:"center", width:"100%"}}>

                  <View style={styles.sectionTitleSection}>
                    <Text style={styles.sectionTitle}>Ingredients</Text>
                  </View>
                  <View style={{width:"100%"}}>
                    {
                      meal?.ingredients.map(val => <Step key={val} text={val}/>)
                    }
                  </View>
                </View>
                <View style={{justifyContent:"center", width:"100%"}}>
                  
                  <View style={styles.sectionTitleSection}>
                    <Text style={styles.sectionTitle}>Steps</Text>
                  </View>
                  <View style={{width:"100%"}}>
                    {
                      meal?.steps.map(val => <Step key={val} text={val}/>)
                    }
                  </View>
                </View>
              </View>
          </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  
  imageContainer: {
    flex:1,
    minHeight:300,
    minWidth:'100%',
  },
  detailContainer: {
    flex:2,
    minHeight:"100%",
    minWidth:"100%",
    paddingVertical:15,
  },
  titleSection: {
    alignItems:"center",
    marginBottom: 15,
    flex:1
  },
  title: {
    fontWeight:"bold",
    color:"white",
    fontSize:18,
    marginBottom:15
  },
  subtitle: {
    color:"white",
    fontWeight:"100",
    letterSpacing:2,
    fontSize:15
  },
  detailSection: {
    flexDirection:"column",
    alignItems:"center",
    paddingHorizontal:40,
    paddingBottom:20,
    flex:7
  },
  sectionTitle: {
    color: Colors.primary50,
    fontSize:18,
    fontWeight:"bold",
  },
  sectionTitleSection: {
    flexDirection:"row",
    justifyContent:"center",
    borderBottomWidth:2,
    borderBottomColor:Colors.primary50,
  }
})