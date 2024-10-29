import { Stack } from "expo-router";
import React from "react";

export default function StackLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="editTask"
        options={{
          headerTitle: "Edit Task Scree",
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
