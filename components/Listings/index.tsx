import { View, Text, StyleSheet } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { getListings } from "@/data-layer/listings";

interface Props {
  category: string;
}

export default function Listings({ category }: Props) {
  const { data: listings } = useQuery({
    queryKey: ["listingsData", category],
    queryFn: () => {
      console.log("selected category: ", category);
      return getListings(category).then((data) => {
        return data;
      });
    },
  });

  console.log(listings?.length);

  return (
    <View style={styles.container}>
      <Text>Listings</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
