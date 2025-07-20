import { LogOutIcon } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function HomeHeader() {
  return (
    <View className="bg-lime-400 h-[130px] flex">
      <SafeAreaView className="px-4 flex-row items-center justify-between">
        <View>
          <Text className="text-gray-700 text-sm font-sans-regular">
            Olá, 👋
          </Text>
          <Text className="text-black-700 text-base font-sans-semibold">
            Isaque
          </Text>
        </View>

        <TouchableOpacity className="size-12">
          <LogOutIcon />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}
