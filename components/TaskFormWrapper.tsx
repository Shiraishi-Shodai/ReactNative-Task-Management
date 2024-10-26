import React, { useCallback, useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { taskSchema } from "@/lib/form_yup";
import { Task } from "@/classies/Task";
import uuid from "react-native-uuid";
import { useFocusEffect } from "expo-router";
import { getJST } from "@/lib/JST";
import { addTask } from "@/lib/PersonDAO";
import TaskForm from "@/components/TaskForm";
import { FormikActions, taskFormValues } from "@/types";

// FIXME: 不要なコンポーネントのレンダリングを修正する(日付や時計のボタンを押すと不要なレンダリングが発生している)

const TaskFormWrapper = () => {
  // dateとtimeの更新
  const changeDateTime = () => {
    const now = getJST();
    setDate(now);
    setTime(now);
  };

  const now = getJST();
  const [date, setDate] = useState(now);
  const [time, setTime] = useState(now);

  // このタブがフォーカスされたらstateのdateとtimeを現在時刻に設定
  useFocusEffect(
    useCallback(() => {
      changeDateTime();
    }, [])
  );

  const handleSubmit = (
    values: taskFormValues,
    formikActions: FormikActions
  ) => {
    const task_id = String(uuid.v4());
    const person_id = "person1"; // FIXME: ログインユーザーのIDに置き換える
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
      location as string,
      detail as string,
      start_date
    );
    addTask(task);
    changeDateTime();
    formikActions.setSubmitting(false);
    formikActions.resetForm();
    Alert.alert("Task Registered");
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

export default TaskFormWrapper;