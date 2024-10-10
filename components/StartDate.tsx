import React, { ReactElement, useState } from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

interface StartDateProps {
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
  time: Date;
  setTime: React.Dispatch<React.SetStateAction<Date>>;
}
function StartDate({
  date,
  setDate,
  time,
  setTime,
}: StartDateProps): ReactElement {
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);

  const onDateChange = (
    e: DateTimePickerEvent,
    selectedDate: Date | undefined
  ) => {
    if (selectedDate) {
      setDate(selectedDate);
    }
    setShowDate(false);
  };

  const onTimeChange = (
    e: DateTimePickerEvent,
    selectedTime: Date | undefined
  ) => {
    if (selectedTime) {
      setTime(selectedTime);
    }
    setShowTime(false);
  };

  const onShowDate = () => {
    setShowDate(true);
  };

  const onShowTime = () => {
    setShowTime(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.selectButtonsView}>
        <Pressable
          style={[styles.dateButton, styles.selectButtons]}
          onPress={onShowDate}
        >
          <Text style={styles.selectText}>日付を指定</Text>
        </Pressable>

        <Pressable
          style={[styles.timeButton, styles.selectButtons]}
          onPress={onShowTime}
        >
          <Text style={styles.selectText}>時間を指定</Text>
        </Pressable>
      </View>

      {showDate && (
        <DateTimePicker
          mode={"date"}
          value={date || new Date()}
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
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  selectButtonsView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
  },
  selectButtons: {
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: "#0d99ff",
  },
  selectText: {
    fontFamily: "Noto-Sans-JP",
    fontSize: 13,
  },

  dateButton: {
    backgroundColor: "red",
  },
  timeButton: {
    backgroundColor: "blue",
  },
});

export default StartDate;
