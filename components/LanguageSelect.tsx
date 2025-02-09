import React, { useState } from "react";
import ThemeLangPressable from "./ThemeLangPressable";
import { FlatList, Modal, Text, View, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";
import i18next, { languageResources } from "@/services/i18next";
import languageList from "@/services/languageList.json";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTheme } from "@react-navigation/native";
import { Button } from "react-native-paper";
import { Theme } from "@/types";

const LanguageSelect = () => {
  const [isVisible, setIsVisible] = useState(false);
  const currentTheme: Theme = useTheme() as Theme;

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
      <ThemeLangPressable
        name="language"
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
      <Modal visible={isVisible} onRequestClose={() => setIsVisible(false)}>
        <View
          style={[
            styles.modalContainer,
            { backgroundColor: currentTheme.colors.background },
          ]}
        >
          <View style={[styles.modalView]}>
            <FlatList
              data={Object.keys(languageResources)}
              renderItem={({ item }: { item: string }) => (
                <Button
                  buttonColor={currentTheme.colors.buttonColor}
                  rippleColor={currentTheme.colors.rippleColor}
                  textColor={currentTheme.colors.text}
                  onPress={() => changeLng(item)}
                  style={[
                    styles.pressable,
                    {
                      borderColor: currentTheme.colors.border,
                    },
                  ]}
                >
                  <Text>{languageData[item].nativeName}</Text>
                </Button>
              )}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default LanguageSelect;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalView: {
    width: "90%",
  },
  pressable: {
    borderWidth: 1,
    // paddingVertical: 20,
    borderRadius: 0,
  },
});
