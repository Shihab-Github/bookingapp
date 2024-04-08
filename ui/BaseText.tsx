import { StyleSheet, Text } from "react-native";

type Variant = keyof typeof styles;

interface Props {
  variant: Variant;
  children: React.ReactNode;
}

export default function BaseText(props: Props) {
  const { variant, children } = props;

  const textStyle = styles[variant];

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
});
