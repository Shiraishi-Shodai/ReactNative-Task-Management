import { Theme } from "@/types";
import { useTheme } from "@react-navigation/native";
import React from "react";
import {
  Pressable,
  StyleSheet,
  GestureResponderEvent,
  Text,
} from "react-native";
import { Button } from "react-native-paper";

interface TaskFormProps {
  name: string;
  onPress: (event: GestureResponderEvent) => void;
  disabled: boolean;
}

const TaskForm = ({ onPress, name, disabled }: TaskFormProps) => {
  const currentTheme: Theme = useTheme() as Theme;
  return (
    <Button
      onPress={onPress}
      disabled={disabled}
      labelStyle={styles.addResetText}
      textColor={currentTheme.colors.text}
      buttonColor={currentTheme.colors.buttonColor}
      rippleColor={currentTheme.colors.rippleColor}
    >
      {name}
    </Button>
  );
};

export default TaskForm;

const styles = StyleSheet.create({
  addResetText: {
    fontFamily: "Noto-Sans-JP",
    fontSize: 20,
    textAlign: "center",
  },
});
