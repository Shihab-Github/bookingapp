import { useQuery } from "@tanstack/react-query";
import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { getListingById } from "@/data-layer/listings";
import Animated from "react-native-reanimated";
import ListinSkeleton from "@/ui/ListingSkeleton";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import BaseText from "@/ui/BaseText";

const { width } = Dimensions.get("window");

export default function Page() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const { isLoading, data: listing } = useQuery({
    queryKey: ["listing", id],
    queryFn: () => {
      return getListingById(id).then((data) => {
        return data;
      });
    },
  });

  if (isLoading || !listing) {
    return <ListinSkeleton />;
  }

  return (
    <View style={styles.container}>
      <Animated.ScrollView>
        <Animated.Image
          style={styles.image}
          source={{ uri: listing.xl_picture_url }}
        />

        <View style={styles.infoContainer}>
          <BaseText variant="name">{listing.name}</BaseText>
          <BaseText variant="location">
            {listing.room_type} in {listing.smart_location}
          </BaseText>
          <BaseText variant="rooms">
            {listing.guests_included} guests · {listing.bedrooms} bedrooms ·{" "}
            {listing.beds} bed · {listing.bathrooms} bathrooms
          </BaseText>
          <View style={{ flexDirection: "row", gap: 4 }}>
            <Ionicons name="star" size={16} />
            <BaseText variant="ratings">
              {listing.review_scores_rating / 20} · {listing.number_of_reviews}{" "}
              reviews
            </BaseText>
          </View>
          <View style={styles.divider} />

          <View style={styles.hostView}>
            <Image
              source={{ uri: listing.host_picture_url }}
              style={styles.host}
            />

            <View>
              <BaseText variant="hostName">
                Hosted by {listing.host_name}
              </BaseText>
              <BaseText>Host since {listing.host_since}</BaseText>
            </View>
          </View>

          <View style={styles.divider} />

          <BaseText variant="description">{listing.description}</BaseText>
        </View>
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    height: 300,
    width,
  },
  infoContainer: {
    padding: 24,
    backgroundColor: "#fff",
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.grey,
    marginVertical: 16,
  },
  host: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: Colors.grey,
  },
  hostView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
});
