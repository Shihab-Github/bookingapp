import { View, StyleSheet, FlatList, ListRenderItem } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { getListings } from "@/data-layer/listings";
import { IListing } from "@/interface/Listing";
import ListinSkeleton from "@/ui/ListingSkeleton";
import ListingItem from "../ListingItem";
import { SafeAreaView } from "react-native-safe-area-context";

interface IProps {
  category: string;
}

export default function Listings({ category }: IProps) {
  const { isLoading, data: listings } = useQuery({
    queryKey: ["listingsData", category],
    queryFn: () => {
      return getListings(category).then((data) => {
        return data;
      });
    },
  });

  if (isLoading) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ListinSkeleton />
      </SafeAreaView>
    );
  }

  const renderItem: ListRenderItem<IListing> = ({ item }) => (
    <ListingItem data={item} />
  );

  return (
    <View style={styles.container}>
      <FlatList data={listings} renderItem={renderItem} />
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
