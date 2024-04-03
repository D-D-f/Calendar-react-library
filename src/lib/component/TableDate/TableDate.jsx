import "./TableDate.css";
import React, { useContext, useState } from "react";
import { ActiveContext } from "../../DateCurrentContext.tsx";
import {
  GetFirstDayAndTheMonth,
  daysInMonth,
  GetCurrentDate,
} from "../../GetDate.js";

const TableDate = ({ getDate, langage }) => {
  const context = useContext(ActiveContext);
  if (!context) throw new Error("Context is undefined");
  const { userChosenMonth, userChosenYear, allYears } = context;
  const getDaysMonthAndFirstDayMonth = GetFirstDayAndTheMonth(
    allYears[userChosenYear],
    userChosenMonth,
    1
  );
  const currentDate = GetCurrentDate();

  const nbDaysInMonth = daysInMonth(userChosenMonth, allYears[userChosenYear]);
  const [selectedDay, setSelectedDay] = useState(0);
  const caseTable = [];
  let day = 0;

  for (let i = 1; i <= 35; i++) {
    if (
      getDaysMonthAndFirstDayMonth.userChosenDay > i ||
      day >= nbDaysInMonth
    ) {
      caseTable.push(null);
    } else {
      day++;
      caseTable.push(day);
    }
  }

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const date =
    langage === "fr"
      ? `${selectedDay}/${userChosenMonth}/${allYears[userChosenYear]}`
      : `${userChosenMonth}/${selectedDay}/${allYears[userChosenYear]}`;

  getDate(date);

  const rows = [];
  for (let i = 0; i < caseTable.length; i += 7) {
    rows.push(
      <tr key={i / 7}>
        {caseTable.slice(i, i + 7).map((day, index) => (
          <td
            className={day === null ? "" : "td_date"}
            key={index}
            onClick={() => {
              handleDayClick(day);
            }}
            style={{
              backgroundColor: day === selectedDay ? "lightblue" : "",
              color:
                userChosenMonth === currentDate.currentMonth &&
                day === currentDate.currentDay
                  ? "red"
                  : "black",
              fontWeight:
                userChosenMonth === currentDate.currentMonth &&
                day === currentDate.currentDay
                  ? "bold"
                  : "normal",
            }}
          >
            {day !== null ? day : ""}
          </td>
        ))}
      </tr>
    );
  }

  return (
    <table>
      <thead>
        <tr>
          <th scope="col">Mon</th>
          <th scope="col">Tue</th>
          <th scope="col">Wed</th>
          <th scope="col">Thu</th>
          <th scope="col">Fri</th>
          <th scope="col">Sat</th>
          <th scope="col">Sun</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default TableDate;
