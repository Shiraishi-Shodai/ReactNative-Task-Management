import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AuthProvider from "@/components/AuthProvider";
import "../global.css";
import "../services/i18next";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    "Noto-Sans-JP": require("@/assets/fonts/NotoSansJP-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    // <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
    <ThemeProvider>
      <AuthProvider>
        <GestureHandlerRootView>
          <Stack
            screenOptions={{
              headerStyle: {
                // backgroundColor: "gray",
              },
              headerShown: false,
            }}
          >
            <Stack.Screen
              name="(tabs)"
              options={{
                headerShown: false,
                headerTitleAlign: "center",
              }}
            />
            <Stack.Screen
              name="(stacks)"
              options={{
                headerShown: false,
                presentation: "modal", // モーダル表示にする場合
                animation: "slide_from_right",
              }}
            />

            <Stack.Screen name="+not-found" />
          </Stack>
        </GestureHandlerRootView>
      </AuthProvider>
    </ThemeProvider>
  );
}
