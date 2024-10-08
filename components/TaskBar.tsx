import React, { useState } from "react";
import { StyleSheet, Pressable, Text } from "react-native";
import CustomDialog from "./CustomDialog";
import { Task } from "@/classies/Task";

interface TaskProps {
  task: Task;
}

function TaskBar() {
  const [modalVisible, setModalVisible] = useState(false);
  // TODO: タスクをタップしたら、以下の情報をアラート表示
  // ・タスク名・開始時間・編集ボタン・完了ボタン・削除ボタン
  return (
    <>
      <Pressable
        style={styles.taskButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.taskName}>タスク1</Text>
      </Pressable>

      <CustomDialog
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
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

export default TaskBar;
