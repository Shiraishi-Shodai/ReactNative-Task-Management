import StartDate from "@/components/StartDate";
import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import { Formik } from "formik";
import { taskSchema } from "@/lib/form_yup";
import { Task } from "@/classies/Task";
import { setTask } from "@/lib/TaskDAO";
import uuid from "react-native-uuid";

const AddTask = () => {
  // 日本時間を返す
  const getJST = (): Date => {
    const JST = new Date();
    JST.setHours(JST.getHours() + 9);
    return JST;
  };

  const [date, setDate] = useState(getJST());
  const [time, setTime] = useState(getJST());

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>Register a task</Text>
      </View>
      <Formik
        initialValues={{ name: "", location: "", detail: "" }}
        validationSchema={taskSchema}
        onSubmit={(values, formkikActions) => {
          const task_id = String(uuid.v4());
          // FIXME: person_idにログイン中のユーザーのperson_idを代入する
          const person_id = "user1";
          const { name, location, detail } = values;
          const start_date = new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate(),
            time.getHours(),
            time.getMinutes()
          );

          const task = new Task(
            task_id,
            person_id,
            name,
            location,
            detail,
            start_date
          );

          setTask(task);
          formkikActions.setSubmitting(false);
          formkikActions.resetForm();
          Alert.alert("Resisterd a task");
        }}
      >
        {({
          handleChange,
          handleBlur, // フォームからフォーカスが外れた時にtouchedの値を更新する
          handleSubmit,
          resetForm,
          values,
          errors,
          touched, // ユーザーが一度でも触れたフィールドの情報を保持し、エラーメッセージの表示条件として利用される
        }) => (
          <View style={styles.textInputViews}>
            <View style={styles.textInputContainers}>
              <View style={styles.textInputCommon}>
                <TextInput
                  placeholder="Task Name"
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  value={values.name}
                  style={styles.taskNameText}
                />
              </View>
              {touched.name && errors.name && (
                <Text style={{ color: "red" }}>{errors.name}</Text>
              )}
            </View>

            <View style={styles.textInputContainers}>
              <View style={styles.textInputCommon}>
                <TextInput
                  style={styles.locationText}
                  placeholder="Location"
                  onChangeText={handleChange("location")}
                  onBlur={handleBlur("location")}
                  value={values.location}
                />
              </View>
              {touched.location && errors.location && (
                <Text style={{ color: "red" }}>{errors.location}</Text>
              )}
            </View>

            <View style={styles.textInputContainers}>
              <View style={styles.textInputCommon}>
                <TextInput
                  placeholder="detail"
                  onChangeText={handleChange("detail")}
                  onBlur={handleBlur("detail")}
                  value={values.detail}
                  multiline={true}
                  blurOnSubmit={true} // エンターキーを押すとフォーカスが外れるようにする(multilineをtrueにするとデフォルトでfalseになる)
                  numberOfLines={6}
                  textAlignVertical="top"
                  style={styles.detailText}
                />
              </View>
              {touched.detail && errors.detail && (
                <Text style={{ color: "red" }}>{errors.detail}</Text>
              )}
            </View>

            <StartDate
              date={date}
              setDate={setDate}
              time={time}
              setTime={setTime}
            />
            <View style={styles.selectedTimeView}>
              <Text style={styles.selectedTimeText}>{`${date.toLocaleDateString(
                "ja-JP"
              )}  ${time.toLocaleTimeString("ja-JP", timeOptions)}`}</Text>
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <Pressable
                style={[styles.registerResetButton, styles.registerButton]}
                onPress={() => handleSubmit()}
              >
                <Text style={styles.registerResetText}>Register a task</Text>
              </Pressable>

              <Pressable
                style={[styles.registerResetButton, styles.resetButton]}
                onPress={() => {
                  setDate(getJST());
                  setTime(getJST());
                  resetForm();
                }}
              >
                <Text style={styles.registerResetText}>Reset Form</Text>
              </Pressable>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#151718",
    justifyContent: "center",
    alignItems: "center",
  },
  titleView: {
    justifyContent: "center",
    marginBottom: 40,
  },
  titleText: {
    color: "#fff",
    fontSize: 50,
  },
  textInputViews: {
    width: "80%",
    borderWidth: 1,
    padding: 10,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  textInputContainers: {
    marginBottom: 20,
  },
  textInputCommon: {
    backgroundColor: "#fff",
    borderWidth: 2,
  },
  taskNameText: {
    fontFamily: "Noto-Snas-JP",
    fontSize: 30,
  },
  locationText: {
    fontFamily: "Noto-Snas-JP",
    fontSize: 20,
  },
  detailText: {
    height: 100,
    fontSize: 20,
  },
  selectedTimeView: {
    alignItems: "center",
  },
  selectedTimeText: {
    fontFamily: "Noto-Sans-JP",
    fontSize: 18,
    backgroundColor: "#fff",
  },
  registerResetButton: {
    width: "45%",
  },
  registerResetText: {
    fontFamily: "Noto-Sans-JP",
    fontSize: 18,
    textAlign: "center",
    color: "#fff",
  },
  registerButton: {
    backgroundColor: "#22C55E",
  },
  resetButton: {
    backgroundColor: "silver",
  },
});

export default AddTask;
