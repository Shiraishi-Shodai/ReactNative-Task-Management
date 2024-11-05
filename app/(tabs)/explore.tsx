import UserIcon from "@/components/UserIcon";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Explore() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <UserIcon style={userIconStyles} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  iconContainer: {},
});

const userIconStyles = StyleSheet.create({
  iconSize: {
    height: 200,
    width: 200,
    borderRadius: 200,
  },
});
export default Explore;
