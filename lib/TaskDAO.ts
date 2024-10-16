import database, { firebase } from "@react-native-firebase/database";
import { firebaseConfig } from "@/lib/firebase";
import { Task } from "@/classies/Task";

// // 新しいタスクを追加
export const addTask = (task: Task) => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  const snapshot = firebase
    .app()
    .database()
    .ref(`${task.person_id}/${task.id}/`);
  snapshot
    .set({
      name: task.name,
      location: task.location,
      detail: task.detail,
      state: task.state,
      start_date: task.start_date,
    })
    .then(() => console.log("登録しました"))
    .catch((err) => console.error(err));
};
