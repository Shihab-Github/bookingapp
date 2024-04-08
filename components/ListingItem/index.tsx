import { Listing } from "@/interface/Listing";
import { Link } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function ListingItem({ data }: { data: Listing }) {
  return (
    <Link href={`/listing/${data.id}`} asChild>
      <View style={styles.listing}>
        <Image source={{ uri: data.medium_url }} style={styles.image} />
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  listing: {
    paddingBottom: 16,
  },
  image: {
    width: "100%",
    height: 300,
  },
});
