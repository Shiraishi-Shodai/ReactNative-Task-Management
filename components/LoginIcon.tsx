import React, { useContext } from "react";
import { Pressable, View, StyleSheet, Text } from "react-native";
import UserIcon from "./UserIcon";

// UserIconコンポーネントデイ表示した画像を押すと、ログアウトボタンが表示される
function LoginIcon() {
  return (
    <Pressable>
      <UserIcon style={userIconstyles} />
    </Pressable>
  );
}

const userIconstyles = StyleSheet.create({
  iconSize: {
    width: 50,
    height: 50,
    borderRadius: 200,
  },
});
export default LoginIcon;
