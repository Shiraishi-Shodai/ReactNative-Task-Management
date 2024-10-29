import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import TaskList from "@/components/TaskList";
import "@/lib/firebase"; // firebaseをindex.tsxで初期化
// import { useContext } from "react";
// import { AuthContext } from "@/components/AuthProvider";

const HomeScreen = () => {
  // const { user } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <TaskList />
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
