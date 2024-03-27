import React from "react";
import ContainerTable from "./ContainerTable";
import ActiveContextProvider from "./ActiveContext.js";
import "./Calendar.css";

const Calendar = ({handleChangeDate, attributNameInput, nameLabel}) => {
  return (
    <div>
      <ActiveContextProvider>
        <ContainerTable
          onChange={handleChangeDate}
          attributNameInput={attributNameInput}
          nameLabel={nameLabel}
        />
      </ActiveContextProvider>
    </div>
  );
};

export default Calendar;
