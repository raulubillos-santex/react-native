import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
type TabParamList = {
    RecentExpenses:{},
    AllExpenses:{}
}

export type AllExpensesProps = BottomTabScreenProps<TabParamList,'AllExpenses'>;
export type RecentExpensesProps = BottomTabScreenProps<TabParamList,'RecentExpenses'>;

export default createBottomTabNavigator<TabParamList>();