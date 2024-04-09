import { View, Pressable, Text, StyleSheet } from "react-native";

interface Props {
  onDatePickerOpen?: () => void;
}

export default function TripInfo(props: Props) {
  const { onDatePickerOpen } = props;

  return (
    <>
      <View style={styles.info}>
        <Text
          style={[
            styles.defaultTextStyle,
            { fontSize: 20, fontWeight: "bold" },
          ]}
        >
          Your Trip
        </Text>
      </View>
      <View style={[styles.info, { paddingTop: 8 }]}>
        <View style={styles.tripDate}>
          <View>
            <Text
              style={[
                styles.defaultTextStyle,
                { fontSize: 18, fontWeight: "bold" },
              ]}
            >
              Date
            </Text>
            <Text
              style={[styles.defaultTextStyle, { fontSize: 18, paddingTop: 8 }]}
            >
              April 9 - 11
            </Text>
          </View>
          <View>
            <Pressable onPress={onDatePickerOpen}>
              <Text
                style={[
                  styles.defaultTextStyle,
                  {
                    fontSize: 18,
                    fontWeight: "bold",
                    textDecorationLine: "underline",
                  },
                ]}
              >
                Edit
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  info: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 24,
    gap: 12,
  },
  defaultTextStyle: {
    fontFamily: "lato",
  },
  tripDate: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
