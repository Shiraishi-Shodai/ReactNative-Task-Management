import { StyleSheet, View } from "react-native";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import { StatusBar } from "expo-status-bar";

import TaskList from "@/components/TaskList";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
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
});
