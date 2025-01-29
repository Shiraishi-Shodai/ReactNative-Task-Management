import { User } from "@/classies/User";
import { Theme } from "@react-navigation/native/src/types";
import { useFocusEffect } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";

interface LineGraphProps {
  user: User;
  currentTheme: Theme["colors"];
  width: number;
  height: number;
}

const LineGraph = ({ user, currentTheme, width, height }: LineGraphProps) => {
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

  const { t } = useTranslation();

  return (
    <View>
      <Text
        style={{
          textAlign: "center",
          fontSize: 15,
          color: `${currentTheme.text}`,
        }}
      >
        {t("graph-title")}
      </Text>
      <LineChart
        data={{
          labels: [...weeklyMap.keys()].map((i) => i.getDate().toString()),
          datasets: [
            {
              data: [...weeklyMap.values()],
            },
          ],
        }}
        width={width * 0.9}
        height={height * 0.3}
        fromZero={true}
        yAxisInterval={1}
        yAxisSuffix={` ${t("tasks")}`}
        yLabelsOffset={6}
        chartConfig={{
          fillShadowGradient: "#b3b3b3", // 影（塗りつぶし）の色
          fillShadowGradientOpacity: 0.3, // 影の透明度
          backgroundGradientFrom: currentTheme.background,
          backgroundGradientTo: currentTheme.background,
          backgroundGradientFromOpacity: 0,
          backgroundGradientToOpacity: 0.5,
          color: (opacity = 1) => `${currentTheme.border}`,
          labelColor: (opacity = 1) => `${currentTheme.text}`,
          propsForDots: {
            r: "5",
            strokeWidth: "1",
            stroke: "gray",
          },
        }}
        bezier
        style={{
          borderRadius: 5,
          borderColor: "gray",
          borderWidth: 2,
          elevation: 10,
          marginTop: "3%",
          backgroundColor: currentTheme.background,
        }}
      />
    </View>
  );
};

export default LineGraph;
