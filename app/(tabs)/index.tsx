import ListingCategories from "@/components/ListingCategories";
import Listings from "@/components/Listings";
import { Stack } from "expo-router";
import { Link } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";

export default function Page() {
  const [category, setCategory] = useState("Tiny Homes");

  const getListingsByCategory = (category: string) => {
    console.log("CHANGED: ", category);
    setCategory(category);
  };

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          header: () => (
            <ListingCategories onCategoryChanged={getListingsByCategory} />
          ),
        }}
      />
      <Listings listing={[]} category={category} />
      {/* <Text>Bookings</Text>
      <Link href={"/(modals)/booking"}>Reserve</Link>
      <Link href={"/listing/545Sdae"}>Listing detail</Link> */}
    </View>
  );
}
