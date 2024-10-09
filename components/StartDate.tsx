import React, { useState } from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

function StartDate() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
  };

  const onDateChange = (e, selectedDate) => {
    setDate(selectedDate);
    setShowDate(false);
  };

  const onTimeChange = (e, selectedTime) => {
    setTime(selectedTime);
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
      <View style={styles.selectedTimeView}>
        <Text style={styles.selectedTimeText}>{`${date.toLocaleDateString(
          "ja-JP"
        )}  ${time.toLocaleTimeString("ja-JP", timeOptions)}`}</Text>
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
  selectedTimeView: {
    alignItems: "center",
  },
  selectedTimeText: {
    fontFamily: "Noto-Sans-JP",
    fontSize: 18,
  },
  dateButton: {
    backgroundColor: "red",
  },
  timeButton: {
    backgroundColor: "blue",
  },
});

export default StartDate;
