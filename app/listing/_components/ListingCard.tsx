import { StyleSheet, View, Dimensions, Text } from "react-native";

const { width } = Dimensions.get("window");

interface IProps {
  photo: string;
  name: string;
  room_type: string;
  smart_location: string;
  guests_included: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  review_scores_rating: number;
  number_of_reviews: number;
  host_picture_url?: string | undefined;
  host_name: string;
  host_since: string;
  description: string;
  price: number;
}

export default function ListingCard(props: IProps) {
  return (
    <View>
      <Text>kire</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 300,
    width,
  },
});
