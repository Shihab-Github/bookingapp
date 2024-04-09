import React, { useMemo, useState } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import Colors from "@/constants/Colors";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker, { DateType } from "react-native-ui-datepicker";

interface Props {
  sheetRef: React.RefObject<BottomSheetMethods>;
  close: () => void;
}

export default function DatePickerBottomSheet(props: Props) {
  const { sheetRef, close } = props;

  const [range, setRange] = useState<{
    startDate: DateType;
    endDate: DateType;
  }>({ startDate: undefined, endDate: undefined });

  const snapPoints = useMemo(() => {
    return ["50%", "90%"];
  }, []);

  const onChange = (params: any) => {
    setRange(params);
  };

  return (
    <BottomSheet
      enablePanDownToClose
      handleIndicatorStyle={{ backgroundColor: Colors.grey }}
      snapPoints={snapPoints}
      ref={sheetRef}
      index={-1}
    >
      <>
        <BottomSheetView style={styles.header}>
          <Pressable onPress={close}>
            <Ionicons name="close" size={25} />
          </Pressable>

          <Text
            style={[
              styles.defaultTextStyle,
              { fontSize: 16, fontWeight: "bold" },
            ]}
          >
            Date Picker
          </Text>
        </BottomSheetView>
        <View style={styles.divider} />
        <BottomSheetView style={styles.container}>
          <DateTimePicker
            mode={"range"}
            startDate={range.startDate}
            endDate={range.endDate}
            displayFullDays
            onChange={onChange}
          />
        </BottomSheetView>
      </>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  defaultTextStyle: {
    fontFamily: "lato",
  },
  container: {
    padding: 16,
  },
  header: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  divider: {
    width: "100%",
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#CECECE",
  },
});
