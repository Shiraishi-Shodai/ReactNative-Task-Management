import React from "react";
import { Button, View, Alert, StyleSheet, Pressable, Text } from "react-native";

function Task() {
  // TODO: タスクをタップしたら、以下の情報をアラート表示
  // ・タスク名・開始時間・編集ボタン・完了ボタン・削除ボタン
  return (
    <Pressable style={styles.taskButton} onPress={() => Alert.alert("Hello")}>
      <Text style={styles.taskName}>task1</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  taskButton: {
    backgroundColor: "#22C55E",
    justifyContent: "center",
    marginVertical: 5,
    paddingLeft: 3,
  },
  taskName: {
    color: "#fff",
    fontFamily: "Noto-Sans-JP",
    fontSize: 15,
  },
});
export default Task;
