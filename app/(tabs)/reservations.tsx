import ReservationItem from "@/components/ReservationItem";
import { getReservations } from "@/data-layer/reservations";
import { IReservation } from "@/interface/Reservation";
import ListinSkeleton from "@/ui/ListingSkeleton";
import { useQuery } from "@tanstack/react-query";
import { View, StyleSheet, FlatList, ListRenderItem } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
  const { isLoading, data: reservations } = useQuery({
    queryKey: ["bookings"],
    queryFn: () => {
      return getReservations().then((data) => {
        return data;
      });
    },
  });

  if (isLoading) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ListinSkeleton />
      </SafeAreaView>
    );
  }

  const renderItem: ListRenderItem<IReservation> = ({ item }) => (
    <ReservationItem
      id={item.id}
      photo={item.photo}
      review_scores_rating={item.review_scores_rating}
      room_type={item.room_type}
      price={item.price}
      name={item.name}
      firstName={item.firstName}
      lastName={item.lastName}
      startDate={item.startDate}
      endDate={item.endDate}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList data={reservations} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: "#FDFFFF",
  },
});
