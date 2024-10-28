import React from "react";
import { Pressable, Text, View } from "react-native";
import auth from "@react-native-firebase/auth";

const SignOutButton = () => {
  const signOut = () => {
    auth()
      .signOut()
      .then(() => {
        console.log("User signed out!");
      })
      .catch((e) => console.error(e));
  };

  return (
    <View style={{ backgroundColor: "blue" }}>
      <Pressable onPress={signOut}>
        <Text>Explore</Text>
      </Pressable>
    </View>
  );
};

export default SignOutButton;
