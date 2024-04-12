import React from "react";
import { View, StyleSheet } from "react-native";

const ListinSkeleton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        {/* Skeleton Card */}
        <View style={styles.card}></View>
      </View>
      <View style={styles.linesContainer}>
        {/* Skeleton Lines */}
        <View style={styles.line}></View>
        <View style={styles.line}></View>
        <View style={styles.line}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  cardContainer: {
    marginBottom: 20,
  },
  card: {
    height: 300, // Set height of card
    backgroundColor: "#e0e0e0", // Placeholder background color
    borderRadius: 10, // Border radius of card
  },
  linesContainer: {
    marginBottom: 20,
  },
  line: {
    height: 20, // Set height of line
    backgroundColor: "#e0e0e0", // Placeholder background color
    marginBottom: 10, // Margin between lines
    borderRadius: 5, // Border radius of lines
  },
});

export default ListinSkeleton;
