import StartDate from "@/components/StartDate";
import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Pressable } from "react-native";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { taskSchema } from "@/lib/form_yup";

const AddTask = () => {
  // FIXME: プラスボタンを押すと、タブを非表示にしてフォームを表示する
  // TODO: フォームのバリデーションチェックを行う
  // TODO: エラーメッセージの表示
  // TODO: Saveボタンを押すとFirebaseにやることを入力
  // TODO: Cancelボタンを押すと、タブを再表示する
  // TODO: ユーザーIDを取得し、Form送信時に追加

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ text: "", location: "", detail: "" }}
        validationSchema={taskSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({
          handleChange,
          handleBlur, // フォームからフォーカスが外れた時にtouchedの値を更新する
          handleSubmit,
          values,
          errors,
          touched, // ユーザーが一度でも触れたフィールドの情報を保持し、エラーメッセージの表示条件として利用される
        }) => (
          <View>
            <TextInput
              placeholder="Task Name"
              onChangeText={handleChange("text")}
              onBlur={handleBlur("text")}
              value={values.text}
              style={{ borderBottomWidth: 1, marginBottom: 10 }}
            />
            {touched.text && errors.text && (
              <Text style={{ color: "red" }}>{errors.text}</Text>
            )}

            <TextInput
              placeholder="Location"
              onChangeText={handleChange("location")}
              onBlur={handleBlur("location")}
              value={values.location}
              style={{ borderBottomWidth: 1, marginBottom: 10 }}
            />
            {touched.location && errors.location && (
              <Text style={{ color: "red" }}>{errors.location}</Text>
            )}

            <TextInput
              placeholder="detail"
              onChangeText={handleChange("detail")}
              onBlur={handleBlur("detail")}
              value={values.detail}
              style={{ borderBottomWidth: 1, marginBottom: 10 }}
            />
            {touched.detail && errors.detail && (
              <Text style={{ color: "red" }}>{errors.detail}</Text>
            )}

            <Pressable onPress={() => handleSubmit()}>
              <Text>Save</Text>
            </Pressable>
          </View>
        )}
      </Formik>

      <StartDate date={date} setDate={setDate} time={time} setTime={setTime} />
      <View style={styles.selectedTimeView}>
        <Text style={styles.selectedTimeText}>{`${date.toLocaleDateString(
          "ja-JP"
        )}  ${time.toLocaleTimeString("ja-JP", timeOptions)}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#151718",
    justifyContent: "center",
  },
  taskNameView: {
    backgroundColor: "#fff",
    paddingVertical: 20,
  },
  taskNameText: {
    fontFamily: "Noto-Snas-JP",
    fontSize: 25,
    textAlign: "center",
  },
  selectedTimeView: {
    alignItems: "center",
  },
  selectedTimeText: {
    fontFamily: "Noto-Sans-JP",
    fontSize: 18,
  },
});

export default AddTask;
