import React, { useMemo, useState } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import BottomSheet, {
  BottomSheetView,
  BottomSheetFooter,
} from "@gorhom/bottom-sheet";
import Colors from "@/constants/Colors";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker, { DateType } from "react-native-ui-datepicker";
import { IRange } from "@/interface/common";
import { defaultStyles } from "@/styles";
import dayjs from "dayjs";

interface IProps {
  sheetRef: React.RefObject<BottomSheetMethods>;
  close: (range: IRange) => void;
}

export default function DatePickerBottomSheet(props: IProps) {
  const { sheetRef, close } = props;

  const [range, setRange] = useState<IRange>({
    startDate: dayjs(),
    endDate: dayjs().add(2, "day"),
  });

  const snapPoints = useMemo(() => {
    return ["50%", "90%"];
  }, []);

  const onChange = (params: any) => {
    setRange(params);
  };

  const onClose = () => {
    close(range);
  };

  const onClear = () => {
    setRange({
      startDate: undefined,
      endDate: undefined,
    });
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
          <Pressable onPress={onClose}>
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
        <View style={styles.divider} />
        <BottomSheetView style={styles.footer}>
          <View>
            <Pressable style={defaultStyles.secondaryBtn} onPress={onClear}>
              <Text style={defaultStyles.secondaryBtnText}>Clear</Text>
            </Pressable>
          </View>
          <View>
            <Pressable style={defaultStyles.primaryBtn}>
              <Text style={defaultStyles.primaryBtnText} onPress={onClose}>
                Save
              </Text>
            </Pressable>
          </View>
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
    flex: 1,
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
  footer: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
