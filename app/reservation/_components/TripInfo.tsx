import { View, Pressable, Text, StyleSheet } from "react-native";
import { DateType } from "react-native-ui-datepicker";
import dayjs from "dayjs";
import { defaultStyles } from "@/styles";

interface IProps {
  startDate?: DateType;
  endDate?: DateType;
  onDatePickerOpen?: () => void;
}

export default function TripInfo(props: IProps) {
  const { onDatePickerOpen, startDate, endDate } = props;

  return (
    <>
      <View style={defaultStyles.infoContainer}>
        <Text style={defaultStyles.infoMainHeader}>Your Trip</Text>
      </View>
      <View style={[styles.info, { paddingTop: 8 }]}>
        <View style={styles.tripDate}>
          <View>
            <Text style={defaultStyles.infoSubHeader}>Date</Text>
            {startDate && endDate ? (
              <Text
                style={[defaultStyles.infoSubHeader, { paddingVertical: 8 }]}
              >
                {dayjs(startDate).format("MMMM/DD/YYYY")} -{" "}
                {dayjs(endDate).format("MMMM/DD/YYYY")}
              </Text>
            ) : (
              <Text
                style={[defaultStyles.infoSubHeader, { paddingVertical: 8 }]}
              >
                N/A
              </Text>
            )}
          </View>
          <View>
            <Pressable onPress={onDatePickerOpen}>
              <Text style={defaultStyles.secondaryBtnText}>Edit</Text>
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
