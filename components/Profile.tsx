import React from "react";
import { View, StyleSheet } from "react-native";
import UserIcon from "./UserIcon";

function Profile() {
  return (
    <View>
      <View>
        <UserIcon style={userIconStyles} />
      </View>
    </View>
  );
}

const userIconStyles = StyleSheet.create({
  iconSize: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
});
export default Profile;
