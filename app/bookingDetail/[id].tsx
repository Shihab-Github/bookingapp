import { View, StyleSheet, Pressable, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { getReservationById } from "@/data-layer/reservations";
import ListinSkeleton from "@/ui/ListingSkeleton";
import Colors from "@/constants/Colors";
import Animated, { SlideInDown } from "react-native-reanimated";
import ListingDetailCard from "../listing/_components/ListingDetailsCard";
import BaseText from "@/ui/BaseText";

export default function BookingDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const { isLoading, data: reservation } = useQuery({
    queryKey: ["listing", id],
    queryFn: () => {
      return getReservationById(id).then((data) => {
        return data;
      });
    },
  });

  if (isLoading || !reservation) {
    return <ListinSkeleton />;
  }

  return (
    <View style={styles.container}>
      <Animated.ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <ListingDetailCard
          id={id}
          photo={reservation.photo}
          name={reservation.name}
          review_scores_rating={reservation.review_scores_rating}
          room_type={reservation.room_type}
          price={reservation.price}
          smart_location={reservation.smart_location}
          guests_included={reservation.guests_included}
          bedrooms={reservation.bedrooms}
          beds={reservation.beds}
          bathrooms={reservation.bathrooms}
          number_of_reviews={reservation.number_of_reviews}
          host_picture_url={reservation.host_picture_url}
          host_name={reservation.host_name}
          host_since={reservation.host_since}
          description={reservation.description}
          firstName={reservation.firstName}
          lastName={reservation.lastName}
          security_deposit={reservation.security_deposit}
          additionalNeeds={reservation.additionalNeeds}
          startDate={reservation.startDate}
          endDate={reservation.endDate}
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
              ${reservation.price} / <BaseText>night</BaseText>
            </BaseText>
          </View>

          <View>
            <Pressable style={styles.reserveBtn} onPress={() => {}}>
              <Text style={styles.reserveBtnText}>Edit</Text>
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
