import ThemeContext from "@react-navigation/native/src/theming/ThemeContext";
import React, { useContext } from "react";
import { Switch, View } from "react-native";

function ToggleTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";
  return (
    <View>
      <Switch
        value={isDarkMode}
        onValueChange={toggleTheme} // トグル関数を呼び出す
      />
    </View>
  );
}

export default ToggleTheme;
