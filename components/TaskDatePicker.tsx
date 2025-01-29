import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import React, { useCallback, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface TaskDatePickerProps {
  pickDate: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
}
const TaskDatePicker = ({ pickDate, setDate }: TaskDatePickerProps) => {
  const [showDate, setShowDate] = useState<boolean>(false);

  const onDateChange = useCallback(
    (e: DateTimePickerEvent, selectedDate: Date | undefined) => {
      if (selectedDate) {
        setDate(selectedDate);
      }
      setShowDate(false);
    },
    [setDate]
  );

  const onShowDate = () => {
    setShowDate(true);
  };

  return (
    <TouchableOpacity onPress={onShowDate} style={styles.container}>
      <Text style={styles.pickDateText}>
        {pickDate.toLocaleDateString("ja-JP", {
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        })}
      </Text>
      {showDate && (
        <DateTimePicker
          mode={"date"}
          value={pickDate}
          onChange={onDateChange}
          display="default"
          is24Hour={true}
          locale="ja-JP"
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "10%",
    marginBottom: "5%",
    backgroundColor: "#AAAAAA",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  pickDateText: {
    fontSize: 20,
  },
});
export default TaskDatePicker;
