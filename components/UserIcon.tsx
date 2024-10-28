import React, { useContext } from "react";
import { Image, ImageStyle, StyleProp, View, ViewStyle } from "react-native";
import { StyleSheet } from "react-native";
import { AuthContext } from "./AuthProvider";
import { FirebaseAuthTypes } from "@react-native-firebase/auth";
interface UserIconProps {
  style: { iconSize: StyleProp<ImageStyle> };
}
// Googleアカウントのアイコンを表示
const UserIcon = ({ style }: UserIconProps) => {
  const { user }: { user: FirebaseAuthTypes.User } = useContext(
    AuthContext
  ) as { user: FirebaseAuthTypes.User };
  return (
    <View style={styles.iconContainer}>
      <Image
        source={
          user.photoURL
            ? { uri: user.photoURL }
            : require("@/assets/images/react-logo.png")
        }
        style={style.iconSize}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: "#fff",
    borderRadius: 200,
  },
});
export default UserIcon;
