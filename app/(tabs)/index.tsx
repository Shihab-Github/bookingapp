import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import ListingCategories from "@/components/ListingCategories";
import Listings from "@/components/Listings";
import { Stack, useLocalSearchParams } from "expo-router";
import { View } from "react-native";

export default function Page() {
  const queryClient = useQueryClient();
  const [category, setCategory] = useState("Tiny Homes");

  const { sortBy, searchStr } = useLocalSearchParams<{
    sortBy: string;
    searchStr: string;
  }>();

  const getListingsByCategory = (category: string) => {
    setCategory(category);
    queryClient.invalidateQueries({ queryKey: ["listingsData"] });
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

      <Listings category={category} sortBy={sortBy} searchStr={searchStr} />
    </View>
  );
}
