import { Task } from "@/classies/Task";
import React, { useContext } from "react";
import {
  ListRenderItemInfo,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { RowMap } from "react-native-swipe-list-view";
import { AuthContext } from "./AuthProvider";
import { User } from "@/classies/User";
import { useTranslation } from "react-i18next";
interface RenderHiddenItemProps {
  data: ListRenderItemInfo<Task>;
  rowMap: RowMap<Task>;
  fetchTasks: () => Promise<void>;
}

const RenderHiddenItem = ({
  data,
  rowMap,
  fetchTasks,
}: RenderHiddenItemProps) => {
  const { user }: { user: User } = useContext(AuthContext) as { user: User };

  const { t } = useTranslation();
  // complete・uncompletedが押されたとき実行する関数
  const closeRow = async (rowMap: RowMap<Task>, rowKey: string) => {
    const { id, user_id, name, location, detail, state, start_date } =
      rowMap[rowKey].props.item!;
    const task: Task = new Task(
      id,
      user_id,
      name,
      location,
      detail,
      start_date,
      state
    );
    await task.toggleState();
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
    fetchTasks();
  };

  // deleteが押されたときに実行する関数
  const deleteRow = async (rowMap: RowMap<Task>, rowKey: string) => {
    const { id, start_date } = rowMap[rowKey].props.item!;
    closeRow(rowMap, rowKey);
    await user.removeTask(id, start_date); // rowKeyのタスクを削除
    await fetchTasks(); // 今日のタスクを取得しなおす
  };

  return (
    <View style={styles.rowBack}>
      <Text>Left</Text>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnLeft]}
        onPress={() => closeRow(rowMap, data.item.id)}
      >
        <Text style={styles.backTextWhite}>
          {data.item.state
            ? t("taskState.uncompleted")
            : t("taskState.complete")}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress={() => deleteRow(rowMap, data.item.id)}
      >
        <Text style={styles.backTextWhite}>{t("taskState.delete")}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  backTextWhite: {
    color: "#FFF",
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: "#DDD",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 200,
  },
  backRightBtn: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 85,
  },
  backRightBtnLeft: {
    backgroundColor: "blue",
    right: 85,
  },
  backRightBtnRight: {
    backgroundColor: "red",
    right: 0,
  },
});
export default RenderHiddenItem;
