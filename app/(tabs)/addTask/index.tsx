import StartDate from "@/components/StartDate";
import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const AddTask = () => {
  return (
    <View style={styles.container}>
      <View style={styles.taskNameView}>
        <Text style={styles.taskNameText}>ReactNativeの基礎文法を学ぶ</Text>
      </View>

      <StartDate />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#151718",
    justifyContent: "center",
  },
  taskNameView: {
    backgroundColor: "#fff",
    paddingVertical: 20,
  },
  taskNameText: {
    fontFamily: "Noto-Snas-JP",
    fontSize: 25,
    textAlign: "center",
  },
});

export default AddTask;
