import React from "react";
import ContainerTable from "./ContainerTable";
import ActiveContextProvider from "./ActiveContext.js";
import "./Calendar.css";

const Calendar = () => {
  const handleChangeDate = (e) => {
    console.log(e);
  };
  return (
    <div>
      <ActiveContextProvider>
        <ContainerTable
          onChange={handleChangeDate}
          attributNameInput="test"
          nameLabel={"test"}
        />
      </ActiveContextProvider>
    </div>
  );
};

export default Calendar;
