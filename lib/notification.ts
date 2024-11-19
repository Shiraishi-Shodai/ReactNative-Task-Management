import { Platform, PushNotification } from "react-native";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import { useEffect, useRef, useState } from "react";
import Constants from "expo-constants";

export interface PushNotificationState {
  expoPushToken?: string;
  notification?: Notifications.Notification;
}
export const usePushNotification = (): PushNotificationState => {
  const [expoPushToken, setExpoPushToken] = useState<string>("");
  const [channels, setChannels] = useState<Notifications.NotificationChannel[]>(
    []
  );
  const [notification, setNotification] = useState<
    Notifications.Notification | undefined
  >(undefined);
  const notificationListener = useRef<Notifications.Subscription>();
  const responseListener = useRef<Notifications.Subscription>();

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldPlaySound: true,
      shouldShowAlert: true,
      shouldSetBadge: false,
    }),
  });

  // プッシュ通知トークンを取得
  const registerForPushNotificationsAsync = async () => {
    let token;

    if (Platform.OS === "android") {
      // defaultという名前の通知チャンネルを作成
      await Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX, // 通知の重要度（最大値）
        vibrationPattern: [0, 250, 250, 250], // 振動パターン（例: 短い振動3回）
        lightColor: "#FF231F7C", // 通知時に点灯するライトの色
      });
    }

    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;

      // 権限が「付与されていない」場合、新たにリクエスト
      if (finalStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }

      // 権限がまだ付与されていない場合、エラーメッセージを表示して終了
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }

      try {
        // app.jsonからExpoのEASプロジェクトIDを取得(expo-configかeas-configから取得)
        const projectId =
          Constants?.expoConfig?.extra?.eas?.projectId ??
          Constants?.easConfig?.projectId;

        if (!projectId) throw Error("projectId not found");

        token = (await Notifications.getExpoPushTokenAsync({ projectId })).data;
      } catch (e: any) {
        if (e.message === "projectId not found") {
          console.log("プロジェクトidが見つかりませんでした");
        } else {
          console.log(e.code, e.message);
        }
      }
    } else {
      console.log(
        "Notificationはエミュレーターまたは、シュミュレーターでは使用できません"
      );
    }

    return token;
  };

  // useEffect(() => {
  //   console.log("実行！");
  //   registerForPushNotificationsAsync().then(
  //     (token) => token && setExpoPushToken(token)
  //   );

  //   if (Platform.OS === "android") {
  //     // チャンネルを取得
  //     Notifications.getNotificationChannelsAsync().then((value) =>
  //       setChannels(value ?? [])
  //     );
  //   }

  //   // 通知を受信したときの処理
  //   notificationListener.current =
  //     Notifications.addNotificationReceivedListener((notification) =>
  //       setNotification(notification)
  //     );

  //   // 通知をタップしたときの処理
  //   responseListener.current =
  //     Notifications.addNotificationResponseReceivedListener((response) =>
  //       console.log(response)
  //     );

  //   //   コンポーネントがアンマウントされるとき、リスナーを解除
  //   return () => {
  //     notificationListener.current &&
  //       Notifications.removeNotificationSubscription(
  //         notificationListener.current
  //       );
  //     responseListener.current &&
  //       Notifications.removeNotificationSubscription(responseListener.current);
  //   };
  // }, []);

  return { expoPushToken, notification };

  const scheduleNotificationAsync = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        body: "test",
        sound: "task_remind",
      },
      trigger: {
        seconds: 1,
      },
    });
  };
};
