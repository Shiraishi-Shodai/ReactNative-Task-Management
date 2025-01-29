import React, { useState } from "react";
import ThemeLangPressable from "./ThemeLangPressable";
import { FlatList, Modal, Pressable, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import i18next, { languageResources } from "@/services/i18next";
import languageList from "@/services/languageList.json";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LanguageSelect = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const changeLng = async (lng: string) => {
    await i18next.changeLanguage(lng);
    await AsyncStorage.setItem("i18nextLng", lng);
    setIsVisible(false);
  };

  interface LanguageInterface {
    [key: string]: { name: string; nativeName: string };
  }

  const languageData: LanguageInterface = languageList;
  return (
    <>
      <ThemeLangPressable name="language" />
      <Modal visible={isVisible} onRequestClose={() => setIsVisible(false)}>
        <View>
          <FlatList
            data={Object.keys(languageResources)}
            renderItem={({ item }: { item: string }) => (
              <Pressable
                onPress={() => changeLng(item)}
                style={{ backgroundColor: "blue" }}
              >
                <Text>{languageData[item].nativeName}</Text>
              </Pressable>
            )}
          />
        </View>
      </Modal>
    </>
  );
};

export default LanguageSelect;
