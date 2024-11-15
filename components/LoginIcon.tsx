import React, { useContext, useState } from "react";
import {
  Pressable,
  View,
  StyleSheet,
  Text,
  Modal,
  Dimensions,
} from "react-native";
import UserIcon from "./UserIcon";
import LogOutButton from "./LogoutButton";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

// UserIconコンポーネントデイ表示した画像を押すと、ログアウトボタンが表示される
function LoginIcon() {
  // モーダルの表示・非表示を管理するstate
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <View>
      <Pressable onPress={() => setIsVisible(true)}>
        <UserIcon style={userIconstyles} />
      </Pressable>
      <Modal
        visible={isVisible}
        animationType="slide"
        transparent={true} // モーダル背景を透過に設定
        onRequestClose={() => setIsVisible(false)}
      >
        <Pressable
          onPress={() => {
            setIsVisible(false);
          }}
          style={styles.modalContainer}
        >
          <View style={styles.modalContent}>
            <LogOutButton setIsVisible={setIsVisible} />
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end", // 下に配置するため
    backgroundColor: "rgba(0, 0, 0, 0.5)", // 背景を半透明に
  },
  modalContent: {
    height: SCREEN_HEIGHT / 6, // 画面の半分の高さに設定
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
});

const userIconstyles = StyleSheet.create({
  iconSize: {
    width: 45,
    height: 45,
    borderRadius: 200,
  },
});
export default LoginIcon;
