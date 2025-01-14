import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useTranslation } from "react-i18next";

interface LogOutButtonProps {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
const LogOutButton = ({ setIsVisible }: LogOutButtonProps) => {
  const { t } = useTranslation();
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
    <Pressable style={styles.button} onPress={signOut}>
      <Text style={styles.buttonText}>{t("logout")}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#0c0d0e",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default LogOutButton;
