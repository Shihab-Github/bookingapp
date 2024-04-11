import { defaultStyles } from "@/styles";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, View, Text, TextInput, StyleSheet } from "react-native";

export default function Page() {
  const [searchStr, setSearchStr] = useState<string>("");

  const navigate = () => {
    router.push({
      pathname: "/",
      params: { searchStr },
    });
  };

  return (
    <View
      style={{
        flex: 1,
        gap: 16,
        backgroundColor: "#fff",
      }}
    >
      <TextInput
        style={styles.input}
        onChangeText={(text) => setSearchStr(text)}
        value={searchStr}
        placeholder="Search apartments by road, city, state..."
      />

      <View style={{ paddingHorizontal: 16 }}>
        <Pressable style={defaultStyles.primaryBtn} onPress={navigate}>
          <Text style={defaultStyles.primaryBtnText}>Search</Text>
        </Pressable>
      </View>
      <View style={{ paddingHorizontal: 16 }}>
        <Pressable
          style={defaultStyles.secondaryBtn}
          onPress={() => setSearchStr("")}
        >
          <Text style={defaultStyles.secondaryBtnText}>Clear</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 45,
    margin: 12,
    borderWidth: 1,
    borderColor: "#c2c2c2",
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
