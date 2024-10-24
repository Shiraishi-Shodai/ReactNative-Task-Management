import StartDate from "@/components/StartDate";
import React, { useState } from "react";
import { render, fireEvent } from "@testing-library/react-native";

describe("StartDate Component", () => {
  it("should initialize with date now date", () => {
    // 日本時間を返す
    const getJST = (): Date => {
      const JST = new Date();
      JST.setHours(JST.getHours() + 9);
      return JST;
    };

    const now = getJST();
    const [date, setDate] = useState(now);
    const [time, setTime] = useState(now);
    const { getByTestId } = render(
      <StartDate date={date} setDate={setDate} time={time} setTime={setTime} />
    );

    const dateText = getByTestId("dateId");
    expect(dateText.props.children).toBe(date.toLocaleDateString("ja-JP"));
  });
});
