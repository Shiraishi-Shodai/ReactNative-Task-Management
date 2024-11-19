import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import TaskList from "@/components/TaskList";
import "@/lib/firebase"; // firebaseをindex.tsxで初期化
import { useEffect, useState } from "react";
import TaskDatePicker from "@/components/TaskDatePicker";
import BackgroundFetch from "react-native-background-fetch";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";

const HomeScreen = () => {
  const [pickDate, setPickDate] = useState<Date>(new Date());

  useEffect(() => {
    const init = async () => {};
  });

  const doBackgroundTask = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        body: "test",
        sound: "task_remind",
      },
      trigger: {
        seconds: 1,
      },
    });
    // バックグラウンドで実行するタスク
    console.log("バックグラウンドタスクが実行されました");
  };

  return (
    <View style={styles.container}>
      <TaskDatePicker pickDate={pickDate} setDate={setPickDate} />
      <TaskList pickDate={pickDate} />
      <StatusBar />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
