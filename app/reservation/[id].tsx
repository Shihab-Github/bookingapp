import { useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { View, Text, Pressable } from "react-native";
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
import UserInfo from "./_components/UserInfo";
import Label from "@/ui/Label";

export default function Reservation() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const { id } = useLocalSearchParams<{ id: string }>();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLirstName] = useState("");

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
        <UserInfo
          firstName={firstName}
          lastName={lastName}
          setFirstName={setFirstName}
          setLastName={setLirstName}
        />
        <View style={defaultStyles.infoDivider} />
        <View style={defaultStyles.infoContainer}>
          <Label>
            By Selecting the button below, I agree to the{" "}
            <Text style={defaultStyles.rulesText}>Host's House Rules,</Text>
            <Text style={defaultStyles.rulesText}>
              Ground Rules for guests
            </Text>{" "}
            and{" "}
            <Text style={defaultStyles.rulesText}>
              Airbnb's Rebooking and Refund Policy
            </Text>
            . And that Airbnb can charge my payment method if I'm responsible
            for damage
          </Label>

          <Pressable style={defaultStyles.primaryBtn}>
            <Text style={defaultStyles.primaryBtnText}>Confirm and Pay</Text>
          </Pressable>
        </View>
      </ScrollView>
      <DatePickerBottomSheet
        sheetRef={bottomSheetRef}
        close={onDatePickerClose}
      />
    </GestureHandlerRootView>
  );
}
