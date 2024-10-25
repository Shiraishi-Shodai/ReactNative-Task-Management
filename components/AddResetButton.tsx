import React from "react";
import {
  Pressable,
  StyleSheet,
  GestureResponderEvent,
  Text,
} from "react-native";

interface AddResetButtonProps {
  name: string;
  bgcolor: string;
  onPress: (event: GestureResponderEvent) => void;
}

const AddResetButton = ({ bgcolor, onPress, name }: AddResetButtonProps) => {
  return (
    <Pressable
      style={[{ backgroundColor: bgcolor }, styles.addResetView]}
      onPress={onPress}
    >
      <Text style={styles.addResetText}>{name}</Text>
    </Pressable>
  );
};

export default AddResetButton;

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
