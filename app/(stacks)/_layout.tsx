import { Stack } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "react-native-paper";

export default function StackLayout() {
  const { t } = useTranslation();
  const theme = useTheme();
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
            backgroundColor: theme.colors.backdrop,
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
