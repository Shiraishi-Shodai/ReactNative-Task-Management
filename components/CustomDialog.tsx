import React, { ReactElement, useState } from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { Link } from "expo-router";

interface CustomDialogProps {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function CustomDialog({
  modalVisible,
  setModalVisible,
}: CustomDialogProps): ReactElement {
  // TODO: COMPLETEDボタンを押したらタスクの状態を完了にする
  // TODO: DELETEボタンを押したらタスクを削除する
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)} //Android のバックボタン押下時の動作（必須プロパティ）
    >
      <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
        <View style={styles.container}>
          <View style={styles.modalView}>
            <Link href="/home/editTask" style={styles.editImgLink}>
              <Image
                style={styles.editImg}
                source={require("@/assets/images/edit.png")}
              />
            </Link>
            <View style={styles.modalMainView}>
              <Text style={styles.taskNameText}>
                ReactNativeの基礎文法を学ぶ
              </Text>
              <Text>2024/09/24 (XX:XX)</Text>
            </View>
            <View style={styles.buttonsView}>
              <Pressable
                style={styles.completedDeleteButtonView}
                onPress={() => {}}
              >
                <Text style={[styles.buttonsText, styles.completedText]}>
                  COMPLETED
                </Text>
              </Pressable>
              <Pressable
                style={styles.completedDeleteButtonView}
                onPress={() => {}}
              >
                <Text style={[styles.buttonsText, styles.deleteText]}>
                  DELETE
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  modalView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  modalMainView: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
  },
  taskNameText: {
    fontFamily: "Noto-Sans-JP",
  },
  buttonsView: {
    flexDirection: "row",
    alignItems: "center",
  },
  editImgLink: {
    alignSelf: "flex-end",
    height: 60,
    paddingRight: "4%",
  },
  editImg: {
    width: 40,
    height: 40,
    alignItems: "center",
  },

  completedDeleteButtonView: {
    width: "40%",
    borderWidth: 1,
    borderColor: "#0D99FF",
  },
  buttonsText: {
    textAlign: "center",
    fontFamily: "Noto-Sans-JP",
  },
  completedText: {
    color: "green",
  },
  deleteText: {
    color: "red",
  },
});
