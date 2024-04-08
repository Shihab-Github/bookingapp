import { Listing } from "@/interface/Listing";
import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import BaseText from "@/ui/BaseText";

export default function ListingItem({ data }: { data: Listing }) {
  const navigate = () => {
    router.push(`/listing/${data.id}`);
  };

  return (
    <View style={styles.listing}>
      <Pressable onPress={navigate}>
        <Image source={{ uri: data.medium_url }} style={styles.image} />
        <View style={styles.listingInfo}>
          <BaseText>{data.name}</BaseText>
          <View style={{ flexDirection: "row", gap: 4 }}>
            <Ionicons name="star" size={16} />
            <BaseText>{data.review_scores_rating / 20}</BaseText>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  listing: {
    paddingBottom: 24,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
  },

  listingInfo: {
    paddingTop: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
