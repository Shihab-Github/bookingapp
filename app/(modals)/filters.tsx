import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons"; // Import icons from Expo
import { router } from "expo-router";
import { Dropdown } from "react-native-element-dropdown";
import { defaultStyles } from "@/styles";

const data = [
  { label: "Price", value: "price" },
  { label: "Checkin Date (Asc)", value: "startDate" },
  { label: "Checkin Date (Desc)", value: "endDate" },
];

export default function Page() {
  const [value, setValue] = useState("");

  const navigate = () => {
    router.push({
      pathname: "/",
      params: { sortBy: value },
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
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Sort By"
        value={value}
        onChange={(item) => {
          setValue(item.value);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color="black"
            name="Safety"
            size={20}
          />
        )}
      />
      <View style={{ paddingHorizontal: 16 }}>
        <Pressable
          style={defaultStyles.secondaryBtn}
          onPress={() => setValue("")}
        >
          <Text style={defaultStyles.secondaryBtnText}>Clear</Text>
        </Pressable>
      </View>
      <View style={{ paddingHorizontal: 16 }}>
        <Pressable style={defaultStyles.primaryBtn} onPress={navigate}>
          <Text style={defaultStyles.primaryBtnText}>Apply</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
