import React from "react";
import { Text, View } from "react-native";
import { GoogleSigninButton } from "@react-native-google-signin/google-signin";
import {
  CancelledResponse,
  GoogleSignin,
  SignInSuccessResponse,
} from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import { useRouter } from "expo-router";
import { StyleSheet } from "react-native";

const Login = () => {
  const router = useRouter();

  //   サインアップボタンが押されたとき
  async function onGoogleButtonPress() {
    try {
      // デバイスがGoogle Playを利用できるか確認
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });

      // ユーザーがアプリケーションにサインインするためのモーダルを表示
      const userInfo: SignInSuccessResponse | CancelledResponse =
        await GoogleSignin.signIn();

      if ("cancelled" in userInfo) {
        throw new Error("GoogleSign in cancelled");
      }
      // Get the users ID token(ID tokenはクライアントアプリがユーザーIDを使用するためのもの)
      const { idToken } = await GoogleSignin.getTokens();

      // ID tokenを使ってGoogle証明書を発行
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // 証明書を使ってサインイン
      auth().signInWithCredential(googleCredential);
      //   ホーム画面に移動
      router.navigate("/(tabs)/");
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <View style={styles.container}>
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={onGoogleButtonPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Login;
