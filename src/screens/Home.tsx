import { View } from "react-native";
import { HomeHeader } from "../components/HomHeader";
import { MealsList } from "../components/MealsLIst";

export function Home() {
  return (
    <View className="flex-1">
      <HomeHeader />
      <MealsList />
    </View>
  );
}
