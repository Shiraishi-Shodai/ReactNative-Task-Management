import React, { ReactElement, useState } from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { TouchableOpacity } from "react-native-gesture-handler";

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
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
  };

  // ホバーのスタイルを管理するためのuseState
  const [isHoveredDate, setIsHoveredDate] = useState(false);
  const [isHoveredTime, setIsHoveredTime] = useState(false);

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
        <TouchableOpacity
          style={[
            styles.selectButtons,
            isHoveredDate && styles.selectButtonsHover,
          ]}
          onPress={onShowDate}
          onPressIn={() => setIsHoveredDate(true)}
          onPressOut={() => setIsHoveredDate(false)}
        >
          <Text style={styles.selectText}>
            {date.toLocaleDateString("ja-JP")}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.selectButtons,
            isHoveredTime && styles.selectButtonsHover,
          ]}
          onPress={onShowTime}
          onPressIn={() => setIsHoveredTime(true)}
          onPressOut={() => setIsHoveredTime(false)}
        >
          <Text style={styles.selectText}>
            {time.toLocaleTimeString("ja-JP", timeOptions)}
          </Text>
        </TouchableOpacity>
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
    color: "#fff",
  },
});

export default StartDate;
