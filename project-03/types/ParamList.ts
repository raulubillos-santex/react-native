export type MealParameter = {categoryId:string,title:string, favorites:boolean};

export type RecipesParameter = {mealId:string,title:string};

export type RootStackParamList = {
    Drawer:undefined,
    Categories: undefined,
    Meal: MealParameter,
    Recipe: RecipesParameter
}