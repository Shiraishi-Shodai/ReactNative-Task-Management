import { fb } from "@/lib/firebase";

// TODO: ユーザーIDを受け取り、今日のタスク一覧を取得
// FIXME: 引数にperson_idを取るように変更する
// FIXME: 今日のタスクのみ取得するようにする
export const getTodaysTasks = () => {
  const person_id = "person1";
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const startTimeStamp = today.getTime();
  const endTimeStamp = tomorrow.getTime() - 1;

  try {
    fb.database()
      .ref(`tasks/${person_id}/`)
      .orderByChild("start_date")
      // .startAt(startTimeStamp)
      .endAt(endTimeStamp)
      .once("value", (snapshot) => {
        console.log(snapshot.val());
      });
  } catch (err) {
    console.log(err);
  }
};
