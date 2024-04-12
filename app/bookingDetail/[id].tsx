import { useMemo, useState, useRef } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { router, useLocalSearchParams } from "expo-router";
import {
  getReservationById,
  deleteBooking,
  updateBooking,
} from "@/data-layer/reservations";
import ListinSkeleton from "@/ui/ListingSkeleton";
import Colors from "@/constants/Colors";
import Animated, { SlideInDown } from "react-native-reanimated";
import DatePickerBottomSheet from "@/components/DatePickerBottomSheet";
import ListingDetailCard from "../listing/_components/ListingDetailsCard";
import BaseText from "@/ui/BaseText";
import Toast from "react-native-simple-toast";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Alert } from "react-native";
import { defaultStyles } from "@/styles";
import dayjs from "dayjs";
import { IRange } from "@/interface/common";
import BottomSheet from "@gorhom/bottom-sheet";

const customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);

export default function BookingDetail() {
  const queryClient = useQueryClient();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const { id } = useLocalSearchParams<{ id: string }>();

  const [bookingDateRange, setBookingDateRange] = useState<IRange>({
    startDate: undefined,
    endDate: undefined,
  });

  const cancelBookingMutation = useMutation({
    mutationFn: (id: string) => {
      return deleteBooking(id).then(() => {});
    },
    onSuccess: () => {
      Toast.show("Booking has been cancelled", Toast.LONG);
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      router.replace("/(tabs)/reservations");
    },
  });

  const updateBookingMutation = useMutation({
    mutationFn: (payload: any) => {
      return updateBooking(payload.id, payload.data).then(() => {});
    },
    onSuccess: () => {
      Toast.show("Booking has been updated", Toast.LONG);
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
      queryClient.invalidateQueries({
        queryKey: ["bookingDetail"],
      });
    },
  });

  const { isLoading, data: reservation } = useQuery({
    queryKey: ["bookingDetail", id],
    queryFn: () => {
      return getReservationById(id).then((data) => {
        return data;
      });
    },
  });

  const period = useMemo(() => {
    if (!reservation) return "";

    const date1 = dayjs(reservation.startDate, "MMM-DD-YYYY");
    const date2 = dayjs(reservation.endDate, "MMM-DD-YYYY");
    setBookingDateRange({
      startDate: date1,
      endDate: date2,
    });
    return date1.format("MMM-DD") + " - " + date2.format("MMM-DD");
  }, [reservation?.startDate, reservation?.endDate]);

  const showPrompt = () => {
    Alert.alert(
      "Cancel Reservation",
      "Are you sure you want to cancel your reservation?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "Ok", onPress: () => cancelBookingMutation.mutate(id) },
      ]
    );
  };

  const onDatePickerOpen = () => {
    bottomSheetRef.current?.snapToIndex(1);
  };

  const onDatePickerClose = (dateRange: IRange) => {
    bottomSheetRef.current?.close();
    updateBookingMutation.mutate({
      id,
      data: {
        startDate: dayjs(dateRange.startDate).format("MMM-DD-YYYY"),
        endDate: dayjs(dateRange.endDate).format("MMM-DD-YYYY"),
      },
    });
  };

  if (isLoading || !reservation) {
    return <ListinSkeleton />;
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <Animated.ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <ListingDetailCard
          id={id}
          photo={reservation.photo}
          name={reservation.name}
          review_scores_rating={reservation.review_scores_rating}
          room_type={reservation.room_type}
          price={reservation.price}
          smart_location={reservation.smart_location}
          guests_included={reservation.guests_included}
          bedrooms={reservation.bedrooms}
          beds={reservation.beds}
          bathrooms={reservation.bathrooms}
          number_of_reviews={reservation.number_of_reviews}
          host_picture_url={reservation.host_picture_url}
          host_name={reservation.host_name}
          host_since={reservation.host_since}
          description={reservation.description}
          firstName={reservation.firstName}
          lastName={reservation.lastName}
          security_deposit={reservation.security_deposit}
          additionalNeeds={reservation.additionalNeeds}
          startDate={reservation.startDate}
          endDate={reservation.endDate}
        />
      </Animated.ScrollView>

      <Animated.View style={styles.footer} entering={SlideInDown.delay(200)}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ gap: 8 }}>
            <BaseText variant="bold">
              ${reservation.price} / <BaseText>night</BaseText>
            </BaseText>
            <BaseText>{period}</BaseText>
          </View>

          <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
            <Pressable style={defaultStyles.deleteBtn} onPress={showPrompt}>
              <Text style={defaultStyles.deleteBtnText}>Delete</Text>
            </Pressable>
            <Pressable style={styles.reserveBtn} onPress={onDatePickerOpen}>
              <Text style={styles.reserveBtnText}>Edit</Text>
            </Pressable>
          </View>
        </View>
      </Animated.View>
      <DatePickerBottomSheet
        sheetRef={bottomSheetRef}
        close={onDatePickerClose}
        dateRange={bookingDateRange}
        setDateRange={setBookingDateRange}
      />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  footer: {
    position: "absolute",
    height: 80,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopColor: Colors.grey,
    borderTopWidth: StyleSheet.hairlineWidth,
  },

  reserveBtn: {
    backgroundColor: Colors.primary,
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  reserveBtnText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "lato-b",
  },
});
