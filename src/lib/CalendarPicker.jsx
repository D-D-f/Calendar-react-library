import React from "react";
import Calendar from "./Calendar.tsx";
import DateCurrentContextProvider from "./DateCurrentContext.tsx";

const CalendarPicker = ({ getDate, langage }) => {
  return (
    <DateCurrentContextProvider start={1950} end={2030}>
      <Calendar getDate={getDate} langage={langage} />
    </DateCurrentContextProvider>
  );
};

export default CalendarPicker;
