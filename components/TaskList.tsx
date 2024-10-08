import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import TaskBar from "./TaskBar";

function TaskList() {
  // TODO: 5つ目のタスクは白枠の...とする
  //   TODO: タスクリストをスクロール可能にする
  return (
    <View style={styles.container}>
      <ScrollView>
        <TaskBar />
        <TaskBar />
        <TaskBar />
        <TaskBar />
        <TaskBar />
        <TaskBar />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: "#fff",
    width: "80%",
    alignContent: "center",
    justifyContent: "center",
    padding: 10,
    height: 300,
  },
});
export default TaskList;
