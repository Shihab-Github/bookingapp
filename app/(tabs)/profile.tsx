import Colors from "@/constants/Colors";
import { defaultStyles } from "@/styles";
import BaseText from "@/ui/BaseText";
import { Text, View, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
  return (
    <SafeAreaView style={defaultStyles.defaultContainer}>
      <View style={styles.card}>
        <Image
          source={{
            uri: "https://avatars.githubusercontent.com/u/22868908?s=400&u=62af8deb6bc9dc647d0474597a07688ed24b24c2&v=4",
          }}
          style={styles.avatar}
        />
        <BaseText variant="userName">Raza Shihab Mahbub</BaseText>
        <Text>mahbub.razashihab@gmail.com</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    fontFamily: "lato-b",
    fontSize: 24,
  },
  card: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 16,
    marginHorizontal: 24,
    marginTop: 24,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    alignItems: "center",
    gap: 14,
    marginBottom: 24,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.grey,
  },
});
