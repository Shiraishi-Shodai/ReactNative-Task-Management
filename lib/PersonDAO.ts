import { Task } from "@/classies/Task";
import database from "@react-native-firebase/database";
import { getJST } from "./JST";

// FIXME: 引数にperson_idを取るように変更する
// ログイン中のユーザーの今日のタスクをすべて取得する
export const getTodaysTasks = async (): Promise<Task[] | undefined> => {
  const person_id = "person1";
  const today = getJST();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const startTimeStamp = today.getTime();
  const endTimeStamp = tomorrow.getTime() - 1;

  try {
    const taskRef = database().ref("tasks");
    const snapshot = await taskRef
      .orderByChild("person_id")
      .equalTo(person_id)
      .once("value");
    const tasks = snapshot.val();

    if (tasks) {
      // 本日の日付の範囲内のタスクを絞り込み
      const todayTasks: Task[] = Object.keys(tasks)
        .map((key) => {
          const { person_id, name, location, detail, state, start_date } =
            tasks[key];
          return new Task(
            key,
            person_id,
            name,
            location,
            detail,
            start_date,
            state
          );
        })
        .filter(
          (task: Task) =>
            task.start_date >= startTimeStamp && task.start_date <= endTimeStamp
        )
        .sort((a, b) => a.start_date - b.start_date);
      return todayTasks;
    } else {
      console.log("タスクが見つかりませんでした");
      return [];
    }
  } catch (error) {
    console.error("データ取得エラー:", error);
  }
};

// // 新しいタスクを追加
export const addTask = async (task: Task) => {
  // FIXME: ユーザーIDにログインしているユーザーIDを設定
  const person_id = "person1";
  await database()
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

// タスクの編集
export const edtiTask = async (task: Task) => {
  try {
    const taskRef = database().ref(`tasks/${task.id}/`);
    await taskRef.update({
      name: task.name,
      location: task.location,
      detail: task.detail,
    });
  } catch (e) {
    console.error(`タスク編集エラー: ${e}`);
  }
};

// 指定したidのタスクを削除
export const removeTask = async (id: string): Promise<void> => {
  try {
    const taskRef = database().ref("tasks");
    taskRef
      .child(id)
      .remove()
      .then(() => {
        console.log(`${id}のタスクを削除しました`);
      });
  } catch (error) {
    console.error("データ削除エラー:", error);
  }
};
