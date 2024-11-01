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

    try {
      // 今日のタスクのタスクidを取得
      const taskRef = database().ref(
        `user_task/${this.id}/${today.getFullYear()}/${
          today.getMonth() + 1
        }/${today.getDate()}`
      );

      const snapshot = await taskRef.once("value");
      const todayTasks = snapshot.val();

      if (todayTasks == null) {
        console.log("タスクが見つかりませんでした");
        return [];
      }

      const todayTaskIds = Object.keys(todayTasks);
      // todayTaskIdsを使って、該当するタスク一覧を取得する
    } catch (error) {
      console.error("データ取得エラー:", error);
    }
  };

  // 新しいタスクを追加
  public addTask = async (task: Task) => {
    const d = new Date(task.start_date);

    try {
      const updateObject = {
        [`tasks/${task.id}/`]: {
          user_id: this.id,
          name: task.name,
          location: task.location,
          detail: task.detail,
          state: task.state,
          start_date: task.start_date,
        },
        [`user_task/${this.id}/${d.getFullYear()}/${
          d.getMonth() + 1
        }/${d.getDate()}/${task.id}/`]: true,
      };

      await database().ref("/").update(updateObject);

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

  // 自分自身が既に存在するか
  public isAlreadyExist = async (): Promise<any> => {
    try {
      const userRef = database().ref(`users/${this.id}`);
      const snapshot = await userRef.once("value");
      const res = snapshot.val();
      console.log(`検索結果: ${snapshot.exists()}`);
      return res;
    } catch (e) {
      console.error(e);
    }
  };

  public subscribe = async (): Promise<void> => {
    try {
      const userRef = database().ref(`users/${this.id}/`);
      await userRef.set({
        displayName: this.displayName,
        photoURL: this.photoURL,
        email: this.email,
      });
      console.log("ユーザーを登録しました");
    } catch (e) {
      console.log(e);
    }
  };
}
