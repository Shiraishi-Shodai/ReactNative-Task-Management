// TaskForm.tsx
import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Pressable,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import { Formik } from "formik";
import ReusableTextInput from "./ReusableTextInput";
import StartDate from "./StartDate";
import { FormikActions, taskFormValues } from "@/types";
import { ObjectSchema } from "yup";
import TaskFormButton from "./TaskFromButton";
import { useTheme } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

type OnSubmit = (values: taskFormValues, formikActions: FormikActions) => void;
type changeDateTime = () => void;
interface TaskFormProps {
  initialValues: taskFormValues;
  validationSchema: ObjectSchema<taskFormValues>;
  onSubmit: OnSubmit;
  changeDateTime: changeDateTime;
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
  time: Date;
  setTime: React.Dispatch<React.SetStateAction<Date>>;
  buttonText: string;
}
const TaskForm = ({
  initialValues,
  validationSchema,
  onSubmit,
  changeDateTime,
  date,
  setDate,
  time,
  setTime,
  buttonText,
}: TaskFormProps) => {
  const [disabled, setDisabled] = useState<boolean>(false);
  // このコンポーネントを表示する度に、disabledをfalseに設定する
  useEffect(useCallback(() => setDisabled(false), []));
  const currentTheme = useTheme().colors;
  const { t } = useTranslation();

  const dismissKeyboard = () => {
    Keyboard.dismiss(); // キーボードを閉じる
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={onSubmit}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        resetForm,
        values,
        errors,
        touched,
      }) => (
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
          <View
            style={[
              styles.formContainer,
              { backgroundColor: currentTheme.background },
              { borderColor: currentTheme.border },
            ]}
          >
            <ReusableTextInput
              placeholder={t("taskForm.taskName")}
              value={values.name}
              handleChange={handleChange("name")}
              handleBlur={handleBlur("name")}
              error={errors.name}
              touched={touched.name}
              style={{
                fieldView: styles.taskNameView,
                fieldText: styles.taskNameText,
              }}
            />
            <StartDate
              date={date}
              setDate={setDate}
              time={time}
              setTime={setTime}
            />
            <ReusableTextInput
              placeholder={t("taskForm.location")}
              value={values.location}
              handleChange={handleChange("location")}
              handleBlur={handleBlur("location")}
              error={errors.location}
              touched={touched.location}
              style={{
                fieldView: styles.locationDetailView,
                fieldText: styles.locationText,
              }}
            />
            <ReusableTextInput
              placeholder={t("taskForm.detail")}
              value={values.detail}
              handleChange={handleChange("detail")}
              handleBlur={handleBlur("detail")}
              error={errors.detail}
              touched={touched.detail}
              multiline={true}
              numberOfLines={10}
              textAlignVertical="top"
              style={{
                fieldView: styles.locationDetailView,
                fieldText: styles.detailText,
              }}
            />
            <View style={styles.buttonContainer}>
              <TaskFormButton
                onPress={() => {
                  setDisabled(true);
                  handleSubmit();
                }}
                name={buttonText}
                disabled={disabled}
              />

              <TaskFormButton
                onPress={() => {
                  setDisabled(true);
                  resetForm();
                  changeDateTime();
                }}
                name={t("taskForm.resetButtonText")}
                disabled={disabled}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    borderWidth: 3,
    borderRadius: 10,
    width: "95%",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  taskNameView: {
    borderBottomWidth: 1, // 下のボーダーのみ表示
  },
  locationDetailView: {
    borderWidth: 1, // 下のボーダーのみ表示
  },
  taskNameText: {
    fontFamily: "Noto-Snas-JP",
    fontSize: 20,
    textAlign: "left",
  },
  locationText: {
    fontFamily: "Noto-Snas-JP",
    fontSize: 20,
    textAlign: "left",
  },
  detailText: {
    height: 100,
    fontSize: 20,
    textAlign: "left",
  },
});

export default TaskForm;
