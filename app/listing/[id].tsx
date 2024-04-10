import { useQuery } from "@tanstack/react-query";
import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet, Dimensions, Pressable } from "react-native";
import { getListingById } from "@/data-layer/listings";
import Animated, { SlideInDown } from "react-native-reanimated";
import ListinSkeleton from "@/ui/ListingSkeleton";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import BaseText from "@/ui/BaseText";
import { router } from "expo-router";
import ListingDetailCard from "./_components/ListingDetailsCard";

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

  const navigate = () => {
    router.push(`/reservation/${id}`);
  };

  if (isLoading || !listing) {
    return <ListinSkeleton />;
  }

  return (
    <View style={styles.container}>
      <Animated.ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <ListingDetailCard
          id={id}
          photo={
            listing.xl_picture_url ? listing.xl_picture_url : listing.medium_url
          }
          name={listing.name}
          review_scores_rating={listing.review_scores_rating}
          room_type={listing.room_type}
          price={listing.price}
          smart_location={listing.smart_location}
          guests_included={listing.guests_included}
          bedrooms={listing.bedrooms}
          beds={listing.beds}
          bathrooms={listing.bathrooms}
          number_of_reviews={listing.number_of_reviews}
          host_picture_url={listing.host_picture_url}
          host_name={listing.host_name}
          host_since={listing.host_since}
          description={listing.description}
        />
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
            <Pressable style={styles.reserveBtn} onPress={navigate}>
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
