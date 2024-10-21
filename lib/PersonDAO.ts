import { Task } from "@/classies/Task";
import { fb } from "@/lib/firebase";
import { getJST } from "./JST";

// TODO: ユーザーIDを受け取り、今日のタスク一覧を取得
// FIXME: 引数にperson_idを取るように変更する
// FIXME: 今日のタスクのみ取得するようにする
export const getTodaysTasks = async (): Promise<Task[] | undefined> => {
  const person_id = "person1";
  const today = getJST();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const startTimeStamp = today.getTime();
  const endTimeStamp = tomorrow.getTime() - 1;

  try {
    const taskRef = fb.database().ref("tasks");
    const snapshot = await taskRef
      .orderByChild("person_id")
      .equalTo(person_id)
      .once("value");
    const tasks = snapshot.val();

    if (tasks) {
      // 本日の日付の範囲内のタスクを絞り込み
      const todayTasks: Task[] = Object.keys(tasks)
        .map((key) => {
          return { id: key, ...tasks[key] };
        })
        .filter(
          (task: Task) =>
            task.start_date >= startTimeStamp && task.start_date < endTimeStamp
        );

      return todayTasks;
    } else {
      console.log("タスクが見つかりませんでした");
      return [];
    }
  } catch (error) {
    console.error("データ取得エラー:", error);
  }
};
