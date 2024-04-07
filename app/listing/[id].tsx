import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function Page() {
  const { id } = useLocalSearchParams<{ id: string }>();

  console.log("listing id: ", id);

  return (
    <View>
      <Text>Booking Detail</Text>
    </View>
  );
}
