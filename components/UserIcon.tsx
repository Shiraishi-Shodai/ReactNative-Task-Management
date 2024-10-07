import React from "react";
import { Image, View, StyleSheet } from "react-native";

function UserIcon() {
  return (
    <View style={styles.iconContainer}>
      <Image
        style={styles.icon}
        source={require("@/assets/images/react-logo.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: "#fff",
    borderRadius: 200,
  },
  icon: {
    width: 200,
    height: 200,
  },
});
export default UserIcon;
