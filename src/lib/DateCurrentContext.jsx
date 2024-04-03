import React, { useState, createContext } from "react";
import allMonths from "./date.json";

export const ActiveContext = createContext(undefined);

const DateCurrentContextProvider = ({ children, start, end }) => {
  const currentDate = new Date();
  const months = allMonths.months;
  const allYears = [];

  for (let i = start; i <= end; i++) {
    allYears.push(i);
  }

  const [userChosenMonth, setUserChosenMonth] = useState(
    currentDate.getMonth()
  );
  const [userChosenYear, setUserChosenYear] = useState(
    allYears.indexOf(currentDate.getFullYear())
  );

  const resetCurrentDate = () => {
    setUserChosenYear(allYears.indexOf(currentDate.getFullYear()));
    setUserChosenMonth(currentDate.getMonth());
  };

  const incrementYear = () => {
    if (userChosenMonth === 11) {
      setUserChosenYear((curr) => curr + 1);
    }
  };

  const decrementYear = () => {
    if (userChosenMonth === 0) {
      return setUserChosenYear((curr) => curr - 1);
    }
  };

  const incrementMonth = () => {
    return setUserChosenMonth((curr) => {
      if (userChosenYear === allYears.length - 1 && curr === 11) {
        return curr;
      }
      if (curr === 11) {
        return (curr = 0);
      }
      if (months.length === curr) {
        return curr;
      }
      return (curr += 1);
    });
  };

  const decrementMonth = () => {
    return setUserChosenMonth((curr) => {
      if (userChosenYear === 0 && curr === 0) {
        return curr;
      }
      if (curr === 0) {
        return (curr = 11);
      }
      return curr - 1;
    });
  };

  return (
    <ActiveContext.Provider
      value={{
        userChosenMonth,
        setUserChosenMonth,
        userChosenYear,
        setUserChosenYear,
        incrementMonth,
        decrementMonth,
        months,
        allYears,
        incrementYear,
        decrementYear,
        resetCurrentDate,
      }}
    >
      {children}
    </ActiveContext.Provider>
  );
};

export default DateCurrentContextProvider;
