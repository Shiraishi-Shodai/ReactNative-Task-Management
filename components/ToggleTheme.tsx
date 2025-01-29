import { useTheme } from "@react-navigation/native";
import ThemeContext from "@react-navigation/native/src/theming/ThemeContext";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Pressable, Switch, Text, View } from "react-native";

function ToggleTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { t } = useTranslation();
  const currentTheme = useTheme().colors;
  console.log(theme);

  const isDarkMode = theme.dark;
  return (
    <Pressable
      style={{
        backgroundColor: "green", //currentTheme.background,
        borderColor: currentTheme.border,
        borderBottomWidth: 1,
        flexDirection: "row",
        flex: 0.5,
      }}
    >
      <Text className="text-center" style={{ color: currentTheme.text }}>
        {t("theme")}
      </Text>

      <View className="flex">
        <Switch
          value={isDarkMode}
          onValueChange={toggleTheme} // トグル関数を呼び出す
          style={{ backgroundColor: "" }}
        />
      </View>
    </Pressable>
  );
}

export default ToggleTheme;
