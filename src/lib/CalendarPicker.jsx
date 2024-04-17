import React from "react";
import Calendar from "./Calendar";
import DateCurrentContextProvider from "./DateCurrentContext";

const CalendarPicker = ({ getDate, langage, start, end }) => {
  return (
    <DateCurrentContextProvider start={start} end={end}>
      <Calendar getDate={getDate} langage={langage} />
    </DateCurrentContextProvider>
  );
};

export default CalendarPicker;
