import StartDate from "@/components/StartDate";
import React, { useCallback, useState } from "react";
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
import { addTask } from "@/lib/TaskDAO";
import uuid from "react-native-uuid";
import { useFocusEffect } from "expo-router";

const AddTask = () => {
  // 日本時間を返す
  const getJST = (): Date => {
    const JST = new Date();
    JST.setHours(JST.getHours() + 9);
    return JST;
  };

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

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ name: "", location: "", detail: "" }}
        validationSchema={taskSchema}
        validateOnBlur={false} // カーソルが離れた時にバリデーションを行わない
        validateOnChange={false} // 値が変更された時にバリデーションを行わない
        onSubmit={(values, formkikActions) => {
          const task_id = String(uuid.v4());
          // FIXME: person_idにログイン中のユーザーのperson_idを代入する
          const person_id = "person1";
          const { name, location, detail } = values;
          const start_date = new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate(),
            time.getHours(),
            time.getMinutes()
          ).getTime();

          const task = new Task(
            task_id,
            person_id,
            name,
            location,
            detail,
            start_date
          );

          addTask(task);
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
              <View style={styles.taskNameView}>
                <TextInput
                  placeholder="Task Name"
                  placeholderTextColor="#fff"
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  value={values.name}
                  style={[styles.taskNameText, styles.text]}
                />
              </View>
              {touched.name && errors.name && (
                <Text style={styles.errorText}>{errors.name}</Text>
              )}
            </View>

            <StartDate
              date={date}
              setDate={setDate}
              time={time}
              setTime={setTime}
            />

            <View style={styles.textInputContainers}>
              <View style={styles.locationDetailView}>
                <TextInput
                  style={[styles.locationText, styles.text]}
                  placeholder="Location"
                  placeholderTextColor="#fff"
                  onChangeText={handleChange("location")}
                  onBlur={handleBlur("location")}
                  value={values.location}
                />
              </View>
              {touched.location && errors.location && (
                <Text style={styles.errorText}>{errors.location}</Text>
              )}
            </View>

            <View style={styles.textInputContainers}>
              <View style={[styles.locationDetailView, styles.detailView]}>
                <TextInput
                  placeholder="detail"
                  placeholderTextColor="#fff"
                  onChangeText={handleChange("detail")}
                  onBlur={handleBlur("detail")}
                  value={values.detail}
                  multiline={true}
                  blurOnSubmit={true} // エンターキーを押すとフォーカスが外れるようにする(multilineをtrueにするとデフォルトでfalseになる)
                  numberOfLines={20}
                  textAlignVertical="top"
                  style={[styles.detailText, styles.text]}
                />
              </View>
              {touched.detail && errors.detail && (
                <Text style={styles.errorText}>{errors.detail}</Text>
              )}
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <Pressable
                style={[styles.addResetButton, styles.addButton]}
                onPress={() => {
                  handleSubmit();
                  changeDateTime();
                }}
              >
                <Text style={[styles.addResetText, styles.text]}>
                  Add a task
                </Text>
              </Pressable>

              <Pressable
                style={[styles.addResetButton, styles.resetButton]}
                onPress={() => {
                  resetForm();
                  changeDateTime();
                }}
              >
                <Text style={[styles.addResetText, styles.text]}>
                  Reset Form
                </Text>
              </Pressable>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#151718",
    justifyContent: "center",
    alignItems: "center",
  },
  textInputViews: {
    width: "95%",
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: "flex-start",
  },
  textInputContainers: {
    marginBottom: 20,
  },
  taskNameView: {
    borderBottomWidth: 1, // 下のボーダーのみ表示
    borderBottomColor: "#fff",
  },
  locationDetailView: {
    borderWidth: 1, // 下のボーダーのみ表示
    borderColor: "#fff",
  },
  detailView: {
    borderRadius: 10,
  },
  taskNameText: {
    fontFamily: "Noto-Snas-JP",
    fontSize: 50,
  },
  locationText: {
    fontFamily: "Noto-Snas-JP",
    fontSize: 30,
  },
  detailText: {
    height: 250,
    fontSize: 20,
  },
  errorText: {
    color: "red",
    fontSize: 20,
  },
  addResetButton: {
    width: "45%",
  },
  addResetText: {
    fontFamily: "Noto-Sans-JP",
    fontSize: 20,
    textAlign: "center",
  },
  addButton: {
    backgroundColor: "#22C55E",
  },
  resetButton: {
    backgroundColor: "silver",
  },
});

export default AddTask;
