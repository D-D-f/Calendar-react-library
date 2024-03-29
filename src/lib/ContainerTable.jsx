// @ts-nocheck
import TableDate from "./TableDate";
import Selected from "./Selected";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import calculDateDay from "./UseCalculDay";
import UseCalculDate from "./UseCalculDate";
import "./ContainerTable.css";
import React, { useState, useContext } from "react";
import { ActiveContext } from "./ActiveContext";

const ContainerTable = ({ onChange, nameLabel, attributNameInput }) => {
  const {
    years,
    months,
    incrementMonth,
    incrementYear,
    decrementMonth,
    decrementYear,
    currentDate,
    currentMonth,
    currentYear,
    setCurrentMonth,
    setCurrentYear,
  } = UseCalculDate();

  const { activeDateTime, displayDateTime } = useContext(ActiveContext);
  const [chosenDate, setChosenDate] = useState();

  const getFirstDayAndNumbersDays = calculDateDay(currentMonth, currentYear, 1);

  const currentDay = `${
    currentDate.getDate() < 10
      ? `0${currentDate.getDate()}`
      : `${currentDate.getDate()}`
  }/${
    currentDate.getMonth() + 1 < 10
      ? `0${currentDate.getMonth() + 1}`
      : `${currentDate.getMonth() + 1}`
  }/${currentDate.getFullYear()}`;

  let changeDate = `${chosenDate < 10 ? `0${chosenDate}` : `${chosenDate}`}/${
    currentMonth < 10 ? `0${currentMonth}` : `${currentMonth}`
  }/${years[currentYear]}`;

  onChange(chosenDate === undefined ? currentDay : changeDate);

  return (
    <div className="containerTable">
      <label onClick={() => displayDateTime()} htmlFor={attributNameInput}>
        {nameLabel}
      </label>
      <input
        style={{ width: "100%" }}
        type="text"
        readOnly
        onClick={() => displayDateTime()}
        value={chosenDate === undefined ? "" : changeDate}
        name={attributNameInput}
      />
      <div
        style={activeDateTime ? { display: "block" } : { display: "none" }}
        className="table"
      >
        <div className="head">
          <FontAwesomeIcon
            icon={faCaretLeft}
            onClick={() => {
              decrementMonth();
              decrementYear();
            }}
            style={{ cursor: "pointer" }}
          />
          <Selected
            Months={months}
            Years={years}
            currentMonth={currentMonth}
            currentYear={currentYear}
            setCurrentMonth={setCurrentMonth}
            setCurrentYear={setCurrentYear}
          />
          <FontAwesomeIcon
            icon={faCaretRight}
            onClick={() => {
              incrementMonth();
              incrementYear();
            }}
            style={{ cursor: "pointer" }}
          />
        </div>

        <TableDate
          nbDaysAndFirstDayOnTheMonth={getFirstDayAndNumbersDays}
          changeDate={setChosenDate}
        />
      </div>
    </div>
  );
};

export default ContainerTable;
