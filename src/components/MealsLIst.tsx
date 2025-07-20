import { FlatList, Text, View } from "react-native";
import { MealCard } from "./MealCard";

const meals = [
  {
    id: String(Math.random()),
    name: "Almoço",
  },
  {
    id: String(Math.random()),
    name: "cafe",
  },
  {
    id: String(Math.random()),
    name: "janta",
  },
];

export function MealsList() {
  return (
    <View className="p-5">
      <Text className="text-black-700 text-base font-sans-medium tracking-[1.28]">
        REFEIÇÕES
      </Text>

      <View className="mt-4">
        <FlatList
          data={meals}
          contentContainerClassName="gap-8"
          keyExtractor={(meals) => meals.id}
          renderItem={({ item: meal }) => (
            <MealCard id={meal.id} name={meal.name} />
          )}
        />
      </View>
    </View>
  );
}
