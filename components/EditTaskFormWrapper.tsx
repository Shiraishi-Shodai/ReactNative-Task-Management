import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { taskSchema } from "@/lib/form_yup";
import { Task } from "@/classies/Task";
import TaskForm from "@/components/TaskForm";
import { FormikActions, taskFormValues } from "@/types";
import { useRouter } from "expo-router";
import { useTranslation } from "react-i18next";

interface EditTaskFormWrapperProps {
  currentTask: Task;
}
const EditTaskFormWrapper = ({ currentTask }: EditTaskFormWrapperProps) => {
  const router = useRouter();

  // dateとtimeの更新
  const changeDateTime = () => {
    const now = new Date();
    setDate(now);
    setTime(now);
  };

  // 保存済みのタイムスタンプからDateインスタンスを生成
  const now = new Date(currentTask.start_date);
  const [date, setDate] = useState(now);
  const [time, setTime] = useState(now);

  const { t } = useTranslation();

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

    await currentTask.edtiTask(name, start_date, location, detail);

    formikActions.setSubmitting(false);
    formikActions.resetForm();

    router.navigate("/(tabs)/"); // ホームタブに戻る
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
        buttonText={t("taskForm.editButtonText")}
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
