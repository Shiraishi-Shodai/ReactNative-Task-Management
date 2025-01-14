import React, { useContext } from "react";
import {
  Image,
  ImageStyle,
  Pressable,
  StyleProp,
  View,
  ViewStyle,
} from "react-native";
import { AuthContext } from "./AuthProvider";
import { User } from "@/classies/User";
interface UserIconProps {
  iconSize: StyleProp<ImageStyle>;
}
// Googleアカウントのアイコンを表示
const UserIcon = ({ iconSize }: UserIconProps) => {
  const { user }: { user: User } = useContext(AuthContext) as { user: User };
  return (
    <Image
      source={
        user
          ? { uri: user.photoURL }
          : require("@/assets/images/react-logo.png")
      }
      style={iconSize}
    />
  );
};

export default UserIcon;
