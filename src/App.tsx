import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import "./styles/global.css";

export default function App() {
  return (
    <View className="bg-lime-600 text-slate-200 flex-1 justify-center items-center">
      <Text className="text-black-700">foodiary!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
