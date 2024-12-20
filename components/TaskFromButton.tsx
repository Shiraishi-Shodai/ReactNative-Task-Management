import React from "react";
import {
  Pressable,
  StyleSheet,
  GestureResponderEvent,
  Text,
} from "react-native";

interface TaskFormProps {
  name: string;
  bgcolor: string;
  onPress: (event: GestureResponderEvent) => void;
  disabled: boolean;
}

const TaskForm = ({ bgcolor, onPress, name, disabled }: TaskFormProps) => {
  return (
    <Pressable
      style={[{ backgroundColor: bgcolor }, styles.addResetView]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.addResetText}>{name}</Text>
    </Pressable>
  );
};

export default TaskForm;

const styles = StyleSheet.create({
  addResetView: {
    paddingHorizontal: 10,
  },
  addResetText: {
    fontFamily: "Noto-Sans-JP",
    fontSize: 20,
    textAlign: "center",
  },
});
