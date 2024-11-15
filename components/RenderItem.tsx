import { Task } from "@/classies/Task";
import { Link, useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

interface RenderItemProps {
  item: Task;
}
const RenderItem = ({ item }: RenderItemProps) => {
  const router = useRouter();
  return (
    <TouchableHighlight
      onPress={() =>
        router.push({
          pathname: "/editTask",
          params: { item: JSON.stringify(item) },
        })
      }
      style={[styles.rowFront, item.state && styles.completedRowFront]}
      underlayColor={"#AAA"}
    >
      <>
        {item.state && <View style={styles.completedLine} />}

        <Text
          adjustsFontSizeToFit
          ellipsizeMode="tail"
          style={{
            color: "black",
            textAlign: "center",
          }}
        >
          {item.name}
        </Text>
      </>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  rowFront: {
    backgroundColor: "#CCC",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 70,
  },
  completedRowFront: {
    backgroundColor: "gray",
  },
  completedLine: {
    backgroundColor: "#000", // 線の色
    borderColor: "#000",
    borderWidth: 1,
    position: "absolute",
    top: "50%",
    width: "85%",
    justifyContent: "center",
  },
});

export default RenderItem;
