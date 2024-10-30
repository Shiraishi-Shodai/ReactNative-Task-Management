import React from "react";
import { Pressable, Text, View } from "react-native";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

const LogOutButton = () => {
  const signOut = async () => {
    try {
      const oldUser = GoogleSignin.getCurrentUser();
      if (!oldUser)
        throw Error("認証済みのGoogleアカウントが見つかりませんでした");

      if (oldUser.idToken) {
        await GoogleSignin.clearCachedAccessToken(oldUser.idToken);
        console.log("idToken : " + oldUser.idToken + "を削除しました");
      }

      await auth().signOut();
      await GoogleSignin.signOut();
    } catch (e: any) {
      console.error(e.code, e.message);
    }
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
