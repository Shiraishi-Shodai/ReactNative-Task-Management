import React, { useCallback, useContext, useState } from "react";
import { View, StyleSheet, ListRenderItemInfo, Text } from "react-native";
import { RowMap, SwipeListView } from "react-native-swipe-list-view";
import { useFocusEffect } from "expo-router";
import { Task } from "@/classies/Task";
import RenderItem from "./RenderItem";
import RenderHiddenItem from "./RenderHiddenItem";
import { User } from "@/classies/User";
import { AuthContext } from "./AuthProvider";

interface TaskListProps {
  pickDate: Date;
}

function TaskList({ pickDate }: TaskListProps) {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const { user }: { user: User } = useContext(AuthContext) as { user: User };

  const fetchTasks = useCallback(async () => {
    const data = await user.getTodaysTasks(pickDate); // 非同期関数の結果を待つ
    setTaskList(data || []);
  }, [pickDate]);

  useFocusEffect(
    useCallback(() => {
      fetchTasks(); // 非同期関数を呼び出す
    }, [pickDate])
  );

  const onRowDidOpen = (rowKey: string) => {
    // console.log("This row opened", rowKey);
  };

  // 行のレイアウトを指定(前側)
  const renderItem = ({ item }: ListRenderItemInfo<Task>) => (
    <RenderItem item={item} />
  );

  // 行のレイアウトを指定(後ろ側)
  const renderHiddenItem = (
    data: ListRenderItemInfo<Task>,
    rowMap: RowMap<Task>
  ) => <RenderHiddenItem data={data} rowMap={rowMap} fetchTasks={fetchTasks} />;

  return (
    <View style={styles.container}>
      <SwipeListView
        data={taskList}
        keyExtractor={(item) => item.id} // 各アイテムに識別するために使用するキーを設定
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={75} // 行を左に開くためのTranslateXの値（正の数）
        rightOpenValue={-170} // 行を右に開くためのTranslateXの値（負の数）
        previewRowKey={"0"} // このキーを持つ行は、リストがスワイプ可能であることを示すために、スライドアウトプレビューを行うべきである。
        previewOpenValue={-500} // アプリ起動時にスワイプするピクセル数を指定
        previewOpenDelay={3000} // アプリ起動時にスワイプが可能なことを知らせるアニメーションを開始するまでの遅延時間
        onRowDidOpen={onRowDidOpen} // スワイプした行がアニメーションで開いたときに呼び出される
        disableRightSwipe={true} // 右にスワイプできないようにする
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
  },
});

export default TaskList;
