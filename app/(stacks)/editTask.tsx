import { useLocalSearchParams } from "expo-router";
import { Task } from "@/classies/Task";
import EditTaskFormWrapper from "@/components/EditTaskFormWrapper";

// タスクの編集を可能にする
export default function EditTask() {
  const { item } = useLocalSearchParams<{ item: string }>();
  const { _id, _person_id, _name, _location, _detail, _start_date, _state } =
    JSON.parse(item);
  const task: Task = new Task(
    _id,
    _person_id,
    _name,
    _location,
    _detail,
    _start_date,
    _state
  );
  return <EditTaskFormWrapper currentTask={task} />;
}
