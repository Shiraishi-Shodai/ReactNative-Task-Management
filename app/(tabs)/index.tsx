import { Image, StyleSheet, Platform, Text, View, Button } from "react-native";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";

import UserIcon from "@/components/UserIcon";
import TaskList from "@/components/TaskList";
import { getTodaysTasks } from "@/lib/PersonDAO";
import { useFocusEffect } from "expo-router";

export default function HomeScreen() {
  // TODO: 今日のタスク一覧をFirebaseから取得(それぞれのタスクはTaskクラスの型情報で取得)
  useFocusEffect(
    useCallback(() => {
      getTodaysTasks();
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Today's Progress</Text>
      </View>
      {/* <UserIcon /> */}

      {/* TODO: 今日のタスク一覧を表示 */}
      <TaskList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#151718",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    marginBottom: 10,
  },
  title: {
    color: "#ECEDE1",
    fontFamily: "Noto-Sans-JP",
    fontSize: 40,
  },
});
