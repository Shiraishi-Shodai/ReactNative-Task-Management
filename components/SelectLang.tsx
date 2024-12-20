import React, { useState } from "react";
import { FlatList, Modal, Pressable, View, Text } from "react-native";
import i18next, { languageResources } from "@/services/i18next";
import languageList from "@/services/languageList.json";
import { useTranslation } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

function SelectLang() {
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
    <View>
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

      <Pressable
        onPress={() => setIsVisible(true)}
        style={{ backgroundColor: "red", height: "30%" }}
      >
        <Text>{t("change-language")}</Text>
      </Pressable>
    </View>
  );
}

export default SelectLang;
