import { Redirect, Tabs } from "expo-router";
import React, { useContext } from "react";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import LoginIcon from "@/components/LoginIcon";
import { AuthContext } from "@/components/AuthProvider";
import { useTranslation } from "react-i18next";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { user } = useContext(AuthContext);
  const { t } = useTranslation();

  // ユーザーがログイン中でなければ、ログイン画面にリダイレクト
  if (user == null) {
    return <Redirect href="/login" />;
  }

  // tabやStackの詳しい説明https://reffect.co.jp/react/expo-router
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: true,
        headerTitleAlign: "center",
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: t("tabs.home"),
          headerTitleAlign: "center", // タイトルを中央に配置
          headerRight: () => <LoginIcon />, // 右端にアイコンを表示
          headerRightContainerStyle: {
            paddingRight: 10,
            paddingBottom: 10,
          },
          headerShown: true,
          headerStyle: { backgroundColor: "#888888" },
          tabBarStyle: { display: "flex" },
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="addTask"
        options={{
          title: t("tabs.addTask"),
          headerShown: true,
          headerStyle: { backgroundColor: "#888888" },
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "add-circle" : "add-circle-outline"}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: t("tabs.profile"),
          headerShown: true,
          headerStyle: { backgroundColor: "#888888" },
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "document-text" : "document-text-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
