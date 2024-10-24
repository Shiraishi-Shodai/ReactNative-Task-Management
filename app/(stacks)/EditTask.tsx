import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Task } from "@/classies/Task";

// タスクの編集を可能にする
export default function EditTask() {
  const { item } = useLocalSearchParams<{ item: string }>();
  const task: Task = JSON.parse(item);
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#151718", padding: 16 }}>
      <Text style={{ color: "white" }}>{task.id}</Text>
      <Text style={{ color: "white" }}>{task.name}</Text>
      <Text style={{ color: "white" }}>
        {new Date(task.start_date).toLocaleString("ja-JP")}
      </Text>
      <Text style={{ color: "white" }}>{task.location}</Text>
      <Text style={{ color: "white" }}>{task.detail}</Text>
    </View>
  );
}
