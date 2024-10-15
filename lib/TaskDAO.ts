import { ref, set } from "@firebase/database";
import { Task } from "../classies/Task";
import { db } from "@/lib/firebase";

// 新しいタスクを追加
export const addTask = (task: Task) => {
  const personRef = ref(db, `${task.person_id}/${task.start_date.getTime()}`);
  set(personRef, {
    id: task.id,
    name: task.name,
    location: task.location,
    detail: task.detail,
    state: task.state,
  })
    .then(() => console.log("登録しました"))
    .catch((err) => console.error(err));
};
