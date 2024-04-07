import { categories } from "@/constants/Categories";
import Colors from "@/constants/Colors";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const img: string =
  "https://th.bing.com/th/id/OIP.Siwme3tV4WFDWGY03DAs1gHaHa?w=216&h=216&c=7&r=0&o=5&pid=1.7";

export default function ListingCategories() {
  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <View style={styles.actionRow}>
          <Link href={"/(modals)/booking"} asChild>
            <Pressable style={styles.searchBtn}>
              <Ionicons name="search" size={24} />
              <View>
                <Text style={{ fontFamily: "lato", color: Colors.dark }}>
                  Where to?
                </Text>
                <Text style={{ fontFamily: "lato", color: Colors.grey }}>
                  Anywhere · any week
                </Text>
              </View>
            </Pressable>
          </Link>

          <Pressable style={styles.filterBtn}>
            <Ionicons name="options-outline" size={24} />
          </Pressable>
        </View>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={true}
          data={categories}
          contentContainerStyle={{
            alignItems: "center",
            gap: 20,
            paddingHorizontal: 16,
          }}
          renderItem={({ item, index }) => {
            return (
              <Pressable>
                <MaterialIcons size={24} name={item.icon as any} />
                <Text>{item.name}</Text>
              </Pressable>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: 140,
  },
  actionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingVertical: 16,
    gap: 12,
  },
  filterBtn: {
    padding: 8,
    borderWidth: 1,
    borderColor: Colors.grey,
    borderRadius: 50,
  },
  searchBtn: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flex: 1,
    borderColor: "#c2c2c2",
    borderWidth: StyleSheet.hairlineWidth,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    padding: 14,
    borderRadius: 30,
  },
});
