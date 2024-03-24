import React from "react";
import ContainerTable from "./ContainerTable";
import ActiveContextProvider from "./ActiveContext.js";
import "./Calendar.css";

const Calendar = ({ onChange }) => {
  return (
    <div>
      <ActiveContextProvider>
        <ContainerTable onChange={onChange} />
      </ActiveContextProvider>
    </div>
  );
};

export default Calendar;
