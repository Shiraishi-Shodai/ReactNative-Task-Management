import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useTranslation } from "react-i18next";
import { Button } from "react-native-paper";
import { useTheme } from "@react-navigation/native";
import { Theme } from "@/types";

interface LogOutButtonProps {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
const LogOutButton = ({ setIsVisible }: LogOutButtonProps) => {
  const { t } = useTranslation();
  const currentTheme: Theme = useTheme() as Theme;
  const signOut = async () => {
    try {
      const oldUser = GoogleSignin.getCurrentUser();
      if (!oldUser)
        throw Error("認証済みのGoogleアカウントが見つかりませんでした");

      if (oldUser.idToken) {
        await GoogleSignin.clearCachedAccessToken(oldUser.idToken);
        await GoogleSignin.revokeAccess();
      }

      setIsVisible(false);
      await auth().signOut();
      await GoogleSignin.signOut();
    } catch (e: any) {
      console.error(e.code, e.message);
    }
  };

  return (
    <Button
      icon={"exit-run"}
      rippleColor={currentTheme.colors.rippleColor}
      onPress={signOut}
      mode="contained"
      dark={currentTheme.dark}
      buttonColor={currentTheme.colors.buttonColor}
      textColor={currentTheme.colors.text}
      uppercase={true}
      labelStyle={{ fontSize: 20 }}
      contentStyle={{ paddingVertical: 10 }}
    >
      {t("logout")}
    </Button>
  );
};

export default LogOutButton;
