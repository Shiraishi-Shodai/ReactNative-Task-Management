import React, { ReactElement, useCallback, useState } from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useTheme } from "@react-navigation/native";
import { Button } from "react-native-paper";
import { Theme } from "@/types";

interface StartDateProps {
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
  time: Date;
  setTime: React.Dispatch<React.SetStateAction<Date>>;
}
const StartDate = ({
  date,
  setDate,
  time,
  setTime,
}: StartDateProps): ReactElement => {
  const timeOptions: Intl.DateTimeFormatOptions = {
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    hour: "2-digit",
    minute: "2-digit",
  };

  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const currentTheme: Theme = useTheme() as Theme;

  const onDateChange = useCallback(
    (e: DateTimePickerEvent, selectedDate: Date | undefined) => {
      if (selectedDate) {
        setDate(selectedDate);
      }
      setShowDate(false);
    },
    [setDate]
  );

  const onTimeChange = useCallback(
    (e: DateTimePickerEvent, selectedTime: Date | undefined) => {
      if (selectedTime) {
        setTime(selectedTime);
      }
      setShowTime(false);
    },
    [setTime]
  );

  const onShowDate = () => {
    setShowDate(true);
  };

  const onShowTime = () => {
    setShowTime(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.selectButtonsView}>
        <Button
          style={[
            styles.selectButtons,
            { borderColor: currentTheme.colors.border },
          ]}
          onPress={onShowDate}
          rippleColor={currentTheme.colors.rippleColor}
        >
          <Text
            testID="dataId"
            style={[styles.selectText, { color: currentTheme.colors.text }]}
          >
            {date.toLocaleDateString("ja-JP", {
              timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            })}
          </Text>
        </Button>

        <Button
          style={[
            styles.selectButtons,
            { borderColor: currentTheme.colors.border },
          ]}
          onPress={onShowTime}
          rippleColor={currentTheme.colors.rippleColor}
        >
          <Text
            testID="timeId"
            style={[styles.selectText, { color: currentTheme.colors.text }]}
          >
            {time.toLocaleTimeString("ja-JP", timeOptions)}
          </Text>
        </Button>
      </View>

      {showDate && (
        <DateTimePicker
          mode={"date"}
          value={date}
          onChange={onDateChange}
          display="spinner"
          is24Hour={true}
          locale="ja-JP"
        />
      )}

      {showTime && (
        <DateTimePicker
          mode={"time"}
          value={time}
          onChange={onTimeChange}
          display="spinner"
          is24Hour={true}
          locale="ja-JP"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  selectButtonsView: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-around",
  },
  selectButtons: {
    borderWidth: 1,
    borderRadius: 0,
  },
  selectButtonsHover: {
    backgroundColor: "silver",
    borderWidth: 1,
  },
  selectText: {
    fontFamily: "Noto-Sans-JP",
    fontSize: 20,
  },
});

export default StartDate;
