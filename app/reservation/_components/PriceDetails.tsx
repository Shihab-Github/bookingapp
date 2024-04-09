import { useMemo } from "react";
import { defaultStyles } from "@/styles";
import { StyleSheet, Text, View } from "react-native";
import { DateType } from "react-native-ui-datepicker";
import dayjs from "dayjs";

interface IProps {
  startDate: DateType;
  endDate: DateType;
  price: number;
}

export default function PriceDetails(props: IProps) {
  const { startDate, endDate, price } = props;

  const numberOfDays = useMemo(() => {
    const date1 = dayjs(startDate);
    const date2 = dayjs(endDate);

    const timeDifferenceMs = date2.diff(date1);
    const daysBetween = Math.floor(timeDifferenceMs / (1000 * 60 * 60 * 24));
    return daysBetween;
  }, [startDate, endDate]);

  return (
    <>
      <View style={defaultStyles.infoContainer}>
        <Text style={defaultStyles.infoMainHeader}>Pricing Details</Text>
        <View style={styles.pricingRow}>
          <Text style={defaultStyles.infoSubHeader}>
            ${price} x {numberOfDays} nights
          </Text>
          <Text style={defaultStyles.infoSubHeader}>
            ${numberOfDays * price}
          </Text>
        </View>
        <View style={styles.pricingRow}>
          <Text style={defaultStyles.infoSubHeader}>Taxes</Text>
          <Text style={defaultStyles.infoSubHeader}>$10.52</Text>
        </View>
        <View style={defaultStyles.divider}></View>
        <View style={styles.pricingRow}>
          <Text style={defaultStyles.infoSubHeaderBold}>Total</Text>
          <Text style={defaultStyles.infoSubHeaderBold}>
            ${numberOfDays * price + 10.52}
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  pricingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 8,
  },
});
