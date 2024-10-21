import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import TaskBar from "./TaskBar";
import { SwipeListView } from "react-native-swipe-list-view";

function TaskList() {
  // FIXME: データベースから取得したデータを使用してリストを作成
  // FIXME: リストをタップすると、リストの詳細を表示し、編集できるように変更
  // DOCS: SwipeListView https://github.com/jemise111/react-native-swipe-list-view/blob/master/docs/SwipeListView.md
  // DOCS: SWIPERow      https://github.com/jemise111/react-native-swipe-list-view/blob/master/docs/SwipeRow.md

  const [listData, setListData] = useState(
    Array(10)
      .fill("")
      .map((_, i) => ({ key: `${i}`, text: `Item ${i + 1}` }))
  );

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex((item) => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
  };
  const onRowDidOpen = (rowKey) => {
    console.log("This row opened", rowKey);
  };

  const renderItem = (data) => (
    <TouchableHighlight
      onPress={() => console.log("You touched me")}
      style={styles.rowFront}
      underlayColor={"#AAA"}
    >
      <View>
        <Text>I am {data.item.text} in a SwipeListView</Text>
      </View>
    </TouchableHighlight>
  );

  const renderHiddenItem = (data, rowMap) => (
    <View style={styles.rowBack}>
      <Text>Left</Text>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnLeft]}
        onPress={() => closeRow(rowMap, data.item.key)}
      >
        <Text style={styles.backTextWhite}>Close</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress={() => deleteRow(rowMap, data.item.key)}
      >
        <Text style={styles.backTextWhite}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <SwipeListView
        data={listData}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={75} // 行を左に開くためのTranslateXの値（正の数）
        rightOpenValue={-150} // 行を右に開くためのTranslateXの値（負の数）
        previewRowKey={"0"} // このキーを持つ行は、リストがスワイプ可能であることを示すために、スライドアウトプレビューを行うべきである。
        previewOpenValue={-150} // アプリ起動時にスワイプするピクセル数を指定
        previewOpenDelay={3000} // アプリ起動時にスワイプが可能なことを知らせるアニメーションを開始するまでの遅延時間
        onRowDidOpen={onRowDidOpen} // スワイプした行がアニメーションで開いたときに呼び出される
        disableRightSwipe={true} // 右にスワイプできないようにする
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "purple",
    flex: 1,
    width: "100%",
  },
  backTextWhite: {
    color: "#FFF",
  },
  rowFront: {
    // alignItems: "center",
    backgroundColor: "#CCC",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    justifyContent: "center",
    height: 100,
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
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: "blue",
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: "red",
    right: 0,
  },
});

export default TaskList;
