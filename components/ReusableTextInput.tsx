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
import { useTheme } from "@react-navigation/native";

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
  const currentTheme = useTheme().colors;

  return (
    <View style={styles.container}>
      <View style={[style.fieldView, { borderColor: currentTheme.border }]}>
        {multiline ? (
          <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={handleChange}
            onBlur={handleBlur}
            multiline={multiline}
            ellipsizeMode="tail"
            numberOfLines={numberOfLines}
            textAlignVertical={textAlignVertical}
            placeholderTextColor={currentTheme.text}
            style={[
              style.fieldText,
              { color: currentTheme.text, textAlign: "left" },
            ]}
          />
        ) : (
          <TextInput
            scrollEnabled={false}
            placeholder={placeholder}
            value={value}
            onChangeText={handleChange}
            onBlur={handleBlur}
            placeholderTextColor={currentTheme.text}
            style={[
              style.fieldText,
              { color: currentTheme.text, textAlign: "left" },
            ]}
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
