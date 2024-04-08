import { useQuery } from "@tanstack/react-query";
import { useLocalSearchParams } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Pressable,
} from "react-native";
import { getListingById } from "@/data-layer/listings";
import Animated, { SlideInDown } from "react-native-reanimated";
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
      <Animated.ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
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

      <Animated.View style={styles.footer} entering={SlideInDown.delay(200)}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <BaseText variant="bold">
              ${listing.price} / <BaseText>night</BaseText>
            </BaseText>
          </View>

          <View>
            <Pressable style={styles.reserveBtn}>
              <Text style={styles.reserveBtnText}>Reserve</Text>
            </Pressable>
          </View>
        </View>
      </Animated.View>
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
  footer: {
    position: "absolute",
    height: 80,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopColor: Colors.grey,
    borderTopWidth: StyleSheet.hairlineWidth,
  },

  reserveBtn: {
    backgroundColor: Colors.primary,
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  reserveBtnText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "lato-b",
  },
});
