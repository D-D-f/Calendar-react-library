"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
const UseCalculDate = () => {
  const currentDate = new Date();
  const currentYears = currentDate.getFullYear();
  const currentMonths = currentDate.getMonth() + 1;
  const months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const years = [];
  for (let i = 1950; i <= currentYears; i++) {
    years.push(i);
  }
  const [currentMonth, setCurrentMonth] = (0, _react.useState)(months.indexOf(months[currentMonths]));
  const [currentYear, setCurrentYear] = (0, _react.useState)(years.indexOf(currentYears));
  const incrementMonth = () => {
    setCurrentMonth(curr => {
      if (currentYear === years.length - 1 && curr === 12) {
        return curr;
      }
      if (curr === 12) {
        return curr = 1;
      }
      return curr + 1;
    });
  };
  const decrementMonth = () => {
    return setCurrentMonth(curr => {
      if (currentYear === 0 && curr === 1) {
        return curr;
      }
      if (curr === 1) {
        return curr = 12;
      }
      return curr - 1;
    });
  };
  const decrementYear = () => {
    if (currentMonth === 1) {
      return setCurrentYear(curr => curr - 1);
    }
  };
  const incrementYear = () => {
    if (currentMonth === 12) {
      return setCurrentYear(curr => curr + 1);
    }
  };
  return {
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
    setCurrentYear
  };
};
var _default = exports.default = UseCalculDate;