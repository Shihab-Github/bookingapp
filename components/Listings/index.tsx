import { View, StyleSheet, FlatList, ListRenderItem, Text } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { getListings } from "@/data-layer/listings";
import { IListing } from "@/interface/Listing";
import ListinSkeleton from "@/ui/ListingSkeleton";
import ListingItem from "../ListingItem";
import { SafeAreaView } from "react-native-safe-area-context";
import BaseText from "@/ui/BaseText";

interface IProps {
  category: string;
  sortBy: string | undefined;
  searchStr: string | undefined;
}

const keyValue: any = {
  price: "Price",
  startDate: "Check-in Date (Asc)",
  endDate: "Check-in Date (Desc)",
};

export default function Listings({ category, sortBy, searchStr }: IProps) {
  const { isLoading, data: listings } = useQuery({
    queryKey: ["listingsData", category, sortBy, searchStr],
    queryFn: () => {
      return getListings(category, sortBy, searchStr).then((data) => {
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
    <>
      {sortBy ? (
        <View
          style={{
            paddingVertical: 8,
            paddingHorizontal: 16,
            backgroundColor: "#fff",
          }}
        >
          <Text>
            Sorted By: <BaseText variant="bold">{keyValue[sortBy]}</BaseText>{" "}
          </Text>
        </View>
      ) : (
        ""
      )}

      <View style={styles.container}>
        <FlatList data={listings} renderItem={renderItem} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: "#FDFFFF",
  },
});
