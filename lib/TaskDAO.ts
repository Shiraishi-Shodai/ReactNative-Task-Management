import { ref, set } from "@firebase/database";
import { Task } from "../classies/Task";
import { db } from "@/lib/firebase";

// 新しいタスクを追加
export const setTask = (task: Task) => {
  const personRef = ref(db, `${task.person_id}/${task.id}`);
  set(personRef, {
    name: task.name,
    location: task.location,
    detail: task.detail,
    state: task.state,
    start_date: task.start_date,
  })
    .then(() => console.log("登録しました"))
    .catch((err) => console.error(err));
};
