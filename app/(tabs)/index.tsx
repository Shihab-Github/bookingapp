import ListingCategories from "@/components/ListingCategories";
import Listings from "@/components/Listings";
import { Stack } from "expo-router";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Page() {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          header: () => <ListingCategories />,
        }}
      />
      <Listings />
      {/* <Text>Bookings</Text>
      <Link href={"/(modals)/booking"}>Reserve</Link>
      <Link href={"/listing/545Sdae"}>Listing detail</Link> */}
    </View>
  );
}
