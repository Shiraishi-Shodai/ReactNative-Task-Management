import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locales/en.json";
import ja from "../locales/ja.json";
import AsyncStoragePlugin from "i18next-react-native-async-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const languageResources = {
  en: { translation: en },
  ja: { translation: ja },
};

const getDefaultLng = async () => {
  try {
    const defaultLng = await AsyncStorage.getItem("i18nextLng");
    await i18next
      .use(AsyncStoragePlugin())
      .use(initReactI18next)
      .init({
        compatibilityJSON: "v3",
        lng: defaultLng || "en",
        fallbackLng: "en",
        resources: languageResources,
        react: {
          useSuspense: false,
        },
        detection: {
          asyncStorage: {
            caches: ["i18nextLng"],
          },
        },
      });
  } catch (e: any) {
    console.error(e.code, e.message);
  }
};

getDefaultLng();

export default i18next;
