// TaskForm.tsx
import React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import { Formik } from "formik";
import ReusableTextInput from "./ReusableTextInput";
import StartDate from "./StartDate";
import { FormikActions, taskFormValues } from "@/types";
import { ObjectSchema } from "yup";
import AddResetButton from "./AddResetButton";

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
}: TaskFormProps) => {
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
        <View style={styles.formContainer}>
          <ReusableTextInput
            placeholder="Task Name"
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
            placeholder="Location"
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
            placeholder="Detail"
            value={values.detail}
            handleChange={handleChange("detail")}
            handleBlur={handleBlur("detail")}
            error={errors.detail}
            touched={touched.detail}
            multiline={true}
            numberOfLines={20}
            textAlignVertical="top"
            style={{
              fieldView: styles.locationDetailView,
              fieldText: styles.detailText,
            }}
          />
          <View style={styles.buttonContainer}>
            <AddResetButton
              bgcolor="#fff"
              onPress={() => {
                handleSubmit();
              }}
              name="Add a task"
            />

            <AddResetButton
              bgcolor="#fff"
              onPress={() => {
                resetForm();
                changeDateTime();
              }}
              name="Reset Form"
            />
          </View>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderColor: "#151718",
    borderWidth: 1,
    borderRadius: 10,
    width: "95%",
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 30,
    justifyContent: "flex-start",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  taskNameView: {
    borderBottomWidth: 1, // 下のボーダーのみ表示
    borderBottomColor: "black",
  },
  locationDetailView: {
    borderWidth: 1, // 下のボーダーのみ表示
    borderColor: "black",
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
});

export default TaskForm;
