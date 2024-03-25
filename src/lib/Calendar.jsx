import React from "react";
import ContainerTable from "./ContainerTable";
import ActiveContextProvider from "./ActiveContext.js";
import "./Calendar.css";

export let dateChange;

const Calendar = () => {
  const handleChange = (date) => {
    dateChange = date;
  };

  return (
    <div>
      <ActiveContextProvider>
        <ContainerTable onChange={handleChange} />
      </ActiveContextProvider>
    </div>
  );
};

export default Calendar;
