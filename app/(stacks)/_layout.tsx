import { Stack } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";

export default function StackLayout() {
  const { t } = useTranslation();
  return (
    <Stack
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="editTask"
        options={{
          headerTitle: t("screens.editTask"),
          headerStyle: {
            backgroundColor: "#888888",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          //   presentation: "card", // デフォルト値：タブが表示されたまま
          //   presentation: "modal", // モーダル表示にする場合
        }}
      />
    </Stack>
  );
}
