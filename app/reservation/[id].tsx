import { useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { View, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { getListingById } from "@/data-layer/listings";
import { ScrollView } from "react-native";
import ListinSkeleton from "@/ui/ListingSkeleton";
import BottomSheet from "@gorhom/bottom-sheet";
import DatePickerBottomSheet from "@/components/DatePickerBottomSheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BasicInfo from "./_components/BasicInfo";
import TripInfo from "./_components/TripInfo";
import { IRange } from "@/interface/common";
import PriceDetails from "./_components/PriceDetails";
import { defaultStyles } from "@/styles";

export default function Reservation() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const { id } = useLocalSearchParams<{ id: string }>();

  const [bookingDateRange, setBookingDateRange] = useState<IRange>({
    startDate: undefined,
    endDate: undefined,
  });

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

  const onDatePickerClose = (dateRange: IRange) => {
    bottomSheetRef.current?.close();
    setBookingDateRange(dateRange);
  };

  if (isLoading || !listing) {
    return <ListinSkeleton />;
  }

  return (
    <GestureHandlerRootView>
      <ScrollView>
        <BasicInfo listing={listing} />
        <View style={defaultStyles.infoDivider} />
        <TripInfo
          onDatePickerOpen={onDatePickerOpen}
          startDate={bookingDateRange.startDate}
          endDate={bookingDateRange.endDate}
        />
        <View style={defaultStyles.infoDivider} />
        <PriceDetails
          startDate={bookingDateRange.startDate}
          endDate={bookingDateRange.endDate}
          price={listing.price}
        />
        <View style={defaultStyles.infoDivider} />
        <BasicInfo listing={listing} />
        <View style={defaultStyles.infoDivider} />
        <TripInfo />
        <View style={defaultStyles.infoDivider} />
        <BasicInfo listing={listing} />
        <View style={defaultStyles.infoDivider} />
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
});
