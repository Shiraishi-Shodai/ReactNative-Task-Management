import { Stack } from "expo-router";
import React from "react";

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="EditTask"
        options={{
          headerTitle: "タスクの編集",
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
