import { Listing } from "@/interface/Listing";
import { defaultStyles } from "@/styles";
import { Ionicons } from "@expo/vector-icons";
import { View, Image, Text, StyleSheet } from "react-native";

interface Props {
  listing: Listing;
}

export default function BasicInfo(props: Props) {
  const { listing } = props;

  return (
    <View style={defaultStyles.infoContainer}>
      <View style={{ flexDirection: "row", gap: 8 }}>
        <View>
          <Image
            style={{ width: 100, height: 100, borderRadius: 10 }}
            source={{ uri: listing.thumbnail_url }}
          />
        </View>
        <View style={{ flexGrow: 1 }}>
          <Text
            style={[
              styles.defaultTextStyle,
              {
                fontSize: 16,
                fontWeight: "600",
              },
            ]}
          >
            {listing.name}
          </Text>

          <Text style={[styles.defaultTextStyle, { paddingVertical: 8 }]}>
            {listing.room_type}
          </Text>
          <Text>
            <Text style={[styles.defaultTextStyle, { paddingVertical: 8 }]}>
              <Ionicons name="star" size={16} />
              {listing.review_scores_rating / 20}
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  defaultTextStyle: {
    fontFamily: "lato",
  },
  container: {
    flex: 1,
  },
});
