import { Task } from "@/classies/Task";
import { fb } from "@/lib/firebase";

// // 新しいタスクを追加
export const addTask = async (task: Task) => {
  // FIXME: ユーザーIDにログインしているユーザーIDを設定
  const person_id = "person1";
  await fb
    .database()
    .ref(`tasks/${task.id}`)
    .set({
      person_id: person_id,
      name: task.name,
      location: task.location,
      detail: task.detail,
      state: task.state,
      start_date: task.start_date,
    })
    .then(() => console.log("登録しました"))
    .catch((err) => console.error(err));
};
