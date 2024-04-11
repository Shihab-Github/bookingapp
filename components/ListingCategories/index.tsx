import { categories } from "@/constants/Categories";
import Colors from "@/constants/Colors";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { useRef, useState } from "react";
import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Haptics from "expo-haptics";

interface ListingCategoryProps {
  onCategoryChanged: (category: string) => void;
}

export default function ListingCategories({
  onCategoryChanged,
}: ListingCategoryProps) {
  const scrollRef = useRef<FlatList>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const navigate = () => {
    router.push("/(modals)/search");
  };

  const selectCategory = (index: number) => {
    setActiveIndex(index);

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    scrollRef.current?.scrollToIndex({ index });

    onCategoryChanged(categories[index].name);
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <View style={styles.actionRow}>
          <Pressable style={styles.searchBtn} onPress={navigate}>
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

          <Link href="/(modals)/filters" asChild>
            <Pressable style={styles.filterBtn}>
              <Ionicons name="options-outline" size={24} />
            </Pressable>
          </Link>
        </View>

        <FlatList
          ref={scrollRef}
          horizontal
          showsHorizontalScrollIndicator={true}
          data={categories}
          contentContainerStyle={{
            alignItems: "center",
            gap: 30,
            paddingHorizontal: 16,
          }}
          renderItem={({ item, index }) => {
            return (
              <Pressable
                style={
                  activeIndex === index
                    ? styles.categoriesBtnActive
                    : styles.categoriesBtn
                }
                onPress={(e) => selectCategory(index)}
              >
                <MaterialIcons size={24} name={item.icon as any} />
                <Text
                  style={
                    activeIndex === index
                      ? styles.categoryTextActive
                      : styles.categoryText
                  }
                >
                  {item.name}
                </Text>
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
  categoryText: {
    fontSize: 14,
    fontFamily: "lato",
    color: Colors.grey,
  },
  categoryTextActive: {
    fontSize: 14,
    fontFamily: "lato-b",
    color: Colors.dark,
  },
  categoriesBtn: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 0,
  },
  categoriesBtnActive: {
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "#000",
    borderBottomWidth: 2,
    paddingBottom: 0,
  },
});
