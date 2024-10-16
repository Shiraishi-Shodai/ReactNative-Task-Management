import { ref, set } from "@firebase/database";
import database, { firebase } from "@react-native-firebase/database";
import { firebaseConfig } from "@/lib/firebase";

// TODO: ユーザーIDを受け取り、今日のタスク一覧を取得
// FIXME: 引数にperson_idを取るように変更する
// FIXME: 今日のタスクのみ取得するようにする
export const getTodaysTasks = () => {
  const person_id = "user1";
  const nowTimeStamp = new Date();
  const startTimeStamp = new Date(
    nowTimeStamp.getFullYear(),
    nowTimeStamp.getMonth(),
    nowTimeStamp.getDate()
  ).getTime();

  const endTimeStamp = new Date(
    nowTimeStamp.getFullYear(),
    nowTimeStamp.getMonth(),
    nowTimeStamp.getDate(),
    23,
    59,
    59
  ).getTime();

  try {
    firebase
      .app()
      .database()
      .ref(`${person_id}/`)
      .orderByChild("start_date")
      //   .startAt(startTimeStamp)
      //   .endAt(endTimeStamp)
      .on("value", (snapshot) => {
        console.log(snapshot.val());
      });
  } catch (err) {
    console.log(err);
  }
};
