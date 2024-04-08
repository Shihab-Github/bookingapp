import { View, Text } from "react-native";

interface Props {
  listing: any[];
  category: string;
}

export default function Listings({ listing, category }: Props) {
  return (
    <View>
      <Text>Listings</Text>
    </View>
  );
}
