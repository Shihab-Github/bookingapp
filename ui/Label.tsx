import { StyleSheet, Text } from "react-native";

interface IProps {
  children: React.ReactNode;
}

export default function Label({ children }: IProps) {
  return <Text style={styles.label}>{children}</Text>;
}

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    color: "rgb(107 114 128)",
  },
});
