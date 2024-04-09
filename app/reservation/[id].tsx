import { useState, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { View, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { getListingById } from "@/data-layer/listings";
import { ScrollView } from "react-native";
import ListinSkeleton from "@/ui/ListingSkeleton";
import { Ionicons } from "@expo/vector-icons";
import BaseText from "@/ui/BaseText";
import BottomSheet from "@gorhom/bottom-sheet";
import DatePickerBottomSheet from "@/components/DatePickerBottomSheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BasicInfo from "./_components/BasicInfo";
import TripInfo from "./_components/TripInfo";

export default function Reservation() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const { id } = useLocalSearchParams<{ id: string }>();

  const { isLoading, data: listing } = useQuery({
    queryKey: ["listing", id],
    queryFn: () => {
      return getListingById(id).then((data) => {
        return data;
      });
    },
  });

  const onDatePickerOpen = () => {
    bottomSheetRef.current?.snapToIndex(1);
  };

  const onDatePickerClose = () => {
    bottomSheetRef.current?.close();
  };

  if (isLoading || !listing) {
    return <ListinSkeleton />;
  }

  return (
    <GestureHandlerRootView>
      <ScrollView>
        <BasicInfo listing={listing} />
        <View style={styles.divider} />
        <TripInfo onDatePickerOpen={onDatePickerOpen} />
        <View style={styles.divider} />

        <BasicInfo listing={listing} />
        <View style={styles.divider} />
        <TripInfo />
        <View style={styles.divider} />
        <BasicInfo listing={listing} />
        <View style={styles.divider} />
        <TripInfo />
      </ScrollView>
      <DatePickerBottomSheet
        sheetRef={bottomSheetRef}
        close={onDatePickerClose}
      />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  defaultTextStyle: {
    fontFamily: "lato",
  },
  container: {
    flex: 1,
  },
  info: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 24,
    gap: 12,
  },

  divider: {
    width: "100%",
    height: 8,
    backgroundColor: "#CECECE",
  },
});
