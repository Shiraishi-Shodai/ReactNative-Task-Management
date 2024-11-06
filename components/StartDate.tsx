import React, { ReactElement, useCallback, useState } from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useTheme } from "@react-navigation/native";

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
  const currentTheme = useTheme().colors;

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
        <TouchableOpacity style={[styles.selectButtons]} onPress={onShowDate}>
          <Text
            testID="dataId"
            style={[styles.selectText, { color: currentTheme.text }]}
          >
            {date.toLocaleDateString("ja-JP", {
              timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            })}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.selectButtons]} onPress={onShowTime}>
          <Text
            testID="timeId"
            style={[styles.selectText, { color: currentTheme.text }]}
          >
            {time.toLocaleTimeString("ja-JP", timeOptions)}
          </Text>
        </TouchableOpacity>
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
    marginBottom: 20,
  },
  selectButtonsView: {
    flexDirection: "row",
    width: "60%",
    justifyContent: "space-around",
  },
  selectButtons: {
    paddingHorizontal: 5,
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
