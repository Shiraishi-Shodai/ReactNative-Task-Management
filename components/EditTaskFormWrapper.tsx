import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { taskSchema } from "@/lib/form_yup";
import { Task } from "@/classies/Task";
import { getJST } from "@/lib/JST";
import { edtiTask } from "@/lib/PersonDAO";
import TaskForm from "@/components/TaskForm";
import { FormikActions, taskFormValues } from "@/types";
import { useNavigation } from "expo-router";

interface EditTaskFormWrapperProps {
  currentTask: Task;
}
const EditTaskFormWrapper = ({ currentTask }: EditTaskFormWrapperProps) => {
  const navigation = useNavigation();

  // dateとtimeの更新
  const changeDateTime = () => {
    const now = getJST();
    setDate(now);
    setTime(now);
  };

  // 保存済みのタイムスタンプからDateインスタンスを生成
  const now = new Date(currentTask.start_date);
  const [date, setDate] = useState(now);
  const [time, setTime] = useState(now);

  // タスクを追加する関数
  const handleSubmit = async (
    values: taskFormValues,
    formikActions: FormikActions
  ) => {
    const { name, location, detail } = values;
    const start_date = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      time.getHours(),
      time.getMinutes()
    ).getTime();

    const task: Task = new Task(
      currentTask.id,
      currentTask.person_id,
      name,
      location as string,
      detail as string,
      start_date
    );
    await edtiTask(task);
    formikActions.setSubmitting(false);
    formikActions.resetForm();
    Alert.alert("Edited a taskl", "Return to Home.", [
      {
        text: "OK",
        onPress: () => navigation.goBack(), // ホームタブに戻る
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <TaskForm
        initialValues={{
          name: currentTask.name,
          location: currentTask.location,
          detail: currentTask.detail,
        }}
        validationSchema={taskSchema}
        onSubmit={handleSubmit}
        changeDateTime={changeDateTime}
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        buttonText="Edit a task"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default EditTaskFormWrapper;
