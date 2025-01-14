import React, { useContext } from "react";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import SelectLang from "../../components/SelectLang";
import { useTranslation } from "react-i18next";
import ToggleTheme from "@/components/ToggleTheme";
import { User } from "@/classies/User";
import { AuthContext } from "@/components/AuthProvider";
import LineGraph from "@/components/LineGraph";
import LoginIcon from "@/components/LoginIcon";
import UserIcon from "@/components/UserIcon";

function Explore() {
  const currentTheme = useTheme().colors;
  const { t } = useTranslation();
  const { user }: { user: User } = useContext(AuthContext) as { user: User };
  const { width, height } = useWindowDimensions();

  return (
    <View className="flex-1 justify-center items-center">
      <View style={styles.iconView}>
        <UserIcon iconSize={styles.iconSize} />
      </View>
      <View
        style={[
          styles.optionsView,
          {
            borderRadius: 10,
            backgroundColor: currentTheme.background,
            borderColor: currentTheme.border,
            borderWidth: 1,
          },
        ]}
        className="w-11/12"
      >
        <ToggleTheme />
        <SelectLang />
      </View>

      {/* <LineGraph
        user={user}
        currentTheme={currentTheme}
        width={width}
        height={height}
      /> */}
    </View>
  );
}

export default Explore;

const styles = StyleSheet.create({
  optionsView: {
    height: "20%",
    top: "5%",
    overflow: "hidden",
  },
  iconView: {
    // marginBottom: "5%",
  },
  iconSize: {
    borderRadius: 75,
    width: 150,
    height: 150,
  },
});
