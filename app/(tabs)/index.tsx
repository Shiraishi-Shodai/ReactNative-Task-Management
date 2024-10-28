import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import TaskList from "@/components/TaskList";
import "@/lib/firebase"; // firebaseをindex.tsxで初期化
import { useContext } from "react";
import { AuthContext } from "@/components/AuthProvider";
import WithAuth from "@/components/WithAuth";
import LoginIcon from "@/components/LoginIcon";

const HomeScreen = () => {
  const { user } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <TaskList />
      <StatusBar />
    </View>
  );
};

export default WithAuth(HomeScreen);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
