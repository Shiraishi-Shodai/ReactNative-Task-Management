import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import TaskList from "@/components/TaskList";
import "@/lib/firebase"; // firebaseをindex.tsxで初期化
import { useEffect, useState } from "react";
import TaskDatePicker from "@/components/TaskDatePicker";
import { usePushNotification } from "@/hooks/usePushNotification";

const HomeScreen = () => {
  const [pickDate, setPickDate] = useState<Date>(new Date());
  // const { FCMDeviceToken, notification } = usePushNotification();

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
