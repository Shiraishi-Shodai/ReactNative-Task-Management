import { useTheme } from "@react-navigation/native";
import ThemeContext from "@react-navigation/native/src/theming/ThemeContext";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Pressable, StyleSheet, Switch, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

import languageList from "@/services/languageList.json";

interface ThemeLangPressableProps {
  name: string;
  isVisible?: boolean;
  setIsVisible?: React.Dispatch<React.SetStateAction<boolean>>;
}

function ThemeLangPressable({
  name,
  isVisible,
  setIsVisible,
}: ThemeLangPressableProps) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { t } = useTranslation();
  const currentTheme = useTheme().colors;

  const isDarkMode = theme.dark;
  return (
    <Pressable
      style={[
        styles.container,
        {
          backgroundColor: currentTheme.background,
          borderColor: currentTheme.border,
        },
      ]}
      onPress={name === "language" ? () => setIsVisible!(true) : undefined} // isVisibleが存在するとき、言語選択モーダルを表示するためにstateを更新する
    >
      <View style={styles.iconText}>
        <View>
          {/* メインなコンを囲む四角の枠アイコン */}
          <Ionicons name="square-outline" size={45} color={currentTheme.text} />

          {name === "theme" ? (
            // テーマ設定アイコン
            <FontAwesome
              name="moon-o"
              size={32}
              color={currentTheme.text}
              style={{ position: "absolute", top: "14.5%", left: "20%" }} // 四角のアイコンに重ねる
            />
          ) : (
            //  言語設定アイコン
            <MaterialIcons
              name="language"
              size={32}
              color={currentTheme.text}
              style={{ position: "absolute", top: "14.5%", left: "15%" }} // 四角のアイコンに重ねる
            />
          )}
        </View>
        <View style={styles.textView}>
          <Text
            className="text-center"
            style={[{ color: currentTheme.text }, styles.text]}
          >
            {t(`${name}`)}
          </Text>
        </View>
      </View>

      <View className="flex" style={styles.currentStateView}>
        {name === "theme" ? (
          <Switch
            thumbColor={"white"}
            trackColor={{ true: "#00CC00", false: "#DDDDDD" }}
            value={isDarkMode}
            onValueChange={toggleTheme} // トグル関数を呼び出す
            style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }} // 1.5倍に拡大
          />
        ) : (
          <View>
            {/* 右矢印設定アイコン */}
            <AntDesign name="right" size={32} color={"#DDDDDD"} />
          </View>
        )}
      </View>
    </Pressable>
  );
}

export default ThemeLangPressable;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    flexDirection: "row",
    flex: 0.5,
    alignItems: "center",
  },
  iconText: {
    flexDirection: "row",
    position: "absolute",
    width: "45%",
    paddingLeft: "3%",
  },
  iconView: {
    backgroundColor: "blue",
  },
  textView: {
    justifyContent: "center",
    left: "5%",
  },
  text: {
    fontSize: 20,
  },
  currentStateView: {
    position: "absolute",
    right: "10%",
  },
});
