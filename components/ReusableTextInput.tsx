// ReusableTextInput.tsx
import { NativeSyntheticEvent, TextInputFocusEventData } from "react-native";
import React, { memo } from "react";
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";

interface ReusableTextInputProps {
  placeholder: string;
  value: string | undefined;
  handleChange: (text: string) => void;
  handleBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  error: string | undefined;
  touched: boolean | undefined;
  style: { fieldView: StyleProp<ViewStyle>; fieldText: StyleProp<TextStyle> };
  multiline?: boolean | undefined;
  numberOfLines?: number | undefined;
  textAlignVertical?: "auto" | "top" | "bottom" | "center" | undefined;
}
const ReusableTextInput = ({
  placeholder,
  value,
  handleChange,
  handleBlur,
  error,
  touched,
  style,
  multiline,
  numberOfLines,
  textAlignVertical,
}: ReusableTextInputProps) => {
  return (
    <View style={styles.container}>
      <View style={[style.fieldView]}>
        {multiline ? (
          <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={handleChange}
            onBlur={handleBlur}
            multiline={multiline}
            numberOfLines={numberOfLines}
            textAlignVertical={textAlignVertical}
            style={[style.fieldText]}
          />
        ) : (
          <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={handleChange}
            onBlur={handleBlur}
            style={[style.fieldText]}
          />
        )}
      </View>
      {touched && error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  errorText: {
    color: "red",
    fontSize: 20,
  },
});

export default memo(ReusableTextInput);
