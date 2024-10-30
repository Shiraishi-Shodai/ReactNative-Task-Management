import React, { useContext, useState } from "react";
import { Pressable, View, StyleSheet, Text } from "react-native";
import UserIcon from "./UserIcon";
import LogoutModal from "./LogoutModal";

// UserIconコンポーネントデイ表示した画像を押すと、ログアウトボタンが表示される
function LoginIcon() {
  // モーダルの表示・非表示を管理するstate
  const [isVisible, setIsvisible] = useState<boolean>(false);

  return (
    <Pressable onPress={() => setIsvisible(!isVisible)}>
      <UserIcon style={userIconstyles} />
      <LogoutModal isVisible={isVisible} />
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
