import UserIcon from "@/components/UserIcon";
import React, { useContext } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import ThemeContext from "@react-navigation/native/src/theming/ThemeContext";
import { useTheme } from "@react-navigation/native";

function Explore() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";
  const currentTheme = useTheme().colors;

  return (
    <View style={styles.container}>
      <Switch
        value={isDarkMode}
        onValueChange={toggleTheme} // トグル関数を呼び出す
      />
      <Text style={{ color: currentTheme.text }}>Hello World</Text>
      <View style={styles.iconContainer}>
        <UserIcon style={userIconStyles} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  iconContainer: {},
});

const userIconStyles = StyleSheet.create({
  iconSize: {
    height: 200,
    width: 200,
    borderRadius: 200,
  },
});
export default Explore;
