import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import SelectLang from "../../components/SelectLang";
import { useTranslation } from "react-i18next";
import ToggleTheme from "@/components/ToggleTheme";
import { User } from "@/classies/User";
import { AuthContext } from "@/components/AuthProvider";
import LineGraph from "@/components/LineGraph";

function Explore() {
  const currentTheme = useTheme().colors;
  const { t } = useTranslation();
  const { user }: { user: User } = useContext(AuthContext) as { user: User };

  return (
    <View style={styles.container}>
      <ToggleTheme />
      <SelectLang />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 15,
            color: `${currentTheme.text}`,
          }}
        >
          {t("graph-title")}
        </Text>
        <LineGraph user={user} currentTheme={currentTheme} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});

export default Explore;
