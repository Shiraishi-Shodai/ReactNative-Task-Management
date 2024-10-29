import React from "react";
import { Pressable, Text, View } from "react-native";
import auth from "@react-native-firebase/auth";

const LogOutButton = () => {
  const signOut = () => {
    auth()
      .signOut()
      .then(() => {
        console.log("User signed out!");
      })
      .catch((e) => console.error(e));
  };

  return (
    <View style={{ backgroundColor: "black" }}>
      <Pressable onPress={signOut}>
        <Text style={{ color: "#fff" }}>Logout</Text>
      </Pressable>
    </View>
  );
};

export default LogOutButton;
