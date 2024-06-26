import { IListing } from "@/interface/Listing";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import BaseText from "@/ui/BaseText";

export default function ListingItem({ data }: { data: IListing }) {
  const navigate = () => {
    router.push(`/listing/${data.id}`);
  };

  return (
    <View style={styles.listing}>
      <Pressable onPress={navigate}>
        <Image source={{ uri: data.medium_url }} style={styles.image} />
        <View style={styles.listingInfo}>
          <BaseText variant="default">{data.name}</BaseText>
          <View style={{ flexDirection: "row", gap: 4 }}>
            <Ionicons name="star" size={16} />
            <BaseText variant="default">
              {data.review_scores_rating / 20}
            </BaseText>
          </View>
        </View>

        <BaseText variant="default">{data.room_type}</BaseText>

        <View style={{ flexDirection: "row", gap: 4, paddingVertical: 8 }}>
          <BaseText variant="bold">
            ${data.price} / <BaseText variant="default">night</BaseText>
          </BaseText>
        </View>
        <BaseText variant="default">
          Available from {data.available_from} - {data.available_to}
        </BaseText>
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
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
