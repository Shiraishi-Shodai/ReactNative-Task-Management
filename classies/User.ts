import { toZonedTime } from "date-fns-tz";
import { Task } from "./Task";
import database, {
  DataSnapshot,
  firebase,
} from "@react-native-firebase/database";

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
  public getTodaysTasks = async (
    pickDate: Date
  ): Promise<Task[] | undefined> => {
    try {
      // 今日のタスクのタスクidを取得
      const taskRef = database().ref(
        `user_tasks/${this.id}/${pickDate.getFullYear()}/${
          pickDate.getMonth() + 1
        }/${pickDate.getDate()}`
      );

      const snapshot = await taskRef.once("value");

      if (!snapshot.exists()) {
        console.log("タスクが見つかりませんでした");
        return [];
      }

      const todayTasksNum = snapshot.val();
      const todayTaskIds = Object.keys(todayTasksNum);
      // todayTaskIdsを使って、該当するタスク一覧を取得する
      const todayTasks: Task[] = [];

      // Promise allで処理する非同期処理を配列にする
      const promises = todayTaskIds.map(async (id) => {
        return await database().ref(`tasks/${id}`).once("value");
      });

      // 非同期処理を一度に実行
      const snapshots = await Promise.all(promises);
      // 取得したデータからタスクインスタンスを生成し、todayTasks配列に追加
      for (let i = 0; i < todayTaskIds.length; i++) {
        const id = todayTaskIds[i];
        const { user_id, name, location, detail, start_date, state } =
          snapshots[i].val();
        const task: Task = new Task(
          id,
          user_id,
          name,
          location,
          detail,
          start_date,
          state
        );
        todayTasks.push(task);
      }

      // タスクの開始時間が早い順に並び替え
      todayTasks.sort((a, b) => a.start_date - b.start_date);
      return todayTasks;
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
        [`user_tasks/${this.id}/${d.getFullYear()}/${
          d.getMonth() + 1
        }/${d.getDate()}/${task.id}/`]: false,
      };

      await database().ref("/").update(updateObject);

      console.log("登録しました");
    } catch (e) {
      console.error(e);
    }
  };

  // 指定したidのタスクを削除
  public removeTask = async (id: string, start_date: number): Promise<void> => {
    const d = new Date(start_date);

    try {
      const taskRef = `tasks/${id}`;
      const userTaskRef = `user_tasks/${this.id}/${d.getFullYear()}/${
        d.getMonth() + 1
      }/${d.getDate()}/${id}`;

      const updateObject = {
        [taskRef]: null,
        [userTaskRef]: null,
      };

      await database().ref("/").update(updateObject);
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
      // console.log(`検索結果: ${snapshot.exists()}`);
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
      // console.log("ユーザーを登録しました");
    } catch (e) {
      console.log(e);
    }
  };

  public getWeeklyInitialMap = (): Map<Date, number> => {
    // 今日から1週間前までの日付を取得
    const weeklyDates: Date[] = [...Array(7)].map(
      (_, i) => new Date(Date.now() - (6 - i) * 86400000)
    );

    // Mapを取得した日付で初期化。numberは全て0
    const map = new Map<Date, number>();
    for (let date of weeklyDates) {
      map.set(date, 0);
    }
    return map;
  };

  public getTasksCompletedLastWeekByDay = async (): Promise<
    Map<Date, number>
  > => {
    const weeklyMap: Map<Date, number> = this.getWeeklyInitialMap();

    // user_taskノードから2で取得した日付に一致する{タスクid: true or false}オブジェクトを日ごとに取得する
    try {
      const year = new Date().getFullYear();
      const month = new Date().getMonth() + 1;

      const promises = [];
      for (let d of [...weeklyMap.keys()]) {
        promises.push(
          await database()
            .ref(`user_tasks/${this.id}/${year}/${month}/${d.getDate()}`)
            .once("value")
        );
      }

      const snapshots: DataSnapshot[] = await Promise.all(promises);
      // trueのもののみカウントし、mapを更新
      for (let i = 0; i < [...weeklyMap].length; i++) {
        if (!snapshots[i].exists()) continue;
        const taskNum = Object.values(snapshots[i].val()).filter(
          (state) => state == true
        ).length;

        weeklyMap.set([...weeklyMap][i][0], taskNum);
      }
    } catch (e) {
      console.error(e);
    }

    return weeklyMap;
  };
}
