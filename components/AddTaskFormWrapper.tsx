import React, { useCallback, useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import { taskSchema } from "@/lib/form_yup";
import { Task } from "@/classies/Task";
import uuid from "react-native-uuid";
import { useFocusEffect, useRouter } from "expo-router";
import TaskForm from "@/components/TaskForm";
import { FormikActions, taskFormValues } from "@/types";
import { AuthContext } from "./AuthProvider";
import { User } from "@/classies/User";

const AddTaskFormWrapper = () => {
  const router = useRouter();
  const { user }: { user: User } = useContext(AuthContext) as { user: User };

  // dateとtimeの更新
  const changeDateTime = () => {
    const now = new Date();
    setDate(now);
    setTime(now);
  };

  // 編集時は保存済みのタイムスタンプからDateインスタンスを生成
  const now = new Date();
  const [date, setDate] = useState(now);
  const [time, setTime] = useState(now);

  // このタブがフォーカスされたらstateのdateとtimeを現在時刻に設定(編集時はchageDateTimeを呼び出さないようにする)
  useFocusEffect(
    useCallback(() => {
      changeDateTime();
    }, [])
  );

  // タスクを追加する関数
  const handleSubmit = async (
    values: taskFormValues,
    formikActions: FormikActions
  ) => {
    const task_id = String(uuid.v4());
    const person_id = user.id;
    const { name, location, detail } = values;
    const start_date = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      time.getHours(),
      time.getMinutes()
    ).getTime();

    const task: Task = new Task(
      task_id,
      person_id,
      name,
      location,
      detail,
      start_date
    );
    await user.addTask(task);
    changeDateTime();
    formikActions.setSubmitting(false);
    formikActions.resetForm();

    router.navigate("/(tabs)/"); // ホームタブに戻る
  };

  return (
    <View style={styles.container}>
      <TaskForm
        initialValues={{ name: "", location: "", detail: "" }}
        validationSchema={taskSchema}
        onSubmit={handleSubmit}
        changeDateTime={changeDateTime}
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        buttonText="Add a task"
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

export default AddTaskFormWrapper;
