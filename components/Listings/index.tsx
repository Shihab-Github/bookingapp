import { useRef } from "react";
import { View, Text, StyleSheet, FlatList, ListRenderItem } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { getListings } from "@/data-layer/listings";
import { Listing } from "@/interface/Listing";
import ListinSkeleton from "@/ui/ListingSkeleton";
import ListingItem from "../ListingItem";

interface Props {
  category: string;
}

export default function Listings({ category }: Props) {
  const listRef = useRef<FlatList>(null);

  const { isLoading, data: listings } = useQuery({
    queryKey: ["listingsData", category],
    queryFn: () => {
      console.log("selected category: ", category);
      return getListings(category).then((data) => {
        return data;
      });
    },
  });

  if (isLoading) {
    return (
      <>
        <ListinSkeleton />
      </>
    );
  }

  const renderItem: ListRenderItem<Listing> = ({ item }) => (
    <ListingItem data={item} />
  );

  return (
    <View style={styles.container}>
      <FlatList data={listings} ref={listRef} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: "#FDFFFF",
  },
});
