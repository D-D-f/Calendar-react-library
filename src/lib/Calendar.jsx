import React from "react";
import ContainerTable from "./ContainerTable";
import ActiveContextProvider from "./ActiveContext.js";
import "./Calendar.css";

const Calendar = ({ handleChangeDate }) => {
  return (
    <div>
      <ActiveContextProvider>
        <ContainerTable onChange={handleChangeDate} />
      </ActiveContextProvider>
    </div>
  );
};

export default Calendar;
