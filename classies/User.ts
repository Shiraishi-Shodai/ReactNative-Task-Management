import { toZonedTime } from "date-fns-tz";
import { Task } from "./Task";
import database from "@react-native-firebase/database";

export class User {
  private _id: string;
  private _displayName: string | null;
  private _photoURL: string | null;
  private _email: string | null;

  constructor(
    id: string,
    displayName: string | null,
    photoURL: string | null,
    email: string | null
  ) {
    this._id = id;
    this._displayName = displayName;
    this._photoURL = photoURL;
    this._email = email;
  }

  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }
  public get displayName(): string | null {
    return this._displayName;
  }
  public set displayName(value: string | null) {
    this._displayName = value;
  }
  public get photoURL(): string | null {
    return this._photoURL;
  }
  public set photoURL(value: string | null) {
    this._photoURL = value;
  }
  public get email(): string | null {
    return this._email;
  }
  public set email(value: string | null) {
    this._email = value;
  }

  // ログイン中のユーザーの今日のタスクをすべて取得する
  public getTodaysTasks = async (): Promise<Task[] | undefined> => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const startTimeStamp = today.getTime();
    const endTimeStamp = tomorrow.getTime() - 1;

    try {
      const taskRef = database().ref("tasks");
      const snapshot = await taskRef
        .orderByChild("user_id")
        .equalTo(this.id)
        .once("value");
      const tasks = snapshot.val();

      if (tasks) {
        // 本日の日付の範囲内のタスクを絞り込み
        const todayTasks: Task[] = Object.keys(tasks)
          .map((key) => {
            const { user_id, name, location, detail, state, start_date } =
              tasks[key];

            return new Task(
              key,
              user_id,
              name,
              location,
              detail,
              start_date,
              state
            );
          })
          .filter(
            (task: Task) =>
              task.start_date >= startTimeStamp &&
              task.start_date <= endTimeStamp
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

  // 新しいタスクを追加
  public addTask = async (task: Task) => {
    try {
      const taskRef = database().ref(`tasks/${task.id}`);
      await taskRef.set({
        user_id: this.id,
        name: task.name,
        location: task.location,
        detail: task.detail,
        state: task.state,
        start_date: task.start_date,
      });

      console.log("登録しました");
    } catch (e) {
      console.error(e);
    }
  };

  // 指定したidのタスクを削除
  public removeTask = async (id: string): Promise<void> => {
    try {
      const taskRef = database().ref("tasks");
      taskRef.child(id).remove();
      console.log(`${id}のタスクを削除しました`);
    } catch (error) {
      console.error("データ削除エラー:", error);
    }
  };
}
