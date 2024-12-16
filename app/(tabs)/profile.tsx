import React, { useContext, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import SelectLang from "../../components/SelectLang";
import { useTranslation } from "react-i18next";
import ToggleTheme from "@/components/ToggleTheme";
import { User } from "@/classies/User";
import { AuthContext } from "@/components/AuthProvider";

function Explore() {
  const currentTheme = useTheme().colors;
  const { t } = useTranslation();
  const { user } = useContext(AuthContext);
  const weeklyMap: Promise<Map<Date, number>> =
    user?.getTasksCompletedLastWeekByDay();

  return (
    <View style={styles.container}>
      <ToggleTheme />
      <SelectLang />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});

export default Explore;
