import React, { useCallback, useContext, useState } from "react";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import { taskSchema } from "@/lib/form_yup";
import { Task } from "@/classies/Task";
import uuid from "react-native-uuid";
import { useFocusEffect, useRouter } from "expo-router";
import TaskForm from "@/components/TaskForm";
import { FormikActions, taskFormValues } from "@/types";
import { AuthContext } from "./AuthProvider";
import { User } from "@/classies/User";
import { toZonedTime } from "date-fns-tz";
import { useTranslation } from "react-i18next";

const AddTaskFormWrapper = () => {
  const router = useRouter();
  const { user }: { user: User } = useContext(AuthContext) as { user: User };
  const { t } = useTranslation();

  // dateとtimeの更新
  const changeDateTime = () => {
    const now = new Date();
    setDate(now);
    setTime(now);
  };

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
    const { name, location, detail } = values;

    // サーバーに送信する時間はUTC+0に統一する
    const start_date = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      time.getHours(),
      time.getMinutes(),
      new Date().getSeconds() // データを昇順に並び替えるために現在の秒数を取得
    ).getTime();

    const task: Task = new Task(
      task_id,
      user.id,
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
      <KeyboardAvoidingView style={styles.keyboardAvoidingView}>
        <TaskForm
          initialValues={{ name: "", location: "", detail: "" }}
          validationSchema={taskSchema}
          onSubmit={handleSubmit}
          changeDateTime={changeDateTime}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          buttonText={t("taskForm.addButtonText")}
        />
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  keyboardAvoidingView: {
    width: "100%",
    alignItems: "center",
  },
});

export default AddTaskFormWrapper;
