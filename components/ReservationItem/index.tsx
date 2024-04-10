import { IReservation } from "@/interface/Reservation";
import BaseText from "@/ui/BaseText";
import { Ionicons } from "@expo/vector-icons";
import dayjs from "dayjs";
import { router } from "expo-router";
import { Pressable, View, StyleSheet, Image, Text } from "react-native";

export default function ReservationItem(props: IReservation) {
  const {
    id,
    name,
    photo,
    review_scores_rating,
    room_type,
    price,
    firstName,
    lastName,
    startDate,
    endDate,
  } = props;

  const navigate = () => {
    router.push(`/bookingDetail/${id}`);
  };

  return (
    <View style={styles.listing}>
      <Pressable onPress={navigate}>
        <Image source={{ uri: photo }} style={styles.image} />
        <View style={styles.listingInfo}>
          <BaseText variant="default">{name}</BaseText>
          <View style={{ flexDirection: "row", gap: 4 }}>
            <Ionicons name="star" size={16} />
            <BaseText variant="default">{review_scores_rating / 20}</BaseText>
          </View>
        </View>

        <BaseText variant="default">{room_type}</BaseText>

        <View style={{ flexDirection: "row", gap: 4, paddingVertical: 8 }}>
          <BaseText variant="bold">
            ${price} / <BaseText variant="default">night</BaseText>
          </BaseText>
        </View>
        <BaseText variant="bold">
          Booked By: {firstName} {lastName}
        </BaseText>
        <View style={{ paddingTop: 8 }}>
          <BaseText>
            From {startDate} to {endDate}
          </BaseText>
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
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
