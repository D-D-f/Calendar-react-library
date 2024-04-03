import React, { useContext } from "react";
import { ActiveContext } from "./DateCurrentContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretRight,
  faCaretLeft,
  faHouseChimney,
} from "@fortawesome/free-solid-svg-icons";
import List from "./component/List/List.jsx";
import TableDate from "./component/TableDate/TableDate.jsx";
import "./Calendar.css";

const Calendar = ({ getDate, langage }) => {
  const context = useContext(ActiveContext);

  if (!context) {
    throw new Error("Context is undefined");
  }

  const {
    incrementMonth,
    decrementMonth,
    months,
    allYears,
    incrementYear,
    decrementYear,
    resetCurrentDate,
  } = context;

  return (
    <div className="Calendar">
      <div className="header_calendar">
        <FontAwesomeIcon
          icon={faCaretLeft}
          onClick={() => {
            decrementMonth();
            decrementYear();
          }}
          style={{ cursor: "pointer" }}
        />
        <FontAwesomeIcon
          onClick={() => resetCurrentDate()}
          icon={faHouseChimney}
          style={{ cursor: "pointer" }}
        />
        <List arrayList={months} typeList="month" />
        <List arrayList={allYears} typeList="year" />
        <FontAwesomeIcon
          icon={faCaretRight}
          onClick={() => {
            incrementMonth();
            incrementYear();
          }}
          style={{ cursor: "pointer" }}
        />
      </div>
      <TableDate getDate={getDate} langage={langage} />
    </div>
  );
};

export default Calendar;
