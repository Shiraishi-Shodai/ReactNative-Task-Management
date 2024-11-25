import BackgroundFetch from "react-native-background-fetch";
import * as Notifications from "expo-notifications";
import {
  EXISTENCE_CHECK_OF_TASKS,
  TASK_REMIND,
} from "@/constants/BackgroundTaskId";

// 通知送信処理（必要に応じてカスタマイズ）
const sendNotification = async () => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "タスク通知",
      body: "バックグラウンドでタスクをチェックしました",
      sound: true,
    },
    trigger: null,
  });
};

// バックグラウンドフェッチの初期化処理
export const initializeBackgroundFetch = async () => {
  try {
    await BackgroundFetch.configure(
      {
        minimumFetchInterval: 15, // 最小間隔（分）
        forceAlarmManager: true,
        stopOnTerminate: false,
        startOnBoot: true,
        enableHeadless: true,
      },
      // callbackFn: 実行時の処理
      async (taskId) => {
        console.log("バックグラウンドタスク実行:", taskId);
        if (taskId === EXISTENCE_CHECK_OF_TASKS) {
          const now = new Date();
          console.log(
            `${EXISTENCE_CHECK_OF_TASKS} が実行されます: ${now.getHours()}:${now.getMinutes()}`
          );
          if (now.getHours() === 15 && now.getMinutes() === 20) {
            console.log(`現在の時刻: ${now}`);
            await sendNotification();
            console.log(`${EXISTENCE_CHECK_OF_TASKS} が実行されました`);
          }
        }

        // タスク終了処理
        BackgroundFetch.finish(taskId);
      },
      // timeoutFn: タイムアウト時の処理
      (error) => {
        console.error("[BackgroundFetch] 設定に失敗しました:", error);
      }
    );

    console.log("バックグラウンドフェッチが正常に構成されました");
  } catch (error) {
    console.error("バックグラウンドフェッチ初期化エラー:", error);
  }
};

// タスクのスケジューリング
export const scheduleBackgroundTasks = async () => {
  try {
    await BackgroundFetch.scheduleTask({
      taskId: EXISTENCE_CHECK_OF_TASKS,
      delay: 0, // 5秒後に初回実行
      periodic: true,
      stopOnTerminate: false,
      startOnBoot: true,
      enableHeadless: true,
    });

    console.log("バックグラウンドタスクがスケジュールされました");
  } catch (error) {
    console.error("バックグラウンドタスクスケジュールエラー:", error);
  }
};

// バックグラウンドフェッチの開始処理
export const startBackgroundFetch = async () => {
  try {
    await BackgroundFetch.start();
    console.log("バックグラウンドフェッチが開始されました");
  } catch (error) {
    console.error("バックグラウンドフェッチ開始エラー:", error);
  }
};
