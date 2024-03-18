import React from "react";
import ContainerTable from "./ContainerTable";
import ActiveContextProvider from "./ActiveContext.js";
import "./Calendar.css";

const Calendar = () => {
  return (
    <div>
      <ActiveContextProvider>
        <ContainerTable />
      </ActiveContextProvider>
    </div>
  );
};

export default Calendar;
