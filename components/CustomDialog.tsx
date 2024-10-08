import { colors } from "@mui/material";
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

interface CustomDialogProps {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function CustomDialog({
  modalVisible,
  setModalVisible,
}: CustomDialogProps): ReactElement {
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
            <Image
              style={styles.editImg}
              source={require("@/assets/images/edit.png")}
            />
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
                  completed
                </Text>
              </Pressable>
              <Pressable
                style={styles.completedDeleteButtonView}
                onPress={() => {}}
              >
                <Text style={[styles.buttonsText, styles.deleteText]}>
                  delete
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
  editImg: {
    width: 45,
    height: 45,
    alignSelf: "flex-end",
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
