import Colors from "@/constants/Colors";
import { StyleSheet, Text } from "react-native";

type Variant = keyof typeof styles;

interface Props {
  variant?: Variant;
  children: React.ReactNode;
  fontSize?: number;
  fontWeight?: any;
}

export default function BaseText(props: Props) {
  const { variant = "default", fontSize, fontWeight, children } = props;

  const textStyle = {
    ...styles[variant],
  };

  return <Text style={textStyle}>{children}</Text>;
}

const styles = StyleSheet.create({
  default: {
    fontFamily: "lato",
  },
  bold: {
    fontFamily: "lato-b",
  },
  light: {
    fontFamily: "lato-light",
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    fontFamily: "lato",
  },
  location: {
    fontSize: 18,
    marginTop: 10,
    fontFamily: "lato",
  },
  rooms: {
    fontSize: 16,
    color: Colors.grey,
    marginVertical: 4,
    fontFamily: "lato",
  },
  ratings: {
    fontSize: 16,
    fontFamily: "lato",
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    fontFamily: "lato",
  },
  hostName: {
    fontWeight: "500",
    fontSize: 16,
  },
});
