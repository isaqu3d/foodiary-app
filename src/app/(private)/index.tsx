import { View } from "react-native";
import { CreateMealBottomBar } from "../../components/CreateMealBottomBar";
import { HomeHeader } from "../../components/HomHeader";
import { MealsList } from "../../components/MealsLIst";

export default function Page() {
  return (
    <View className="flex-1 bg-white">
      <HomeHeader />
      <MealsList />

      <CreateMealBottomBar />
    </View>
  );
}
