import React, { useState } from "react";
import {
  Pressable,
  View,
  StyleSheet,
  Modal,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import UserIcon from "./UserIcon";
import LogOutButton from "./LogoutButton";
import { useTheme } from "@react-navigation/native";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

// UserIconコンポーネントデイ表示した画像を押すと、ログアウトボタンが表示される
function LoginIcon() {
  // モーダルの表示・非表示を管理するstate
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const currentTheme = useTheme();

  return (
    <>
      <Pressable onPress={() => setIsVisible(true)}>
        <UserIcon iconSize={styles.iconSize} />
      </Pressable>
      <Modal
        visible={isVisible}
        animationType="slide"
        transparent={true} // モーダル背景を透過に設定
        onRequestClose={() => setIsVisible(false)}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            setIsVisible(false);
          }}
        >
          <View
            style={[
              styles.modalContainer,
              {
                backgroundColor: currentTheme.dark
                  ? "rgba(100, 100, 100, 0.5)"
                  : "rgba(0, 0, 0, 0.5)",
              },
            ]}
          >
            {/* 背景を押すとモーダルを閉じるためのボタン */}
            <TouchableWithoutFeedback>
              <View
                style={[
                  styles.modalContent,
                  {
                    backgroundColor: currentTheme.colors.background,
                  },
                ]}
              >
                <LogOutButton setIsVisible={setIsVisible} />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end", // 下に配置するため
  },
  modalContent: {
    height: SCREEN_HEIGHT / 6, // 画面の半分の高さに設定
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    justifyContent: "center", // ログアウトボタンを真ん中に配置
  },
  iconSize: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
  },
});
export default LoginIcon;
