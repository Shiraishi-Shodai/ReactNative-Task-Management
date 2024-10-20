import { Task } from "@/classies/Task";
import { fb } from "@/lib/firebase";

// // 新しいタスクを追加
export const addTask = (task: Task) => {
  // FIXME: ユーザーIDにログインしているユーザーIDを設定
  const person_id = "person1";
  fb.database()
    .ref(`tasks`)
    .set({
      person_id: {
        id: task.id,
        name: task.name,
        location: task.location,
        detail: task.detail,
        state: task.state,
        start_date: task.start_date,
      },
    })
    .then(() => console.log("登録しました"))
    .catch((err) => console.error(err));
};
