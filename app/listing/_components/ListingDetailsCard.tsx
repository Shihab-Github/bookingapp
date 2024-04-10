import Colors from "@/constants/Colors";
import { IReservation } from "@/interface/Reservation";
import BaseText from "@/ui/BaseText";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View, Dimensions, Image, Text } from "react-native";
import Animated from "react-native-reanimated";

const { width } = Dimensions.get("window");

export default function ListingDetailCard(props: IReservation) {
  const {
    photo,
    name,
    room_type,
    smart_location,
    guests_included,
    bedrooms,
    beds,
    bathrooms,
    review_scores_rating,
    number_of_reviews,
    host_picture_url,
    host_name,
    host_since,
    description,

    firstName,
    lastName,
    startDate,
    endDate,
    security_deposit,
    additionalNeeds,
  } = props;

  return (
    <>
      <Animated.Image style={styles.image} source={{ uri: photo }} />

      <View style={styles.infoContainer}>
        <BaseText variant="name">{name}</BaseText>
        <BaseText variant="location">
          {room_type} in {smart_location}
        </BaseText>
        <BaseText variant="rooms">
          {guests_included} guests · {bedrooms} bedrooms · {beds} bed ·{" "}
          {bathrooms} bathrooms
        </BaseText>
        {firstName && lastName ? (
          <BaseText variant="rooms">
            Booked By - {firstName} {lastName}
          </BaseText>
        ) : (
          ""
        )}
        {startDate && endDate ? (
          <BaseText variant="rooms">
            From {startDate} to {endDate}
          </BaseText>
        ) : (
          ""
        )}

        <View style={{ flexDirection: "row", gap: 4 }}>
          <Ionicons name="star" size={16} />
          <BaseText variant="ratings">
            {review_scores_rating / 20} · {number_of_reviews} reviews
          </BaseText>
        </View>
        <View style={styles.divider} />

        <View style={styles.hostView}>
          <Image source={{ uri: host_picture_url }} style={styles.host} />

          <View>
            <BaseText variant="hostName">Hosted by {host_name}</BaseText>
            <BaseText>Host since {host_since}</BaseText>
          </View>
        </View>

        <View style={styles.divider} />

        <BaseText variant="description">{description}</BaseText>

        <View>
          <Text></Text>
        </View>
      </View>
    </>
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
