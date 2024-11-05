import { Task } from "@/classies/Task";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

interface RenderItemProps {
  item: Task;
}
const RenderItem = ({ item }: RenderItemProps) => {
  return (
    <TouchableHighlight
      onPress={() => console.log("You touched me")}
      style={[styles.rowFront, item.state && styles.completedRowFront]}
      underlayColor={"#AAA"}
    >
      <View style={{ alignItems: "center" }}>
        {item.state && <View style={styles.completedLine} />}
        <Link
          href={{
            pathname: "/editTask",
            params: { item: JSON.stringify(item) },
          }}
          style={{
            paddingLeft: 20,
            textAlign: "left",
          }}
        >
          <Text
            adjustsFontSizeToFit
            style={{
              color: "black",
            }}
          >
            {item.name}
          </Text>
        </Link>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  rowFront: {
    backgroundColor: "#CCC",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    justifyContent: "center",
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
