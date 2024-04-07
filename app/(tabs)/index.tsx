import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Page() {
  return (
    <View>
      <Text>Bookings</Text>
      <Link href={"/(modals)/booking"}>Reserve</Link>
      <Link href={"/listing/545Sdae"}>Listing detail</Link>
    </View>
  );
}
