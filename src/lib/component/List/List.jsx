import React, { useState, useContext } from "react";
import { GetCurrentDate } from "../../GetDate.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ActiveContext } from "../../DateCurrentContext.tsx";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import "./List.css";

const List = ({ arrayList, typeList }) => {
  const [activeList, setActiveList] = useState(false);
  const context = useContext(ActiveContext);
  if (!context) throw new Error("Context is undefined");
  const {
    userChosenMonth,
    setUserChosenMonth,
    userChosenYear,
    setUserChosenYear,
  } = context;
  const { currentMonth, currentYear } = GetCurrentDate();

  const displayList = arrayList.map((value, index) =>
    typeList === "year" ? (
      <li key={index} onClick={() => setUserChosenYear(index)}>
        {value}
      </li>
    ) : (
      <li key={index} onClick={() => setUserChosenMonth(index)}>
        {value}
      </li>
    )
  );
  const indexCurrentList =
    typeList === "year" ? arrayList.indexOf(currentYear) : currentMonth;
  let chosenYear;
  let chosenMonth;

  if (typeList === "year" && userChosenYear !== undefined) {
    chosenYear = arrayList[userChosenYear];
  }

  if (typeList === "month" && userChosenMonth !== undefined) {
    chosenMonth = arrayList[userChosenMonth];
  }

  const list = typeList === "year" ? chosenYear : chosenMonth;

  return (
    <div className="list">
      <div onClick={() => setActiveList(!activeList)} className="header_list">
        <h4>{list !== undefined ? list : arrayList[indexCurrentList]}</h4>
        <FontAwesomeIcon icon={faSortDown} />
      </div>

      <ul className={activeList ? "active" : "not-active"}>{displayList}</ul>
    </div>
  );
};

export default List;
