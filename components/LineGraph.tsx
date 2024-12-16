import { User } from "@/classies/User";
import { Theme } from "@react-navigation/native/src/types";
import { useFocusEffect } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

interface LineGraphProps {
  user: User;
  currentTheme: Theme["colors"];
}

const LineGraph = ({ user, currentTheme }: LineGraphProps) => {
  const { width, height } = useWindowDimensions();

  // Mapを初期化
  const getWeeklyInitialMap = useCallback((): Map<Date, number> => {
    // 今日から1週間前までの日付を取得
    const weeklyDates: Date[] = [...Array(7)].map(
      (_, i) => new Date(Date.now() - (6 - i) * 86400000)
    );

    // Mapを取得した日付で初期化。numberは全て0
    const map = new Map<Date, number>();
    for (let date of weeklyDates) {
      map.set(date, 0);
    }
    return map;
  }, []);

  //   日付と日付ごとの達成済みタスクの個数を保持
  const [weeklyMap, setWeeklyMap] = useState<Map<Date, number>>(
    getWeeklyInitialMap()
  );

  const fetchMap = useCallback(async () => {
    await user
      .getTasksCompletedLastWeekByDay(weeklyMap)
      //   参照型は中身が変わっても同じ値として管理されるからMapオブジェクトを新規生成する
      .then((response) => setWeeklyMap(new Map(response) || weeklyMap));
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchMap();
    }, [])
  );

  return (
    <LineChart
      data={{
        labels: [...weeklyMap.keys()].map((i) => i.getDate().toString()),
        datasets: [
          {
            data: [...weeklyMap.values()],
          },
        ],
      }}
      width={width * 0.9} // from react-native
      height={height * 0.3}
      chartConfig={{
        // backgroundColor: currentTheme.background,
        backgroundGradientFrom: currentTheme.background,
        backgroundGradientTo: currentTheme.background,
        decimalPlaces: 1, // optional, defaults to 2dp
        color: (opacity = 1) => `${currentTheme.border}`,
        labelColor: (opacity = 1) => `${currentTheme.text}`,
        style: {
          borderRadius: 16,
        },
        propsForDots: {
          r: "6",
          strokeWidth: "2",
          stroke: "gray",
        },
      }}
      bezier
      style={{
        width: "98%",
        borderRadius: 20,
        borderColor: "gray",
        borderWidth: 4,
        marginTop: "3%",
      }}
    />
  );
};

export default LineGraph;
