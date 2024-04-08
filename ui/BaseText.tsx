import { StyleSheet, Text } from "react-native";

export default function BaseText({ children }: any) {
  return <Text style={styles.defaultText}>{children}</Text>;
}

const styles = StyleSheet.create({
  defaultText: {
    fontFamily: "lato",
  },
});
