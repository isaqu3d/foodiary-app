import { router } from "expo-router";
import { Text, View } from "react-native";
import { Button } from "../../components/Button";

export default function MealDetails() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Detalhes da refeicao</Text>

      <Button onPress={router.back}>Voltar</Button>
    </View>
  );
}
