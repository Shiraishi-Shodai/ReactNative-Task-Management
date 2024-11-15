import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import SelectLang from "../../components/SelectLang";
import { useTranslation } from "react-i18next";

function Explore() {
  const currentTheme = useTheme().colors;
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
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
